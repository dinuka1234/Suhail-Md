const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_43_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNixcbiAgICAgICAgODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTksXG4gICAgICAgIDM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgMTQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYyLFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiY3lpOVlla0FJL0N4UzJwWVBLMlRSQUxzUmpxcHBQYVN1NHJTSlhWOXZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzIyNjUxNjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRERFOUFEMjlERkQ2RkUwNjg5QjZGNzFBRTExQzMzQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4ODk4MDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcyMjY1MTY3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjUyQzE5MjI0MzFEMEUxMzkzNjJFNUM3RkZBNkU3MEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODg5ODA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MjI2NTE2NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM0RUNBMUU2Q0ZGRTE3MTY3MEUyNTJDRjY5M0U3Nzg2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTg4OTgwNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzIyNjUxNjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QjE1RTk0NzgxNzEwNkI2MTdFOUIzQTNCQzM2QUY0Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4ODk4MDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU1hHV1BsOUhRTS1sb0Vnd3R0YWhlZ1wiLFxuICBcInBob25lSWRcIjogXCI5NGQ4N2QyYy0zNmZhLTRkY2QtODM4Ni1kZWM4YmRhMWY1YTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDEzMyxcbiAgICAgIDk3LFxuICAgICAgNDEsXG4gICAgICAxMTQsXG4gICAgICAxNTcsXG4gICAgICA5NCxcbiAgICAgIDIwNixcbiAgICAgIDEwOSxcbiAgICAgIDIzOSxcbiAgICAgIDg2LFxuICAgICAgMTAwLFxuICAgICAgMTI2LFxuICAgICAgMTczLFxuICAgICAgMjI4LFxuICAgICAgMTc3LFxuICAgICAgNTcsXG4gICAgICAxMzIsXG4gICAgICAxOTIsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDIwOSxcbiAgICAgIDIzMSxcbiAgICAgIDExNyxcbiAgICAgIDM5LFxuICAgICAgMzAsXG4gICAgICAyNTUsXG4gICAgICAxMDksXG4gICAgICAyMDUsXG4gICAgICA1NSxcbiAgICAgIDI1MyxcbiAgICAgIDExNixcbiAgICAgIDE0MyxcbiAgICAgIDc1LFxuICAgICAgMTk3LFxuICAgICAgNzcsXG4gICAgICAxNzAsXG4gICAgICAxNDIsXG4gICAgICA0NCxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZNNkxXNkw0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyMjY1MTY3MToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwidGhhcnVcIixcbiAgICBcImxpZFwiOiBcIjE3ODExNDk3ODMyNTg4OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1RDc013SEVJYm9oN1VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFZ3J0T29IMnJyOTBvWXlWV0NRUzlXSzEvSEM3SE5nZjd0VWw3OGFFWENBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNKMlV3OXQ1Y3g5TjNQZWg2ek1xa2hKZndHWjlrOHh1YUpiMkVINDhzMXkzQmV1V2NERGtqWFU3RGRyem5WUFZMWVp4aVBIMlV3TUxuUGprZ1N6cERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRSdi9pS2lUblVMNVhyLyt0N2NZMitBcENuVlhlbmp5aU5DbXNLMk1CcDVWTlRwdHUvSG5lU0VPbE0rYmdvWXM1UG5nWFlKZ21ZeGhBNkVmZzRSTGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzIyNjUxNjcxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4ODk4MDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGYXhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZheC5qc29uIjogIntcImtleURhdGFcIjpcIlEzZkZRdlpaNzlPWkxsQ2RVYXpOcnE2OEFTbDJaNkp3RUxQVU1YK2tKZXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAzOTIyNjY2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDA4MDI5MzE1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
