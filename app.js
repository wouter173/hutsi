import { Client, Intents } from "discord.js"
import getScores from "./commands/bruhmo.js";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
import dotEnv from 'dotenv'
import heheyp from "./commands/heheyp.js";
dotEnv.config()

client.on("interactionCreate", async (i) => {
  	if (!i.isCommand()) return;

  	switch (i.commandName) {
		case "ping":
	  		return await i.reply("bruhmoment");

		case "seks":
			const lembed = heheyp([i.options.getString("naam1", true), i.options.getString("naam2", true)])
	  		return await i.reply({content: ' ', embeds: [lembed]})
		
		case "scores":
			const scores = await getScores()
			var embed = { title: "**API OFFLINE**", description: "certified:tm: bruhmoment"};
			if (scores != null) {
				const fields = scores.sort((a,b) => b[1] - a[1]).map(x => { return {name: x[0], value: x[1].toString(), inline: true}})

				embed = {
					title: '**Scores**',
					fields,
				}
			}

			return await i.reply({content: ' ', embeds: [embed]})
  	}
});

client.on("ready", () => {
  	console.log("ready");
});

client.login(process.env.TOKEN);
