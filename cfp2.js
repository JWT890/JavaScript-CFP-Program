class Team {
    constructor(name, strengthOfSchedule) {
      this.name = name;
      this.strengthOfSchedule = strengthOfSchedule;
      this.points = 0;
    }
  }
  
  function simulatePlayoff(teams) {
    // Sort teams based on points and strength of schedule
    teams.sort((a, b) => b.points - a.points || b.strengthOfSchedule - a.strengthOfSchedule);
  
    // Print simulated playoff results
    console.log("Simulated Playoff Results:");
    for (let i = 0; i < Math.min(4, teams.length); i++) {
      console.log(`${i + 1}. ${teams[i].name}`);
    }
  }
  
  function updatePoints(team1, team2, winner) {
    if (winner === 1) {
      team1.points += 3;
    } else if (winner === 2) {
      team2.points += 3;
    } else {
      team1.points += 1;
      team2.points += 1;
    }
  }
  
  function main() {
    const teams = [];
  
    // Get user input for teams and strength of schedule
    for (let i = 0; i < 4; i++) {
      const teamName = prompt(`Enter team ${i + 1} name:`);
      const strengthOfSchedule = parseFloat(prompt(`Enter strength of schedule for ${teamName}:`));
  
      const team = new Team(teamName, strengthOfSchedule);
      teams.push(team);
    }
  
    // Simulate head-to-head matchups
    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        const winner = parseInt(prompt(`Enter the winner for the matchup between ${teams[i].name} and ${teams[j].name} (1 or 2, 0 for a tie):`));
        updatePoints(teams[i], teams[j], winner);
      }
    }
  
    // Simulate Playoff
    simulatePlayoff(teams);
  }
  
  // Run the program
  main();
  