const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {



      var usrs = (await ctx.Guild.GetUsersAsync().ConfigureAwait(false)).ToArray();
      var roleUsers = usrs
          .Where(u => u.RoleIds.Contains(role.Id))
          .Select(u => u.ToString())
          .ToArray();

      await ctx.SendPaginatedConfirmAsync(0, (cur) =>
      {
          return new EmbedBuilder().WithOkColor()
              .WithTitle(Format.Bold(GetText("inrole_list", Format.Bold(role.Name))) + $" - {roleUsers.Length}")
              .WithDescription(string.Join("\n", roleUsers.Skip(cur * 20).Take(20)));
      }, roleUsers.Length, 20).ConfigureAwait(false);
  }


}


//name this whatever the command name is.
module.exports.help = {
  name: "role"
}
