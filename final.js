import createPoint from "./point.js";

export function createFinal(info, number) {
  console.log(info);
  const final = document.createElement("section");

  //   Логотип
  const logo = document.createElement("div");
  const logoLink = document.createElement("a");
  const logoImg = document.createElement("img");

  logoImg.src = "img/logo.svg";
  logoLink.setAttribute("href", "http://nsds1.ru/");
  logoLink.setAttribute("target", "_blank");

  //   Название
  const finalTitle = document.createElement("div");
  const title = document.createElement("h1");
  const titleImg = document.createElement("img");

  titleImg.src = "img/final-text_desktop.png";
  title.textContent = "Открывая мир";

  //   Содержимое
  const finalContent = document.createElement("div");
  const finalLeft = document.createElement("div");
  const finalCenter = document.createElement("div");
  const finalRight = document.createElement("div");

  logo.classList.add("logo");
  logoLink.classList.add("logo-link");
  logoImg.classList.add("logo-img");
  finalTitle.classList.add("final-title");
  title.classList.add("title_h1");

  final.classList.add("final");
  finalContent.classList.add("final-content", "flex");
  finalLeft.classList.add("final-left", "flex");
  finalCenter.classList.add("final-center", "flex");
  finalRight.classList.add("final-right", "flex");

  // Слева Говоруша
  const assistantPerrot = document.createElement("div");
  const perrotImg = document.createElement("img");
  const perrotName = document.createElement("p");
  const perrotText = document.createElement("p");
  const perrotButtonDiv = document.createElement("div");
  const perrotButtonText = document.createElement("p");
  const perrotButton = document.createElement("a");
  const perrotButtonMobile = document.createElement("button");

  perrotImg.src = "img/final-parrot.png";

  assistantPerrot.classList.add("final_assistant-perrot");
  perrotName.classList.add("final_assistent-name");
  perrotText.classList.add("final_assistent-text");
  perrotButtonDiv.classList.add("perrot-btn", "flex");
  perrotButtonText.classList.add("perrot_textbtn");
  perrotButton.classList.add("perrot-btn_img");
  perrotButtonMobile.classList.add(
    "btn-reset",
    "game-crossword__btn",
    "game-crossword__btn--next",
    "perrot-btn_mobile",
    "hidden"
  );

  perrotName.textContent = "Говоруша";
  perrotText.textContent = "Хочешь узнать больше о Чувашии?";
  perrotButtonText.textContent = "Жми сюда";
  perrotButtonMobile.textContent = "Далее";

  perrotButton.setAttribute("href", "docs/Все о Чувашии_.pdf");
  perrotButton.setAttribute("download", "Все о Чувашии_.pdf");

  // Центр
  const centerDiv = document.createElement("div");
  const centerImg = document.createElement("img");
  const centerText = document.createElement("p");
  centerImg.src = "img/final-arka.webp";
  centerText.textContent = "Конец игры";

  const pointBlock = createPoint();
  let points = JSON.parse(localStorage.getItem("points") ?? 0);
  // let points = 18;

  // Изменение слова "балл"
  let wordForm;
  if (points % 10 == 1 && points % 100 != 11) {
    wordForm = "балл";
    pointBlock.classList.add("game__point_mark");
  } else if (
    points % 10 >= 2 &&
    points % 10 <= 4 &&
    (points % 100 < 10 || points % 100 >= 20)
  ) {
    wordForm = "балла";
  } else {
    wordForm = "баллов";
  }
  pointBlock.textContent = points + " " + wordForm;

  // pointBlock.textContent = points + ` баллов`;
  pointBlock.classList.add("game__point_final");

  const centerButtons = document.createElement("div");
  const gameBtnTakePrize = document.createElement("button");
  const gameBtnPlayAgain = document.createElement("button");

  gameBtnTakePrize.textContent = "Забрать приз";
  gameBtnPlayAgain.textContent = "Играть снова";

  centerDiv.classList.add("center_div");
  centerImg.classList.add("center_img");
  centerText.classList.add("center_text");
  centerButtons.classList.add("center_buttons", "flex");
  gameBtnTakePrize.classList.add(
    "final-btns",
    "game-crossword__btn",
    "game-crossword__btn--next",
    "btn-reset"
  );
  gameBtnPlayAgain.classList.add(
    "final-btns",
    "game-crossword__btn",
    "game-crossword__btn--skip",
    "btn-reset"
  );

  gameBtnPlayAgain.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  // Добавление элементов
  document.body.append(final);
  final.append(logo, finalTitle, finalContent);
  logo.append(logoLink);
  logoLink.append(logoImg);
  finalTitle.append(title, titleImg);
  finalContent.append(finalLeft, finalCenter, finalRight);
  finalLeft.append(assistantPerrot);
  assistantPerrot.append(
    perrotImg,
    perrotName,
    perrotText,
    perrotButtonDiv,
    perrotButtonMobile
  );
  perrotButtonDiv.append(perrotButtonText, perrotButton);
  finalCenter.append(centerImg, centerDiv);
  centerDiv.append(centerText, pointBlock, centerButtons);
  centerButtons.append(gameBtnTakePrize, gameBtnPlayAgain);

  //   Справа Дениска
  const deniska = document.createElement("div");
  const deniskaImg = document.createElement("img");
  const deniskaName = document.createElement("p");
  const deniskaText = document.createElement("p");
  const deniskaButtonMobile = document.createElement("button");

  deniska.classList.add("final_deniska");
  deniskaName.classList.add("deniska_name", "final_assistent-name");
  deniskaText.classList.add("deniska_text", "final_assistent-text");
  deniskaButtonMobile.classList.add(
    "btn-reset",
    "game-crossword__btn",
    "game-crossword__btn--next",
    "deniska-btn_mobile",
    "hidden"
  );

  deniskaName.textContent = "Дениска";
  deniskaButtonMobile.textContent = "Далее";

  finalRight.append(deniska);
  deniska.append(deniskaImg, deniskaName, deniskaText, deniskaButtonMobile);

  //   -----------------

  // Скачивание файла по клику на кнопку
  function downloadPrize(srcFile, fileName) {
    let element = document.createElement("a");
    element.setAttribute("href", srcFile);
    element.setAttribute("download", fileName);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // Логика
  if (points >= 0 && points < info[number].prize_from) {
    gameBtnTakePrize.classList.add("hidden");
    deniskaImg.src = "img/final-boySad.png";
    deniskaText.textContent =
      "Для получения приза необходимо набрать больше баллов. Попробуй пройти игру заново.";
    deniska.style.marginBottom = "40px";
    centerImg.style.height = "140%";
    centerImg.style.top = "-21%";
    finalCenter.style.width = "42%";
    finalRight.append(gameBtnPlayAgain);
    gameBtnPlayAgain.style.top = "-30%";
  } else if (points >= info[number].prize_from && points <= info[number].prize_to) {
    deniskaImg.src = "img/final-boySmile.png";
    deniskaName.style.top = "47%";
    deniskaName.style.left = "35.5%";
    deniskaText.innerHTML = "Поздравляю! <br> Можешь теперь забрать свой приз!";
    gameBtnTakePrize.addEventListener("click", (e) => {
      e.preventDefault();
      downloadPrize(info[number].prize, "Wallpaper_3.zip");
    });
  } else if (points >= info[number].superprize_from && points <= info[number].superprize_to) {
    deniskaImg.src = "img/final-boySmile.png";
    deniskaName.style.top = "47%";
    deniskaName.style.left = "35.5%";
    deniskaText.innerHTML = "Поздравляю! <br> Можешь теперь забрать свой приз!";
    gameBtnTakePrize.addEventListener("click", (e) => {
      e.preventDefault();
      downloadPrize(info[number].superprize, "Wallpaper_9.zip");
    });
  }

  // if (points >= info[number].prize_from && points <= info[number].prize_to) {
  //   gameBtnTakePrize.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     downloadPrize(info[number].prize, "Wallpaper_3.zip");
  //   });
  // } else if (points >= info[number].superprize_from && points <= info[number].superprize_to) {
  //   gameBtnTakePrize.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     downloadPrize(info[number].superprize, "Wallpaper_9.zip");
  //   });
  // }

  //   Футер
  const footer = document.createElement("footer");
  const footerContainer = document.createElement("div");
  const footerText = document.createElement("small");
  const itLogo = document.createElement("div");
  const footerLogoText = document.createElement("small");
  const footerLogo = document.createElement("div");
  const footerLogoTitle = document.createElement("small");
  const itLink = document.createElement("a");
  const footerLogoImg = document.createElement("img");
  const footerSpan = document.createElement("span");
  const titansLink = document.createElement("a");

  footer.classList.add("footer", "flex");
  footerContainer.classList.add("footer__container");
  footerText.classList.add("footer__text");
  itLogo.classList.add("IT-logo", "flex");
  footerLogoText.classList.add("IT-logo__text");
  footerLogo.classList.add("IT-logo__column", "flex");
  footerLogoTitle.classList.add("IT-logo__title", "flex");

  footerText.textContent = "© 2023 «Чебоксарская НОШ для обучающихся с ОВЗ №1» Минобразования Чувашии";
  footerLogoText.textContent = "Сделано в: ";
  footerSpan.textContent = " | ";
  footerSpan.style.marginRight = "7px";
  titansLink.textContent = "ITitans";

  footerLogoImg.src = "img/logo_1T.svg";
  itLink.setAttribute("href", "https://xn--g1ani7c.xn--p1ai/");
  itLink.setAttribute("target", "_blank");
  titansLink.setAttribute(
    "href",
    "https://xn--g1ani7c.xn--p1ai/my/teams/space/2989122108225482194?name=ITitans&space=610"
  );
  titansLink.setAttribute("target", "_blank");

  final.append(footer);
  footer.append(footerContainer, itLogo);
  footerContainer.append(footerText);
  itLogo.append(footerLogoText, footerLogo);
  footerLogo.append(footerLogoTitle);
  footerLogoTitle.append(itLink, footerSpan, titansLink);
  itLink.append(footerLogoImg);

  //   Адаптив
  const mediaQuery1 = window.matchMedia("(max-width: 1800px)");
  function handleTabletChange1(e) {
    if (e.matches) {
      if (points >= 0 && points < info[number].prize_from) {
        gameBtnPlayAgain.style.top = "-15%";
      }
    }
  }
  mediaQuery1.addListener(handleTabletChange1);
  handleTabletChange1(mediaQuery1);

  const mediaQuery = window.matchMedia("(max-width: 1600px)");
  function handleTabletChange(e) {
    if (e.matches) {
      perrotImg.src = "img/final-parrot_tablet.png";
      footerLogoImg.style.width = "62px";

      if (points >= 0 && points < info[number].prize_from) {
        deniskaImg.src = "img/final-boySad_tablet.png";
        deniskaText.style.left = "20%";
        centerImg.style.height = "150%";
        centerImg.style.top = "-29%";
      } else {
        deniskaImg.src = "img/final-boySmile_tablet.png";
      }
    }
  }
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);

  const mediaQuery2 = window.matchMedia("(max-width: 1440px)");
  function handleTabletChange2(e) {
    if (e.matches) {
      titleImg.src = "img/final-text_tablet.png";
      deniskaName.style.left = "38%";

      if (points >= 0 && points < info[number].prize_from) {
        centerImg.style.top = "-8%";
        pointBlock.style.top = "58%";
      }
    }
  }
  mediaQuery2.addListener(handleTabletChange2);
  handleTabletChange2(mediaQuery2);

  const mediaQuery3 = window.matchMedia("(max-width: 1366px)");
  function handleTabletChange3(e) {
    if (e.matches) {
      if (points >= 0 && points < info[number].prize_from) {
        gameBtnPlayAgain.style.position = "absolute";
        gameBtnPlayAgain.style.top = "76%";
        gameBtnPlayAgain.style.right = "5.5%";
        deniskaText.style.left = "13%";
        deniskaText.style.top = "62%";
        pointBlock.style.top = "70%";
        centerImg.style.height = "155%";
      }
    }
  }
  mediaQuery3.addListener(handleTabletChange3);
  handleTabletChange3(mediaQuery3);

  const mediaQuery4 = window.matchMedia("(max-width: 1300px)");
  function handleTabletChange4(e) {
    if (e.matches) {
      if (points >= 0 && points < info[number].prize_from) {
        finalCenter.style.width = "55%";
      }
    }
  }
  mediaQuery4.addListener(handleTabletChange4);
  handleTabletChange4(mediaQuery4);

  const mediaQuery5 = window.matchMedia("(max-width: 1024px)");
  function handleTabletChange5(e) {
    if (e.matches) {
      if (points >= 0 && points < info[number].prize_from) {
        gameBtnPlayAgain.style.top = "61%";
        gameBtnPlayAgain.style.right = "4%";
        pointBlock.style.top = "85%";
        finalContent.style.marginBottom = "234px";
      }
    }
  }
  mediaQuery5.addListener(handleTabletChange5);
  handleTabletChange5(mediaQuery5);

  const mediaQuery6 = window.matchMedia("(max-width: 768px)");
  function handleTabletChange6(e) {
    if (e.matches) {
      final.append(footer);
      finalCenter.classList.add("hidden");
      finalRight.classList.add("hidden");
      perrotImg.src = "img/final-parrot_mobile.png";
      perrotButtonMobile.classList.remove("hidden");
      deniskaButtonMobile.classList.remove("hidden");

      const buttonDownload = document.createElement("a");
      buttonDownload.classList.add("btn-download", "hidden");
      final.append(buttonDownload);
      buttonDownload.setAttribute("href", "docs/Все о Чувашии_.pdf");
      buttonDownload.setAttribute("download", "Все о Чувашии_.pdf");

      perrotButtonMobile.addEventListener("click", (e) => {
        e.preventDefault();
        finalLeft.classList.add("hidden");
        finalRight.classList.remove("hidden");
        buttonDownload.classList.remove("hidden");
      });

      deniskaButtonMobile.addEventListener("click", (e) => {
        e.preventDefault();
        finalRight.classList.add("hidden");
        finalCenter.classList.remove("hidden");
      });

      if (points >= 0 && points < info[number].prize_from) {
        deniskaImg.src = "img/final-boySad_mobile.png";
        centerImg.style.height = "80%";
        centerImg.style.top = "30%";
        finalContent.style.marginBottom = "auto";
        finalCenter.append(gameBtnPlayAgain);

        deniskaName.style.top = "31.5%";
        deniskaText.style.top = "48%";
        deniskaText.style.left = "10%";
        gameBtnPlayAgain.style.right = "auto";
        pointBlock.style.top = "41%";
      } else {
        deniskaImg.src = "img/final-boySmile_mobile.png";
        deniskaName.style.top = "33%";
      }
    }
  }
  mediaQuery6.addListener(handleTabletChange6);
  handleTabletChange6(mediaQuery6);

  const mediaQuery7 = window.matchMedia("(max-width: 576px)");
  function handleTabletChange7(e) {
    if (e.matches) {
      titleImg.src = "img/final-text_mobile.png";
      centerImg.src = "img/final-arka_mobile.webp";
      finalContent.append(centerImg);

      if (points >= 0 && points < info[number].prize_from) {
        pointBlock.style.top = "35%";
        gameBtnPlayAgain.style.top = "50%";
        finalCenter.style.width = "80%";
        gameBtnPlayAgain.style.padding = "16px 35.5px";
      }
    }
  }
  mediaQuery7.addListener(handleTabletChange7);
  handleTabletChange7(mediaQuery7);

  // const mediaQuery10 = window.matchMedia("(max-width: 480px)");
  // function handleTabletChange10(e) {
  //   if (e.matches) {
  //     if (points >= 0 && points < info[number].prize_from) {
  //       centerImg.style.top = "23%";
  //     }
  //   }
  // }
  // mediaQuery10.addListener(handleTabletChange10);
  // handleTabletChange10(mediaQuery10);

  const mediaQuery8 = window.matchMedia("(max-width: 375px)");
  function handleTabletChange8(e) {
    if (e.matches) {
      if (points >= 0 && points < info[number].prize_from) {
        centerImg.style.top = "24.5%";
        deniska.style.marginBottom = "71px";
        finalRight.style.paddingTop = "27px";
        // centerDiv.style.marginTop = "130px";
        centerText.style.marginBottom = "172px";
        pointBlock.style.top = "30%";
        finalCenter.style.marginBottom = "160px";
        gameBtnPlayAgain.style.top = "80%";
      }
    }
  }
  mediaQuery8.addListener(handleTabletChange8);
  handleTabletChange8(mediaQuery8);

  const mediaQuery9 = window.matchMedia("(max-width: 360px)");
  function handleTabletChange9(e) {
    if (e.matches) {
      if (points >= 0 && points < info[number].prize_from) {
        deniska.style.marginBottom = "62px";
        finalRight.style.paddingTop = "16.6px";
        centerText.style.marginBottom = "144px";
        centerImg.style.top = "21.5%";
        gameBtnPlayAgain.style.top = "73%";
        pointBlock.style.top = "35%";
      }
    }
  }
  mediaQuery9.addListener(handleTabletChange9);
  handleTabletChange9(mediaQuery9);

  return final;
}

createFinal();
