const { SlashCommandBuilder } = require("discord.js");
const { execSync } = require("node:child_process");
const loshara = ["1043211191067103263", "530377558508699659"];

// НЕ ДОДЕЛАНО
// TODO сделать ошибки и пофиксить на винде (и ещё чтоб цвета удаляло, желательно)
module.exports = {
    data: new SlashCommandBuilder()
        .setName("bash")
        .setDescription("?")
        .addStringOption((option) =>
            option.setName("command").setDescription("?").setRequired(true)
        ),
    async execute(interaction) {
        await interaction.deferReply();
        if (!loshara.includes(interaction.user.id)) {
            interaction.editReply("🙄");
            return;
        }
        let res = "a"
        try {
            res = execSync(interaction.options.getString("command")).slice(0, 1900);
        } catch {
            res = "вы еблан"
        }
        interaction.editReply(` \`\`\`sh\n${res}\`\`\` `);
    },
};
