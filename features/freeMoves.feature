Feature: Free Moves
  As a player
  I want to move the nine letters freely
  So that I can try and find words more easily

  Scenario: Player inputs the nine letters
    Given the player has started the app
    When the player inputs the nine letters
    Then the player should see the nine letters on the screen

  Scenario: Player moves letters freely
    Given the player has input the nine letters
    When the player moves the letters
    Then the player should see the letters in his new order