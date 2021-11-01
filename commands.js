import { REST } from "@discordjs/rest"
import { Routes } from "discord-api-types/v9"
import dotEnv from "dotenv";
dotEnv.config();

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "seks",
    description: "faggot",
    options: [
      {
        name: "naam1",
        description: "naam1",
        type: 3,
        required: true,
      },
      {
        name: "naam2",
        description: "naam2",
        type: 3,
        required: true,
      },
    ],
  }, {
	  name: "scores",
	  description: "get hsleiden scores"
  }
];

const rest = new REST({
  version: "9",
}).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(
        "897409956419076107",
        "893119564303450122"
      ),
      {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
