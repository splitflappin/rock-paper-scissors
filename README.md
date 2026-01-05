# rock-paper-scissors

Classic rock paper scissors game

## Getting computers choice
When the function getComputerChoice is ran
Create random number
IF random number is 0
  return a string with rock as the value
IF random number is 1
  return a string with paper as the value
ELSE
  return a string with scissors as the value

## Logic for getting the humans choice
When getHumanChoice is ran
Get the users choice
IF users choice is rock
  return rock
IF users choice is paper
  return paper
IF users choice is scissors
  return scissors
ELSE
  prompt again with instructions that only paper, rock, and scissors are the only option.

## Declaring players score and storing them globally
Create variables for both the human and computer player. 
Store with let and store them globally

## Logic to playing a single round
PlayRound function has 2 arguments and when it is ran it will compare them and reward a point to the player who had the winning hand. The paraments are humanChoice and computerChoice


IF humanChoice equals computerChoice
  let the human know that they guessed the same value and no one wins the round
ELSE IF humanChoice is paper and computerChoice is rock
  let the human know that they won
  give a point to the human
ELSE IF humanChoice is rock and computerChoice is scissors
  let the human know that they won
  give a point to the human
ELSE IF humanChoice is scissors and ComputerChoice is paper
  let the human know that they won
  give a point to the human
ELSE 
  let the human know that they lost
  give a point to the computer

## Logic to play the game. Keeps tracks of the rounds 
When playGame function is ran the game starts

A variable will be created to track the rounds. 

LOOP through 

IF rounds are less than 5
  play another round
ElSE 
  the player who has the most wins is declared the winner