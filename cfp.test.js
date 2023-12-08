const { calculateTeamScore } = require('./cfp.js');

describe ('College Football Playoff Selector', () => {
    it('Should select top four teams', () => {
        const teams = [
            { name: "Alabama", record: "10-2", sos: 0.8, h2h: 2-1 },
            { name: "Texas", record: "11-1", sos: 0.7, h2h: 1-2 },
            { name: "Purdue", record: "8-4", sos: 0.9, h2h: 3-0 },
            { name: "Oklahoma", record: "12-0", sos: 1.0, h2h: 4-0 },
        ];
    })
});