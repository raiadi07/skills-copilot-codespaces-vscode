const febHolidays = [
    "Dear Lavi<3,",
    "First of all, I love you❤️",
    "You're my everything",
    "You are my soulmate",
    "My future wife🤭",
    "I will always be there for you",
    "No matter how far we are🥰",
    "You're the prettiest, cutest, funniest,",
    "In one word, you're just perfect.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you lavi❤️",
    "I'll always do my best to keep you happy🥺",
    "You are the most special person in my life🥰",
    "I don't want to lose you",
    "And trust me I dont want anyone else",
    "There's no one better than you❤️",
    "You're the best buggi!!",
    "Or should I say  mo gro coco d'amour que j'adore a la folie",
    "Wow!! Time flies, we've already been together for a 6 month",
    "There's some hardships,",
    "but we overcame most of them",
    "and it made me realised how important you are in my life❤️",
    "I’ve fallen in love many times… but always with you.",
    "Every moment with you feels like an eternity of happiness.",
    "I would rather spend one lifetime with you",
    "than face all the ages of this world alone.",
    "Your laughter is my favorite symphony",
    "your smile is my greatest masterpiece",
    "This for you,",
    "Hé mon amour",
    "Je t'aime jusqu'à mon dernier souffle",
    "et merci de m'avoir donné ces surnoms mignons🤣❤️",
    "But anyways,love you my sweet little girlfriend(wife🤭",
    "You're the love of my life,",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");                        
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
