const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Lagos/Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/efeurhobo/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078582627";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'   // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_19_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM3LFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1aHFkVWw5aWFtTUdiVk1SODE4ZkREVEZ5L2xNL1RpMDYwa3RtNndWSXBnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNzg1ODI2MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI2MTlDNjRGM0VDRENGMjhBMDVCQ0QyRjc4MDlFOTc0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTUzNDc2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5bjY4R0dzY1RhNmhVSnl1b1pvVGp3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU2MzdkNzI4LWUwMDAtNDdmNy04N2Y2LWUwYjlhOTUwZjYxMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxODEsXG4gICAgICAxNDMsXG4gICAgICA5OCxcbiAgICAgIDE3MSxcbiAgICAgIDE0NixcbiAgICAgIDExNSxcbiAgICAgIDIyOCxcbiAgICAgIDk4LFxuICAgICAgMTc2LFxuICAgICAgNzIsXG4gICAgICAxNzEsXG4gICAgICAxOCxcbiAgICAgIDgwLFxuICAgICAgMjEzLFxuICAgICAgMTUxLFxuICAgICAgMTM3LFxuICAgICAgOCxcbiAgICAgIDE0MCxcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDE0LFxuICAgICAgMTcsXG4gICAgICAyMTcsXG4gICAgICAyLFxuICAgICAgOTEsXG4gICAgICA1NixcbiAgICAgIDQ2LFxuICAgICAgMTQ3LFxuICAgICAgMjEsXG4gICAgICA3MSxcbiAgICAgIDYzLFxuICAgICAgNCxcbiAgICAgIDk4LFxuICAgICAgODYsXG4gICAgICAxNzYsXG4gICAgICA5OCxcbiAgICAgIDI0NCxcbiAgICAgIDEyNCxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0SjI2UjhGWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA3ODU4MjYyNzo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYzMjUyMjI3MDUxNjIyOjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x2ODhnRVFvN2JhdUFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVjQ0dWR2K2ZFUG5TYWluSlNXb3llOEs1T3YvVFFYUXY1R0VHSjBtTEJubz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaMldydGtYTUNIUEpQZ0t1OUt5RXZJNzVVZGZKT0ZEb09BbDJYSGV3ZXpobGp3R3MvNy95dzU2SzNzTGlrN21XaWxHT1VmclhHUmo0dk1qU0F0MmVDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5WDE1RVcrUW1OVStQK0ZKaEpBaDR0YkVUK3U3K1RJMnZwMEZIYjNvK0J4VmFVWFlyODkvdGZIK0Q4SjBoOHFreDdEWC9jbmpZUFJIdWRHNS9CTXBoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDc4NTgyNjI3OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk1MzQ3NTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMSHhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxIeC5qc29uIjogIntcImtleURhdGFcIjpcIjdkOVo1YUxyWHJRRDZUS3NNWDB3Z1Y2WWw1ejlsQ05oL0doRm9rM0NJcW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mzk4MDg1OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5NTM0NzY0MDU5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞 』```", //*『sᴜʙsᴄʀɪʙᴇ • Empire_Md』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "Empire_Md",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-c5_mjyTPg76Sl7gx6yADErKcLzUlfhs4KcNxFBFso4T3BlbkFJQpbBq0QN6CAr8ia7bqJmveKPTmentTE6guHxlLUnUA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_59adeb8a55b9c60aba5ed8b8001135049f773814fb35e722";
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
