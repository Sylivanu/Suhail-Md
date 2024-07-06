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
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
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


global.SESSION_ID = process.env.SESSION_ID ||  "CAgICAgICAxNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMCxcbiAgICAgICAgODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDk1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYzLFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSTdkaklvcnhtcm1NcTRUTU4zRlpVOURjTTEvZDdnSi9NOWxKN1Y5amlFdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTVBtcEFHMkhRSi1nM29YU3dwdUp5UVwiLFxuICBcInBob25lSWRcIjogXCI2NDViMDM1OC1mZDY0LTQ2NjgtYmExYy1hYzJiZTc3OWFhZThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTk1LFxuICAgICAgMjQxLFxuICAgICAgMTAxLFxuICAgICAgMjEwLFxuICAgICAgMTQ2LFxuICAgICAgNTgsXG4gICAgICAzOCxcbiAgICAgIDYxLFxuICAgICAgMTQ3LFxuICAgICAgMjEyLFxuICAgICAgNDksXG4gICAgICAxMzksXG4gICAgICAxOTgsXG4gICAgICAxMSxcbiAgICAgIDExMyxcbiAgICAgIDEzOSxcbiAgICAgIDEwMixcbiAgICAgIDIzNSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAyNTQsXG4gICAgICAxMzQsXG4gICAgICAyMzcsXG4gICAgICAxMzUsXG4gICAgICA5LFxuICAgICAgMTAyLFxuICAgICAgMTY3LFxuICAgICAgMyxcbiAgICAgIDgyLFxuICAgICAgMzEsXG4gICAgICAyMjIsXG4gICAgICAyMjMsXG4gICAgICAxODMsXG4gICAgICA3NCxcbiAgICAgIDUyLFxuICAgICAgMTEsXG4gICAgICAyMTYsXG4gICAgICAxNzUsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUZWUlM2S1hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MzcwNjAxMDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc3NTU0MTc0OTM5MzIyOjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p6UTdjVUdFT3pxcHJRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibDhMVCs3UGlRY1ZRME5PUkhYWjBxc3gxSXhsVE9Ud0VLS1lFY1hzR1BHcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwQXhZWDBtTEZDekFqMllyY1IwQ2hBZkFoZ1pWTjRtQ3dTQ2luUGFMRUJwWXZRZFVGWi9GUy83NTJmekRlcmVPdVNNR3FFWnNIcEVuMUx2M3dUME1EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSN0c1anI2dlNDbG1VZmtlODc4MU1COXFPUEl5WUlzVTVBQWpPRDlLY1QzbFUrL05QeVRINHllbmJ5cFI4RWtiVHNMc28xV3dNdW9aTlBFNDFvN0ZDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDM3MDYwMTA6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDMwMDkxM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
