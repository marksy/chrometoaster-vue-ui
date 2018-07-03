const req = require.context('../', true, /(components)\/[^/]+\/([^/]+\/)*stories.js$/);
req.keys().forEach(req);