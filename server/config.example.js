'use strict';
const Config = () => {

  this.configs = {
        logging:false,
        database: {
          name: '', // name of database
          user: '', // user database
          password: , // password database
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
