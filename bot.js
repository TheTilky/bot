const Discord = require("discord.js")
const client = new Discord.Client()


client.on("ready", () => {
  console.log(`Giriş Yapıyor ${client.user.tag}!`)
  client.user.setActivity('tb!yardım', { type: 'WATCHING' })
  .then(presence => console.log('Durum --> Bot Açılıyor,Komutlar Hazırlanıyor...Botunuz Açıldı Hayırlı Olsun'))
  .catch(console.error);
})


client.on("message", msg => {
  if (msg.content === "prefix") {
    msg.reply("Prefixim = `tb!` ");
}
})

client.on("message", msg => {
  if (msg.content === "sa") {
    msg.reply("as");
}
})

client.on("message", msg => {
  if (msg.content === "Sa") {
    msg.reply("As");
}
})


client.on('message', msg => {
  if (msg.content === 'tb!yardım') {
    msg.reply(new Discord.MessageEmbed()
    .setColor("#000000")
    .setTitle("Tilki Barınağı Botunun Yardım Menüsü")
    .setDescription("Komutlar Aşağıdadır")
    .addField("tb!moderatör", "Moderatör Komutlarım.",false)
    .addField("tb!eğlence", "Eğlence Komutlarım.",false)
    .addField("tb!çeşitli", "Çeşitli Komutlarım",false)
    .setFooter("Komutlarım Yazılmaya Devam Edilecektir")
    .setImage("https://modernpaintbynumbers.com/wp-content/uploads/2020/11/aesthetic-Fox-paint-by-numbers.jpg")
    .setTimestamp()
)
}
})


  client.on('message', msg => {
    if (msg.content === 'tb!moderatör') {
      msg.reply(new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Tilki Barınağı Botunun Moderatör Menüsü")
      .setDescription("Komutlar Aşağıdadır")
      .addField("tb!ban (Etiketle Beraber ad)(Neden)", "Ban Komudum.",false)
      .addField("tb!kick (Etiketle Beraber ad)(Neden)", "Birisini Sunucudan Atma Komudum.",false)
      .addField("tb!unban", "Birisinin Banını Kaldırma Komudum.",false)
      .setFooter("Komutlarım Yazılmaya Devam Edilecektir")
      .setTimestamp()

)
}
})

client.on('message', msg => {
  if (msg.content === 'tb!çeşitli') {
    msg.reply(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Tilki Barınağı Botunun Çeşitli Komutları")
    .setDescription("Komutlar Aşağıdadır")
    .addField("tb!sınırsızlink", "Sunucumuzun Sınırsız Linkini Atar",false)
    .addField("tb!botlinki", "Benim Davet Linkimi Atar.",false)
    .addField("tb!botbilgi", "Benim Bazı Bilgilerimi Verir",false)
    .setFooter("Komutlarım Yazılmaya Devam Edilecektir")
    .setTimestamp()

)
}
})

client.on('message', msg => {
  if (msg.content === 'tb!botlinki') {
    msg.reply(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Tilki Barınağı Orjinal Botunun Linki")
    .setDescription("Link Aşağıdadır")
    .addField("Buyrunuz Efendim:https://discord.com/oauth2/authorize?client_id=921794242546901002&scope=bot&permissions=1099511627775 (Linki Kopyalayınız)",)
    .setFooter("Komutlarım Yazılmaya Devam Edilecektir")
    .setTimestamp()

)
}
})

client.on('message', msg => {
  if (msg.content === 'tb!sınırsızlink') {
    msg.reply(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Tilki Barınağı Sınırsız Linki")
    .setDescription("Link Yukardadır")
    .setURL("https://discord.gg/54QJ323wNq")
    .setFooter("Komutlarım Yazılmaya Devam Edilecektir")
    .setTimestamp()
)
}
})

  client.on('message', msg => {
    if (msg.content === 'tb!eğlence') {
      msg.reply(new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Tilki Barınağı Botunun Eğlence Menüsü")
      .setDescription("Komutlar Aşağıdadır")
      .addField("tb!token", "Botun Tokenini atar.",false)
      .addField("tb!embedyazdır ", "Yazdığınız Şeyi Embed Mesaj Halinde Bot Yazar.",false)
      .setFooter("Komutlarım Yazılmaya Devam Edilecektir")
      .setTimestamp()

)
}
})


client.on('message', msg => {
  if (msg.content === 'tb!botbilgi') {
    msg.reply(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Tilki Barınağı Botunun Bilgi Menüsü")
    .setDescription("Bilgiler Aşağıdadır")
    .addField("Botun Adı", "Tilki Barınağı Orjinal Botu.",false)
    .addField("Botun Etiketi", "#0839.",false)
    .addField("Botun Amacı", "Aslında Bu Botu Denemek İçin Yapmıştım.Ama Birden botu geliştirmeye başladım.",false)
    .setFooter("Komutlarım Yazılmaya Devam Edilecektir")
    .setTimestamp()
)
}
})


client.on('message', msg => {
  if (msg.content === 'tb!token') {
    msg.reply(new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Al Sana Tokenim Gardaşş")
    .setImage("https://eightbornv.com/uploads/monthly_2020_09/large_Nah.gif.64cd1815e556d42d9ace28e3d66e7428.gif")
    .setTimestamp()

)
}
})


exports.run = async(client, messsage, args) => {
  var roza = args.slice(0).join(' tb!embedyazdır ')

  if(!roza) {
    var embed = new Discord.MessageEmbed()
        .setDescription('Lütfen Bir Yazı Yazınız')
        .setColor('RANDOM')
        setTimestamp()
    return message.channel.send(embed)
  }

  message.delete()
  var embed2 = new Discord.MessageEmbed()
      .setDescription(`${roza}`)
      .setColor('RANDOM')
      .setTimestamp()
    return message.channel.send(embed2)

};
 exports.conf ={
   enabled: true,
   guildOnly: true,
   aliases: [''],
   permLevel: 0
};

  exports.help = {
    name:'yaz',
    description: '',
    usage: 'yaz'
};


client.on('message', message => {
  if (!message.guild) return;
if (message.content.startsWith('tb!ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
           log.send(`${user.tag} kişisi banlanmıştır.`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Yasaklanacak kişiyi yazmadın.");
}
}
});


client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('tb!kick')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komudu Kullanman Yasak! \n <@${message.author.id}>')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
           log.send(`${user.tag} kişisi kicklenmiştir`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Atılacak kişiyi yazmadın");
}
}
});
client.login("OTIxNzk0MjQyNTQ2OTAxMDAy.Yb4FyQ.e7B6wwZwo-nSfE3U0yH0cqOcwEs")
