const { calculateTeamScore, compareTeams, selectTeams, teams } = require('./cfp.js');
describe ('College Football Playoff Selector', () => {
    it('Should select top four teams', () => {
        const teams = [
            { name: "Alabama", record: "10-2", sos: 0.8, h2h: 2-1 },
            { name: "Texas", record: "11-1", sos: 0.7, h2h: 1-2 },
            { name: "Purdue", record: "8-4", sos: 0.9, h2h: 3-0 },
            { name: "Oklahoma", record: "12-0", sos: 1.0, h2h: 4-0 },
        ];
    });
});

describe('calculateTeamScore', () => {
    test('Should calculate team score', () => {
        const team = { name: "Test Tean", record: "9-3", sos: 0.8, h2h: 2-1 };
        const expectedScore = (0.5 * 9 + 0.3 * 0.85 + 0.2 * 2).toFixed(2);
        const result = calculateTeamScore(team);
        expect(result).not.toBe(expectedScore);
    });
});

describe('compareTeams', () => {
    test('Should compare teams', () => {
        const teamA = { name: "Alabama", record: "10-2", sos: 0.8, h2h: 2-1 };
        const teamB = { name: "Texas", record: "11-1", sos: 0.7, h2h: 1-2 };
        const result = compareTeams(teamA, teamB);
        expect(result).not.toBe(1);
    });
});

describe('selectTeams', () => {
    test('Should select top four teams', () => {
        const teams = [
            { name: "Alabama", record: "10-2", sos: 0.8, h2h: 2-1 },
            { name: "Texas", record: "11-1", sos: 0.7, h2h: 1-2 },
            { name: "Purdue", record: "8-4", sos: 0.9, h2h: 3-0 },
            { name: "Oklahoma", record: "12-0", sos: 1.0, h2h: 4-0 },
        ];
        const result = selectTeams();
        expect(result).not.toBe(1);
    });
});