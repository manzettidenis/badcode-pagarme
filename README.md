# Welcome to Poke Far.me
A simple "game" created to be an object of study.

## Technologies

**Client:**
Webpack, Vue2 / Vuex, Vue-Resource, Vue-Router

**Server:**
Express, Sqlite3, NodeJS >= 7.0.10

**Unit tests:**
Mocha + Chai + Chai-Http

**E2E tests:**
Nightwatch + Selenium


## Starting application
- Rename database.example.sqlite to database.sqlite
- Rename config.example.jd to config.js and insert your application and database options and settings
- The encryption_key should be stored on "public/src/store/pokemons.js"

```console

// install dependencies manually on '/' and '/public'
$ npm install

// development server
$ npm run dev

// build client for production
$ npm run build

// start production server
$ npm start
```

## API Reference
### Trainer routes



```js
'/server/routes.js'

//Get All Trainers
routes.get('/trainer/get', TrainerCtrl.getAll)

// when resolved, it will return an array of all trainers
//	res.body = [{
//			id: Integer,
//			nickname: String
//		},
//		...
//	]
```

```js
'server/routes.js'

// Create Trainer
routes.put('/trainer/create', TrainerCtrl.create)

//	req.body = {
//			nickname: String // Your trainer's nickname
//	}

// when resolved, it will return the trainer object
//	res.body = {
//		id: Integer,
//		nickname: String
//
```


### Pokemon routes

```js
'server/routes.js'

//Get All Pokemons
routes.get('/pokemon/get', PokemonCtrl.getAll)

// when resolved, it will return an array of all pokemons
//	res.body = [{
//			id: Integer,
//			nickname: String,
//			trainer_id: Integer
//		},
//		...
//	]
```


```js
'server/routes.js'

// Buy a pokemon
routes.post('/pokemon/buy', PokemonCtrl.buy)

//	req.body === {
//		pokemon: {
//			trainer_id: Integer, // id of trainer whos buying
//			name: String, // pokemon's breed
//			gender: String, //  pokemon's gender
//			nickname: String, // pokemon's nickname
//			level: 1, // pokemon's level
//			price: 450 // pokemon's price
//		},
//		card: {
//			card_hash: String,
//			card_holder_namer: String,
//			card_expiration_date: String,
//			card_cvv: String			
//	}

// when resolved, it will return an object of the pokemon
// res.body = {
//			trainer_id: Integer, // id of trainer whos buying
//			name: String, // breed of pokemon
//			gender: String, //  pokemon's gender
//			nickname: String, // nickname of pokemon
//			level: 1, // level of the pokemon
//			price: 450 // price of the pokemon
// }

```


```js
'server/routes.js'

// Create a Pokemon
routes.put('/pokemon/create', PokemonCtrl.create)


//	req.body === {
//		trainer_id: Integer, // id of trainer whos buying
//		name: String, // breed of pokemon
//		nickname: String, // nickname of pokemon
//		level: 1, // level of the pokemon
//		price: 450 // price of the pokemon
//	}

// when resolved, it will return an object of the pokemon
// res.body = {
//			trainer_id: Integer, // id of trainer whos buying
//			name: String, // breed of pokemon
//			gender: String, //  pokemon's gender
//			nickname: String, // nickname of pokemon
//			level: 1, // level of the pokemon
//			price: 450 // price of the pokemon
// }
```

# Tests
## unit tests
```console
$ npm test
```

## e2e
***Chrome >= 58.04***
```console
$ npm run test-client

or

$ cd public/

$ npm test
```

**Unit Tests Output**
```console
$ npm test

> pokemon@1.0.0 test /
> mocha tests/



  /GET trainer
all models are sync
Express listening on port: 3000
    ✓ it should list all trainers (72ms)

  /PUT trainer
    ✓ it should CREATE a trainer (276ms)

  /GET pokemon
    ✓ it should list all the pokemons

  /PUT pokemon
    ✓ it should CREATE a pokemon (182ms)

  /POST pokemon
    ✓ it should BUY the pokemon (2950ms)

  /POST pokemon
enviando bodystatus
    ✓ it should get payment refused trying buy a pokemon (2185ms)


  6 passing (12s)


```


**E2E Output**
```console

> Starting dev server...

Starting to optimize CSS...
> Listening at http://localhost:8080

Starting selenium server... started - PID:  1373

[Test] Test Suite
=====================

Running:  Should buy pokemon
 ✔ Element <.app> was visible after 207 milliseconds.
 ✔ Element <#registerTrainerForm> was present after 33 milliseconds.
  Warn: WaitForElement found 2 elements for selector "h2". Only the first one will be checked.
 ✔ Element <h2> was visible after 71 milliseconds.
 ✔ Testing if element <h2> contains text: "WELCOME TO POKE FAR.ME".
 ✔ Element <#creditCardForm> was visible after 72 milliseconds.
 ✔ Element <#creditCardForm h2> was visible after 74 milliseconds.
 ✔ Element <#creditCardForm .buttons button[type=submit]> was present after 36 milliseconds.
 ✔ Element <#choosePokemon h2> was visible after 55 milliseconds.
 ✔ Testing if element <#choosePokemon h2> contains text: "HELLO MANZETTI".
 ✔ Element <.buttons button[type=submit]> was present after 33 milliseconds.
 ✔ Element <.welcome h2> was visible after 1124 milliseconds.
 ✔ Testing if element <.welcome h2> contains text: "WELCOME FARMER !".
 ✔ Element <#rightScreen> was visible after 56 milliseconds.
 ✔ Element <.buyButton> was present after 30 milliseconds.
 ✔ Element <.shop> was visible after 187 milliseconds.
 ✔ Element <.shoplist> was visible after 61 milliseconds.
  Warn: WaitForElement found 8 elements for selector "a.title". Only the first one will be checked.
 ✔ Element <a.title> was visible after 65 milliseconds.
 ✔ Element <.product-item> was visible after 90 milliseconds.
  Warn: WaitForElement found 4 elements for selector ".product-subtitle". Only the first one will be checked.
 ✔ Element <.product-subtitle> was visible after 76 milliseconds.
 ✔ Testing if element <.product-title> contains text: "Pikachu".
 ✔ Element <button.buyPokemonButton> was present after 35 milliseconds.
 ✔ Element <.paymentMessages> was visible after 60 milliseconds.
 ✔ Element <.pokemonList> was visible after 3246 milliseconds.
 ✔ Testing if element <.rightNavbar .count> contains text: "1".

OK. 24 assertions passed. (47.806s)

Running:  should fail buying and show message
 ✔ Element <.app> was visible after 72 milliseconds.
 ✔ Element <#registerTrainerForm> was present after 30 milliseconds.
  Warn: WaitForElement found 2 elements for selector "h2". Only the first one will be checked.
 ✔ Element <h2> was visible after 61 milliseconds.
 ✔ Testing if element <h2> contains text: "WELCOME TO POKE FAR.ME".
 ✔ Element <#creditCardForm> was visible after 57 milliseconds.
 ✔ Element <#creditCardForm h2> was visible after 65 milliseconds.
 ✔ Element <#creditCardForm .buttons button[type=submit]> was visible after 60 milliseconds.
 ✔ Element <#choosePokemon h2> was visible after 48 milliseconds.
 ✔ Testing if element <#choosePokemon h2> contains text: "HELLO MANZETTI".
 ✔ Element <.buttons button[type=submit]> was visible after 62 milliseconds.
 ✔ Element <.welcome h2> was visible after 571 milliseconds.
 ✔ Testing if element <.welcome h2> contains text: "WELCOME FARMER !".
 ✔ Element <#rightScreen> was visible after 69 milliseconds.
 ✔ Element <.buyButton> was visible after 96 milliseconds.
 ✔ Element <.shop> was visible after 62 milliseconds.
 ✔ Element <.shoplist> was visible after 63 milliseconds.
  Warn: WaitForElement found 8 elements for selector "a.title". Only the first one will be checked.
 ✔ Element <a.title> was visible after 81 milliseconds.
 ✔ Element <.product-item> was visible after 63 milliseconds.
  Warn: WaitForElement found 4 elements for selector ".product-subtitle". Only the first one will be checked.
 ✔ Element <.product-subtitle> was visible after 65 milliseconds.
 ✔ Testing if element <.product-title> contains text: "Pikachu".
 ✔ Element <.paymentMessages> was visible after 77 milliseconds.
 ✔ Element <.refused> was visible after 2186 milliseconds.
 ✔ Element <button.leave> was visible after 102 milliseconds.

OK. 23 assertions passed. (18.182s)

OK. 47  total assertions passed. (1m 7s)

```
