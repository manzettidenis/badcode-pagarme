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
        }
      }
    return this.configs
}

module.exports = Config();
