'use strict';

const Config = () => {

  this.configs = {
        logging:false,
        database: {
          name: 'pokemons',
          user: 'professorcarvalho',
          password: null,
        },
        application: {
          ip: 'localhost',
          port: 3000,
          api_key: 'ak_test_jRaznapwnT2lrrr8KhG32blo15JOyW'
        }
      }
    return this.configs
}

module.exports = Config();
