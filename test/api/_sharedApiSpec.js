const sinon = require('sinon');

function paramNames(fn) {
  const match = fn.toString().match(/^[\s\w]*\(([^)]*)\)/);
  if (!match) {
    return [];
  }
  return match[1]
    .split(',')
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

function sampleValue(name) {
  if (name === 'count') return 10;
  if (name.includes('mailbox')) return 'user@example.test';
  if (name.includes('domain')) return 'example.test';
  return 'value/with space';
}

function buildInvocationArgs(params, includeCallback, callback) {
  const args = [];
  params.forEach((param) => {
    if (param === 'callback') return;
    if (param === 'opts') {
      args.push({ xAPIKey: 'header-api-key' });
      return;
    }
    args.push(sampleValue(param));
  });
  if (includeCallback) {
    args.push(callback);
  }
  return args;
}

module.exports = function runApiSpec(expect, MailcowSdkJs, apiName) {
  describe(apiName, function() {
    let apiClient;
    let api;

    beforeEach(function() {
      apiClient = new MailcowSdkJs.ApiClient('https://mailcow.example.test');
      api = new MailcowSdkJs[apiName](apiClient);
    });

    afterEach(function() {
      sinon.restore();
    });

    const prototype = MailcowSdkJs[apiName].prototype;
    const operations = Object.getOwnPropertyNames(prototype)
      .filter((name) => name !== 'constructor')
      .filter((name) => typeof prototype[name] === 'function');

    operations.forEach((operation) => {
      it(`${operation} builds request metadata and uses mocked transport`, function(done) {
        const params = paramNames(prototype[operation]);
        sinon.stub(apiClient, 'callApi').callsFake(function(path, method, pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, apiBasePath, callback) {
          expect(path.startsWith('/api/v1/')).to.be(true);
          expect(['GET', 'POST']).to.contain(method);
          expect(authNames).to.contain('ApiKeyAuth');
          if (params.includes('id')) expect(pathParams.id).to.be('value/with space');
          if (params.includes('domain')) expect(pathParams.domain).to.be('example.test');
          if (params.includes('mailbox')) expect(pathParams.mailbox).to.be('user@example.test');

          const payload = returnType && returnType.constructFromObject
            ? returnType.constructFromObject({ type: 'success', msg: ['ok'], log: ['entry'] })
            : null;
          callback(null, payload, { status: 200, headers: {} });
        });

        const args = buildInvocationArgs(params, true, function(error, data, response) {
          expect(error).to.be(null);
          expect(response.status).to.be(200);
          done();
        });
        api[operation](...args);
      });
    });

    it('first operation maps transport error metadata', function(done) {
      expect(operations.length > 0).to.be(true);
      const first = operations[0];
      const params = paramNames(prototype[first]);

      sinon.stub(apiClient, 'callApi').callsFake(function(path, method, pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, apiBasePath, callback) {
        callback(
          { status: 500, method, url: path, response: { body: { type: 'danger', msg: 'server error' }, headers: { 'x-request-id': 'req-500' } } },
          null,
          { status: 500, headers: { 'x-request-id': 'req-500' } }
        );
      });

      const args = buildInvocationArgs(params, true, function(error, data, response) {
        expect(data).to.be(null);
        expect(response.status).to.be(500);
        expect(error.status).to.be(500);
        expect(error.response.headers['x-request-id']).to.be('req-500');
        done();
      });
      api[first](...args);
    });
  });
};

