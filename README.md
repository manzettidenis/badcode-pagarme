## Welcome to Poke Far.me
A simple "game" created to be an object of study

## Technologies
**Client**
Vue2 / Vuex, Webpack, Vou-Router, Nightwatch

**Server**
Express, Sqlite3, NodeJS >= 7.0.10



# Starting application
- Rename database.example.sqlite to database.sqlite
- Rename config and type your application and database settings
- The encryption_key should be placed on "public/src/store/pokemons.js"

`BASH
$ npm install
//after
$ npm run dev
`


# Tests
**Chrome >= 58.04**
## e2e
`BASH
// in /pulbic folder
$ npm run test
`
