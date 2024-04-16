import createTalker from './talker.js';
import createDeniska from './deniska.js';
import createPoint from './point.js';
import createRulesTablet from './rules-tablet.js';
import { createPuzzleGame } from './puzzle.js';
import { createFindExtra } from "./find-extra.js";


export function createGameSymbols(info, number) {
    const game = document.createElement('section');
    const gameTitle = document.createElement('h1');
    const gameSubtitle = document.createElement('h2');
    const gameBlock = document.createElement('div');
    const gameLeft = document.createElement('div');
    const gameRight = document.createElement('div');
    const gameBtnSkip = document.createElement('button');
    const gameBtnNext = document.createElement('button');
    const symbolsBlock = document.createElement('form');

    const pointBlock = createPoint();

    let points = JSON.parse(localStorage.getItem('points'));
    pointBlock.textContent = points;

    const questions = Object.values(info[number].questions)

    questions.forEach(item => {
        const symbolItem = document.createElement('div');
        const symbolItemBlock = document.createElement('div');
        const symbolImg = document.createElement('img');

        symbolItem.classList.add('symbols__item', 'symbol');
        symbolItemBlock.classList.add('symbol__block');
        symbolImg.classList.add('symbol__img');

        symbolImg.src = item.pic;

        const values = Object.values(item.var);

        values.forEach(el => {
            if (el !== '') {
                const label = document.createElement('label');
                const input = document.createElement('input');
                const button = document.createElement('span');

                button.textContent = el

                label.classList.add('symbol__label');
                input.classList.add('symbol__input');
                button.classList.add('symbol__radio');

                if (el === item.answer) input.classList.add('symbol__input--true');
                else input.classList.add('symbol__input--false');

                input.type = 'radio';
                input.name = `symbol-${questions.indexOf(item)}`;
                symbolItemBlock.append(label);
                label.append(input, button);

                input.addEventListener('change', (e) => {
                    input.classList.add('checked')
                    const attr = input.getAttribute('name');
                    const symbols = document.querySelectorAll(`[name="${attr}"]`);
                    symbols.forEach(el => el.disabled = true)

                    const inputs = document.querySelectorAll('.symbol__input.checked');

                    if (inputs.length == 4) {
                        const inputsTrue = document.querySelectorAll('.symbol__input.checked.symbol__input--true');
                        if (inputsTrue.length < 2) {
                            const deniska = createDeniska('К сожалению, угаданы не все значения символов!');
                            deniska.rulesDeniska.src = 'img/deniska-sad.webp';
                            deniska.gameBtnNext.addEventListener('click', (e) => {
                                e.preventDefault();
                                document.body.innerHTML = '';
                                if (info.length === 1 || number === info.length - 1) {
                                    axios.get('php/get_artgallery.php')
                                        .then(response => {                                          
                                            if (response.data.length != 0) {
                                                createPuzzleGame(response.data, 0);
                                            } else {
                                                const findExtra = createFindExtra();
                                                document.body.append(findExtra);
                                            }                                           
                                        })
                                        .catch(error => console.log(error))
                                } else {
                                    createGameSymbols(info, number + 1);
                                }
                            })

                            setTimeout(() => {
                                document.body.append(deniska.deniska);
                                document.querySelector('.game__btn--skip').style.display = 'none';
                                document.querySelector('.game__btn--next').style.display = 'block';
                            }, 800)

                        }
                        else {
                            const deniska = createDeniska('Отлично! Задание выполнено. Тебе начислен 1 балл.');
                            let points = JSON.parse(localStorage.getItem('points'));
                            points += 1;
                            localStorage.setItem('points', points)
                            const point = document.querySelector('.game__point');
                            point.textContent = points;
                            point.classList.add('animation');

                            deniska.gameBtnNext.addEventListener('click', (e) => {
                                e.preventDefault();
                                document.body.innerHTML = '';
                                if (info.length === 1 || number === info.length - 1) {
                                    axios.get('php/get_artgallery.php')
                                        .then(response => {
                                            if (response.data.length != 0) {
                                                createPuzzleGame(response.data, 0);
                                            } else {
                                                const findExtra = createFindExtra();
                                                document.body.append(findExtra);
                                            }  
                                        })
                                        .catch(error => console.log(error))
                                } else {
                                    createGameSymbols(info, number + 1);
                                }
                            })

                            setTimeout(() => {
                                document.body.append(deniska.deniska);
                                document.querySelector('.game__btn--skip').style.display = 'none';
                                document.querySelector('.game__btn--next').style.display = 'block';                              
                            }, 800)


                        }

                    }

                })
            }
        })


        symbolsBlock.append(symbolItem);
        symbolItem.append(symbolImg, symbolItemBlock);
    })


    // const items = [
    //     {
    //         id: 1,
    //         img: 'img/symbol-1.svg',
    //         inputs: [
    //             {
    //                 correct: false,
    //                 name: 'Солнце, лад, созвучие',
    //             },
    //             {
    //                 correct: true,
    //                 name: 'Братская помощь, солидарность',
    //             },
    //             {
    //                 correct: false,
    //                 name: 'Небесный свод, вселенная',
    //             },
    //         ]

    //     },
    //     {
    //         id: 2,
    //         img: 'img/symbol-2.svg',
    //         inputs: [
    //             {
    //                 correct: true,
    //                 name: 'Духовная и родовая связь',
    //             },
    //             {
    //                 correct: false,
    //                 name: 'Дом, кров, домашний приют'
    //             },
    //             {
    //                 correct: false,
    //                 name: 'Эпоха, период, течение времени'
    //             },

    //         ]
    //     },
    //     {
    //         id: 3,
    //         img: 'img/symbol-3.svg',
    //         inputs: [
    //             {
    //                 correct: false,
    //                 name: 'Верность, единство, любовь',
    //             },
    //             {
    //                 correct: false,
    //                 name: 'Жизненный путь, уклад',
    //             },
    //             {
    //                 correct: true,
    //                 name: 'Мысль, знание',
    //             },
    //         ]
    //     },
    //     {
    //         id: 4,
    //         img: 'img/symbol-4.svg',
    //         inputs: [
    //             {
    //                 correct: true,
    //                 name: 'Сила семьи, дух нации',
    //             },
    //             {
    //                 correct: false,
    //                 name: 'Мера грехов и доброты',
    //             },
    //             {
    //                 correct: false,
    //                 name: 'Равенство, понимание и принятие',
    //             },
    //         ]
    //     }
    // ]

    // items.forEach(item => {
    //     const symbolItem = document.createElement('div');
    //     const symbolItemBlock = document.createElement('div');
    //     const symbolImg = document.createElement('img');

    //     symbolItem.classList.add('symbols__item', 'symbol');
    //     symbolItemBlock.classList.add('symbol__block');
    //     symbolImg.classList.add('symbol__img');

    //     symbolImg.src = item.img;

    //     item.inputs.forEach(el => {
    //         const label = document.createElement('label');
    //         const input = document.createElement('input');
    //         const button = document.createElement('span');

    //         button.textContent = el.name

    //         label.classList.add('symbol__label');
    //         input.classList.add('symbol__input');
    //         button.classList.add('symbol__radio');

    //         if (el.correct == true) input.classList.add('symbol__input--true');
    //         if (el.correct == false) input.classList.add('symbol__input--false');

    //         input.type = 'radio';
    //         input.name = `symbol-${item.id}`;
    //         symbolItemBlock.append(label);
    //         label.append(input, button);

    //         input.addEventListener('change', (e) => {
    //             input.classList.add('checked')
    //             const attr = input.getAttribute('name');
    //             const symbols = document.querySelectorAll(`[name="${attr}"]`);
    //             symbols.forEach(el => el.disabled = true)

    //             const inputs = document.querySelectorAll('.symbol__input.checked');

    //             if (inputs.length == 4) {
    //                 const inputsTrue = document.querySelectorAll('.symbol__input.checked.symbol__input--true');
    //                 if (inputsTrue.length < 2) {
    //                     const deniska = createDeniska('К сожалению, угаданы не все значения символов!');
    //                     deniska.rulesDeniska.src = 'img/deniska-sad.webp';
    //                     deniska.gameBtnNext.addEventListener('click', (e) => {
    //                         e.preventDefault();
    //                         document.body.innerHTML = '';
    //                         const findExtra = createFindExtra();
    //                         document.body.append(findExtra);
    //                     })

    //                     setTimeout(() => {
    //                         document.body.append(deniska.deniska);
    //                         document.querySelector('.game__btn--skip').style.display = 'none';
    //                         document.querySelector('.game__btn--next').style.display = 'block';
    //                     }, 800)

    //                 }
    //                 else {
    //                     let points = JSON.parse(localStorage.getItem('points'));
    //                     points += 1;
    //                     localStorage.setItem('points', points)
    //                     const point = document.querySelector('.game__point');
    //                     point.textContent = points;
    //                     point.classList.add('animation');

    //                     const deniska = createDeniska('Отлично! Задание выполнено. Тебе начислен 1 балл.');

    //                     deniska.gameBtnNext.addEventListener('click', (e) => {
    //                         e.preventDefault();
    //                         document.body.innerHTML = '';
    //                         const findExtra = createFindExtra();
    //                         document.body.append(findExtra);
    //                     })

    //                     setTimeout(() => {
    //                         document.querySelector('.game__btn--skip').style.display = 'none';
    //                         document.querySelector('.game__btn--next').style.display = 'block';
    //                         document.body.append(deniska.deniska);
    //                     }, 800)


    //                 }

    //             }

    //         })
    //     })



    //     symbolsBlock.append(symbolItem);
    //     symbolItem.append(symbolImg, symbolItemBlock);
    // })


    gameBtnSkip.addEventListener('click', (e) => {
        e.preventDefault();

        const deniska = createDeniska('При переходе к следующей игре ты, к сожалению, не получишь балл за эту игру. Продолжать?');
        document.body.append(deniska.deniska);
        deniska.rulesDeniska.src = 'img/deniska-sad.webp';
        game.classList.add('game-blur');
        const btns = document.createElement('div');
        const yesBtn = document.createElement('button');
        const noBtn = document.createElement('button');

        yesBtn.textContent = 'Да';
        noBtn.textContent = 'Нет';

        btns.classList.add('btns-group');
        yesBtn.classList.add('btn-reset', 'game__btn', 'game__btn--yes', 'game__btn--next');
        noBtn.classList.add('btn-reset', 'game__btn', 'game__btn--no', 'game__btn--next');
        btns.append(yesBtn, noBtn);
        deniska.rulesText.append(btns);

        yesBtn.addEventListener('click', (e) => {
            document.body.innerHTML = '';
            if (info.length === 1 || number === info.length - 1) {
                axios.get('php/get_artgallery.php')
                    .then(response => {
                        if (response.data.length != 0) {
                            createPuzzleGame(response.data, 0);
                        } else {
                            const findExtra = createFindExtra();
                            document.body.append(findExtra);
                        }  
                    })
                    .catch(error => console.log(error))
            } else {
                createGameSymbols(info, number + 1);
            }
        })

        noBtn.addEventListener('click', (e) => {
            e.preventDefault();
            deniska.deniska.remove();
            game.classList.remove('game-blur');
        })



    })


    gameBtnNext.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.innerHTML = '';
        console.log(info.length, number)
        if (info.length === 1 || number === info.length - 1) {
            axios.get('php/get_artgallery.php')
                .then(response => {
                    if (response.data.length != 0) {
                        createPuzzleGame(response.data, 0);
                    } else {
                        const findExtra = createFindExtra();
                        document.body.append(findExtra);
                    }  
                })
                .catch(error => console.log(error))
        } else {
            createGameSymbols(info, number + 1);
        }

    })

    // const gameRules = createTalker('Что обозначают эти символы? Выбери правильный вариант ответа.');
    const gameRules = createTalker(info[number].description);

    game.classList.add('game', 'symbols');
    gameTitle.classList.add('game__title');
    gameSubtitle.classList.add('game__subtitle');
    gameBlock.classList.add('game__block');
    gameLeft.classList.add('game__left');
    gameRight.classList.add('game__right');
    gameBtnSkip.classList.add('game__btn', 'game__btn--skip', 'btn-reset');
    gameBtnNext.classList.add('game__btn', 'game__btn--next', 'btn-reset');
    symbolsBlock.classList.add('symbols__form');


    gameTitle.textContent = 'Краеведческий калейдоскоп';
    gameSubtitle.innerHTML = info[number].title
    // gameSubtitle.innerHTML = `Символы <span class="blue-text">Чувашии</span> и их значение`;
    gameBtnSkip.textContent = 'Пропустить игру';
    gameBtnNext.textContent = 'Следующая игра';


    game.classList.add('game', 'symbols')


    document.body.append(game);
    game.append(gameTitle, gameSubtitle, gameBlock, pointBlock);
    gameBlock.append(gameLeft, gameRight);
    gameLeft.append(gameRules.gameRules, gameBtnSkip, gameBtnNext);
    gameRight.append(symbolsBlock);



    gameRules.rulesBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // gameBtnNext.remove();

        const rulesBlock = createRulesTablet(info[number].description);

        // const rulesBlock = createRulesTablet('Что обозначают эти символы? Выбери правильный вариант ответа.');

        game.append(rulesBlock);
        gameRight.style.display = 'block';
        gameRules.gameRules.style.display = 'none';
        gameBtnSkip.style.display = 'block';
        gameBlock.style.paddingBottom = '0';
        gameBlock.style.marginTop = '0';
        gameLeft.style.paddingTop = '0';
        gameBlock.style.overflowY = 'scroll';

    })


    return game;
}
