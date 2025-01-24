Feature: Input Letters
  As a player
  I want to input letters or get random ones
  So that I can start forming words

  Scenario: Player inputs the nine letters
    Given the player has started the app
    When the player inputs the nine letters
    Then the player should see the nine letters on the screen

  Scenario: Player gets random letters
    Given the player has started the app
    When the player requests random letters that could be used to form an eight or nine-letter word
    Then the player should see nine random letters on the screen