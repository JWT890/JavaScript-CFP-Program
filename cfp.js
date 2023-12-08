const teams = [
    { name: "Alabama", record: "10-2", sos: 0.8, h2h: 2-1 },
    { name: "Texas", record: "11-1", sos: 0.7, h2h: 1-2 },
    { name: "Purdue", record: "8-4", sos: 0.6, h2h: 3-0 },
    { name: "Oklahoma", record: "12-0", sos: 1.0, h2h: 4-0 },
    { name: 'Illinois', record: '13-0', sos: 0.9, h2h: 5-0 },
  ];
  
  const weights = {
    record: 0.5, // Weight for team record
    sos: 0.3, // Weight for strength of schedule
    h2h: 0.2, // Weight for head-to-head record
  };
  
  function calculateTeamScore(team) {
    const score =
      weights.record * team.record + weights.sos * team.sos + weights.h2h * team.h2h;
    return score.toFixed(2); // Round score to two decimal places
  }
  
  function compareTeams(teamA, teamB) {
    return teamB.score - teamA.score; // Sort highest score to lowest
  }
  
  function selectTeams() {
    // Add score property to each team
    teams.forEach((team) => {
      team.score = calculateTeamScore(team);
    });
  
    // Sort teams by score
    teams.sort(compareTeams);
  
    // Select top four teams
    const selectedTeams = teams.slice(0, 4);
  
    // Display selected teams and their score
    console.log("**Selected Teams for College Football Playoff:**");
    selectedTeams.forEach((team) => {
      console.log(`- ${team.name} (${team.record})`);
    });
  }
  
  selectTeams();
  
  module.exports = {
    calculateTeamScore,
    compareTeams,
    selectTeams,
  };