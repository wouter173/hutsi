export default function(names) {
	const points = ['L', 'O', 'V', 'E', 'Y', 'C', 'U', 'I', 'A', 'W', 'T', 'K'];
	var score = 0

	names.toString().toUpperCase().split('').map(x => {
		if (points.includes(x)) score += 1
	}); 

	let percentage = ~~((score / (names[0].length + names[1].length)) * 100)

	const hearts = [
		":black_heart:",
		":broken_heart:",
		":brown_heart:",
		":yellow_heart:",
		":orange_heart:",
		":heart:",
		":heart_exclamation:",
		":two_hearts:",
		":revolving_hearts:",
		":cupid:",
		":sparkling_heart:",
	];

	let heart = hearts[+(percentage + "").slice(0, -1)];
	heart = heart ? heart : ":black_heart:";

	return {
		title: ":heartpulse: **Love tester** :heartpulse:",
		description: `\`${names[0]}\` ${heart} \`${names[1]}\`\n\n${heart} A **${percentage}%** match! ${heart}`,
		color: 16753847,
	};
}