const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const fs = require("fs");

const repliedFile = "replied.json";
const today = moment().format("MM-DD");
const yourBirthday = "07-23"; // Change this to your birthday (MM-DD)

// Load or initialize replied list
let replied = fs.existsSync(repliedFile)
  ? JSON.parse(fs.readFileSync(repliedFile))
  : [];

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
  console.log("Scan the QR code with your WhatsApp app");
});

client.on("ready", () => {
  console.log("✅ Bot is ready and listening for birthday wishes...");
});

client.on("message", async (msg) => {
  if (today !== yourBirthday) return; // Only work on your birthday

  const wishKeywords = ["happy birthday", "hbd", "b'day", "birthday wishes"];
  const body = msg.body.toLowerCase();

  if (wishKeywords.some((keyword) => body.includes(keyword))) {
    const contact = await msg.getContact();

    // Skip unknown numbers and already replied contacts
    if (!contact.isMyContact || replied.includes(contact.id._serialized))
      return;

    const name = contact.pushname || contact.name || "friend";
    const reply = `Thank you so much, ${name}! 😊`;

    await msg.reply(reply);

    replied.push(contact.id._serialized);
    fs.writeFileSync(repliedFile, JSON.stringify(replied, null, 2));
    console.log(`👋 Replied to ${name}`);
  }
});

client.initialize();
