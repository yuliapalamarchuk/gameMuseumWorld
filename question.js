import createTalker from "./talker.js";
import createDeniska from "./deniska.js";
import createPoint from "./point.js";
import createRulesTablet from "./rules-tablet.js";
import createFillword from "./fillword.js";

export function createGameQuestion(info, number) {
  console.log(info)
  const game = document.createElement("section");
  const gameTitle = document.createElement("h1");
  const gameSubtitle = document.createElement("h2");
  const gameBlock = document.createElement("div");
  const gameLeft = document.createElement("div");
  const gameRight = document.createElement("div");
  const gameCenter = document.createElement("div");
  const videoBlock = document.createElement("div");
  const video = document.createElement("video");
  const gameBtnSkip = document.createElement("button");
  const gameBtnNext = document.createElement("button");
  const tv = document.createElement("img");
  const play = document.createElement("button");
  const questionBlock = document.createElement("form");
  const name = document.createElement("p");


  tv.src = "img/tv.svg";
  video.src = info[number].video;
  video.classList.add('tv__poster')
  video.preload = 'metadata'
  video.poster = 'img/poster.webp';


  const pointBlock = createPoint();

  let points = JSON.parse(localStorage.getItem("points"));
  pointBlock.textContent = points;

  const gameRules = createTalker(info[number].task);

  // const gameRules = createTalker(
  //   "Прослушай видеовопрос и выбери правильный ответ из предложенных вариантов. О какой известной исторической личности рассказывает школьник?"
  // );

  game.classList.add("game", "symbols");
  gameTitle.classList.add("game__title");
  gameSubtitle.classList.add("game__subtitle");
  gameBlock.classList.add("game__block");
  gameLeft.classList.add("game__left");
  gameRight.classList.add("game__right");
  gameCenter.classList.add("game__center", "tv");
  gameBtnSkip.classList.add("game__btn", "game__btn--skip", "btn-reset");
  gameBtnNext.classList.add("game__btn", "game__btn--next", "btn-reset");
  questionBlock.classList.add("question__form");
  tv.classList.add("tv__img");
  play.classList.add("tv__play", "btn-reset");
  videoBlock.classList.add("video-block");
  name.classList.add("tv__name");

  name.textContent = info[number].description;
  gameSubtitle.innerHTML = info[number].name;

  // name.textContent = "Ксенофонтов Дмитрий, 4 класс";

  gameTitle.textContent = "Таланты Чувашской земли";
  // gameSubtitle.innerHTML = "Вопрос от школьника";
  gameBtnSkip.textContent = "Пропустить игру";
  gameBtnNext.textContent = "Следующая игра";

  game.classList.add("game", "question");

  document.body.append(game);
  game.append(gameTitle, gameSubtitle, gameBlock, pointBlock);
  gameBlock.append(gameLeft, gameCenter, gameRight);
  gameLeft.append(gameRules.gameRules, gameBtnSkip, gameBtnNext);
  gameRight.append(questionBlock);


  setTimeout(()=>{
    gameCenter.append(videoBlock, tv, play);
    videoBlock.append(video, name);
  },1000)


  gameBtnNext.addEventListener("click", (e) => {
    document.body.innerHTML = "";
    if (info.length === 1 || number === info.length - 1) {
      const fillword = createFillword();
      document.body.append(fillword);
    } else {
      const question = createGameQuestion(info, number + 1);
      document.body.append(question);
    }
  });

  const inputs = Object.values(info[number].variant);

  inputs.forEach((el) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const button = document.createElement("span");

    button.textContent = el;

    label.classList.add("question__label");
    input.classList.add("question__input");
    button.classList.add("question__radio");

    if (el === info[number].rightanswer) input.classList.add("question__input--true")
    else input.classList.add("question__input--false");

    input.type = "radio";
    input.name = "question";
    label.append(input, button);

    questionBlock.append(label);

    input.addEventListener("change", () => {
      const inputs = document.querySelectorAll(".question__input");
      inputs.forEach((el) => {
        el.disabled = true;
      });

      if (input.classList.contains("question__input--true")) {
        let points = JSON.parse(localStorage.getItem("points"));
        points += 1;
        localStorage.setItem("points", points);
        const point = document.querySelector(".game__point");
        point.textContent = points;
        point.classList.add("animation");

        const deniska = createDeniska(
          "Отлично! Задание выполнено. Тебе начислен 1 балл."
        );

        deniska.gameBtnNext.addEventListener('click', (e) => {
          e.preventDefault();
          document.body.innerHTML = "";
          if (info.length === 1 || number === info.length - 1) {
            const fillword = createFillword();
            document.body.append(fillword);
          } else {
            const question = createGameQuestion(info, number + 1);
            document.body.append(question);
          }
        })

        setTimeout(() => {
          document.body.append(deniska.deniska);
          document.querySelector(".game__btn--skip").style.display = "none";
          document.querySelector('.game__btn--next').style.display = 'block';

        }, 800);
      } else {
        const deniska = createDeniska("К сожалению, это неправильный ответ.");
        deniska.rulesDeniska.src = "img/deniska-sad.webp";

        deniska.gameBtnNext.addEventListener('click', (e) => {
          e.preventDefault();
          document.body.innerHTML = "";
          if (info.length === 1 || number === info.length - 1) {
            const fillword = createFillword();
            document.body.append(fillword);
          } else {
            const question = createGameQuestion(info, number + 1);
            document.body.append(question);
          }
        })

        setTimeout(() => {
          document.body.append(deniska.deniska);
          document.querySelector(".game__btn--skip").style.display = "none";
          document.querySelector(".game__btn--next").style.display = "block";
        }, 800);
      }
    });
  });

  play.addEventListener("click", (e) => {
    e.preventDefault();

    if (play.classList.contains("active")) {
      video.pause();
      play.classList.remove("active");
    } else {
      play.classList.add("active");
      video.play();
    }
  });

  gameBtnSkip.addEventListener("click", (e) => {
    e.preventDefault();

    const deniska = createDeniska(
      "При переходе к следующей игре ты, к сожалению, не получишь балл за эту игру. Продолжать?"
    );
    document.body.append(deniska.deniska);
    deniska.rulesDeniska.src = "img/deniska-sad.webp";
    game.classList.add("game-blur");
    const btns = document.createElement("div");
    const yesBtn = document.createElement("button");
    const noBtn = document.createElement("button");

    yesBtn.textContent = "Да";
    noBtn.textContent = "Нет";

    btns.classList.add("btns-group");
    yesBtn.classList.add(
      "btn-reset",
      "game__btn",
      "game__btn--yes",
      "game__btn--next"
    );
    noBtn.classList.add(
      "btn-reset",
      "game__btn",
      "game__btn--no",
      "game__btn--next"
    );
    btns.append(yesBtn, noBtn);
    deniska.rulesText.append(btns);

    yesBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.innerHTML = "";
      if (info.length === 1 || number === info.length - 1) {
        const fillword = createFillword();
        document.body.append(fillword);
      } else {
        const question = createGameQuestion(info, number + 1);
        document.body.append(question);
      }

    });

    noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      deniska.deniska.remove();
      game.classList.remove("game-blur");
    });
  });

  gameRules.rulesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    gameBtnNext.remove();

    const rulesBlock = createRulesTablet(info[number].task);

    // const rulesBlock = createRulesTablet(
    //   "Прослушай видеовопрос и выбери правильный ответ из предложенных вариантов. О какой известной исторической личности рассказывает школьник?"
    // );

    game.append(rulesBlock);
    gameRight.style.display = "block";
    gameCenter.style.display = "block";
    gameRules.gameRules.style.display = "none";
    gameBtnSkip.style.display = "block";
    gameBlock.style.paddingBottom = "0";
    gameBlock.style.marginTop = "0";
    gameLeft.style.paddingTop = "0";
  });

  return game;
}
