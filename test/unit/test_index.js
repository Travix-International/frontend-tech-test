const testsContext = require.context('.', true, /\_spec.js$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('../../src/', true, /\.js$/);
srcContext.keys().forEach(srcContext);
