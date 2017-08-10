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
- Rename config and type your application and database settings
- The encryption_key should be placed on "public/src/store/pokemons.js"

```console
// install all dependencies. Client and Server side.
npm run install

// or install dependencies manually on '/' and '/public'
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
'/route.js'

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
//		nickname: String,
//	
```


### Pokemon routes

```js
'server/route.js'

//Get All Pokemons

routes.get('/pokemon/get', PokemonCtrl.getAll) 

// when resolved, it will return an array of all pokemons
//	res.body = [{
//			id: Integer,
//			nickname: String,
//			trainer_id: Integer,
//			: String,
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
***Chrome >= 58.04***
## e2e
```
$ npm run test-client
```
