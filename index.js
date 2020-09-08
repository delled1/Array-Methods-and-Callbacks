import { fifaData } from "./fifa.js";
console.log(fifaData);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

//A

let homeTeam2014 = fifaData.filter((name) => {
  if (name[`Year`] === 2014 && name[`Stage`] === "Final") {
    console.log(name[`Home Team Name`]);
  }
});

//B
let awayTeam2014 = fifaData.filter((name) => {
  if (name[`Year`] === 2014 && name[`Stage`] === "Final") {
    console.log(name[`Away Team Name`]);
  }
});

//C
let homeTeamGoals2014 = fifaData.filter((goals) => {
  if (
    goals[`Year`] === 2014 &&
    goals[`Stage`] === "Final" &&
    goals[`Home Team Name`]
  ) {
    console.log(goals[`Home Team Goals`]);
  }
});

//D
let awayTeamGoals2014 = fifaData.filter((goals) => {
  if (
    goals[`Year`] === 2014 &&
    goals[`Stage`] === "Final" &&
    goals[`Away Team Name`]
  ) {
    console.log(goals[`Away Team Goals`]);
  }
});

//E
let winner2014 = fifaData.filter((win) => {
  if (win[`Year`] === 2014 && win[`Stage`] === "Final") {
    if (win[`Away Team Goals`] > win[`Home Team Goals`]) {
      console.log(win[`Away Team Name`]);
    } else if (win[`Away Team Goals`] < win[`Home Team Goals`]) {
      console.log(win[`Home Team Name`]);
    }
  }
});

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  return data.filter((data) => data.Stage === "Final");
}

console.log(getFinals(fifaData));
let finals = getFinals(fifaData);
console.log(finals);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb) {
  return cb.map((cb) => cb.Year);
}

console.log(getYears(finals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(cb) {
  let winners = [];

  cb.forEach((element) => {
    if (element[`Away Team Goals`] > element[`Home Team Goals`]) {
      winners.push(element[`Away Team Name`]);
    } else {
      winners.push(element[`Home Team Name`]);
    }
  });
  return winners;
}

console.log(getWinners(finals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWin, getYear) {
  let win = getWin;
  let years = getYear;

  win.forEach((element1, index) => {
    const ele2 = years[index];
    console.log(`In ${ele2}, ${element1} won the world cup!`);
  });
}

getWinnersByYear(getWinners(finals), getYears(finals));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  let awayTeamGoals = [];
  let homeTeamGoals = [];
  data.forEach((element) => {
    awayTeamGoals.push(element[`Away Team Goals`]);
  });

  data.forEach((element) => {
    homeTeamGoals.push(element[`Home Team Goals`]);
  });

  const awayAverage =
    awayTeamGoals.reduce((total, games) => {
      return total + games;
    }, 0) / awayTeamGoals.length;

  const homeAverage =
    homeTeamGoals.reduce((total, games) => {
      return total + games;
    }, 0) / homeTeamGoals.length;

  console.log(`Away team average goals: ${awayAverage}`);
  console.log(`Home team average goals: ${homeAverage}`);
}

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
