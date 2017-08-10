# Welcome to Poke Far.me
A simple "game" created to be an object of study.

## Technologies
**Client**

Vue2 / Vuex, Webpack, Vou-Router, Nightwatch + Selenium

**Server**

Express, Sqlite3, NodeJS >= 7.0.10

## Starting application
- Rename database.example.sqlite to database.sqlite
- Rename config and type your application and database settings
- The encryption_key should be placed on "public/src/store/pokemons.js"

```console
// install all dependencies. Client and Server side.
npm run install

// or install dependencies manually on '/' and '/public'
$ npm install

//development server
$ npm run dev

//build for production
$ npm run build

// start server
$ npm start
```

## API Reference
### Trainer routes


**Get All Trainers**
```js
'/route.js'

routes.get('/pokemon/get', TrainerCtrl.getAll) 
```

**Create Trainer**
```js
// /routes.js

routes.put('/trainer/create', TrainerCtrl.create) 
//	req.body = {
//			name: String // breed of pokemon
//		}
```


### Pokemon routes


**Get All Pokemons**
```js
'server/route.js'

routes.get('/pokemon/get', PokemonCtrl.getAll) 
```

**Buy a pokemon**
```js
'server/routes.js'

routes.post('/pokemon/buy', PokemonCtrl.buy) 
//	req.body === {
//		pokemon: {
//			trainer_id: Integer, // id of trainer whos buying
//			name: String, // breed of pokemon
//			nickname: String, // nickname of pokemon
//			level: 1, // level of the pokemon
//			price: 450 // price of the pokemon
//		},
//		card: {
//			card_hash: String,
//			card_holder_namer: String,
//			card_expiration_date: String,
//			card_cvv: String			
//	}
```

**Create a Pokemon**
```js
'server/routes.js'

routes.put('/pokemon/create', PokemonCtrl.create) 
//	req.body === {
//		trainer_id: Integer, // id of trainer whos buying
//		name: String, // breed of pokemon
//		nickname: String, // nickname of pokemon
//		level: 1, // level of the pokemon
//		price: 450 // price of the pokemon
//	}

```

# Tests
***Chrome >= 58.04***
## e2e
```
$ npm run test-client
```
