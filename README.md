# DicesBattle_React

## Table of content: 
* [General info](#general_info)
* [Screenshot](#screenshot)
* [Technologies](#technologies)
* [Demo](#demo)
* [Setup](#setup)

## General info
A simple game with dices made your two players. Each player starts with 100 health and Player 1 will roll the dices first. The total sum of two rolled dices will be "totalHit" and that number will be reduced from the opponent's health. Player 1 starts first and each point from totalHit will be reduced from the oppponent's health on every 0.3 seconds and while it is in progress the opponent cannot roll the dices- Roll the dices button will not be rendered while this is in progress. After this process is done, Roll the dices button will be re-rendered and the Player 2 will now have the "active" class attached and once s(he) clicks it, the process goes all over again. 
Eah player's health is represented with a number (100) and a div with a green background with a height of a 100px. As the player loses the energy, the div with a green background will lose it's height and the height in px will represent the player's health in number. 
The goal of the game is to lower your opponent's energy level to 0. After that happens, the top level component (App) will re-render another Game component with a different key. 

## Screenshot


## Technologies 
* React/React Dom: 17.0.1
* JSX
* CSS

## Demo 

https://lazarmilovic.github.io/DicesBattle_React/

## Setup

To start the app on your machine, you would need to have Node installed. If you have it, download the code and navigate the Terminal to the folder where you saved the code and run "npm start" in the Terminal.
