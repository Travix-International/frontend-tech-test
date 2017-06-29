# Todo app

## Usage

Run:

```
npm install
npm start
```

Open: [http://localhost:3000](http://localhost:3000)

Start command will start concurrently the `webpack dev server` and the API `express server`.


You can run only the UI app with `npm run dev` and the API with `node server`.

If you want to bootstrap the application with 160k todos, add the environment variable `HUGE_LIST` to the `npm start` command.

```
HUGE_LIST=true npm start
```

## Stack

- [Frint framework](https://github.com/Travix-International/frint/)
- [Frint store](https://github.com/Travix-International/frint/tree/master/packages/frint-store)
- [Arc boilerplate](https://github.com/diegohaz/arc)
- SASS + CSS Modules
