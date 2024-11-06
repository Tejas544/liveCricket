let lastValue = 0;
let totalOvers = 0;
let totalBallsInOver = 0;
let bowlerOvers = 0;
let bowlerBallsInOver = 0;

function addScore(value) {
    let strikerRuns = document.getElementById('strikerRuns');
    let bowlerRuns = document.getElementById('bowlerRuns');
    let strikerBalls = document.getElementById('strikerBalls');
    let totalScore = document.getElementById('totalScore');

    let strikerRunsData = parseInt(strikerRuns.innerText)
    let bowlerRunsData = parseInt(bowlerRuns.innerText)
    let strikerBallsData = parseInt(strikerBalls.innerText)
    let totalScoreData = parseInt(totalScore.innerText)

    strikerRunsData += value;
    totalScoreData += value;
    bowlerRunsData += value;
    strikerBallsData += 1;
    totalBallsInOver += 1;
    bowlerBallsInOver +=1;

    if(totalBallsInOver == 6) {
        totalOvers += 1;
        totalBallsInOver = 0;
    }
    if(bowlerBallsInOver == 6) {
        bowlerOvers += 1;
        bowlerBallsInOver = 0;
    }

    strikerRuns.innerText = strikerRunsData;
    bowlerRuns.innerText = bowlerRunsData;
    strikerBalls.innerText = strikerBallsData;
    totalScore.innerText = totalScoreData;
    document.getElementById('overs').innerText = `${totalOvers}.${totalBallsInOver}`;
    document.getElementById('bowlerOvers').innerText = `${bowlerOvers}.${bowlerBallsInOver}`;
}

function reset() {
    let strikerRuns = document.getElementById('strikerRuns');
    let bowlerRuns = document.getElementById('bowlerRuns');
    let strikerBalls = document.getElementById('strikerBalls');
    let totalScore = document.getElementById('totalScore');
    let totalWickets = document.getElementById('totalWickets');

    totalOvers = 0
    totalBallsInOver = 0;
    bowlerOvers = 0;
    bowlerBallsInOver = 0;

    strikerRuns.innerText = 0;
    bowlerRuns.innerText = 0;
    strikerBalls.innerText = 0;
    totalScore.innerText= 0;
    totalWickets.innerText = 0;
    document.getElementById('overs').innerText =`${totalOvers}.${totalBallsInOver}`;
    document.getElementById('bowlerOvers').innerText =`${bowlerOvers}.${bowlerBallsInOver}`;

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

function wicket() {
    // Define variables to update striker and bowler details within the function
    let strikerBalls = document.getElementById('strikerBalls');
    let strikerRuns = document.getElementById('strikerRuns');
    let bowlerWickets = document.getElementById('bowlerWickets');
    let totalWickets = document.getElementById('totalWickets');

    let bowlerWicketsData = parseInt(bowlerWickets.innerText);
    let totalWicketsData = parseInt(totalWickets.innerText);
    let strikerBallsData = parseInt(strikerBalls.innerText);

    // Increment wickets for bowler and total
    bowlerWicketsData += 1;
    totalWicketsData += 1;
    
    // Increment balls and overs
    strikerBallsData += 1;
    totalBallsInOver += 1;
    bowlerBallsInOver += 1;

    if (totalBallsInOver == 6) {
        totalOvers += 1;
        totalBallsInOver = 0;
    }
    if (bowlerBallsInOver == 6) {
        bowlerOvers += 1;
        bowlerBallsInOver = 0;
    }

    // Update overs and balls display
    document.getElementById('overs').innerText = `${totalOvers}.${totalBallsInOver}`;
    document.getElementById('bowlerOvers').innerText = `${bowlerOvers}.${bowlerBallsInOver}`;

    // Set updated values in the HTML elements
    bowlerWickets.innerText = bowlerWicketsData;
    totalWickets.innerText = totalWicketsData;
    strikerBalls.innerText = strikerBallsData;

    // Prompt for the new batsman and reset striker details
    let newBatsman = prompt("Enter the name of the new batsman:");
    document.getElementById('strikerName').innerText = newBatsman;
    strikerRuns.innerText = 0; // Reset runs and balls for new batsman
    strikerBalls.innerText = 0;
}






