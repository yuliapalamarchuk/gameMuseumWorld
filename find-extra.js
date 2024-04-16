import createTalker from "./talker.js";
import createDeniska from "./deniska.js";
import createRulesTablet from "./rules-tablet.js";
import createPoint from "./point.js";
import { createPicture } from "./picture.js";
import { createGameQuestion } from "./question.js";

export function createFindExtra() {
  const game = document.createElement("section");
  const gameTitle = document.createElement("h1");
  const gameSubtitle = document.createElement("h2");
  const gameBlock = document.createElement("div");
  const gameLeft = document.createElement("div");
  const gameRight = document.createElement("div");
  const pointDiv = createPoint();
  let points = JSON.parse(localStorage.getItem("points") ?? 0);
  pointDiv.textContent = points;

  gameTitle.textContent = "Художественная галерея";
  gameSubtitle.innerHTML = `Что лишнее?`;

  game.classList.add("game_find", "find-extra");
  pointDiv.classList.add("points", "points_find-extra");
  gameTitle.classList.add("find-extra__title");
  gameSubtitle.classList.add("find-extra__subtitle");
  gameBlock.classList.add("find-extra__block", "flex");
  gameLeft.classList.add("find-extra__left", "flex");
  gameRight.classList.add("find-extra__right", "flex");

  document.body.append(game);
  game.append(pointDiv, gameTitle, gameSubtitle, gameBlock);
  gameBlock.append(gameLeft, gameRight);

  //   Слева

  const assistantPerrot = createTalker(
    "Перед тобой картина известного русского художника В.Д. Поленова «Московский дворик».  Мы спрятали на ней 5 лишних элементов. Твоя задача - найти их. "
  );
  const gameBtnSkip = document.createElement("button");
  const gameBtnNext = document.createElement("button");
  const gameBtnAccept = document.createElement("button");
  const btnWrap = document.createElement("div");

  gameBtnSkip.textContent = "Пропустить игру";
  gameBtnNext.textContent = "Следующая игра";
  gameBtnAccept.textContent = "Принять ответ";

  assistantPerrot.rulesText.classList.add("rules__text_find-extra");
  assistantPerrot.rulesBtn.classList.add("rules__btn_find-extra");
  assistantPerrot.gameRules.classList.add("rules_find-extra");
  assistantPerrot.rulesTalker.classList.add("rules__img_find-extra");

  btnWrap.classList.add("btn-wrap", "flex");
  gameBtnSkip.classList.add(
    "find-extra__btn",
    "find-extra__btn--skip",
    "find-btn-reset"
  );
  gameBtnNext.classList.add(
    "find-extra__btn",
    "find-extra__btn--next",
    "find-extra__btn--next_mobile",
    "find-btn-reset",
    "hidden"
  );
  gameBtnAccept.classList.add(
    "find-extra__btn",
    "find-extra__btn--next",
    "find-extra__btn--accept",
    "find-btn-reset"
  );

  gameLeft.append(assistantPerrot.gameRules, btnWrap);
  btnWrap.append(gameBtnSkip, gameBtnAccept, gameBtnNext);

  gameBtnNext.addEventListener("click", (e) => {
    document.body.innerHTML = "";
    axios
      .get("php/get_getpicture.php")
      .then((response) => {
        if (response.data.length != 0) {
          const picture = createPicture(response.data, 0);
          document.body.append(picture);
        } else createGameQuestion(response.data, 0);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Справа

  const findImgBlock = document.createElement("div");
  const findImg = document.createElement("img");
  const findAnswersBlock = document.createElement("div");

  const findAnswer1Wrap = document.createElement("div");
  const findAnswer2Wrap = document.createElement("div");
  const findAnswer3Wrap = document.createElement("div");
  const findAnswer4Wrap = document.createElement("div");
  const findAnswer5Wrap = document.createElement("div");

  findImg.src = "img/img-desctop.webp";

  findImgBlock.classList.add("img-block");
  findImg.classList.add("img-find");
  findAnswersBlock.classList.add("answers-block", "flex");
  findAnswer1Wrap.classList.add("answer-wrap");
  findAnswer2Wrap.classList.add("answer-wrap");
  findAnswer3Wrap.classList.add("answer-wrap");
  findAnswer4Wrap.classList.add("answer-wrap");
  findAnswer5Wrap.classList.add("answer-wrap");

  gameRight.append(findImgBlock, findAnswersBlock);
  findAnswersBlock.append(
    findAnswer1Wrap,
    findAnswer2Wrap,
    findAnswer3Wrap,
    findAnswer4Wrap,
    findAnswer5Wrap
  );

  //   Добавление неправильных элементов на картину

  const errorImg1 = document.createElement("img");
  const errorImg2 = document.createElement("img");
  const errorImg3 = document.createElement("img");
  const errorImg4 = document.createElement("img");
  const errorImg5 = document.createElement("img");

  errorImg1.src = "img/extra1.png";
  errorImg2.src = "img/extra2.png";
  errorImg3.src = "img/extra3.png";
  errorImg4.src = "img/extra4.png";
  errorImg5.src = "img/extra5.png";

  errorImg1.classList.add("error-img1");
  errorImg2.classList.add("error-img2");
  errorImg3.classList.add("error-img3");
  errorImg4.classList.add("error-img4");
  errorImg5.classList.add("error-img5");

  // Создаем элементы на картинку по клику

  const correctImg1Wrap = document.createElement("div");
  const correctImg2Wrap = document.createElement("div");
  const correctImg3Wrap = document.createElement("div");
  const correctImg4Wrap = document.createElement("div");
  const correctImg5Wrap = document.createElement("div");

  const correctImg1 = document.createElement("img");
  const correctImg2 = document.createElement("img");
  const correctImg3 = document.createElement("img");
  const correctImg4 = document.createElement("img");
  const correctImg5 = document.createElement("img");

  correctImg1Wrap.classList.add("correct-img1_wrap", "hidden");
  correctImg2Wrap.classList.add("correct-img2_wrap", "hidden");
  correctImg3Wrap.classList.add("correct-img3_wrap", "hidden");
  correctImg4Wrap.classList.add("correct-img4_wrap", "hidden");
  correctImg5Wrap.classList.add("correct-img5_wrap", "hidden");

  correctImg1.classList.add("correct-img1");
  correctImg2.classList.add("correct-img2");
  correctImg3.classList.add("correct-img3");
  correctImg4.classList.add("correct-img4");
  correctImg5.classList.add("correct-img5");

  correctImg1.src = "img/answer1.png";
  correctImg2.src = "img/answer2.png";
  correctImg3.src = "img/answer3.png";
  correctImg4.src = "img/answer4.png";
  correctImg5.src = "img/answer5.png";

  findImgBlock.append(
    findImg,
    errorImg1,
    errorImg2,
    errorImg3,
    errorImg4,
    errorImg5,
    correctImg1Wrap,
    correctImg2Wrap,
    correctImg3Wrap,
    correctImg4Wrap,
    correctImg5Wrap
  );
  correctImg1Wrap.append(correctImg1);
  correctImg2Wrap.append(correctImg2);
  correctImg3Wrap.append(correctImg3);
  correctImg4Wrap.append(correctImg4);
  correctImg5Wrap.append(correctImg5);

  //   Элементы в боксы по клику

  const findAnswer1 = document.createElement("img");
  const findAnswer2 = document.createElement("img");
  const findAnswer3 = document.createElement("img");
  const findAnswer4 = document.createElement("img");
  const findAnswer5 = document.createElement("img");
  const checkMark1 = document.createElement("img");
  const checkMark2 = document.createElement("img");
  const checkMark3 = document.createElement("img");
  const checkMark4 = document.createElement("img");
  const checkMark5 = document.createElement("img");

  findAnswer1.src = "img/answer-in-box1.png";
  findAnswer2.src = "img/answer-in-box2.png";
  findAnswer3.src = "img/answer-in-box3.png";
  findAnswer4.src = "img/answer-in-box4.png";
  findAnswer5.src = "img/answer-in-box5.png";
  checkMark1.src = "img/check-mark.png";
  checkMark2.src = "img/check-mark.png";
  checkMark3.src = "img/check-mark.png";
  checkMark4.src = "img/check-mark.png";
  checkMark5.src = "img/check-mark.png";

  findAnswer1.classList.add("find-answer1", "hidden");
  findAnswer2.classList.add("find-answer2", "hidden");
  findAnswer3.classList.add("find-answer3", "hidden");
  findAnswer4.classList.add("find-answer4", "hidden");
  findAnswer5.classList.add("find-answer5", "hidden");
  checkMark1.classList.add("check-mark", "hidden");
  checkMark2.classList.add("check-mark", "hidden");
  checkMark3.classList.add("check-mark", "hidden");
  checkMark4.classList.add("check-mark", "hidden");
  checkMark5.classList.add("check-mark", "hidden");

  findAnswer1Wrap.append(findAnswer1, checkMark1);
  findAnswer2Wrap.append(findAnswer2, checkMark2);
  findAnswer3Wrap.append(findAnswer3, checkMark3);
  findAnswer4Wrap.append(findAnswer4, checkMark4);
  findAnswer5Wrap.append(findAnswer5, checkMark5);

  // Массивы изображений

  const answers = [
    correctImg1Wrap,
    correctImg2Wrap,
    correctImg3Wrap,
    correctImg4Wrap,
    correctImg5Wrap,
  ];

  const answersInBox = [
    findAnswer1,
    findAnswer2,
    findAnswer3,
    findAnswer4,
    findAnswer5,
  ];

  const checkMark = [
    checkMark1,
    checkMark2,
    checkMark3,
    checkMark4,
    checkMark5,
  ];

  const errorsImg = [errorImg1, errorImg2, errorImg3, errorImg4, errorImg5];

  const tabletMediaQueryList = window.matchMedia("(max-width: 1750px)");
  const mobileMediaQueryList = window.matchMedia("(max-width: 768px)");

  const handleAccept = (event) => {
    event.preventDefault();

    for (let i = 0; i < answers.length; i++) {
      if (!answers[i].classList.contains("hidden")) {
        answersInBox[i].classList.remove("hidden");
        checkMark[i].classList.remove("hidden");
      }

      if (answers[i].classList.contains("hidden")) {
        errorsImg[i].style.pointerEvents = "none";
      }
    }

    if (
      Array.from(answers).every((element) => {
        return element.classList.contains("hidden");
      })
    ) {
      answersInBox.forEach((element) => {
        element.classList.remove("hidden");
      });
      checkMark.forEach((element) => {
        element.classList.remove("hidden");
      });
    }

    if (
      Array.from(answers).every((element) => {
        return !element.classList.contains("hidden");
      })
    ) {
      answersInBox.forEach((element) => {
        element.classList.remove("hidden");
      });
      checkMark.forEach((element) => {
        element.classList.remove("hidden");
      });

      const deniskaSuccess = createDeniska(
        "Отлично! Задание выполнено. Тебе начислен 1 балл."
      );
      deniskaSuccess.gameRules.classList.add("game__rules_find-extra");

      // Очки
      let points = JSON.parse(localStorage.getItem("points"));
      points += 1;
      localStorage.setItem("points", points);
      const point = document.querySelector(".game__point");
      point.textContent = points;
      point.classList.add("animation");

      setTimeout(() => {
        if (mobileMediaQueryList.matches) {
          document.body.append(deniskaSuccess.deniska);
          deniskaSuccess.deniska.append(gameBtnNext);
          gameBtnNext.classList.remove("hidden");
          gameBtnNext.style.marginTop = "40px";
          game.classList.add("blur");
        } else {
          gameRight.append(deniskaSuccess.deniska);
        }
      }, 4000);
    } else {
      const deniskaFail = createDeniska(
        "К сожалению, не найдены все лишние элементы."
      );
      deniskaFail.rulesDeniska.src = "img/deniska-sad.webp";
      deniskaFail.gameRules.classList.add("game__rules_find-extra");

      setTimeout(() => {
        if (mobileMediaQueryList.matches) {
          document.body.append(deniskaFail.deniska);
          deniskaFail.deniska.append(gameBtnNext);
          gameBtnNext.classList.remove("hidden");
          gameBtnNext.style.marginTop = "40px";
          game.classList.add("blur");
        } else {
          gameRight.append(deniskaFail.deniska);
        }
      }, 4000);
    }
    gameBtnAccept.classList.add("hidden");
    gameBtnSkip.classList.add("hidden");
    gameBtnNext.classList.remove("hidden");

    if (mobileMediaQueryList.matches) {
      gameBtnNext.classList.add("hidden");
    }
  };

  const handleSkip = (event) => {
    event.preventDefault();

    // Дениска спрашивает

    const deniska = createDeniska(
      "При переходе к следующей игре ты, к сожалению, не получишь балл за эту игру. Продолжать?"
    );

    document.body.append(deniska.deniska);
    deniska.rulesDeniska.src = "img/deniska-sad.webp";
    game.classList.add("blur");
    const btns = document.createElement("div");
    const yesBtn = document.createElement("button");
    const noBtn = document.createElement("button");

    yesBtn.textContent = "Да";
    noBtn.textContent = "Нет";

    deniska.gameRules.classList.add("game__rules_find-extra");
    btns.classList.add("btns-group");
    yesBtn.classList.add(
      "btn-reset",
      "game__btn",
      "game__btn--yes",
      "game__btn--next",
      "extra-yes"
    );
    noBtn.classList.add(
      "btn-reset",
      "game__btn",
      "game__btn--no",
      "game__btn--next",
      "game__btn--no",
      "extra-no"
    );
    btns.append(yesBtn, noBtn);
    deniska.rulesText.append(btns);

    yesBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.innerHTML = "";
      axios
        .get("php/get_getpicture.php")
        .then((response) => {
          if (response.data.length != 0) {
            const picture = createPicture(response.data, 0);
            document.body.append(picture);
          } else createGameQuestion(response.data, 0);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      deniska.deniska.remove();
      game.classList.remove("blur");
    });
  };

  const handleRules = (event) => {
    event.preventDefault();

    const rulesBlock = createRulesTablet(
      "Перед тобой картина известного русского художника В.Д. Поленова «Московский дворик». Мы спрятали на ней 5 лишних элементов. Найди их и получи монету."
    );
    game.append(rulesBlock);

    gameLeft.classList.add("hidden");
    gameRight.classList.remove("hidden");
    gameBtnSkip.classList.remove("hidden");
    gameBtnAccept.classList.remove("hidden");
    gameRight.append(btnWrap);
  };

  errorsImg.forEach((errorItem, index) => {
    errorItem.addEventListener("click", (e) => {
      e.preventDefault();

      errorItem.classList.add("hidden");
      answers[index].classList.remove("hidden");
    });
  });

  // Пропустить игру

  gameBtnSkip.addEventListener("click", handleSkip);

  // Проверка ответов

  gameBtnAccept.addEventListener("click", handleAccept);

  // Принятие правил

  document.querySelector(".rules__btn").addEventListener("click", handleRules);

  //#region Адаптив

  const handleTablet = () => {
    findImg.src = "img/img-tablet.webp";

    errorImg1.src = "img/extra1_tablet.png";
    errorImg2.src = "img/extra2_tablet.png";
    errorImg3.src = "img/extra3_tablet.png";
    errorImg4.src = "img/extra4_tablet.png";
    errorImg5.src = "img/extra5_tablet.png";

    findAnswer1.src = "img/answer-in-box1_tablet.png";
    findAnswer2.src = "img/answer-in-box2_tablet.png";
    findAnswer3.src = "img/answer-in-box3_tablet.png";
    findAnswer4.src = "img/answer-in-box4_tablet.png";
    findAnswer5.src = "img/answer-in-box5_tablet.png";

    checkMark1.src = "img/check-mark_tablet.png";
    checkMark2.src = "img/check-mark_tablet.png";
    checkMark3.src = "img/check-mark_tablet.png";
    checkMark4.src = "img/check-mark_tablet.png";
    checkMark5.src = "img/check-mark_tablet.png";
  };

  const handleMobile = () => {
    gameRight.classList.add("hidden");
    gameBtnSkip.classList.add("hidden");
    gameBtnAccept.classList.add("hidden");
  };

  if (tabletMediaQueryList.matches) {
    handleTablet();
  }

  if (mobileMediaQueryList.matches) {
    handleMobile();
  }

  tabletMediaQueryList.addEventListener("change", ({ matches }) => {
    if (matches) {
      handleTablet();
    }
  });

  mobileMediaQueryList.addEventListener("change", ({ matches }) => {
    if (matches) {
      handleMobile();
    }
  });

  return game;
}

// createFindExtra();
