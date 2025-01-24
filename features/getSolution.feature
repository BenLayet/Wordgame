Feature: Get the Solution
  As a player
  I want to get the solution
  So that I can see the correct words

  Scenario: Player requests the solution
    Given the player has input the nine letters
    When the player requests the solution
    Then the player should receive a list of anagrams for the input letters
    And the anagrams should be sorted by points


  Scenario: Player chooses an anagram
    Given the player has received a list of anagrams
    When the player selects an anagram from the list
    Then the player should see the rotations of rows and columns to form the anagram
    And the rotations should be the most efficient ones