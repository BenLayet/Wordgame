Feature: Cheat functionality for Ted
  As a player named Alice
  I want to use a cheat feature
  So that I can get hints or solutions for the word game

  Scenario: Alice uses the cheat feature to find anagrams
    Given Alice is playing the Ted game
    When Alice activates the cheat feature
    Then Alice should be asked to input letters
    And Alice should receive a list of anagrams for the input letters
    And the anagrams should be sorted by points

  Scenario: Alice chooses an anagram
    Given Alice has received a list of anagrams
    When Alice selects an anagram from the list
    Then the selected anagram should be analyzed
    And Alice should see the analysis of the selected anagram