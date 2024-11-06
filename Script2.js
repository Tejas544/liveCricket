<<<<<<< HEAD
let lastValue = 0;
let totalOvers = 0;
let totalBallsInOver = 0;
let bowlerOvers = 0;
let bowlerBallsInOver = 0;

// Track the striker and non-striker
let currentStriker = "striker";
let otherBatsman = "nonStriker";

// Function to switch the striker
function switchStriker() {
    [currentStriker, otherBatsman] = [otherBatsman, currentStriker];
}

function addScore(value) {
     // Get elements for both striker and non-striker
let strikerRuns = document.getElementById(`${currentStriker}Runs`);
let strikerBalls = document.getElementById(`${currentStriker}Balls`);
let strikerFours = document.getElementById(`${currentStriker}Fours`);
let strikerSixes = document.getElementById(`${currentStriker}Sixes`);
let strikerSR = document.getElementById(`${currentStriker}SR`);
let otherRuns = document.getElementById(`${otherBatsman}Runs`);
let otherBalls = document.getElementById(`${otherBatsman}Balls`);
let bowlerRuns = document.getElementById('bowlerRuns');
let totalScore = document.getElementById('totalScore');

// Get the current values
let strikerRunsData = parseInt(strikerRuns.innerText);
let bowlerRunsData = parseInt(bowlerRuns.innerText);
let strikerFoursData = parseInt(strikerFours.innerText);
let strikerSixesData = parseInt(strikerSixes.innerText);
let strikerBallsData = parseInt(strikerBalls.innerText);
let totalScoreData = parseInt(totalScore.innerText);

// Update runs and balls for striker and bowler
strikerRunsData += value;
totalScoreData += value;
bowlerRunsData += value;
strikerBallsData += 1;
totalBallsInOver += 1;
bowlerBallsInOver += 1;

if (value === 4) {
    strikerFoursData += 1;
} else if (value === 6) {
    strikerSixesData += 1;
}

//Calculate and update strike rate
let strikerStrikeRate = ((strikerRunsData / strikerBallsData) * 100).toFixed(2);

// Handle overs increment
if (totalBallsInOver == 6) {
    totalOvers += 1;
    totalBallsInOver = 0;
    switchStriker();
}
if (bowlerBallsInOver == 6) {
    bowlerOvers += 1;
    bowlerBallsInOver = 0;
}

// Update elements
strikerRuns.innerText = strikerRunsData;
bowlerRuns.innerText = bowlerRunsData;
strikerFours.innerText = strikerFoursData;
strikerSixes.innerText = strikerSixesData;
strikerSR.innerText = strikerStrikeRate;
strikerBalls.innerText = strikerBallsData;
totalScore.innerText = totalScoreData;
document.getElementById('overs').innerText = `${totalOvers}.${totalBallsInOver}`;
document.getElementById('bowlerOvers').innerText = `${bowlerOvers}.${bowlerBallsInOver}`;

// Check if run is odd to switch the striker
if (value % 2 !== 0) {
    switchStriker();
}
}

function reset() {
    // Reset game variables
    totalOvers = 0;
    totalBallsInOver = 0;
    bowlerOvers = 0;
    bowlerBallsInOver = 0;

    // Reset HTML elements for both batsmen, bowler, and totals
    document.getElementById('strikerRuns').innerText = 0;
    document.getElementById('nonStrikerRuns').innerText = 0;
    document.getElementById('strikerBalls').innerText = 0;
    document.getElementById('nonStrikerBalls').innerText = 0;
    document.getElementById('bowlerRuns').innerText = 0;
    document.getElementById('totalScore').innerText = 0;
    document.getElementById('totalWickets').innerText = 0;
    document.getElementById('bowlerWickets').innerText = 0;
    document.getElementById('overs').innerText = `${totalOvers}.${totalBallsInOver}`;
    document.getElementById('bowlerOvers').innerText = `${bowlerOvers}.${bowlerBallsInOver}`;

    document.getElementById('strikerFours').innerText = 0;
    document.getElementById('strikerSixes').innerText = 0;
    document.getElementById('strikerSR').innerText = '0.00';
    document.getElementById('nonStrikerFours').innerText = 0;
    document.getElementById('nonStrikerSixes').innerText = 0;
    document.getElementById('nonStrikerSR').innerText = '0.00';
}

function wicket() {
    // Handle a wicket situation
    let bowlerWickets = document.getElementById('bowlerWickets');
    let totalWickets = document.getElementById('totalWickets');

    let bowlerWicketsData = parseInt(bowlerWickets.innerText);
    let totalWicketsData = parseInt(totalWickets.innerText);
    let strikerBalls = document.getElementById(`${currentStriker}Balls`);

    // Update wickets and balls
    bowlerWicketsData += 1;
    totalWicketsData += 1;
    let strikerBallsData = parseInt(strikerBalls.innerText);
    strikerBallsData += 1;
    totalBallsInOver += 1;
    bowlerBallsInOver += 1;

    let isOverEnd = false;

    if (totalBallsInOver == 6) {
        totalOvers += 1;
        totalBallsInOver = 0;
        isOverEnd = true;
    }
    if (bowlerBallsInOver == 6) {
        bowlerOvers += 1;
        bowlerBallsInOver = 0;
    }

    // Update elements
    document.getElementById('overs').innerText = `${totalOvers}.${totalBallsInOver}`;
    document.getElementById('bowlerOvers').innerText = `${bowlerOvers}.${bowlerBallsInOver}`;
    bowlerWickets.innerText = bowlerWicketsData;
    totalWickets.innerText = totalWicketsData;

    // Prompt for a new batsman and reset striker data
    let newBatsman = prompt("Enter the name of the new batsman:");
    document.getElementById(`${currentStriker}Name`).innerText = newBatsman;
    document.getElementById(`${currentStriker}Runs`).innerText = 0;
    document.getElementById(`${currentStriker}Balls`).innerText = 0;
    document.getElementById(`${currentStriker}Fours`).innerText = 0;
    document.getElementById(`${currentStriker}Sixes`).innerText = 0;
    document.getElementById(`${currentStriker}SR`).innerText = 0.00;
    strikerBalls.innerText = 0;
    if(isOverEnd) {
        switchStriker();
    }
}


window.onload = function() {
    const teamName = prompt("Enter the name of the team");
    const strikerName = prompt("Enter the name of the striker:");
    const nonStrikerName = prompt("Enter the name of the non-striker:");
    const bowlerName = prompt("Enter the name of the bowler:");

    document.getElementById('strikerName').innerText = strikerName || "Striker";
    document.getElementById('nonStrikerName').innerText = nonStrikerName || "Non-Striker";
    document.getElementById('bowlerName').innerText = bowlerName || "Bowler";
    document.getElementById('teamName').innerText = teamName || "team A";
}
=======
let lastValue = 0;
let totalOvers = 0;
let totalBallsInOver = 0;
let bowlerOvers = 0;
let bowlerBallsInOver = 0;
let batsmenData = [];

// Track the striker and non-striker
let currentStriker = "striker";
let currentNonStriker = "nonStriker";

// Function to switch the striker
function switchStriker() {
    [currentStriker, currentNonStriker] = [currentNonStriker, currentStriker];
    document.getElementById(`${currentStriker}Name`).innerText = document.getElementById(`${currentStriker}Name`).innerText.replace("*", "") + "*";
    document.getElementById(`${currentNonStriker}Name`).innerText = document.getElementById(`${currentNonStriker}Name`).innerText.replace("*", "");
    
}

function addScore(value) {
     // Get elements for both striker and non-striker
let strikerRuns = document.getElementById(`${currentStriker}Runs`);
let strikerBalls = document.getElementById(`${currentStriker}Balls`);
let strikerFours = document.getElementById(`${currentStriker}Fours`);
let strikerSixes = document.getElementById(`${currentStriker}Sixes`);
let strikerSR = document.getElementById(`${currentStriker}SR`);
let otherRuns = document.getElementById(`${currentNonStriker}Runs`);
let otherBalls = document.getElementById(`${currentNonStriker}Balls`);
let bowlerRuns = document.getElementById('bowlerRuns');
let totalScore = document.getElementById('totalScore');

// Get the current values
let strikerRunsData = parseInt(strikerRuns.innerText);
let bowlerRunsData = parseInt(bowlerRuns.innerText);
let strikerFoursData = parseInt(strikerFours.innerText);
let strikerSixesData = parseInt(strikerSixes.innerText);
let strikerBallsData = parseInt(strikerBalls.innerText);
let totalScoreData = parseInt(totalScore.innerText);

// Update runs and balls for striker and bowler
strikerRunsData += value;
totalScoreData += value;
bowlerRunsData += value;
strikerBallsData += 1;
totalBallsInOver += 1;
bowlerBallsInOver += 1;

if (value === 4) {
    strikerFoursData += 1;
} else if (value === 6) {
    strikerSixesData += 1;
}

//Calculate and update strike rate
let strikerStrikeRate = ((strikerRunsData / strikerBallsData) * 100).toFixed(2);

// Handle overs increment
if (totalBallsInOver == 6) {
    totalOvers += 1;
    totalBallsInOver = 0;
    switchStriker();
    
}
if (bowlerBallsInOver == 6) {
    bowlerOvers += 1;
    bowlerBallsInOver = 0;
}

// Update elements
strikerRuns.innerText = strikerRunsData;
bowlerRuns.innerText = bowlerRunsData;
strikerFours.innerText = strikerFoursData;
strikerSixes.innerText = strikerSixesData;
strikerSR.innerText = strikerStrikeRate;
strikerBalls.innerText = strikerBallsData;
totalScore.innerText = totalScoreData;
document.getElementById('overs').innerText = `${totalOvers}.${totalBallsInOver}`;
document.getElementById('bowlerOvers').innerText = `${bowlerOvers}.${bowlerBallsInOver}`;

// Check if run is odd to switch the striker
if (value % 2 !== 0) {
    switchStriker();
    
}
}

function reset() {
    // Reset game variables
    // totalOvers = 0;
    // totalBallsInOver = 0;
    // bowlerOvers = 0;
    // bowlerBallsInOver = 0;

    // // Reset HTML elements for both batsmen, bowler, and totals
    // document.getElementById('strikerRuns').innerText = 0;
    // document.getElementById('nonStrikerRuns').innerText = 0;
    // document.getElementById('strikerBalls').innerText = 0;
    // document.getElementById('nonStrikerBalls').innerText = 0;
    // document.getElementById('bowlerRuns').innerText = 0;
    // document.getElementById('totalScore').innerText = 0;
    // document.getElementById('totalWickets').innerText = 0;
    // document.getElementById('bowlerWickets').innerText = 0;
    // document.getElementById('overs').innerText = `${totalOvers}.${totalBallsInOver}`;
    // document.getElementById('bowlerOvers').innerText = `${bowlerOvers}.${bowlerBallsInOver}`;

    // document.getElementById('strikerFours').innerText = 0;
    // document.getElementById('strikerSixes').innerText = 0;
    // document.getElementById('strikerSR').innerText = '0.00';
    // document.getElementById('nonStrikerFours').innerText = 0;
    // document.getElementById('nonStrikerSixes').innerText = 0;
    // document.getElementById('nonStrikerSR').innerText = '0.00';
    location.reload();
}

function wicket() {
    let strikerData = {
        name: document.getElementById(`${currentStriker}Name`).innerText,
        runs: document.getElementById(`${currentStriker}Runs`).innerText,
        balls: document.getElementById(`${currentStriker}Balls`).innerText,
        fours: document.getElementById(`${currentStriker}Fours`).innerText,
        sixes: document.getElementById(`${currentStriker}Sixes`).innerText,
        strikeRate: document.getElementById(`${currentStriker}SR`).innerText
    };
    
    batsmenData.push(strikerData);
    // Handle a wicket situation
    let bowlerWickets = document.getElementById('bowlerWickets');
    let totalWickets = document.getElementById('totalWickets');

    let bowlerWicketsData = parseInt(bowlerWickets.innerText);
    let totalWicketsData = parseInt(totalWickets.innerText);
    let strikerBalls = document.getElementById(`${currentStriker}Balls`);

    // Update wickets and balls
    bowlerWicketsData += 1;
    totalWicketsData += 1;
    let strikerBallsData = parseInt(strikerBalls.innerText);
    strikerBallsData += 1;
    totalBallsInOver += 1;
    bowlerBallsInOver += 1;

    let isOverEnd = false;

    if (totalBallsInOver == 6) {
        totalOvers += 1;
        totalBallsInOver = 0;
        isOverEnd = true;
    }
    if (bowlerBallsInOver == 6) {
        bowlerOvers += 1;
        bowlerBallsInOver = 0;
    }

    // Update elements
    document.getElementById('overs').innerText = `${totalOvers}.${totalBallsInOver}`;
    document.getElementById('bowlerOvers').innerText = `${bowlerOvers}.${bowlerBallsInOver}`;
    bowlerWickets.innerText = bowlerWicketsData;
    totalWickets.innerText = totalWicketsData;

    // Prompt for a new batsman and reset striker data
    let newBatsman = prompt("Enter the name of the new batsman:");
    document.getElementById(`${currentStriker}Name`).innerText = newBatsman;
    document.getElementById(`${currentStriker}Fours`).innerText = 0;
    document.getElementById(`${currentStriker}Sixes`).innerText = 0;
    document.getElementById(`${currentStriker}SR`).innerText = 0;
    document.getElementById(`${currentStriker}Runs`).innerText = 0;
    strikerBalls.innerText = 0;
    if(isOverEnd) {
        switchStriker();
        
    }



}


function initaliseGame() {

    const teamName = prompt("Enter the name of the team");
    const strikerName = prompt("Enter the name of the striker:");
    const nonStrikerName = prompt("Enter the name of the non-striker:");
    const bowlerName = prompt("Enter the name of the bowler:");

    document.getElementById('strikerName').innerText = strikerName || "Striker";
    document.getElementById('nonStrikerName').innerText = nonStrikerName || "Non-Striker";
    document.getElementById('bowlerName').innerText = bowlerName || "Bowler";
    document.getElementById('teamName').innerText = teamName || "team A";
    switchStriker();
    switchStriker();
}

window.onload = initaliseGame();


function openScorecard() {
    let currentStrikerData = {
        name: document.getElementById(`${currentStriker}Name`).innerText,
        runs: document.getElementById(`${currentStriker}Runs`).innerText,
        balls: document.getElementById(`${currentStriker}Balls`).innerText,
        fours: document.getElementById(`${currentStriker}Fours`).innerText,
        sixes: document.getElementById(`${currentStriker}Sixes`).innerText,
        strikeRate: document.getElementById(`${currentStriker}SR`).innerText
    };

    let currentNonStrikerData = {
        name: document.getElementById(`${currentNonStriker}Name`).innerText,
        runs: document.getElementById(`${currentNonStriker}Runs`).innerText,
        balls: document.getElementById(`${currentNonStriker}Balls`).innerText,
        fours: document.getElementById(`${currentNonStriker}Fours`).innerText,
        sixes: document.getElementById(`${currentNonStriker}Sixes`).innerText,
        strikeRate: document.getElementById(`${currentNonStriker}SR`).innerText
    };

    // Store batsmen data and current players in local storage
    localStorage.setItem("batsmenData", JSON.stringify(batsmenData));
    localStorage.setItem("currentStrikerData", JSON.stringify(currentStrikerData));
    localStorage.setItem("currentNonStrikerData", JSON.stringify(currentNonStrikerData));

    // Open the scorecard in a new page
    window.open("scorecard.html", "_blank");
}

>>>>>>> master
