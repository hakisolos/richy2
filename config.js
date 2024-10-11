//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lWN2hJZXJmaUNBS0JYVjNad1NsMWsxNHc1Y2NVNDV5MGpWd2ZnTFVrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialF2TkVNQmlXMVljWWh5dnBYZmlWdkNxMUxITVQ0MDl5Z0FENllrYmp3TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSEE4eCtzblNEaXJYdldkY1BIWlBGb28xWHdlQ2VUYXVsdUJyTzZkdjFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5ZGVpM0FvVk94bjhFb21TUzQ1SS9mTjllNGFzelBsZkNzbmVlQVpTMzBvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNOa1daaEpPanF1KzVnQ2RPQmZKeENlbGw3Tk1vOFBjdnowdVhTbGs5WGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZNTUEvcjVxRHJUOU9RNGw5WVB3QXhZdEF5b0lKRWV3R3lVOFZnT083R1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhhNHp0cFNKZU9aRGJ3MTBxWXBPOEJwVTNhcXhrZXlWNU1SUGJUeXVYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU82VUZNVHRkVEhRMS9aVFg3RFNIT2g2Y2t3MFJacDhadkFPRGxhaWpEOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx2cjlGdXpocStuRUZhZW5kYjNvU1RBSTdMeXhXWmdUWE1OdmhmRkpOMVA5biswT0xRd3RxZzdicTRWUzFJaDk3UVdHWW9GS1p1OUtGNElxVEEvZUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiMEpWNlRSU0pMZE45SjBsdzVKVGoyVFNOMVpkZUVCUE5kYnl2NnlaT3B1TT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib1dMVnlMVUpUMjJTTElDR1lVcmxwZyIsInBob25lSWQiOiIyNzRkMTAyMi03YjJjLTRkZWEtOGM5OC1iMDU3MTc5OWQ4NjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWg2OGV3cXorUnpWKzZZM1M4ekxJa1k0bEc4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhQeDNxenJ2K2Q3UnMwZTFyZlM1M0tUdWZ3ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJFWENUUktIWCIsIm1lIjp7ImlkIjoiMjU0Nzc0ODUyNTk3OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QgPCdkLLwnZCo8J2QpPCdkK7wnZCn8J2QpvCdkKIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05DbHZDTVE0dFdidUFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZxWkhVVmdqQUhoWTRwOE1YQ0RkNEpWQVlqdnRROEw2M0RXNGhTczBsQjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik01cGIvM3FZODZ4dVdRaUpBRWt4YzFkNTNSZU92NnF0VW9DOTFXb0c1MC9wTFVCYWdZekNVZXhPb3VQQnZIb21CeDlCRVpGWXRSVGJVZzFiUWVGbmdBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHeWdwUWNyYmFTclpuS29XUXNJeHJxR3VzNlVOM2Q5NUx5aFR0WU1BaE1mQ0lsejNua1JQR2Fsbmt2ZS9pd2ZwRWZpd2pJTUFUTUtaekE3ODhYeE5DQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc3NDg1MjU5NzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZhbVIxRllJd0I0V09LZkRGd2czZUNWUUdJNzdVUEMrdHcxdUlVck5KUWQifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjg1MDY2MDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSExHIn0" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
