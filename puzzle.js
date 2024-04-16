import createPoint from "./point.js";
import createDeniska from "./deniska.js";
import createTalker from "./talker.js";
import createRulesTablet from "./rules-tablet.js";
import { createFindExtra } from "./find-extra.js";

export function createPuzzleGame(info, number) {
  const game = document.createElement("section");
  const boardPuzzle = document.createElement("div");
  const boardPuzzleWrap = document.createElement("div");
  boardPuzzle.id = "pieces";
  boardPuzzleWrap.classList.add("puzzle__wrap");
  const gameTitle = document.createElement("h1");
  const gameSubtitle = document.createElement("h2");
  const gameBlock = document.createElement("div");
  const gameLeft = document.createElement("div");
  const gameRight = document.createElement("div");
  const gameBtnSkip = document.createElement("button");
  const gameBtnNext = document.createElement("button");

  const pointBlock = createPoint();
  let points = JSON.parse(localStorage.getItem("points") ?? 0);
  pointBlock.textContent = points;

  console.log(info);

  // Слева
  gameBtnSkip.addEventListener("click", (e) => {
    e.preventDefault();
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

    deniska.gameRules.classList.add("game__rules_pazzle");
    btns.classList.add("btns-group");
    yesBtn.classList.add(
      "btn-reset",
      "game__btn",
      "game__btn--yes",
      "game__btn--next",
      "pazzle-yes"
    );
    noBtn.classList.add(
      "btn-reset",
      "game__btn",
      "game__btn--no",
      "game__btn--next",
      "pazzle-no"
    );
    btns.append(yesBtn, noBtn);
    deniska.rulesText.append(btns);

    yesBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.innerHTML = "";
      if (info.length === 1 || number === info.length - 1) {
        const findExtra = createFindExtra();
        document.body.append(findExtra);
      } else {
        createPuzzleGame(info, number + 1);
      }
    });

    noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      deniska.deniska.remove();
      game.classList.remove("blur");
    });
  });

  const assistantPerrot = createTalker(
    "Наш пазл состоит из 12 фрагментов. Собери его и ты увидишь известную картину."
  );

  //   Добавление элементов
  game.classList.add("game", "pazzle");
  gameTitle.classList.add("game__title", "pazzle__title");
  gameSubtitle.classList.add("game__subtitle", "pazzle__subtitle");
  gameBlock.classList.add("game__block", "pazzle__game-block", "flex");
  gameLeft.classList.add("pazzle__left", "flex");
  gameRight.classList.add("pazzle__right");
  gameBtnSkip.classList.add(
    "game__btn",
    "game__btn--skip",
    "btn-reset",
    "pazzle__btn-skip"
  );
  gameBtnNext.classList.add(
    "game__btn",
    "game__btn--next",
    "btn-reset",
    "pazzle__btn-next"
  );
  assistantPerrot.gameRules.classList.add("game__rules_pazzle");
  assistantPerrot.rulesText.classList.add("rules__text_pazzle");
  assistantPerrot.rulesBtn.classList.add("rules__btn_pazzle");

  gameTitle.textContent = "Художественная галерея";
  gameSubtitle.innerHTML = "Собери картину";
  gameBtnSkip.textContent = "Пропустить игру";
  gameBtnNext.textContent = "Следующая игра";

  gameBtnNext.addEventListener("click", (e) => {
    document.body.innerHTML = "";
    console.log(info.length, number);
    if (info.length === 1 || number === info.length - 1) {
      const findExtra = createFindExtra();
      document.body.append(findExtra);
    } else {
      createPuzzleGame(info, number + 1);
    }
  });

  document.body.append(game);
  game.append(gameTitle, gameSubtitle, gameBlock, pointBlock);
  gameBlock.append(gameLeft, gameRight);
  gameLeft.append(assistantPerrot.gameRules, gameBtnSkip, gameBtnNext);
  gameRight.append(boardPuzzleWrap);
  boardPuzzleWrap.append(boardPuzzle);

  // Справа
  const pazzleImg = document.createElement("img");
  const pazzleNameLeft = document.createElement("div");
  const pazzleNameWrap = document.createElement("div");
  const pazzleNameBottom = document.createElement("div");
  const pazzleNameText = document.createElement("p");
  const pazzleNameAuthor = document.createElement("p");

 
  pazzleImg.src =  info[number].picture;
  // pazzleImg.src = "img/pazzle.webp";
  pazzleImg.style.width = "100%";
  pazzleImg.style.height = "100%";
  pazzleNameText.innerHTML = info[number].name;
  pazzleNameAuthor.innerHTML = info[number].artist;
  // pazzleNameText.textContent = "Утро в сосновом лесу";
  // pazzleNameAuthor.textContent = "И. И. Шишкин";

  pazzleNameWrap.classList.add("pazzle__name-wrap", "flex");
  pazzleNameBottom.classList.add("pazzle__name-bottom");
  pazzleNameLeft.classList.add("pazzle__name-left");
  pazzleNameText.classList.add("pazzle__name-text");
  pazzleNameAuthor.classList.add("pazzle__name-author");

  boardPuzzle.append(pazzleImg);
  gameRight.append(pazzleNameLeft);
  pazzleNameLeft.append(pazzleNameWrap);
  pazzleNameWrap.append(pazzleNameText, pazzleNameAuthor, pazzleNameBottom);

  const mobileMediaQueryList = window.matchMedia("(max-width: 768px)");
  const tabletMediaQueryList = window.matchMedia("(max-width: 1024px)");

  // Логика паззла
  function puzzleGame() {
    //pieces
    const rows = 3;
    const columns = 4;
    let currTile;
    let otherTile;
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
      pieces.push(i.toString());
    }

    const originalPieces = [...pieces];

    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
      let j = Math.floor(Math.random() * pieces.length);
      let tmp = pieces[i];
      pieces[i] = pieces[j];
      pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
      let tile = document.createElement("img");
      tile.src = `./img/puzzle/${info[number].ID}puzzle${pieces[i]}.webp`;
      // tile.src = "./img/puzzle" + pieces[i] + ".jpg";

      if (tabletMediaQueryList.matches) {
        tile.addEventListener("touchstart", touchStart, false); // Начало касания на изображении
        tile.addEventListener("touchmove", touchMove, false); // Движение изображением
        tile.addEventListener("touchend", touchEnd, false); // Конец касания на изображении

        // Новые функции для касания
        function touchStart(e) {
          e.preventDefault();
          currTile = this;
        }

        function touchMove(e) {
          e.preventDefault();
        }

        function touchEnd(e) {
          e.preventDefault();
          const touch = e.changedTouches[0];

          // Получение элемента по координатам
          otherTile = document.elementFromPoint(touch?.clientX, touch?.clientY);

          // Логика обработки перетаскивания, аналогичная dragEnd
          let currImg = currTile.src;
          let currIndex = pieces.indexOf(currImg.split("puzzle/")[1].split('puzzle')[1].split(".")[0]);
          let otherImg = otherTile.src;
          let otherIndex = pieces.indexOf(otherImg.split("puzzle/")[1].split('puzzle')[1].split(".")[0]);

          currTile.src = otherImg;
          otherTile.src = currImg;

          const currentElement = pieces[currIndex];
          const otherElement = pieces[otherIndex];

          pieces[otherIndex] = currentElement;
          pieces[currIndex] = otherElement;

          checkPazzle();
        }
      } else {
        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver); //drag an image
        tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
        tile.addEventListener("drop", dragDrop); //drop an image onto another one
        tile.addEventListener("dragend", dragEnd); //after you completed dragDrop

        //DRAG TILES
        function dragStart() {
          currTile = this; //this refers to image that was clicked on for dragging
        }

        function dragOver(e) {
          e.preventDefault();
        }

        function dragEnter(e) {
          e.preventDefault();
        }

        function dragDrop() {
          otherTile = this; //this refers to image that is being dropped on
        }

        function dragEnd() {
          let currImg = currTile.src;
          let currIndex = pieces.indexOf(currImg.split("puzzle/")[1].split('puzzle')[1].split(".")[0]);

          let otherImg = otherTile.src;

          let otherIndex = pieces.indexOf(otherImg.split("puzzle/")[1].split('puzzle')[1].split(".")[0]);
          
          currTile.src = otherImg;
          otherTile.src = currImg;

          const currentElement = pieces[currIndex];
          const otherElement = pieces[otherIndex];
          
          console.log(currentElement, otherElement)

          pieces[otherIndex] = currentElement;
          pieces[currIndex] = otherElement;

          checkPazzle();
        }
      }

      // Функция для проверки правильного порядка изображений
      function checkPuzzleCompletion() {
          console.log(originalPieces, pieces)
        return originalPieces.every((item, index) => pieces[index] === item);
      }

      function checkPazzle() {
          console.log(checkPuzzleCompletion())
        if (checkPuzzleCompletion()) {
          const images = document.querySelectorAll("#pieces img");
          images.forEach((image) => {
            image.style.border = "none";
          });

          const deniskaSuccess = createDeniska(
            "Отлично! Задание выполнено. Тебе начислен 1 балл."
          );
          deniskaSuccess.gameRules.classList.add("deniska_pazzle");
          deniskaSuccess.rulesText.classList.add("deniska_pazzle-text");

          setTimeout(() => {
            if (mobileMediaQueryList.matches) {
              game.append(deniskaSuccess.deniska);
              deniskaSuccess.gameBtnNext.addEventListener("click", (e) => {
                document.body.innerHTML = "";
                if (info.length === 1 || number === info.length - 1) {
                  const findExtra = createFindExtra();
                  document.body.append(findExtra);
                } else {
                  createPuzzleGame(info, number + 1);
                }
              });
            } else {
              gameRight.append(deniskaSuccess.deniska);
            }
          }, 4000);

          // Очки
          let points = JSON.parse(localStorage.getItem("points"));
          points += 1;
          localStorage.setItem("points", points);
          const point = document.querySelector(".game__point");
          point.textContent = points;
          point.classList.add("animation");

          gameBtnSkip.classList.add("hidden");
          gameBtnNext.style.display = "block";
        }
      }
      document.getElementById("pieces").append(tile);
    }
  }

  // -----------------

  setTimeout(() => {
    boardPuzzle.removeChild(pazzleImg);
    puzzleGame();
  }, 2000);

  // Адаптив
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  function handleTabletChange(e) {
    if (e.matches) {
      document.querySelector(".rules__btn").addEventListener("click", (e) => {
        gameLeft.classList.add("hidden");
        gameRight.style.display = "flex";

        const rulesBlock = createRulesTablet(
          "Наш пазл состоит из 12 фрагментов. Собери его и ты увидишь известную картину."
        );
        game.append(rulesBlock);
      });

      gameRight.append(gameBtnSkip);
      pointBlock.style.position = "absolute";
      pointBlock.style.top = "12px";
      pointBlock.style.right = "20px";
    }
  }
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);
}


