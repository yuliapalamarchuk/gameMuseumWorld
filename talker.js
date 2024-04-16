function createTalker(text) {
  const gameRules = document.createElement("div");
  const rulesTop = document.createElement("div");
  const rulesBottom = document.createElement("div");
  const rulesTalker = document.createElement("img");
  const rulesText = document.createElement("div");
  const rulesBtn = document.createElement("button");

  rulesText.textContent = text;
  rulesTalker.src = "img/talker.webp";
  const rulesRibbon = document.createElement("p");
  rulesRibbon.textContent = "Говоруша";

  gameRules.classList.add("game__rules", "rules", "talker");
  rulesTop.classList.add("rules__top");
  rulesBottom.classList.add("rules__bottom");
  rulesTalker.classList.add("rules__img");
  rulesRibbon.classList.add("rules__ribbon");
  rulesText.classList.add("rules__text");
  rulesBtn.classList.add("rules__btn", "btn-reset");

  gameRules.append(rulesTop, rulesText, rulesTalker, rulesBottom, rulesRibbon);
  rulesText.append(rulesBtn);

    return {
        gameRules,
        rulesBtn,
        rulesBottom,
        rulesText,
        rulesTalker
    };

}

export default createTalker;
