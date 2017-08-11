'use strict';
const Config = () => {

  this.configs = {
        logging:false,
        // database settings
        database: {
          name: 'pokemons', // name of database
          user: null, // user database
          password: null, // password database
        },
        // Test database settings
        test_database: {
          name: 'pokemons_test',
          user: null,
          password: null,
        },
        application: {
          ip: 'localhost',
          port: 3000,
          api_key: '' // your pagar.me api_key
        }
      }
    return this.configs
}

module.exports = Config();
