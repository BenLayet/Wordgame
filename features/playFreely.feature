Feature: Play Freely
  As a player
  I want to move the nine letters freely
  So that I can try and find words more easily

  Scenario: Player moves letters freely
    Given the player has input the nine letters
    When the player moves the letters
    Then the player should see the letters in his new order

  Scenario: Player rotates a row
    Given the player has input the nine letters
    When the player rotates row 1 to the left
    Then the player should see the letters in his new order

  Scenario: Player rotates a column
    Given the player has input the nine letters
    When the player rotates column 1 up
    Then the player should see the letters in his new order