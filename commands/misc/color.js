const Discord = require('discord.js')
const colorList = require("../../utils/colors.js");

module.exports = {
	name: 'color',
	cooldown: 5,
	aliases: [],
	description: 'Displays a color with hex/rgb!', 
  permissions: [],
	guildOnly: false,
	enabled: true,
  exec: async (client, message, args) => {


const rgbToHSL = (red, green, blue) => {
    let r = red / 255;
    let g = green / 255;
    let b = blue / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { hue: h, saturation: s, lightness: l };
};

const resolveColor = input => {
    if (input.startsWith("/^[a-zA-Z]/")) input = colorList.names.find(name => name[1].toLowerCase().startsWith(input.toString().toLowerCase()));
    if (input.startsWith('#')) input = input.substr(1);
    if (input.length === 3) input = input.split('').map(c => c + c).join('');

    let hex = input;
    let [red, green, blue] = [hex.substr(0, 2), hex.substr(2, 2), hex.substr(4, 2)]
        .map(value => parseInt(value, 16));
    let { hue, saturation, lightness } = rgbToHSL(red, green, blue);

    return { hex, red, green, blue, hue, saturation, lightness };
};

    if (args.length < 1) {message.channel.send('Please provide a color!');
    }

    if (!/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(args[0])) {message.channel.send('The color must be in the format of `#RRGGBB` or `#RGB`!');
    }

    let color = resolveColor(args[0]);
    
 const colore = new Discord.MessageEmbed() 
            .setDescription(`Hex: \`#${color.hex}\`\nRGB: \`${color.red}, ${color.green}, ${color.blue}\`\nHSL: \`${color.hue}, ${color.saturation}, ${color.lightness}\``)
            .setImage(`http://placehold.it/500/${color.hex}/${color.hex}`)
            .setColor(`${color.hex}`)
    
message.channel.send({ embeds: [colore] })


    
	},
};
