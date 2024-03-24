<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Reedroux bot" src="https://cdn.discordapp.com/attachments/1126889647168045159/1215851337540173924/f126aef5fd58d7dae9fe299e659d23f7.png?ex=6610b5cc&is=65fe40cc&hm=1f9f106e6af0f730a5a97338a3910a2fd6984ceab0561358f3896c2cec945039&">
    <h3>Reedroux-bot</h3>
        If you liked this repository, feel free to leave a star ⭐ and follow me, it supports me a lot! Thanks you!
    <br><br>
    <p>Reedroux-bot is a Free Discord Music bot that can play music right into your discord server! The bot does not support youtube, deezer or spotiy.
  <br> 
    </p>
    <br>
    <center>
        <h2>🧷 Links</h2>
        <div class="flex" style="display: flex;justify-content: center;flex-wrap: wrap;">
            <a target="_blank" onclick="trackCampaignWebClick('', 'description');" style="  margin: 2px 5px;
                padding: 8px 15px;
                background-color: #3A871F;
                color: white;
                border-radius: 8px;
                font-size: 16px;
                font-weight: bold;" rel="nofollow" class="blue-btn" href="https://reedroux.biz/invite"> Add the main bot •</a>
            <a target="_blank" onclick="trackCampaignWebClick('', 'description');" rel="nofollow" style="  margin: 2px 5px;
                padding: 8px 15px;
                background-color: white;
                color: black;
                border-radius: 8px;
                font-size: 16px;
                font-weight: bold;" href="https://reedroux.biz/support"> Support server •</a>
            <a target="_blank" onclick="trackCampaignWebClick('', 'description');" rel="nofollow" style="  margin: 2px 5px;
                padding: 8px 15px;
                background-color: #3A871F;
                color: white;
                border-radius: 8px;
                font-size: 16px;
                font-weight: bold;" href="https://reedroux.biz/"> Dashboard •</a>
            <a target="_blank" onclick="trackCampaignWebClick('', 'description');" rel="nofollow" style="  margin: 2px 5px;
                       padding: 8px 15px;
                       background-color: white;
                       color: black;
                       border-radius: 8px;
                       font-size: 16px;
                       font-weight: bold;" href="https://reedroux.biz"> Commands list </a>
        </div>
    </center>
    
 <br>  
 
**🚀 Bot features**

+ Dj system <br>
+ Unlimited use of audio filters<br>
  + Bassboost, nightcore, karaoke, vaporwave, earrape & More
+ Easy to use<br>
+ Easy configuration<br>
+ Autoplay<br>
+ 24/7 music<br>
+ Songs request channel<br>
+ Highly configurable<br>
+ Remove duplicates tracks<br>
+ Easy to setup<br>
 <br>  
 
**📁 Installation**

Note: 
- If you need help with the installation, you can join our [Discord Server](https://reedroux.biz/support).
- The code isn't the same as production, this version is made to learn people how it works but it's not the same as Green-Bot.

Before you start, please consider that if you want to self-host this bot for personal use you should purchase a custom bot. Installation is not beginner friendly.

And yes, it's same for replit.

You are looking for the All-in-One bot? [Click here](https://github.com/Reedroux)

Before starting, make you sure you have a mongoDB database (it's free) and nodejs v16.

You will need to start a lavalink server and complete the informations in the config.js files. 

[Guide: How to start and create a lavalink server](https://dsharpplus.github.io/articles/audio/lavalink/setup.html)

Once your server is ready go in the `config.js` file and add a node.

```js
lavalink: [
        { name: "node", url: "IP:PORT", auth: "LAVALINK_PASSWORD" },
 ],
```

⚠ Please make sure that you are using the same informations as provided in the `application.yml` file

__Step 1.__

Install NodeJS on your computer or on your vps. https://nodejs.org. You MUST have NodeJs 16 or an higher version.
Then, download the files and open them with Visual Studio code (code.visualstudio.com). Then press `Crtl + shift + ù` or click on "new terminal", on the top bar.

__Step 2.__
When your terminal is created, write `npm install` in your terminal to download all the modules.
⚠ the bot won't work if you don't italian the modules!
If you encounter any error, make you sure that you have the latest version of nodejs or ask in the discord server.

__Step 3.__
When the modules have been downloaded and a `node_modules` directory has been created, go to the `config.ts` file in the `src` folder and setup the bot.
You can find some comments about every setting.

__Step 4.__

Re-open your terminal and write `tsc --build` to build the files, you need to do it for every change.

Now, you can start the bot by pressing `F5` or putting `npm run start` in the terminal.

__Step 5.__
Enjoy your bot !


## Contributing

Contributions are always welcome!
And please read this before contributing.
https://opensource.guide/how-to-contribute/
  
## Authors

- [@dawgcodes](https://www.github.com/dawgcodes)
- [@wsael ](https://www.github.com/wsael)

## Bot Lists
[![Discord Bots](https://top.gg/api/widget/1066057160125059112.svg)](https://top.gg/bot/1066057160125059112)
[![Discord Bot List](https://discordbotlist.com/api/bots/reedroux/widget)](https://discordbotlist.com/bots/reedroux)
  
## License

[MIT](https://choosealicense.com/licenses/mit/)

```
MIT License

Copyright (c) 2021 Reedroux

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
