'use strict';

const Config = () => {

  this.configs = {
        database: {
          user: 'professorcarvalho',
          passwords: '',
        },
        aplication: {
          ip: '',
          port: '',
        }
      }

    return this.configs
}

module.exports = Config;
