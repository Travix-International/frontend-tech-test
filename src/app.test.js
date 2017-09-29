
/**
 * Locate and require all the test files: files starting with "test" and finishing with ".js"
 */
const context = require.context('./', true, /(.*)\.test\.js$/i);
context.keys().forEach(k => {
  console.log('Loading file', k);
  context(k);
});