# Usage
* `npm start` to start the application in development
* `npm run build && npm run start:prod` to start application in production
* `npm run watch:test` to start tests in watch mode
* `npm t` to run tests
* `npm run generate` to generate json (If file server/tasks.json does not exist)

The server is available on http://localhost:9001/

# Assumptions

1. API design ensuring backward compatibility.
2. Add missing specification feature `complete todo`.
3. Simple Pagination to handle large files.
4. Using the `made in Travix` technologies.

# Issues

*  Unsafe to use `fs.writeFile` multiple times on the same file.
