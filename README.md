# 🎉 WhatsApp Birthday Auto-Reply Bot

A Node.js bot that automatically replies to birthday wishes from **saved WhatsApp contacts** — but **only on your birthday**.  
It uses `whatsapp-web.js` to simulate WhatsApp Web locally.

> ✅ Smart, personal, and polite auto-responder — perfect for fun automation or a mini-project!

---

## ✨ Features

- 🔁 **Replies only on your birthday**
- 🧠 Filters messages with birthday keywords like “happy birthday”, “hbd”, “b’day”
- 👥 Replies only to **saved contacts**
- 🗂 Remembers who it already replied to (no spamming)
- 🔒 Runs **entirely on your local machine**

---

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/)
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- [Moment.js](https://momentjs.com/)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)

---

## Steps to follow

- 1)clone repo

- 2)run : i)npm install  ii) npm install whatsapp-web.js qrcode-terminal moment

  

- 3)set :  const yourBirthday = "07-23"; // Format: MM-DD


- 4)run : node birthday-bot.js

- 5)login to whatsapp web and Bot will wait fr specific text and replay accordingly

