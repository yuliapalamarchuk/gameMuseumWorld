import createTalker from "./talker.js";
import createPoint from "./point.js";
import createDeniska from "./deniska.js";
import { createFinal } from "./final.js";

export const labyrinthGame = () => {
  //Создаем section game и присваиваем классы
  const game = document.createElement("section");
  game.classList.add("game", "labyrinth-game");

  //Создаем заголовки, присваиваем классы и пишем текст
  const gameTitle = document.createElement("h1");
  gameTitle.classList.add("game__title", "game__title-labyrinth");

  const gameSubtitle = document.createElement("h2");
  gameSubtitle.classList.add("game__subtitle");

  gameTitle.textContent = "Таланты Чувашской земли";
  gameSubtitle.innerHTML = "Лабиринт";

  //ОЧКИ
  const pointBlock = createPoint();

  let points = JSON.parse(localStorage.getItem("points"));
  pointBlock.textContent = points;

  //Создаем GAMEBLOCK со всем содержимым игры
  const gameBlock = document.createElement("div");
  gameBlock.classList.add("game__block", "game__block-labyrinth");

  //Для говоруши div GAMELEFT
  const gameLeft = document.createElement("div");
  gameLeft.classList.add("game__left", "game__left-labyrinth");

  //Сам Говоруша
  const gameRules = createTalker(
    "Найди путь от музея «Научно-технический музей истории трактора» к музею «Бичурин и современность»."
  );

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

  //Модалка пропустить игру
  const gameBtnSkip = document.createElement("button");
  const gameBtnNext = document.createElement("button");
  const gameBtnAccept = document.createElement("button");

  gameBtnSkip.addEventListener("click", (e) => {
    e.preventDefault();
    const deniska = createDeniska(
      "При переходе на следующую страницу ты не получишь балл за эту игру.Продолжать?"
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
      axios
        .get("php/get_prize.php")
        .then((response) => {
          const finalGame = createFinal(response.data, 0);
          document.body.append(finalGame);
        })
        .catch((error) => console.log(error));
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
    "game__btn--skip-labyrinth"
  );
  gameBtnNext.classList.add("game__btn", "game__btn--next", "btn-reset");

  gameBtnAccept.classList.add(
    "game__btn",
    "btn_rules",
    "game-crossword__btn",
    "game-crossword__btn--next",
    "hidden",
    "game-btn-accept-lab"
  );

  gameBtnSkip.textContent = "Пропустить игру";
  gameBtnNext.textContent = "Продолжить";
  gameBtnAccept.textContent = "Принять ответ";

  gameBtnNext.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.innerHTML = "";
    axios
      .get("php/get_prize.php")
      .then((response) => {
        const finalGame = createFinal(response.data, 0);
        document.body.append(finalGame);
      })
      .catch((error) => console.log(error));
  });

  //GAMECENTER с лабиринтом
  const gameCenter = document.createElement("div");
  gameCenter.classList.add("game__center", "game__center-labyrinth");

  //Начало и конец пути тексты
  const museumStart = document.createElement("p");
  museumStart.classList.add("museum");
  museumStart.textContent = "Музей «Бичурин и современность»";

  const museumEnd = document.createElement("p");
  const museumText = document.createElement("span");
  museumText.textContent = "«Научно-технический музей истории трактора»";
  museumText.classList.add("museumText");
  museumEnd.append(museumText);
  museumEnd.classList.add("museum-end");

  const labyrinthWrap = document.createElement("div");
  labyrinthWrap.classList.add("labyrinth-wrap");

  const canvasLab = document.createElement("canvas");
  canvasLab.id = "canvas";
  canvasLab.classList.add("canvas");
  gameCenter.append(labyrinthWrap, museumStart, museumEnd);
  labyrinthWrap.append(canvasLab);
  let logicLabirint = (canvas) => {
    let mobile = false;
    let positionAdapt;
    let postionCollision;
    let collisionAreaSize;
    let positionX;
    let positionY;
    let finished = false;
    let trajectory = [];
    let mazeImg = new Image();
    let faceImg = new Image();
    let context = canvas.getContext("2d");
    if (window.innerWidth < 768) {
      mobile = true;
      positionX = 190;
      positionY = 10;
      mazeImg.src = "img/maze_mob.png";
      faceImg.src = "img/face_mob.png";
      positionAdapt = 15;
      postionCollision = 10;
      collisionAreaSize = 5;
    } else {
      collisionAreaSize = 15;
      postionCollision = 22;
      positionAdapt = 20;
      positionX = 550;
      positionY = 40;
      mobile = false;
      mazeImg.src = "img/maze.png";
      faceImg.src = "img/face.png";
      positionX = 550;
      positionY = 40;
    }

    // Начальная позиция
    let x = positionX;
    let y = positionY;

    // Флаг для отслеживания зажатой кнопки мыши
    let isMouseDown = false;

    // Обработка начала движения мыши
    canvas.addEventListener("mousedown", function () {
      isMouseDown = true;
    });

    // Обработка окончания движения мыши
    canvas.addEventListener("mouseup", function () {
      isMouseDown = false;
    });

    // Обработка выхода за пределы области холста
    canvas.addEventListener("mouseleave", function () {
      isMouseDown = false;
    });

    // Отрисовать фон лабиринта
    drawMaze();

    // Обработка движения мыши и тача
    canvas.addEventListener("mousemove", processMouseMove);
    canvas.addEventListener("touchmove", processTouchMove);

    // Обработка начала движения мыши и тача
    canvas.addEventListener("mousedown", function () {
      isMouseDown = true;
      gameBtnAccept.classList.remove("hidden");
    });
    gameBtnAccept.addEventListener("click", function () {
      const deniska = createDeniska("Увы, лабиринт не пройден.");
      deniska.rulesDeniska.src = "img/deniska-sad.webp";
      setTimeout(() => {
        document.body.append(deniska.deniska);
        document.querySelector(".game__btn--skip").style.display = "none";
        document.querySelector(".game__btn--next").style.display = "block";
      }, 800);
      setTimeout(() => {
        gameBtnAccept.style.display = "none";
      }, 1000);
    });
    canvas.addEventListener("touchstart", function () {
      isMouseDown = true;
      gameBtnAccept.classList.remove("hidden");
      gameBtnAccept.addEventListener("click", function () {
        const deniska = createDeniska("Увы, лабиринт не пройден.");
        deniska.rulesDeniska.src = "img/deniska-sad.webp";
        setTimeout(() => {
          document.body.append(deniska.deniska);
          document.querySelector(".game__btn--skip").style.display = "none";
          document.querySelector(".game__btn--next").style.display = "block";
        }, 800);
        setTimeout(() => {
          gameBtnAccept.style.display = "none";
        }, 1000);
      });
    });

    // Обработка окончания движения мыши и тача
    canvas.addEventListener("mouseup", function () {
      isMouseDown = false;
    });
    canvas.addEventListener("touchend", function () {
      isMouseDown = false;
    });
    window.onload = function () {
      context.drawImage(faceImg, x, y);
      faceImg.classList.add("faceimg");
    };

    // Отрисовка фона
    function drawMaze() {
      mazeImg.onload = function () {
        canvas.width = mazeImg.width;
        canvas.height = mazeImg.height;
        faceImg.width = 20;
        faceImg.height = 20;
        // Рисуем лабиринт
        context.drawImage(mazeImg, 0, 0);
        // Рисуем значок
        context.drawImage(faceImg, x, y);
      };
    }

    // Обработка движения мыши
    function processMouseMove(e) {
      if (isMouseDown) {
        handleMovement(
          e.clientX - canvas.getBoundingClientRect().left - 20,
          e.clientY - canvas.getBoundingClientRect().top - 20
        );
      }
    }

    // Обработка движения тача
    function processTouchMove(e) {
      if (isMouseDown) {
        e.preventDefault();
        let touch = e.touches[0];
        let rect = canvas.getBoundingClientRect();
        let scaleX = canvas.width / rect.width;
        let scaleY = canvas.height / rect.height;
        let x = (touch.clientX - rect.left) * scaleX;
        let y = (touch.clientY - rect.top) * scaleY;
        handleMovement(x, y);
      }
    }

    // Обработка движения
    function handleMovement(newX, newY) {
      // Проверка столкновений в новой позиции
      if (
        //Чтобы не было перескоков
        !checkForCollision(newX, newY) &&
        x - newX <= positionAdapt &&
        newX - x <= positionAdapt &&
        y - newY <= positionAdapt &&
        newY - y <= positionAdapt
      ) {
        canvas.style.cursor = "grab";
        // Обновляем текущую позицию если игра не пройдена
        if (!finished) {
          x = newX;
          y = newY;
        }

        // Добавляем текущую позицию в траекторию с расстоянием между точками
        if (mobile) {
          if (
            trajectory.length === 0 ||
            distance(trajectory[trajectory.length - 1], { x: x, y: y }) > 25
          ) {
            trajectory.push({ x: x, y: y });
          }
        } else {
          if (
            trajectory.length === 0 ||
            distance(trajectory[trajectory.length - 1], { x: x, y: y }) > 50
          ) {
            trajectory.push({ x: x, y: y });
          }
        }

        // Очищаем холст
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Перерисовываем фон лабиринта
        context.drawImage(mazeImg, 0, 0);

        // Перерисовываем значок на новой позиции
        context.drawImage(faceImg, x, y);

        // Рисуем траекторию
        drawTrajectory();
        // Проверяем, достиг ли пользователь финиша
        if (mobile === true) {
          if (y > 210 && x > 240) {
            // Ваш код для завершения игры
            isMouseDown = false;

            canvas.style.cursor = "not - allowed";
            if (!finished) {
              pointBlock.classList.add("animation");
              let points = JSON.parse(localStorage.getItem("points"));
              points += 1;

              localStorage.setItem("points", points);
              pointBlock.textContent = points;
              const deniska = createDeniska(
                "Отлично! Задание выполнено. Тебе начислен 1 балл."
              );
              gameBtnAccept.style.display = "none";
              setTimeout(() => {
                document.body.append(deniska.deniska);
                document.querySelector(".game__btn--skip").style.display =
                  "none";
                document.querySelector(".game__btn--next").style.display =
                  "block";
              }, 800);
            }
            finished = true;
          }
        } else {
          if (y > 630 && x > 700) {
            // Ваш код для завершения игры
            isMouseDown = false;

            canvas.style.cursor = "not - allowed";
            if (!finished) {
              pointBlock.classList.add("animation");
              let points = JSON.parse(localStorage.getItem("points"));
              points += 1;

              localStorage.setItem("points", points);
              pointBlock.textContent = points;
              const deniska = createDeniska(
                "Отлично! Задание выполнено. Тебе начислен 1 балл."
              );
              gameBtnAccept.style.display = "none";
              setTimeout(() => {
                document.body.append(deniska.deniska);
                document.querySelector(".game__btn--skip").style.display =
                  "none";
                document.querySelector(".game__btn--next").style.display =
                  "block";
              }, 800);
            }
            finished = true;
          }
        }
      }
    }

    // Проверка столкновений
    function checkForCollision(newX, newY) {
      // Определяем область для проверки столкновений
      let checkArea = context.getImageData(
        newX - collisionAreaSize / 2,
        newY - collisionAreaSize / 2 + postionCollision,
        collisionAreaSize + 20,
        collisionAreaSize
      );
      let pixels = checkArea.data;

      // Определение цветов
      const wallColor = [206, 162, 235];

      // Перебираем пиксели в области
      for (let i = 0; i < pixels.length; i += 4) {
        let red = pixels[i];
        let green = pixels[i + 1];
        let blue = pixels[i + 2];

        // Проверяем наличие цвета стены
        if (compareColors([red, green, blue], wallColor)) {
          // Скрываем курсор при попадании на стену
          canvas.style.cursor = "not-allowed";
          return true;
        }
      }

      // Если курсор не над стеной, восстанавливаем стандартный стиль курсора
      canvas.style.cursor = "auto";

      // Столкновений не было
      return false;
    }

    // Функция для сравнения цветов
    function compareColors(color1, color2) {
      return color1.every((value, index) => value === color2[index]);
    }

    // Блокировка обработки клавиш клавиатуры
    /* window.addEventListener("keydown", function (e) {
           e.preventDefault();
         });*/

    function drawTrajectory() {
      for (let i = 0; i < trajectory.length; i++) {
        context.beginPath();
        if (mobile === true) {
          context.arc(
            trajectory[i].x,
            trajectory[i].y,
            5,
            0,
            2 * Math.PI,
            false
          );
        } else {
          context.arc(
            trajectory[i].x,
            trajectory[i].y,
            10,
            0,
            2 * Math.PI,
            false
          );
        }

        context.fillStyle = "rgba(101, 76, 132, 1)";
        context.fill();
      }
    }

    function distance(point1, point2) {
      return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
      );
    }
  };

  //GAMERIGHT для Дениски
  const gameRight = document.createElement("div");
  gameRight.classList.add("game__right", "game__right-labyrinth");

  //Создаем вложенность созданных элементов
  document.body.append(game);
  game.append(gameTitle, gameSubtitle, gameBlock, pointBlock);
  gameBlock.append(gameLeft, gameCenter, gameRight);
  gameLeft.append(gameRules.gameRules, gameBtnSkip, gameBtnNext, gameBtnAccept);
  gameCenter.append(labyrinthWrap);

  //АДАПТИВ

  //Правила для планшета

  //Правила для мобилки
  const mediaQuery2 = window.matchMedia("(max-width: 768px)");

  function handleTabletChange2(e) {
    if (e.matches) {
      const slideBtn = document.querySelector(".rules__btn");

      gameCenter.style.display = "none";

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
      rulesText.classList.add("rules_text", "rules_text-labyrinth");
      rulesBtnClose.classList.add("rules_close");

      rulesText.textContent =
        "Найди путь от музея «Научно-технический музей истории трактора» к музею «Бичурин и современность».";
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

      // //Создаем кнопку "Пропустить игру" для мобилки
      // const gameBtnSkipMobile = document.createElement("button");
      // gameBtnSkipMobile.classList.add(
      //   "game__btn",
      //   "game__btn--skip",
      //   "btn-reset",
      //   "game__btn--skip-picture",
      //   "adaptive"
      // );
      // gameBtnSkipMobile.textContent = "Пропустить игру";

      // gameCenter.append(gameBtnSkipMobile);

      slideBtn.addEventListener("click", () => {
        gameBtnNext.textContent = "Продолжить";

        gameBtnNext.addEventListener("click", (e) => {
          e.preventDefault();
          document.body.innerHTML = "";
          axios
            .get("php/get_prize.php")
            .then((response) => {
              const finalGame = createFinal(response.data, 0);
              document.body.append(finalGame);
            })
            .catch((error) => console.log(error));
        });

        gameBtnSkip.style.display = "block";
        rulesBtnImg.style.display = "block";
      });
    }
  }

  mediaQuery2.addListener(handleTabletChange2);
  handleTabletChange2(mediaQuery2);
  logicLabirint(canvasLab);
};

// labyrinthGame();
