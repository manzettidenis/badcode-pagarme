// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "Should buy pokemon": function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible(".app", 5000)
      .waitForElementPresent("#registerTrainerForm", 5000)
      .waitForElementVisible("h2", 5000)
      .assert.containsText("h2", "WELCOME TO POKE FAR.ME")
      .clearValue("#registerTrainerForm input[type=text]")
      .setValue("#registerTrainerForm input[type=text]", ["manzetti", browser.Keys.ENTER])
      .clearValue("#registerTrainerForm input[type=text]")
      .setValue("#registerTrainerForm input[type=text]", ["manzetti", browser.Keys.ENTER])
      .waitForElementVisible("#creditCardForm", 5000)
      .setValue("input.cardnumber", ["4024007138010896"])
      .setValue("input.cardholder", ["denis manzetti"])
      .setValue("input.cardexpiration", ["1025"])
      .setValue("input.cardcvv", ["144"])
      .waitForElementVisible("#creditCardForm h2", 5000)
      .waitForElementPresent("#creditCardForm .buttons button[type=submit]", 5000)
      .click("#creditCardForm .buttons button[type=submit]")
      .waitForElementVisible("#choosePokemon h2", 5000)
      .assert.containsText("#choosePokemon h2", "HELLO MANZETTI")
      .waitForElementPresent(".buttons button[type=submit]", 5000)
      .click(".buttons button[type=submit]")
      .waitForElementVisible(".welcome h2", 5000)
      .assert.containsText(".welcome h2", "WELCOME FARMER !")
      .waitForElementVisible("#rightScreen", 5000)
      .waitForElementPresent(".buyButton", 5000)
      .click(".buyButton")
      .waitForElementVisible(".shop", 5000)
      .waitForElementVisible(".shoplist", 5000)
      .waitForElementVisible("a.title", 5000)
      .click("a.title")
      .waitForElementVisible(".product-item", 5000)
      .waitForElementVisible(".product-subtitle", 5000)
      .assert.containsText(".product-title", "Pikachu")
      .setValue("input.pokemonNickname", ["Tésteros"])
      .waitForElementPresent("button.buyPokemonButton", 1000)
      .click("button.buyPokemonButton")
      .waitForElementVisible(".paymentMessages", 10000)
      .waitForElementVisible(".pokemonList", 10000)
      .assert.containsText(".rightNavbar .count", "1")

      .end()
  },

  "should fail buying and show message": function (browser) {
    const devServer = browser.globals.devServerURL

    browser
    .url(devServer)
    .waitForElementVisible(".app", 5000)
    .waitForElementPresent("#registerTrainerForm", 5000)
    .waitForElementVisible("h2", 5000)
    .assert.containsText("h2", "WELCOME TO POKE FAR.ME")
    .clearValue("#registerTrainerForm input[type=text]")
    .setValue("#registerTrainerForm input[type=text]", ["manzetti", browser.Keys.ENTER])
    .clearValue("#registerTrainerForm input[type=text]")
    .setValue("#registerTrainerForm input[type=text]", ["manzetti", browser.Keys.ENTER])
    .waitForElementVisible("#creditCardForm", 5000)
    .setValue("input.cardnumber", ["4024007138010896"])
    .setValue("input.cardholder", ["denis manzetti"])
    .setValue("input.cardexpiration", ["1025"])
    .setValue("input.cardcvv", ["644"])
    .waitForElementVisible("#creditCardForm h2", 5000)
    .waitForElementVisible("#creditCardForm .buttons button[type=submit]", 5000)
    .click("#creditCardForm .buttons button[type=submit]")
    .waitForElementVisible("#choosePokemon h2", 5000)
    .assert.containsText("#choosePokemon h2", "HELLO MANZETTI")
    .waitForElementVisible(".buttons button[type=submit]", 5000)
    .click(".buttons button[type=submit]")
    .waitForElementVisible(".welcome h2", 5000)
    .assert.containsText(".welcome h2", "WELCOME FARMER !")
    .waitForElementVisible("#rightScreen", 5000)
    .waitForElementVisible(".buyButton", 5000)
    .click(".buyButton")
    .waitForElementVisible(".shop", 5000)
    .waitForElementVisible(".shoplist", 5000)
    .waitForElementVisible("a.title", 5000)
    .click("a.title")
    .waitForElementVisible(".product-item", 5000)
    .waitForElementVisible(".product-subtitle", 5000)
    .assert.containsText(".product-title", "Pikachu")
    .setValue("input.pokemonNickname", ["Tésteros"])
    .click("button.add-button")
    .waitForElementVisible(".paymentMessages", 5000)
    .waitForElementVisible(".refused", 10000)
    .waitForElementVisible("button.leave", 10000)
    .click("button.leave")


    .end()
  },

}
