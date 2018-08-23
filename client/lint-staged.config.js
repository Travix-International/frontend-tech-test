module.exports = {
  linters: {
    '**/*.+(js|jsx)': ['prettier --write', 'eslint --fix', 'git add']
  }
}
