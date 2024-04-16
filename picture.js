import createTalker from "./talker.js";
// import createRulesTablet from "./rules-tablet.js";
import createPoint from "./point.js";
import createDeniska from "./deniska.js";
import {createGameQuestion} from "./question.js";

export const createPicture = (info, number) => {
  //Массив с игрой и картинами

  console.log(info)
  let pictureGame = info
  console.log('12321', pictureGame[0])
  /*const pictureGame = [
    {
      name: "Картина «Богатыри»",
      author: "В. М. Васнецов",
      description:
        "Картина повествует о временах, когда Древней Руси угрожало монголо-татарское иго. На ней изображены могучие, храбрые люди, защитники отечества. Они зорко смотрят вдаль, обозревают местность в поиске врага, который грозится напасть на Великую Русь.",
      images: [
        {
          name: "image1",
          src: "img/picture1.png",
          correct: false,
        },
        {
          name: "image2",
          src: "img/picture2.png",
          correct: true,
        },
        {
          name: "image3",
          src: "img/picture3.png",
          correct: false,
        },
      ],
    },
  ];*/
  //Создаем section game и присваиваем классы
  const game = document.createElement("section");
  game.classList.add("game", "picture_game");
  //Создаем заголовки, присваиваем классы и пишем текст
  const gameTitle = document.createElement("h1");
  gameTitle.classList.add("game__title", "game__title-picture");

  const gameSubtitle = document.createElement("h2");
  gameSubtitle.classList.add("game__subtitle");

  gameTitle.textContent = "Художественная галерея";
  gameSubtitle.innerHTML = "Узнай картину по описанию";
  //Создаем div со сценой всей игры
  const gameBlock = document.createElement("div");
  gameBlock.classList.add("game__block", "game__block-picture");
  //Для говоруши div
  const gameLeft = document.createElement("div");
  gameLeft.classList.add("game__left", "game__left-picture");
  //Для картин div
  const gameCenter = document.createElement("div");
  gameCenter.classList.add("game__center", "game__center-picture");

  //div правый
  const gameRight = document.createElement("div");
  gameRight.classList.add("game__right", "game__right-picture");

  //Для описания div
  const questionWrap = document.createElement("div");
  questionWrap.classList.add("question_wrap", "question_wrap-picture");
  const questionImg = document.createElement("img");
  questionImg.classList.add("question_img", "question_img-picture");
  const questionDesc = document.createElement("p");
  questionDesc.classList.add("question_desc");
  questionDesc.textContent = pictureGame[0].description;

  const description = document.createElement("p");
  description.textContent = "Описание";
  description.classList.add("description");

  gameRight.append(questionWrap);
  questionWrap.append(questionImg, questionDesc, description);

  questionImg.src = "img/crossword-questionWrap_desctop.png";

  const pictureWrapper = document.createElement("div");
  //ОЧКИ
  const pointBlock = createPoint();

  let points = JSON.parse(localStorage.getItem("points"));
  pointBlock.textContent = points;

  //Ставим game как главный section
  document.body.append(game);
  //Добавляем в section game все элементы
  game.append(gameTitle, gameSubtitle, gameBlock, pointBlock);
  //Добавляем в div gameblock правый, центральный и левый блок
  gameBlock.append(gameLeft, gameCenter, gameRight);
  //Добавляем в центральный блок div с картинами
  gameCenter.append(pictureWrapper);

  //Создание шаблона одной карточки с картинкой
  const createPictureGame = (src, correct) => {
    pictureWrapper.classList.add("pictures_wrapper");
    const wrap = document.createElement("div");
    wrap.classList.add("wrap");
    const pictureBorder = document.createElement("div");
    pictureBorder.classList.add("picture_border");
    const pictureItem = document.createElement("img");
    pictureItem.src = src;
    pictureItem.setAttribute("data-crt", correct);
    pictureItem.classList.add("picture_item");

    pictureWrapper.append(wrap);
    wrap.append(pictureBorder);
    pictureBorder.append(pictureItem);
  };

  //Перебираем массив и отображаем картинки
  let pict = Object.values(pictureGame[0].images)
  pict.forEach((item) => {
    console.log(item)
    createPictureGame(item.src, item.correct);
  });


  //Окрашиваем картинки по клику в зеленый или красный
  const correctPicture = document.querySelectorAll(".picture_item");
  correctPicture.forEach((item) => {
    item.addEventListener("click", () => {
      setTimeout(() => {
        modalWrapper.style.display = "block";
      }, 3000);
      if (item.getAttribute("data-crt") === "да") {
        item.parentElement.parentElement.classList.add("correct");
        const deniska = createDeniska(
            "Отлично! Задание выполнено. Тебе начислен 1 балл."
        );
        setTimeout(() => {
          document.body.append(deniska.deniska);
          deniska.deniska.classList.add("deniska-fillword");
          document.querySelector(".game__btn--skip").style.display = "none";
          document.querySelector(".game__btn--next").style.display = "block";
          document
              .querySelector(".game__btn--next")
              .classList.add("game__btn--next-fillword");
        }, 6000);
        let points = JSON.parse(localStorage.getItem("points"));
        points += 1;
        localStorage.setItem("points", points);
        const point = document.querySelector(".game__point");
        point.textContent = points;
        point.classList.add("animation");
      } else {
        item.parentElement.parentElement.classList.add("incorrect");
        const deniska = createDeniska("Увы, выбран неверный фрагмент.");
        deniska.rulesDeniska.src = "img/deniska-sad.webp";
        setTimeout(() => {
          document.body.append(deniska.deniska);
          deniska.deniska.classList.add("deniska-fillword");
          document.querySelector(".game__btn--skip").style.display = "none";
          document.querySelector(".game__btn--next").style.display = "block";
          document
              .querySelector(".game__btn--next")
              .classList.add("game__btn--next-fillword");
        }, 6000);
      }
      gameBtnSkip.style.display = "none";
      gameBtnNext.style.display = "block";
      setTimeout(() => {
        modalWrapper.style.display = "none";
      }, 6000);

      document.querySelectorAll("img").forEach((item) => {
        item.style.pointerEvents = "none";
      });
    });
  });

  //Модалка пропустить игру
  const gameBtnSkip = document.createElement("button");
  const gameBtnNext = document.createElement("button");

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

      axios.get('php/get_question.php')
          .then(response => {
            document.body.innerHTML = "";
            const question = createGameQuestion(response.data, 0);
            document.body.append(question);
          })
          .catch(error => {
            console.log(error)
          })

    });

    noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      deniska.deniska.remove();
      game.classList.remove("game-blur");
    });
  });

  gameBtnSkip.classList.add(
      "game__btn",
      "game__btn--skip",
      "btn-reset",
      "game__btn--skip-picture"
  );
  gameBtnNext.classList.add(
      "game__btn",
      "game__btn--next",
      "btn-reset",
      "game__btn--next-picture"
  );

  gameBtnSkip.textContent = "Пропустить игру";
  gameBtnNext.textContent = "Следующая игра";

  gameBtnNext.addEventListener("click", (e) => {
    axios.get('php/get_question.php')
        .then(response => {
          document.body.innerHTML = "";
          const question = createGameQuestion(response.data, 0);
          document.body.append(question);
        })
        .catch(error => {
          console.log(error)
        })
  });

  //ГОВОРУША
  const gameRules = createTalker(
      "Ознакомься с описанием картины. Выбери правильный фрагмент."
  );

  gameRules.rulesBottom.classList.add("rules-bottom_picture");
  gameRules.rulesText.classList.add("rules__text_picture");

  gameLeft.append(gameRules.gameRules, gameBtnSkip, gameBtnNext);

  gameRules.rulesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    gameBtnNext.remove();
    gameCenter.style.display = "block";
    gameRules.gameRules.style.display = "none";
    gameBtnSkip.style.display = "block";
    gameBlock.style.paddingBottom = "0";
    gameBlock.style.marginTop = "0";
    gameLeft.style.paddingTop = "0";
    gameBlock.style.overflowY = "scroll";
  });

  // Модалка с картиной
  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal-wrapper", "modal-wrapper-mobile");

  const modal = document.createElement("div");
  modal.classList.add("modal", "wrap");

  const modalImgWrapper = document.createElement("div");
  modalImgWrapper.classList.add("modal_border");

  const modalImg = document.createElement("img");
  modalImg.classList.add("modal-img");
  modalImg.src = pictureGame[0].picture_whole;

  const modalDescription = document.createElement("div");
  modalDescription.classList.add("modal-description");

  const modalDescriptionImg = document.createElement("img");
  modalDescriptionImg.classList.add("modal-desc-img");
  modalDescriptionImg.src = "img/picture_title.png";

  const modalDescriptionText = document.createElement("p");
  modalDescriptionText.classList.add("modal-text", "name");
  modalDescriptionText.textContent = pictureGame[0].name;

  const modalDescriptionTextAuthor = document.createElement("p");
  modalDescriptionTextAuthor.classList.add("modal-text", "author");
  modalDescriptionTextAuthor.textContent = pictureGame[0].author;

  game.append(modalWrapper);
  modalWrapper.append(modal, modalDescription);
  modalDescription.append(modalDescriptionImg);
  modalDescription.append(modalDescriptionText, modalDescriptionTextAuthor);
  modal.append(modalImgWrapper);
  modalImgWrapper.append(modalImg);

  if (pictureGame[number].name.length > 25) {
    modalDescriptionImg.style.minWidth='450px'

  }

  // АДАПТИВ

  //Правила для планшета
  const mediaQuery = window.matchMedia("(max-width: 1800px)");

  function handleTabletChange(e) {
    if (e.matches) {
      gameLeft.append(questionWrap);
      gameRules.gameRules.append(gameBtnSkip, gameBtnNext);
    }
  }

  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);

  //Правила для мобилки
  const mediaQuery2 = window.matchMedia("(max-width: 768px)");

  function handleTabletChange2(e) {
    if (e.matches) {
      const slideBtn = document.querySelector(".rules__btn");

      //Создаем кнопку стрелку на второй странице
      const slide2Btn = document.createElement("button");
      slide2Btn.classList.add("rules__btn", "rules__btn-picture");

      //Создаем значок с правилами
      const rulesBtnImg = document.createElement("svg");
      rulesBtnImg.classList.add("rules-img-btn", "hidden");
      rulesBtnImg.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5.33618C22.9 5.35218 25.804 5.48152 26.828 6.50552C28 7.67752 28 9.56285 28 13.3335V21.3335C28 25.1055 28 26.9908 26.828 28.1628C25.6573 29.3335 23.7707 29.3335 20 29.3335H12C8.22933 29.3335 6.34267 29.3335 5.172 28.1628C4 26.9895 4 25.1055 4 21.3335V13.3335C4 9.56285 4 7.67752 5.172 6.50552C6.196 5.48152 9.1 5.35218 12 5.33618" fill="url(#paint0_linear_608_5149)"/>
    <path d="M20 5.33618C22.9 5.35218 25.804 5.48152 26.828 6.50552C28 7.67752 28 9.56285 28 13.3335V21.3335C28 25.1055 28 26.9908 26.828 28.1628C25.6573 29.3335 23.7707 29.3335 20 29.3335H12C8.22933 29.3335 6.34267 29.3335 5.172 28.1628C4 26.9895 4 25.1055 4 21.3335V13.3335C4 9.56285 4 7.67752 5.172 6.50552C6.196 5.48152 9.1 5.35218 12 5.33618" stroke="#9382C2" stroke-width="1.5"/>
    <path d="M13.9997 18.6667H22.6663H13.9997ZM9.33301 18.6667H9.99967H9.33301ZM9.33301 14H9.99967H9.33301ZM9.33301 23.3333H9.99967H9.33301ZM13.9997 14H22.6663H13.9997ZM13.9997 23.3333H22.6663H13.9997Z" fill="white"/>
    <path d="M13.9997 18.6667H22.6663M9.33301 18.6667H9.99967M9.33301 14H9.99967M9.33301 23.3333H9.99967M13.9997 14H22.6663M13.9997 23.3333H22.6663" stroke="#9382C2" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 4.66675C12 4.13631 12.158 3.62761 12.4393 3.25253C12.7206 2.87746 13.1022 2.66675 13.5 2.66675H18.5C18.8978 2.66675 19.2794 2.87746 19.5607 3.25253C19.842 3.62761 20 4.13631 20 4.66675V6.00008C20 6.53051 19.842 7.03922 19.5607 7.41429C19.2794 7.78937 18.8978 8.00008 18.5 8.00008H13.5C13.1022 8.00008 12.7206 7.78937 12.4393 7.41429C12.158 7.03922 12 6.53051 12 6.00008V4.66675Z" fill="url(#paint1_linear_608_5149)" stroke="#9382C2" stroke-width="1.5"/>
    <defs>
    <linearGradient id="paint0_linear_608_5149" x1="15.9652" y1="5.33618" x2="15.9819" y2="29.3335" gradientUnits="userSpaceOnUse">
    <stop stop-color="#EEDBFD"/>
    <stop offset="0.265654" stop-color="#DBDEFD"/>
    <stop offset="0.784194" stop-color="#E4D8FC"/>
    <stop offset="1" stop-color="#D9B4EA"/>
    </linearGradient>
    <linearGradient id="paint1_linear_608_5149" x1="15.9884" y1="2.66675" x2="15.9909" y2="8.00009" gradientUnits="userSpaceOnUse">
    <stop stop-color="#EEDBFD"/>
    <stop offset="0.265654" stop-color="#DBDEFD"/>
    <stop offset="0.784194" stop-color="#E4D8FC"/>
    <stop offset="1" stop-color="#D9B4EA"/>
    </linearGradient>
    </defs>
    </svg>`;
      const rules = document.createElement("div");
      const rulesBlock = document.createElement("div");
      const rulesText = document.createElement("p");
      const rulesBtnClose = document.createElement("svg");

      rules.classList.add("rules", "opacity", "rules-picture");
      rulesBlock.classList.add("rules_block");
      rulesText.classList.add("rules_text", "rules_text-picture");
      rulesBtnClose.classList.add("rules_close");

      rulesText.textContent =
          "Ознакомься с описанием картины. Выбери правильный фрагмент.";
      rulesBtnClose.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5L5 15M5 5L15 15" stroke="#9382C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

      game.append(rules, rulesBtnImg);
      rules.append(rulesBlock);
      rulesBlock.append(rulesText, rulesBtnClose);

      rulesBtnImg.onclick = function () {
        rules.classList.toggle("opacity");
      };

      rulesBtnClose.onclick = function () {
        rules.classList.add("opacity");
      };

      //Создаем значок с инфо
      const infoImg = document.createElement("svg");
      infoImg.classList.add("info-img-btn", "hidden");
      infoImg.innerHTML = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" y="0.75" width="26.5" height="26.5" rx="5.25" fill="url(#paint0_linear_1154_6434)"/>
<rect x="0.75" y="0.75" width="26.5" height="26.5" rx="5.25" stroke="#9382C2" stroke-width="1.5"/>
<mask id="path-2-inside-1_1154_6434" fill="white">
<path d="M12.4875 15.1767C12.5588 15.9144 12.6778 16.4635 12.8443 16.824C13.0104 17.1843 13.3082 17.3652 13.7369 17.3652C13.8173 17.3652 13.8895 17.3519 13.961 17.3384C14.0332 17.3519 14.1045 17.3652 14.1846 17.3652C14.6127 17.3652 14.9099 17.1843 15.0772 16.824C15.2431 16.4635 15.3624 15.9144 15.4334 15.1767L15.814 9.4824C15.8853 8.3724 15.9209 7.57555 15.9209 7.09243C15.9209 6.43433 15.7486 5.92087 15.4045 5.55294C15.059 5.1847 14.605 5 14.0424 5C14.0129 5 13.9902 5.00678 13.9616 5.00795C13.9331 5.00678 13.9101 5 13.8809 5C13.3177 5 12.8643 5.18441 12.5191 5.55294C12.1744 5.92117 12.0021 6.43463 12.0021 7.09273C12.0021 7.57614 12.038 8.3727 12.109 9.48269L12.4893 15.1767M13.9725 19.4447C13.4279 19.4447 12.9627 19.6176 12.5774 19.9614C12.1927 20.3072 12 20.7249 12 21.2157C12 21.7719 12.1947 22.207 12.5836 22.5234C12.9736 22.8403 13.4279 23 13.946 23C14.4745 23 14.9349 22.8427 15.3288 22.5301C15.7227 22.217 15.918 21.7789 15.918 21.2154C15.918 20.7246 15.7294 20.3069 15.3533 19.9611C14.9774 19.6176 14.5169 19.4447 13.9714 19.4447"/>
</mask>
<path d="M12.8443 16.824L14.2064 16.1959L14.2062 16.1954L12.8443 16.824ZM13.961 17.3384L14.2378 15.8641L13.9599 15.812L13.6821 15.8646L13.961 17.3384ZM15.0772 16.824L16.4377 17.4559L16.44 17.4509L15.0772 16.824ZM15.4334 15.1767L16.9265 15.3204L16.9286 15.2986L16.93 15.2768L15.4334 15.1767ZM15.814 9.4824L17.3107 9.58243L17.3109 9.57854L15.814 9.4824ZM15.4045 5.55294L16.5001 4.52839L16.4983 4.5265L15.4045 5.55294ZM13.9616 5.00795L13.8998 6.50668L13.9616 6.50923L14.0234 6.50668L13.9616 5.00795ZM12.5191 5.55294L11.4244 4.5274L11.4239 4.5279L12.5191 5.55294ZM12.109 9.48269L10.612 9.57844L10.6123 9.58266L12.109 9.48269ZM12.5774 19.9614L11.5788 18.8421L11.5746 18.8458L12.5774 19.9614ZM12.5836 22.5234L11.6369 23.6869L11.6376 23.6874L12.5836 22.5234ZM15.3288 22.5301L16.2612 23.7051L16.2623 23.7043L15.3288 22.5301ZM15.3533 19.9611L16.3685 18.8568L16.3651 18.8538L15.3533 19.9611ZM10.9945 15.321C11.0705 16.1077 11.2085 16.8593 11.4824 17.4527L14.2062 16.1954C14.1472 16.0676 14.0471 15.721 13.9806 15.0324L10.9945 15.321ZM11.4821 17.4522C11.6723 17.8645 11.9752 18.2459 12.4143 18.5122C12.8461 18.7741 13.3111 18.8652 13.7369 18.8652V15.8652C13.734 15.8652 13.8358 15.8658 13.97 15.9472C14.1115 16.033 14.1824 16.1438 14.2064 16.1959L11.4821 17.4522ZM13.7369 18.8652C13.975 18.8652 14.1746 18.8246 14.24 18.8122L13.6821 15.8646C13.6644 15.8679 13.6561 15.8694 13.6499 15.8705C13.6447 15.8714 13.6459 15.8711 13.6513 15.8704C13.6631 15.8688 13.694 15.8652 13.7369 15.8652V18.8652ZM13.6843 18.8126C13.7454 18.8241 13.9461 18.8652 14.1846 18.8652V15.8652C14.2282 15.8652 14.2598 15.8689 14.2718 15.8705C14.2772 15.8712 14.2783 15.8715 14.2724 15.8705C14.2655 15.8693 14.2569 15.8677 14.2378 15.8641L13.6843 18.8126ZM14.1846 18.8652C14.6107 18.8652 15.0754 18.7739 15.5069 18.5121C15.9451 18.2461 16.2473 17.8658 16.4377 17.4559L13.7168 16.1922C13.7399 16.1425 13.8097 16.0328 13.9505 15.9474C14.0845 15.866 14.1866 15.8652 14.1846 15.8652V18.8652ZM16.44 17.4509C16.7123 16.8587 16.8506 16.1085 16.9265 15.3204L13.9403 15.033C13.8741 15.7202 13.7738 16.0682 13.7145 16.1972L16.44 17.4509ZM16.93 15.2768L17.3106 9.58243L14.3173 9.38236L13.9367 15.0767L16.93 15.2768ZM17.3109 9.57854C17.3823 8.46676 17.4209 7.62794 17.4209 7.09243H14.4209C14.4209 7.52317 14.3882 8.27805 14.3171 9.38626L17.3109 9.57854ZM17.4209 7.09243C17.4209 6.17365 17.1757 5.25081 16.5001 4.5284L14.3089 6.57747C14.3215 6.59093 14.4209 6.69501 14.4209 7.09243H17.4209ZM16.4983 4.5265C15.8362 3.82087 14.9684 3.5 14.0424 3.5V6.5C14.2416 6.5 14.2818 6.54854 14.3107 6.57937L16.4983 4.5265ZM14.0424 3.5C13.9139 3.5 13.8113 3.51551 13.7901 3.51853C13.7875 3.5189 13.7843 3.51936 13.7838 3.51943C13.7826 3.51961 13.7829 3.51956 13.7837 3.51945C13.7853 3.51922 13.7921 3.51827 13.8016 3.51712C13.8212 3.51474 13.8559 3.51104 13.8998 3.50923L14.0234 6.50668C14.0817 6.50428 14.1299 6.49929 14.1627 6.49531C14.1788 6.49336 14.1921 6.49153 14.2002 6.49039C14.2043 6.48982 14.2078 6.48931 14.2098 6.48903C14.2126 6.48864 14.2126 6.48863 14.2132 6.48854C14.2139 6.48844 14.2089 6.48917 14.2015 6.49011C14.1937 6.49111 14.1817 6.49256 14.1666 6.49402C14.1358 6.49703 14.0932 6.5 14.0424 6.5V3.5ZM14.0234 3.50923C14.0672 3.51103 14.1017 3.51471 14.121 3.51705C14.1304 3.51818 14.1371 3.51911 14.1387 3.51934C14.1396 3.51946 14.1399 3.5195 14.1387 3.51933C14.1382 3.51926 14.135 3.5188 14.1324 3.51844C14.1125 3.51561 14.0095 3.5 13.8809 3.5V6.5C13.8295 6.5 13.7867 6.49697 13.7562 6.49399C13.7413 6.49254 13.7294 6.4911 13.7218 6.49014C13.7146 6.48922 13.7097 6.48851 13.7106 6.48863C13.7113 6.48873 13.7113 6.48873 13.7141 6.48913C13.7161 6.48942 13.7197 6.48993 13.7237 6.4905C13.7319 6.49163 13.7451 6.49345 13.7611 6.49538C13.7937 6.49932 13.8418 6.50429 13.8998 6.50668L14.0234 3.50923ZM13.8809 3.5C12.9547 3.5 12.0868 3.82032 11.4244 4.5274L13.6137 6.57847C13.6418 6.5485 13.6807 6.5 13.8809 6.5V3.5ZM11.4239 4.5279C10.7474 5.25066 10.5021 6.17375 10.5021 7.09273H13.5021C13.5021 6.69551 13.6014 6.59168 13.6142 6.57797L11.4239 4.5279ZM10.5021 7.09273C10.5021 7.62865 10.541 8.46745 10.6121 9.57844L13.6059 9.38695C13.535 8.27795 13.5021 7.52364 13.5021 7.09273H10.5021ZM10.6123 9.58266L10.9926 15.2767L13.986 15.0768L13.6057 9.38273L10.6123 9.58266ZM13.9725 17.9447C13.0795 17.9447 12.2535 18.2401 11.5788 18.8421L13.576 21.0806C13.6719 20.9951 13.7762 20.9447 13.9725 20.9447V17.9447ZM11.5746 18.8458C10.8937 19.4579 10.5 20.2728 10.5 21.2157H13.5C13.5 21.1917 13.5023 21.1781 13.5035 21.1723C13.5047 21.1668 13.5058 21.164 13.5069 21.1616C13.5076 21.1601 13.5206 21.1305 13.5802 21.0769L11.5746 18.8458ZM10.5 21.2157C10.5 22.169 10.8579 23.0531 11.6369 23.6869L13.5303 21.3598C13.5167 21.3488 13.5126 21.3432 13.5133 21.3441C13.5134 21.3442 13.514 21.345 13.5147 21.3461C13.5154 21.3473 13.5157 21.348 13.5156 21.3478C13.5155 21.3476 13.5147 21.3458 13.5135 21.3418C13.5122 21.3379 13.5104 21.3312 13.5084 21.3212C13.5045 21.3014 13.5 21.2673 13.5 21.2157H10.5ZM11.6376 23.6874C12.302 24.2275 13.0925 24.5 13.946 24.5V21.5C13.7632 21.5 13.6452 21.4532 13.5296 21.3593L11.6376 23.6874ZM13.946 24.5C14.7972 24.5 15.59 24.2378 16.2612 23.7051L14.3964 21.3552C14.2799 21.4476 14.1518 21.5 13.946 21.5V24.5ZM16.2623 23.7043C17.0625 23.0681 17.418 22.1706 17.418 21.2154H14.418C14.418 21.3231 14.3998 21.3588 14.402 21.3539C14.4026 21.3525 14.4046 21.3489 14.407 21.3458C14.4092 21.343 14.407 21.3467 14.3953 21.356L16.2623 23.7043ZM17.418 21.2154C17.418 20.2843 17.0381 19.4724 16.3684 18.8568L14.3381 21.0653C14.3943 21.117 14.4074 21.1463 14.4091 21.15C14.41 21.1522 14.418 21.1675 14.418 21.2154H17.418ZM16.3651 18.8538C15.6938 18.2403 14.8649 17.9447 13.9714 17.9447V20.9447C14.1689 20.9447 14.2609 20.9948 14.3414 21.0684L16.3651 18.8538Z" fill="#9382C2" mask="url(#path-2-inside-1_1154_6434)"/>
<defs>
<linearGradient id="paint0_linear_1154_6434" x1="13.9594" y1="0" x2="13.9789" y2="28" gradientUnits="userSpaceOnUse">
<stop stop-color="#EEDBFD"/>
<stop offset="0.265654" stop-color="#DBDEFD"/>
<stop offset="0.784194" stop-color="#E4D8FC"/>
<stop offset="1" stop-color="#D9B4EA"/>
</linearGradient>
</defs>
</svg>`;

      const infoWrap = document.createElement("div");
      const infoBlock = document.createElement("div");
      const infoText = document.createElement("p");
      const infoBtnClose = document.createElement("svg");

      infoWrap.classList.add("opacity", "info");
      infoBlock.classList.add("info_block");
      infoText.classList.add("rules_text", "info_text_picture");
      infoBtnClose.classList.add("rules_close");

      infoText.textContent =
          "Картина повествует о временах, когда Древней Руси угрожало монголо-татарское иго. На ней изображены могучие, храбрые люди, защитники отечества. Они зорко смотрят вдаль, обозревают местность в поиске врага, который грозится напасть на Великую Русь.";

      infoBtnClose.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5L5 15M5 5L15 15" stroke="#9382C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;

      game.append(infoWrap, infoImg);
      infoWrap.append(infoBlock);
      infoBlock.append(infoText, infoBtnClose);

      infoImg.onclick = function () {
        infoWrap.classList.toggle("opacity");
      };

      infoBtnClose.onclick = function () {
        infoWrap.classList.add("opacity");
      };

      //Создаем кнопку "Пропустить игру" для мобилки
      const gameBtnSkipMobile = document.createElement("button");
      gameBtnSkipMobile.classList.add(
          "game__btn",
          "game__btn--skip",
          "btn-reset",
          "game__btn--skip-picture",
          "adaptive"
      );
      gameBtnSkipMobile.textContent = "Пропустить игру";

      questionWrap.append(slide2Btn, gameBtnSkipMobile);

      //Создаем кнопку "Пропустить игру 2" для мобилки

      const gameBtnSkipMobile2 = document.createElement("button");
      gameBtnSkipMobile2.classList.add(
          "game__btn",
          "game__btn--skip",
          "btn-reset",
          "game__btn--skip-fillword2"
      );

      gameBtnSkipMobile2.textContent = "Пропустить игру";

      gameCenter.append(gameBtnSkipMobile2);

      gameBtnSkipMobile2.addEventListener("click", (e) => {
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
        });

        yesBtn.addEventListener("click", (e) => {
          e.preventDefault();
          axios.get('php/get_question.php')
              .then(response => {
                document.body.innerHTML = "";
                const question = createGameQuestion(response.data, 0);
                document.body.append(question);
              })
              .catch(error => {
                console.log(error)
              })
        });

        noBtn.addEventListener("click", (e) => {
          e.preventDefault();
          deniska.deniska.remove();
          game.classList.remove("game-blur");
        });
      });

      //Добавляем правила открытия модалки 'пропустить игру'
      gameBtnSkipMobile.addEventListener("click", (e) => {
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
          axios.get('php/get_question.php')
              .then(response => {
                document.body.innerHTML = "";
                const question = createGameQuestion(response.data, 0);
                document.body.append(question);
              })
              .catch(error => {
                console.log(error)
              })
        });

        noBtn.addEventListener("click", (e) => {
          e.preventDefault();
          deniska.deniska.remove();
          game.classList.remove("game-blur");
        });
      });

      //Отображаем описание по клику на стрелку
      slideBtn.addEventListener("click", () => {
        questionWrap.style.display = "block";
        gameBtnSkipMobile.style.display = "block";
        rulesBtnImg.style.display = "block";
        gameBlock.style.overflow = "hidden";
      });

      slide2Btn.addEventListener("click", () => {
        pictureWrapper.style.display = "block";
        questionWrap.style.display = "none";
        pictureWrapper.append(gameBtnSkipMobile2);
        infoImg.style.display = "block";
        gameBtnSkipMobile2.style.display = "block";
        gameBlock.style.overflowY = "scroll";
      });

      correctPicture.forEach((item) => {
        item.addEventListener("click", () => {
          setTimeout(() => {
            modalWrapper.style.display = "block";
          }, 3000);

          if (item.getAttribute("data-crt") === "true") {
            item.parentElement.parentElement.classList.add("correct");
          } else {
            item.parentElement.parentElement.classList.add("incorrect");
          }

          setTimeout(() => {
            pictureWrapper.style.display = "none";
          }, 3000);

          setTimeout(() => {
            modalWrapper.style.display = "none";
            pictureWrapper.style.display = "block";
            gameBtnSkipMobile.style.display = "none";
            document.querySelector(".game__btn--next").style.display = "block";
            document
                .querySelector(".game__btn--next")
                .addEventListener("click", (e) => {
                  axios.get('php/get_question.php')
                      .then(response => {
                        document.body.innerHTML = "";
                        const question = createGameQuestion(response.data, 0);
                        document.body.append(question);
                      })
                      .catch(error => {
                        console.log(error)
                      })
                });
          }, 6000);
        });
      });
    }
  }

  mediaQuery2.addListener(handleTabletChange);
  handleTabletChange2(mediaQuery2);

  return game;
};

// createPicture();
