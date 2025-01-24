Feature: Start the App
  As a player
  I want to start the app
  So that I can begin playing the game

  Scenario: Player starts the app
    Given the player has installed the app
    When the player starts the app
    Then the player should see a mean to input the nine letters