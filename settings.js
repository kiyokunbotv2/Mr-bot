/*####################################
                 F E N I X - V 15
             MADE BY F E N I X ID SERVER
       
✅ WhatsApp: wa.me/94773010580
👥 Github: https://github.com/Fenix-server
👥 Github: https://github.com/Botdevillozan
🤖 Youtube https://youtube.com/@fenix_programmer
#####################################*/


const fs = require('fs')
const chalk = require('chalk')

global.ownernomer = "916009259402"
global.ownername = "zenox-bot"
global.ytname = "YT: _KiyoAin'tSimp_ "
global.socialm = "GitHub: kiyokunbotv2"
global.location = "india, aizawl, mizoram"

global.ownernumber = '916009259402'  //creator number
global.ownername = 'kiyo can't retri' //owner name
global.botname = 'Zenox-bot' //name of the bot

global.packname = 'V17'
global.author = 'zenox-bot🤖'

global.themeemoji = '🖕'
global.wm = "Its Fuck.inc."

global.link = 'https://chat.whatsapp.com/DLoSO4MHC6DANrsv3ZuXT5'


global.prefa = ['','!','.','#','&']

global.autoRecording = false 
global.autoTyping = false 
global.autorecordtype = true
global.autoread = false 
global.autobio = false 
global.anti92 = false 
global.autoswview = true

global.typemenu = 'v2'

global.mess = {
    done: 'ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟ…!',
    prem: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴘʀᴇᴍɪᴜᴍ',
    admin: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴀᴅᴍɪɴ…!',
    botAdmin: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ…!',
    owner: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ…!',
    group: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ɢʀᴏᴜᴘ…!',
    private: 'ᴀᴄᴄᴇꜱꜱ ᴅɪɴᴇᴅ ɪꜱ ᴘʀɪᴠᴀᴛᴇ…!',
    wait: 'ᴀᴄᴄᴇꜱꜱ ᴠᴇʀɪꜰʏᴇᴅ ᴡᴀɪᴛ… ',    
    error: 'ʏᴇʜ ɪ ɢᴇᴛ ᴇʀʀᴏʀ',
}

global.thumb = fs.readFileSync('./www-fucking/Fenix9991/dexDump/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
