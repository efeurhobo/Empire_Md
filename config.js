const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Africa/Lagos."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/efeurhobo/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/efeurhobo/Empire_Md-main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "® 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348078582627";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_25_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgNDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTU2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDczLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMixcbiAgICAgICAgMjI4LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMTksXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY1LFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5aQjBJbVlURk1IcHVnWDBycnNMYmxrY0lKYkg1OFBXeGk5NmZWc1Y4N2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIms5V293TEpvVF95TnRmbV9WYjJ0R1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDNlNzM2MzUtYjA3Mi00NTU5LWEyMjYtZTRjODQzNGJhZTA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICA0MSxcbiAgICAgIDI5LFxuICAgICAgMTI1LFxuICAgICAgMzIsXG4gICAgICAyMDIsXG4gICAgICA2LFxuICAgICAgMTM3LFxuICAgICAgNTQsXG4gICAgICA5OSxcbiAgICAgIDEzNCxcbiAgICAgIDIzLFxuICAgICAgMjM5LFxuICAgICAgMTE5LFxuICAgICAgMjM1LFxuICAgICAgMTAxLFxuICAgICAgNzcsXG4gICAgICA0MCxcbiAgICAgIDg4LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDIyOCxcbiAgICAgIDE1NixcbiAgICAgIDI0NixcbiAgICAgIDIzMCxcbiAgICAgIDAsXG4gICAgICA1MixcbiAgICAgIDc4LFxuICAgICAgMjksXG4gICAgICAyMDMsXG4gICAgICAxODYsXG4gICAgICAyMjIsXG4gICAgICA5NCxcbiAgICAgIDUwLFxuICAgICAgOTEsXG4gICAgICA2MSxcbiAgICAgIDIxOCxcbiAgICAgIDMwLFxuICAgICAgODgsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSk5HN1pBV0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNzg1ODI2Mjc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYzMjczNzM1NDM0MzQyOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzZObWRnRUVORzEwYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTVmR2ZEF1dFlvV3pPMlVjdm9xN2xqKzYrUEY1NFh0Y0NlVGJjaHVOeFdjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9mYkNETzJUTmc1RDlMNUFyS0lCeHVRS3ArU3VkV1cxczkycmNKQXlaaUptNWhicDZZb1VCMFgwQjBnNEtsWXZ6dHFlcGZuMDM1K044TUJsR3NUMUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlUwOHdIb0Z3aEdBeVRVMjBTeGlHMXZOZ1FmcDNNdVpsOVBveU90WDJoa01ydWthQmRWcFE5bm1oUUovNEdDMWFSb1F3c3o5UlduTmdiVVU2ajAzT2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNzg1ODI2Mjc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM1ODE1MjVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "® 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒 ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒 𝐶ℎ𝑎𝑛𝑛𝑒𝑙』*\n youtube.com/@only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "𝐻𝑎𝑐𝑘𝑒𝑟 𝑂𝑛𝑙𝑦_𝑜𝑛𝑒_🥇𝐸𝑚𝑝𝑖𝑟𝑒",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
