const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="rajauzairhussain173@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "61488873771";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_49_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc2LFxuICAgICAgICA5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc4LFxuICAgICAgICA5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmcHlOY1VodHdHbnhyN0FZL2ZtU09BSnRvYzJpUkdwdTlWMjVYNC9KbGlJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4QlNTU2RyUVN2QzM4bjVEYmtYaFV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNlZGQ5YTYxLWUwZGMtNDkxMi05NDkzLTBkMzE0ZTRlMWU1YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDE3NSxcbiAgICAgIDI2LFxuICAgICAgMzIsXG4gICAgICAxMDIsXG4gICAgICAyMDIsXG4gICAgICAyMDIsXG4gICAgICAyMTIsXG4gICAgICA1LFxuICAgICAgMTg2LFxuICAgICAgMTczLFxuICAgICAgMTk1LFxuICAgICAgNzEsXG4gICAgICAxNzgsXG4gICAgICAxNTUsXG4gICAgICAxNjIsXG4gICAgICA1MixcbiAgICAgIDEwOCxcbiAgICAgIDE5MSxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDI1NCxcbiAgICAgIDI0MixcbiAgICAgIDExMCxcbiAgICAgIDMxLFxuICAgICAgOTYsXG4gICAgICAxMjUsXG4gICAgICAxNTIsXG4gICAgICAyMjgsXG4gICAgICA4MSxcbiAgICAgIDYsXG4gICAgICAyMDQsXG4gICAgICAxNTEsXG4gICAgICA3NixcbiAgICAgIDI1NCxcbiAgICAgIDEwMCxcbiAgICAgIDEyOCxcbiAgICAgIDI1MixcbiAgICAgIDUzLFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlAxWlRKVFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjYxNDg4ODczNzcxOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QjPCdkKsg8J2QkvCdkKHwnZCa8J2QnfCdkKjwnZCwXCIsXG4gICAgXCJsaWRcIjogXCIxNjk1NzQzODUzNjUyMjE6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWlZcWJzSEVLeTQwclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5bUxEZW0rLzZMeTF2Y25lT01aQzRZd3BzQXY3cmdna0hJWmNra3FZdmlJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImEra0NkdzI1dGdEWG9NZDVLTWdTazFSYkN4VHU3S1A5WThBT2hSZERQY2tUUlhrWDUxOFVVekRHL0NMTW9ZMmJiblZ3T2YvaEJZbUpQV2FQUjhqdkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9VMEFTUnQ2VkVpWGVwNWlHcmU1SGU0bzRjOFBUSnBldTRsbXhnNkdXUUVONW5PdW5MTEJOTDVXdnhYYUViNUVpVXNTbHFLeUk5RllwcWozek1JV2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYxNDg4ODczNzcxOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDE1MzQ0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Shadow-bot",
  ownername:process.env.OWNER_NAME|| "Mr_Shadow",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
