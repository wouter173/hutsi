import fetch from 'node-fetch'

export default function() {
	return new Promise((res, rej) => {
		fetch("http://hsleiden-challengeweek.nl:3000/team-achievements/collection/885fdcfe-e12b-4d70-a71d-1a613863877f")
			.then(res => res.json())
			.then(json => {
				const teams = new Set(json.map(x => x.team.name))
				
				const scores = Array.from(teams).map(t => {
					let applied_scores = json.filter(f => f.team.name == t)
					return [t, applied_scores.reduce((a, c) => a += c.achievement.points, 0)];
				})
				
				res(scores)
			})
	})
}