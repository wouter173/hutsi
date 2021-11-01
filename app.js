import { Client, Intents } from "discord.js"
import getScores from "./commands/bruhmo.js";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
import dotEnv from 'dotenv'
dotEnv.config()

client.on("interactionCreate", async (i) => {
  	if (!i.isCommand()) return;
	let embed

  	switch (i.commandName) {
		case "ping":
	  		await i.reply("bruhmoment");

		case "seks":
			const points = ['L', 'O', 'V', 'E', 'Y', 'C', 'U', 'I', 'A', 'W', 'T', 'K'];
			const names = [i.options.getString("naam1", true), i.options.getString("naam2", true)]
			var score = 0

			names.toString().toUpperCase().split('').map(x => {
				console.log(x, points.includes(x))
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

			embed = {
        		title: ":heartpulse: **Love tester** :heartpulse:",
        		description: `\`${names[0]}\` ${heart} \`${names[1]}\`\n\n${heart} A **${percentage}%** match! ${heart}`,
        		color: 16753847,
      		};

	  		await i.reply({content: ' ', embeds: [embed]})
		
		case "scores":
			const scores = await getScores()
			const fields = scores.sort((a,b) => b[1] - a[1]).map(x => { return {name: x[0], value: x[1].toString(), inline: true}})

			embed = {
				title: '**Scores**',
				
				fields,
			}

			await i.reply({content: ' ', embeds: [embed]})
  	}
});

client.on("ready", () => {
  	console.log("ready");
});

client.login(process.env.TOKEN);
