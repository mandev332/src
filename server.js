import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("7203810997:AAFKtdA_BJH1q0NPaDLZG_Nxy69rdeyn4jY", {
  polling: true,
});
const admin = 1068892545;
const navbat = { Sun: "BOT" };
let navbatchi = "";
const hafta = ["Mon", "Tues", "Wed", "Thu", "Fri"];
bot.on("error", console.error);

bot.onText(/\/start/, async (msg) => {
  try {
    if (msg.from.is_bot) return;
    const id = msg.from.id;
    console.log(id == admin);
    if (id == admin) {
      await bot.sendSticker(
        admin,
        "https://tlgrm.eu/_/stickers/380/9fb/3809fbe6-317b-3085-99e6-09e74c1044b0/11.webp"
      );
      await bot.sendMessage(id, "Navbatchilar ro'yxatini yuboring!", {
        reply_markup: {
          keyboard: [[{ text: " " }]],
          remove_keyboard: false,
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      });
    }
    await bot.sendMessage(
      "@nodirbek_dev",
      "Navbatchilar ro'yxatini yuboring!",
      {
        reply_markup: {
          keyboard: [[{ text: " " }]],
          remove_keyboard: false,
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      }
    );
  } catch (error) {}
});

bot.on("message", async (msg) => {
  try {
    if (msg.text.includes("/navbatchi")) {
      const date = new Date().toDateString();
      const day = date.split(" ")[0];
      navbatchi = navbat[day];
      await bot.sendSticker(
        "@Navbatchilar_AAB",
        "https://tlgrm.eu/_/stickers/380/9fb/3809fbe6-317b-3085-99e6-09e74c1044b0/1.webp"
      );
      await bot.sendMessage(
        "@Navbatchilar_AAB",
        "Assalomu alaykum!\nnavbatchlilik tekshiruvi! Bugun " +
          navbatchi +
          " navbatchi ekan!",
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Bajardim ✅",
                },
              ],
            ],
            resize_keyboard: true,
            remove_keyboard: true,
            one_time_keyboard: true,
          },
        }
      );
    }
    if (admin == msg.from.id) {
      if (msg.text == "Bajarilgan ✅") {
        await bot.sendSticker(
          "@Navbatchilar_AAB",
          "https://tlgrm.eu/_/stickers/380/9fb/3809fbe6-317b-3085-99e6-09e74c1044b0/7.webp"
        );
        await bot.sendMessage(
          "@Navbatchilar_AAB",
          navbatchi + " ishingizni Admin tasdiqladi!✅",
          {
            reply_markup: {
              keyboard: [[{ text: " " }]],
              remove_keyboard: false,
              resize_keyboard: true,
              one_time_keyboard: true,
            },
          }
        );
        await bot.sendMessage(admin, "✅", {
          reply_markup: {
            keyboard: [[{ text: " " }]],
            remove_keyboard: false,
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      } else if (msg.text == "Bajarilmagan ❌") {
        await bot.sendSticker(
          "@Navbatchilar_AAB",
          "https://tlgrm.eu/_/stickers/380/9fb/3809fbe6-317b-3085-99e6-09e74c1044b0/4.webp"
        );
        await bot.sendMessage(
          "@Navbatchilar_AAB",
          navbatchi + " ishingizni Admin tasdiqlamadi!❌",
          {
            reply_markup: {
              keyboard: [[{ text: "Bajardim ✅" }]],
              remove_keyboard: false,
              resize_keyboard: true,
              one_time_keyboard: true,
            },
          }
        );
      } else {
        const navbatchilar = msg.text.replace(/\s/g, "").split(",");
        navbatchilar.forEach((n, i) => {
          navbat[hafta[i]] = n;
        });
      }
    } else if (msg.text == "Bajardim ✅") {
      await bot.sendMessage("@Navbatchilar_AAB", "⏳", {
        reply_markup: {
          keyboard: [[{ text: " " }]],
          remove_keyboard: false,
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      });
      await bot.sendMessage(admin, "Navbatchilikni tekshiring!", {
        reply_markup: {
          keyboard: [
            [
              {
                text: "Bajarilgan ✅",
              },
              {
                text: "Bajarilmagan ❌",
              },
            ],
          ],
          resize_keyboard: true,
          remove_keyboard: true,
          one_time_keyboard: true,
        },
      });
    }
  } catch (err) {}
});
