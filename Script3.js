function addScore(value) {
    // Get elements for both striker and non-striker
    let strikerRuns = document.getElementById(`${currentStriker}Runs`);
    let strikerBalls = document.getElementById(`${currentStriker}Balls`);
    let strikerFours = document.getElementById(`${currentStriker}Fours`);
    let strikerSixes = document.getElementById(`${currentStriker}Sixes`);
    let strikerSR = document.getElementById(`${currentStriker}SR`);
    let otherRuns = document.getElementById(`${otherBatsman}Runs`);
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

    // Calculate and update strike rate
    let strikerStrikeRate = ((strikerRunsData / strikerBallsData) * 100).toFixed(2);

    // Handle overs increment and switch striker if necessary
    if (totalBallsInOver == 6) {
        totalOvers += 1;
        totalBallsInOver = 0;
        switchStriker(); // Switch striker at the end of the over
    }
    if (bowlerBallsInOver == 6) {
        bowlerOvers += 1;
        bowlerBallsInOver = 0;
    }

    // Check if run is odd to switch the striker
    if (value % 2 !== 0) {
        switchStriker();
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
    totalBallsInOver += 1; // Increment balls in over for striker
    bowlerBallsInOver += 1; // Increment balls in over for bowler

    let isOverEnd = false;

    if (totalBallsInOver == 6) {
        totalOvers += 1;
        totalBallsInOver = 0;
        isOverEnd = true; // Mark the end of the over
        switchStriker(); // Switch striker at the end of the over
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
    strikerBalls.innerText = 0;

    // Handle over-end striker switch if needed
    if (isOverEnd) {
        switchStriker();
    }
}
