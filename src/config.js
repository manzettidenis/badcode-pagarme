'use strict';


class Config {

  constructor() {
      this.configs = {
        database: {
          user: '',
          passwords: '',
        },
        aplication: {
          ip: '',
          port: '',
        }
      }
  }

  returnConfigs() {
    return this.configs
  }
}
