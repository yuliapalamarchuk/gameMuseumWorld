import createLocker from './locker.js';
import createLockerTablet from './lockerTablet.js';
import createTalker from './talker.js';
import createDeniska from './deniska.js';
import createRulesTablet from './rules-tablet.js';
import createPoint from './point.js';
import {createCrossword} from './crossword.js'

export function createGameIlempi() {
    const game = document.createElement('section');
    const gameTitle = document.createElement('h1');
    const gameSubtitle = document.createElement('h2');
    const gameBlock = document.createElement('div');
    const gameLeft = document.createElement('div');
    const gameRight = document.createElement('div');
    const gameBtnSkip = document.createElement('button');
    const gameBtnNext = document.createElement('button');
    const fittingBlock = document.createElement('div');

    const girlPodium = document.createElement('div');
    const girlBlock = document.createElement('div');
    const girl = document.createElement('img');
    const headGirl = document.createElement('img');
    const dressGirl = document.createElement('img');
    const shoesGirl = document.createElement('img');

    const clothBtns = document.createElement('div');
    const headBtn = document.createElement('button');
    const dressBtn = document.createElement('button');
    const shoesBtn = document.createElement('button');

    const clothBlock = document.createElement('div');

    const closeClothes = document.createElement('button');

    gameTitle.textContent = 'Краеведческий калейдоскоп';
    gameSubtitle.innerHTML = `Наряди <span class="blue-text">Илемпи</span> в чувашский национальный костюм`;
    gameBtnSkip.textContent = 'Пропустить игру';
    gameBtnNext.textContent = 'Следующая игра';
    girl.src = 'img/girl.webp';
    girl.alt = 'Девочка';


    const podium = createPodium();
    const shine = createShine();

    game.classList.add('game', 'ilempi');
    gameTitle.classList.add('game__title');
    gameSubtitle.classList.add('game__subtitle');
    gameBlock.classList.add('game__block');
    gameLeft.classList.add('game__left');
    gameRight.classList.add('game__right');

    fittingBlock.classList.add('game__fitting');
    gameBtnSkip.classList.add('game__btn', 'game__btn--skip', 'btn-reset');
    gameBtnNext.classList.add('game__btn', 'game__btn--next', 'btn-reset');
    girlPodium.classList.add('game__podium');
    girl.classList.add('girl');
    girlBlock.classList.add('game__girl', 'girl');
    podium.classList.add('podium');
    shine.classList.add('shine');
    headGirl.classList.add('girl__head');
    dressGirl.classList.add('girl__dress');
    shoesGirl.classList.add('girl__shoes');
    clothBtns.classList.add('game__btns', 'btns');
    headBtn.classList.add('btns__item--head', 'btn-reset', 'btns__item');
    dressBtn.classList.add('btns__item--dress', 'btn-reset', 'btns__item');
    shoesBtn.classList.add('btns__item--shoes', 'btn-reset', 'btns__item');
    clothBlock.classList.add('game__clothes');
    closeClothes.classList.add('close-btn', 'btn-reset')


    headBtn.setAttribute('data-code', 'head');
    dressBtn.setAttribute('data-code', 'dress');
    shoesBtn.setAttribute('data-code', 'shoes');


    headBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M9.99988 8.75C12.9165 8.54167 14.1665 8.75 14.1665 8.75C13.8339 6.56233 11.7006 4.79367 9.47713 5.02737C7.26603 5.25976 5.51551 7.38959 5.62488 9.58333C5.62871 9.66027 7.08321 8.95833 9.99988 8.75ZM9.99988 9.16667C5.62488 9.58333 4.16651 10.625 3.74984 10.8333C3.33317 11.0417 1.82392 11.935 1.93134 12.9571C2.09889 14.5512 5.94513 15.4537 10.5224 14.9726C15.0997 14.4915 18.6743 12.8091 18.5067 11.2149C18.4348 10.5311 17.4393 10.1478 17.2915 10C17.1437 9.8522 14.3749 8.75 9.99988 9.16667Z"/>
  </svg>`

    dressBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_603_2813)">
    <path d="M5.17619 6.26788C5.09001 6.12697 5.03405 5.9697 5.01186 5.80603C4.98967 5.64236 5.00173 5.47586 5.04728 5.3171C5.07826 5.18529 5.13107 5.0596 5.20353 4.94522L6.87462 2.5546V0.624908C6.87443 0.539229 6.89186 0.454425 6.92583 0.375766C6.9598 0.297106 7.00957 0.22627 7.07207 0.167658C7.13456 0.109046 7.20844 0.0639089 7.28912 0.0350514C7.36979 0.0061939 7.45554 -0.00576811 7.54103 -9.16049e-05C7.70202 0.0137322 7.85177 0.0880999 7.96008 0.208008C8.06839 0.327916 8.12719 0.48444 8.12462 0.646002V2.53272L8.53478 3.04678C8.71332 3.27071 8.94096 3.45058 9.20011 3.5725C9.45926 3.69442 9.74297 3.75512 10.0293 3.74991C10.3121 3.74191 10.5896 3.67176 10.8423 3.54444C11.0949 3.41711 11.3164 3.23574 11.491 3.01319L11.8746 2.53272V0.624908C11.8744 0.539229 11.8919 0.454425 11.9258 0.375766C11.9598 0.297106 12.0096 0.22627 12.0721 0.167658C12.1346 0.109046 12.2084 0.0639089 12.2891 0.0350514C12.3698 0.0061939 12.4555 -0.00576811 12.541 -9.16049e-05C12.702 0.0137322 12.8518 0.0880999 12.9601 0.208008C13.0684 0.327916 13.1272 0.48444 13.1246 0.646002V2.5546L14.7981 4.94522C14.8705 5.0596 14.9233 5.18529 14.9543 5.3171C14.9999 5.47586 15.0119 5.64236 14.9897 5.80603C14.9675 5.9697 14.9116 6.12697 14.8254 6.26788C14.8223 6.27239 14.8194 6.27708 14.8168 6.28194L13.734 7.98038C13.7056 8.02498 13.6663 8.06163 13.6198 8.08691C13.5734 8.11219 13.5213 8.12526 13.4684 8.12491H6.53087C6.47838 8.12487 6.42674 8.11161 6.38073 8.08635C6.33472 8.06109 6.29581 8.02464 6.26759 7.98038L5.18478 6.28194C5.1822 6.27708 5.17933 6.27239 5.17619 6.26788ZM16.7777 16.3898C16.7745 16.3806 16.7706 16.3717 16.766 16.3632L13.5692 9.5546C13.5439 9.50076 13.5038 9.45526 13.4535 9.42343C13.4033 9.39161 13.345 9.37477 13.2856 9.37491H6.71369C6.65422 9.37477 6.59594 9.39161 6.54571 9.42343C6.49548 9.45526 6.45537 9.50076 6.43009 9.5546L3.23322 16.3632C3.22866 16.3717 3.22475 16.3806 3.2215 16.3898C3.15335 16.5541 3.12062 16.7309 3.12547 16.9088C3.13032 17.0866 3.17262 17.2614 3.24962 17.4218C3.35226 17.6327 3.5122 17.8106 3.71115 17.9349C3.91009 18.0592 4.14002 18.1251 4.37462 18.1249H15.6246C15.8591 18.1249 16.0889 18.059 16.2876 17.9347C16.4864 17.8104 16.6463 17.6326 16.7488 17.4218C16.826 17.2615 16.8684 17.0867 16.8734 16.9089C16.8784 16.731 16.8458 16.5541 16.7777 16.3898Z"/>
  </g>
  <defs>
    <clipPath id="clip0_603_2813">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>`

    shoesBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13.5 7.99988C14.3671 5.93904 15.1459 4.4445 16.2501 3.33325C16.7101 3.61117 18.3334 4.41825 18.3334 6.24992C18.3334 7.91658 17.7272 9.21284 17.0834 9.58325L14.5889 11.3295C13.4865 12.1012 12.559 13.0964 11.8668 14.2503C11.8668 14.2503 11.0003 15.9999 10.4168 16.6666C9.83328 17.3333 1.66678 16.6666 1.66678 16.6666C1.66678 16.6666 1.33328 15.5 1.66678 14.9999C2.00027 14.4999 5.75844 12.5553 7.08344 11.6666C11.5 13.4999 12.7987 9.66654 13.5 7.99988ZM17.9168 7.99988V16.6666V7.99988Z"/>
<path d="M17.9168 7.99988V16.6666M13.5 7.99988C14.3671 5.93904 15.1459 4.4445 16.2501 3.33325C16.7101 3.61117 18.3334 4.41825 18.3334 6.24992C18.3334 7.91659 17.7272 9.21284 17.0834 9.58325L14.5889 11.3295C13.4865 12.1012 12.559 13.0964 11.8668 14.2503C11.8668 14.2503 11.0003 15.9999 10.4168 16.6666C9.83328 17.3333 1.66678 16.6666 1.66678 16.6666C1.66678 16.6666 1.33328 15.5 1.66678 14.9999C2.00027 14.4999 5.75844 12.5553 7.08344 11.6666C11.5 13.4999 12.7988 9.66654 13.5 7.99988Z" stroke="#9382C2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`


    const headIlempi = createClothBlock('head');
    const dressIlempi = createClothBlock('dress');
    const shoesIlempi = createClothBlock('shoes');

    const gameRules = createTalker('Необходимо из представленных вариантов выбрать элементы национального костюма Чувашии и надеть их на Илемпи.');

    document.body.append(game);
    game.append(gameTitle, gameSubtitle, gameBlock, clothBtns, clothBlock);
    gameBlock.append(gameLeft, gameRight);
    gameLeft.append(gameRules.gameRules, gameBtnSkip, gameBtnNext);
    gameRight.append(shine);

    girlPodium.append(girlBlock, podium);
    girlBlock.append(girl, headGirl, dressGirl, shoesGirl);
    clothBtns.append(headBtn, dressBtn, shoesBtn);
    clothBlock.append(closeClothes, headIlempi, dressIlempi, shoesIlempi);


    const mediaQuery = window.matchMedia('(min-width: 769px)')
    function handleTabletChange(e) {
        if (e.matches) {

            const lockerBlock = createLocker();
            return lockerBlock
        }
        else {
            gameBtnNext.remove();
            const lockerBlock = createLockerTablet();
            return lockerBlock
        }
    }
    mediaQuery.addListener(handleTabletChange)
    const lockerBlock = handleTabletChange(mediaQuery)
    const pointBlock = createPoint();

    game.append(pointBlock);
    gameRight.append(lockerBlock);

    lockerBlock.classList.add('game__locker');
    lockerBlock.append(girlPodium);

    gameRules.rulesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        gameBlock.classList.add('active');
        const rulesBlock = createRulesTablet('Необходимо из представленных вариантов выбрать элементы национального костюма Чувашии и одеть их на Илемпи.');

        game.append(rulesBlock);
        gameRight.style.display = 'block';
        gameRules.gameRules.style.display = 'none';
        gameBtnSkip.style.display = 'block';
        gameBlock.style.paddingBottom = '0';
        gameBlock.style.marginTop = '0';
        gameLeft.style.paddingTop = '0';
        clothBtns.style.display = 'flex';

    })



    closeClothes.addEventListener('click', (e) => {
        e.preventDefault();
        if (clothBlock.classList.contains('open')) {
            clothBlock.classList.remove('open');
            document.querySelectorAll('.btns__item ').forEach(el => {
                if (el.classList.contains('active')) el.classList.remove('active');
            })
        }
    })

    headBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.clothes').forEach(el => {
            el.style.display = 'none';
        })
        headIlempi.style.display = 'grid';
        clothBlock.classList.add('open');
    })

    dressBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.clothes').forEach(el => {
            el.style.display = 'none';
        })
        dressIlempi.style.display = 'grid';
        clothBlock.classList.add('open');
    })

    shoesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.clothes').forEach(el => {
            el.style.display = 'none';
        })
        shoesIlempi.style.display = 'grid';
        clothBlock.classList.add('open');
    })




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
        e.preventDefault();
        document.body.innerHTML = '';
        const crossword = createCrossword();
        document.body.append(crossword);
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
    const crossword = createCrossword();
    document.body.append(crossword);
})
    return game;
}


function createClothBlock(type) {
    const clothes = document.createElement('div');
    const clothOne = document.createElement('img');
    const clothTwo = document.createElement('img');
    const clothThree = document.createElement('img');

    clothes.classList.add('clothes');
    clothOne.classList.add('clothes__img', type);
    clothTwo.classList.add('clothes__img', type);
    clothThree.classList.add('clothes__img', type);

    clothOne.src = `img/${type}-1-phone.webp`;
    clothTwo.src = `img/${type}-2-phone.webp`;
    clothThree.src = `img/${type}-3-phone.webp`;

    clothOne.setAttribute('data-code', `${type}-one`);
    clothTwo.setAttribute('data-code', `${type}-two`);
    clothThree.setAttribute('data-code', `${type}-three`);

    clothes.append(clothOne, clothTwo, clothThree);
    clothes.setAttribute('data-code', type)

    return clothes;
}



export function choiceOfClothes(type, el, container) {
    let src
    const code = el.getAttribute('data-code');

    if (code == `${type}-one`) src = `img/${type}-1.webp`
    if (code == `${type}-two`) src = `img/${type}-2.webp`
    if (code == `${type}-three`) src = `img/${type}-3.webp`

    container.src = src;
    container.setAttribute('data-code', code)

    return {
        src, code
    }
}



export function checkIlempi() {
    let result
    const head = document.querySelector('.girl__head');
    const dress = document.querySelector('.girl__dress');
    const shoes = document.querySelector('.girl__shoes');
    if (head.getAttribute('data-code') && dress.getAttribute('data-code') && shoes.getAttribute('data-code')) {
        if (head.getAttribute('data-code') == 'head-three' && dress.getAttribute('data-code') == 'dress-three' && shoes.getAttribute('data-code') == 'shoes-three') {
            result = true;
            setTimeout(() => {
                successIlempi();

            }, 800)

        }
        else {
            result = false;
            setTimeout(() => {
                errorIlempi();
            }, 800)

        }

    }
    return result
}







function createPodium() {
    const podium = document.createElement('div');
    podium.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 208 140" fill="none">
    <path d="M1.00391 20.76V37.8566V49.8242H206.546V20.76H1.00391Z" fill="url(#paint0_linear_459_4919)"/>
    <g filter="url(#filter0_d_459_4919)">
      <path d="M1.00368 110.029C2.00908 73.105 1.00368 29.0642 1.00368 29.0642C39.029 50.8624 165.438 51.9004 206.546 29.0642C206.546 29.0642 207.567 72.3647 206.546 110.029C205.525 147.693 -0.0017277 146.953 1.00368 110.029Z" fill="url(#paint1_radial_459_4919)"/>
    </g>
    <ellipse cx="103.775" cy="20.7601" rx="102.771" ry="20.7601" fill="url(#paint2_radial_459_4919)"/>
    <defs>
      <filter id="filter0_d_459_4919" x="0" y="29.0642" width="208" height="110.936" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.517647 0 0 0 0 0.223529 0 0 0 0 0.00784314 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_459_4919"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_459_4919" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_459_4919" x1="1.00391" y1="29.6673" x2="206.118" y2="30.6531" gradientUnits="userSpaceOnUse">
        <stop stop-color="#A1BECB"/>
        <stop offset="0.432292" stop-color="#F8FDFF"/>
        <stop offset="0.708333" stop-color="#C8DBE5"/>
        <stop offset="0.932292" stop-color="#A1BECB"/>
      </linearGradient>
      <radialGradient id="paint1_radial_459_4919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-53.7596 75.9282) rotate(-0.212745) scale(320.943 829.493)">
        <stop offset="0.104167" stop-color="#A3B7C2"/>
        <stop offset="0.333333" stop-color="#DFECF4"/>
        <stop offset="0.458333" stop-color="#F2FAFF"/>
        <stop offset="0.692708" stop-color="#D9E8F1"/>
        <stop offset="1" stop-color="#366F83"/>
        <stop offset="1" stop-color="#A3B7C2"/>
      </radialGradient>
      <radialGradient id="paint2_radial_459_4919" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(103.775 20.7601) rotate(90) scale(20.7601 102.771)">
        <stop stop-color="#A6B9C4"/>
        <stop offset="0.411458" stop-color="#C2D1D9"/>
        <stop offset="0.989583" stop-color="#EFF7FC"/>
      </radialGradient>
    </defs>
  </svg>`


    return podium
}


function createShine() {
    const shine = document.createElement('div');
    shine.innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 552 468" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_459_4891)">
<path d="M462.928 188L14 14L252.902 454L462.928 188Z" fill="url(#paint0_linear_459_4891)" fill-opacity="0.8"/>
</g>
<g filter="url(#filter1_f_459_4891)">
<path d="M89.0716 188L538 14L299.098 454L89.0716 188Z" fill="url(#paint1_linear_459_4891)" fill-opacity="0.8"/>
</g>
<g opacity="0.8">
<g filter="url(#filter2_f_459_4891)">
<ellipse cx="4.55105" cy="1.22811" rx="4.55105" ry="1.22811" transform="matrix(0.817772 0.575543 -0.429804 0.902922 149.161 224.932)" fill="#0093C3"/>
</g>
<g filter="url(#filter3_f_459_4891)">
<ellipse cx="4.55105" cy="1.22811" rx="4.55105" ry="1.22811" transform="matrix(0.817772 0.575543 -0.429804 0.902922 147.644 224.146)" fill="#0093C3"/>
</g>
<g filter="url(#filter4_f_459_4891)">
<ellipse cx="4.55105" cy="1.22811" rx="4.55105" ry="1.22811" transform="matrix(0.817772 0.575543 -0.429804 0.902922 146.181 223.516)" fill="#0093C3"/>
</g>
<g filter="url(#filter5_f_459_4891)">
<ellipse cx="4.55105" cy="2.1434" rx="4.55105" ry="2.1434" transform="matrix(0.817772 0.575543 -0.429804 0.902922 147.026 223.422)" fill="white"/>
</g>
<ellipse cx="1.19274" cy="0.923098" rx="1.19274" ry="0.923098" transform="matrix(0.817772 0.575543 -0.429804 0.902922 149.563 226.353)" fill="url(#paint2_radial_459_4891)"/>
</g>
<g opacity="0.8">
<g filter="url(#filter6_f_459_4891)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 376.475 115.884)" fill="#0093C3"/>
</g>
<g filter="url(#filter7_f_459_4891)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 374.326 114.768)" fill="#0093C3"/>
</g>
<g filter="url(#filter8_f_459_4891)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 372.253 113.876)" fill="#0093C3"/>
</g>
<g filter="url(#filter9_f_459_4891)">
<ellipse cx="6.44731" cy="3.03647" rx="6.44731" ry="3.03647" transform="matrix(0.817772 0.575543 -0.429804 0.902922 373.45 113.744)" fill="white"/>
</g>
<ellipse cx="1.68971" cy="1.30772" rx="1.68971" ry="1.30772" transform="matrix(0.817772 0.575543 -0.429804 0.902922 377.045 117.896)" fill="url(#paint3_radial_459_4891)"/>
</g>
<g opacity="0.5">
<g filter="url(#filter10_f_459_4891)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 390.825 222.769)" fill="#0093C3"/>
</g>
<g filter="url(#filter11_f_459_4891)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 388.676 221.653)" fill="#0093C3"/>
</g>
<g filter="url(#filter12_f_459_4891)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 386.603 220.761)" fill="#0093C3"/>
</g>
<g filter="url(#filter13_f_459_4891)">
<ellipse cx="6.44731" cy="3.03647" rx="6.44731" ry="3.03647" transform="matrix(0.817772 0.575543 -0.429804 0.902922 387.799 220.628)" fill="white"/>
</g>
<ellipse cx="1.68971" cy="1.30772" rx="1.68971" ry="1.30772" transform="matrix(0.817772 0.575543 -0.429804 0.902922 391.395 224.78)" fill="url(#paint4_radial_459_4891)"/>
</g>
<g filter="url(#filter14_f_459_4891)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 153.31 96.8049)" fill="#0093C3"/>
</g>
<g filter="url(#filter15_f_459_4891)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 151.263 95.7397)" fill="#0093C3"/>
</g>
<g filter="url(#filter16_f_459_4891)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 149.287 94.8892)" fill="#0093C3"/>
</g>
<g filter="url(#filter17_f_459_4891)">
<ellipse cx="6.14301" cy="2.89316" rx="6.14301" ry="2.89316" transform="matrix(0.817772 0.575543 -0.429804 0.902922 150.428 94.7642)" fill="white"/>
</g>
<ellipse cx="1.60996" cy="1.246" rx="1.60996" ry="1.246" transform="matrix(0.817772 0.575543 -0.429804 0.902922 153.854 98.7207)" fill="url(#paint5_radial_459_4891)"/>
<g opacity="0.5">
<g filter="url(#filter18_f_459_4891)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 187.749 170.725)" fill="#0093C3"/>
</g>
<g filter="url(#filter19_f_459_4891)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 185.701 169.66)" fill="#0093C3"/>
</g>
<g filter="url(#filter20_f_459_4891)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 183.726 168.809)" fill="#0093C3"/>
</g>
<g filter="url(#filter21_f_459_4891)">
<ellipse cx="6.14301" cy="2.89316" rx="6.14301" ry="2.89316" transform="matrix(0.817772 0.575543 -0.429804 0.902922 184.866 168.684)" fill="white"/>
</g>
<ellipse cx="1.60996" cy="1.246" rx="1.60996" ry="1.246" transform="matrix(0.817772 0.575543 -0.429804 0.902922 188.292 172.641)" fill="url(#paint6_radial_459_4891)"/>
</g>
<defs>
<filter id="filter0_f_459_4891" x="0" y="0" width="476.928" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter1_f_459_4891" x="75.0718" y="0" width="476.928" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter2_f_459_4891" x="136.596" y="213.815" width="31.5186" height="29.6902" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter3_f_459_4891" x="135.079" y="213.029" width="31.5186" height="29.6902" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter4_f_459_4891" x="133.615" y="212.399" width="31.5186" height="29.6902" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter5_f_459_4891" x="133.991" y="212.72" width="31.6699" height="30.5139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter6_f_459_4891" x="363.674" y="105.135" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter7_f_459_4891" x="361.525" y="104.019" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter8_f_459_4891" x="359.452" y="103.127" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter9_f_459_4891" x="359.984" y="103.582" width="34.8657" height="33.228" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter10_f_459_4891" x="378.023" y="212.02" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter11_f_459_4891" x="375.875" y="210.904" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter12_f_459_4891" x="373.801" y="210.012" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter13_f_459_4891" x="374.334" y="210.467" width="34.8657" height="33.228" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter14_f_459_4891" x="140.547" y="85.9968" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter15_f_459_4891" x="138.5" y="84.9316" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter16_f_459_4891" x="136.524" y="84.0811" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter17_f_459_4891" x="137.031" y="84.5159" width="34.353" height="32.7925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter18_f_459_4891" x="174.985" y="159.917" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter19_f_459_4891" x="172.938" y="158.852" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter20_f_459_4891" x="170.962" y="158.001" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<filter id="filter21_f_459_4891" x="171.469" y="158.436" width="34.353" height="32.7925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_4891"/>
</filter>
<linearGradient id="paint0_linear_459_4891" x1="23.5091" y1="34" x2="262.966" y2="324.224" gradientUnits="userSpaceOnUse">
<stop stop-color="#49C1EB"/>
<stop offset="0.485231" stop-color="#A4E0F5" stop-opacity="0.5"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_459_4891" x1="528.491" y1="34" x2="289.034" y2="324.224" gradientUnits="userSpaceOnUse">
<stop stop-color="#49C1EB"/>
<stop offset="0.485231" stop-color="#A4E0F5" stop-opacity="0.5"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint2_radial_459_4891" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.19274 0.923098) rotate(90) scale(0.923098 1.19274)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint3_radial_459_4891" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.68971 1.30772) rotate(90) scale(1.30772 1.68971)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint4_radial_459_4891" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.68971 1.30772) rotate(90) scale(1.30772 1.68971)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint5_radial_459_4891" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.60996 1.246) rotate(90) scale(1.246 1.60996)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint6_radial_459_4891" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.60996 1.246) rotate(90) scale(1.246 1.60996)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>

    `

    return shine
}


function errorIlempi() {
    const deniska = createDeniska('К сожалению, элементы костюма Илемпи выбраны неправильно.');
    document.body.append(deniska.deniska);
    deniska.gameBtnNext.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.innerHTML = '';
        const crossword = createCrossword();
        document.body.append(crossword);
    })
    deniska.rulesDeniska.src = 'img/deniska-sad.webp';
    document.querySelector('.game__clothes').classList.remove('open');
    document.querySelector('.game__btn--skip').style.display = 'none';
    document.querySelector('.game__btn--next').style.display = 'block';
    document.querySelector('.podium').classList.add('error');
    document.querySelector('.podium').innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 208 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.00366 20.7603V37.8568V49.8245H206.546V20.7603H1.00366Z" fill="url(#paint0_linear_943_648)"/>
    <g filter="url(#filter0_d_943_648)">
    <path d="M1.00368 110.029C2.00908 73.1047 1.00368 29.064 1.00368 29.064C39.029 50.8621 165.438 51.9001 206.546 29.064C206.546 29.064 207.567 72.3645 206.546 110.029C205.525 147.693 -0.0017277 146.952 1.00368 110.029Z" fill="url(#paint1_radial_943_648)"/>
    </g>
    <ellipse cx="103.775" cy="20.7601" rx="102.771" ry="20.7601" fill="url(#paint2_radial_943_648)"/>
    <defs>
    <filter id="filter0_d_943_648" x="0" y="29.064" width="208" height="110.936" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1"/>
    <feGaussianBlur stdDeviation="0.5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.517647 0 0 0 0 0.223529 0 0 0 0 0.00784314 0 0 0 1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_943_648"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_943_648" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_943_648" x1="1.00366" y1="29.6675" x2="206.118" y2="30.6533" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E93636"/>
    <stop offset="0.432292" stop-color="#FD9A9A"/>
    <stop offset="0.708333" stop-color="#FFD3EE"/>
    <stop offset="0.776042" stop-color="#E48F8F"/>
    <stop offset="0.932292" stop-color="#F89B9B"/>
    </linearGradient>
    <radialGradient id="paint1_radial_943_648" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-53.7596 75.928) rotate(-0.212745) scale(320.943 829.493)">
    <stop offset="0.104167" stop-color="#C06E69"/>
    <stop offset="0.333333" stop-color="#F88272"/>
    <stop offset="0.458333" stop-color="#FA9999"/>
    <stop offset="0.625" stop-color="#F9D4D4"/>
    <stop offset="0.692708" stop-color="#FAD1C5"/>
    <stop offset="0.734375" stop-color="#E2C9C3"/>
    <stop offset="0.770733" stop-color="#E0B2A9"/>
    <stop offset="0.770833" stop-color="#E6AFA7"/>
    <stop offset="0.838542" stop-color="#D28586"/>
    <stop offset="1" stop-color="#366F83"/>
    <stop offset="1" stop-color="#EA2828"/>
    </radialGradient>
    <radialGradient id="paint2_radial_943_648" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(103.775 20.7601) rotate(90) scale(20.7601 102.771)">
    <stop stop-color="#F14242"/>
    <stop offset="0.411458" stop-color="#EE4731"/>
    <stop offset="0.989583" stop-color="#FB928B"/>
    </radialGradient>
    </defs>
    </svg>
    
    `

    document.querySelector('.shine').innerHTML = `
    <svg width="552" height="468" viewBox="0 0 552 468" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_459_8232)">
<path d="M462.928 188L14 14L252.902 454L462.928 188Z" fill="url(#paint0_linear_459_8232)" fill-opacity="0.8"/>
</g>
<g filter="url(#filter1_f_459_8232)">
<path d="M89.0716 188L538 14L299.098 454L89.0716 188Z" fill="url(#paint1_linear_459_8232)" fill-opacity="0.8"/>
</g>
<g opacity="0.8">
<g filter="url(#filter2_f_459_8232)">
<ellipse cx="4.55105" cy="1.22811" rx="4.55105" ry="1.22811" transform="matrix(0.817772 0.575543 -0.429804 0.902922 149.161 224.932)" fill="#F0433E"/>
</g>
<g filter="url(#filter3_f_459_8232)">
<ellipse cx="4.55105" cy="1.22811" rx="4.55105" ry="1.22811" transform="matrix(0.817772 0.575543 -0.429804 0.902922 147.644 224.146)" fill="#F0433E"/>
</g>
<g filter="url(#filter4_f_459_8232)">
<ellipse cx="4.55105" cy="1.22811" rx="4.55105" ry="1.22811" transform="matrix(0.817772 0.575543 -0.429804 0.902922 146.181 223.516)" fill="#F0433E"/>
</g>
<g filter="url(#filter5_f_459_8232)">
<ellipse cx="4.55105" cy="2.1434" rx="4.55105" ry="2.1434" transform="matrix(0.817772 0.575543 -0.429804 0.902922 147.026 223.422)" fill="white"/>
</g>
<ellipse cx="1.19274" cy="0.923098" rx="1.19274" ry="0.923098" transform="matrix(0.817772 0.575543 -0.429804 0.902922 149.563 226.353)" fill="url(#paint2_radial_459_8232)"/>
</g>
<g opacity="0.8">
<g filter="url(#filter6_f_459_8232)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 376.475 115.884)" fill="#F0433E"/>
</g>
<g filter="url(#filter7_f_459_8232)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 374.326 114.768)" fill="#F0433E"/>
</g>
<g filter="url(#filter8_f_459_8232)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 372.253 113.876)" fill="#F0433E"/>
</g>
<g filter="url(#filter9_f_459_8232)">
<ellipse cx="6.44731" cy="3.03647" rx="6.44731" ry="3.03647" transform="matrix(0.817772 0.575543 -0.429804 0.902922 373.45 113.744)" fill="white"/>
</g>
<ellipse cx="1.68971" cy="1.30772" rx="1.68971" ry="1.30772" transform="matrix(0.817772 0.575543 -0.429804 0.902922 377.045 117.896)" fill="url(#paint3_radial_459_8232)"/>
</g>
<g opacity="0.5">
<g filter="url(#filter10_f_459_8232)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 390.825 222.769)" fill="#F0433E"/>
</g>
<g filter="url(#filter11_f_459_8232)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 388.676 221.653)" fill="#F0433E"/>
</g>
<g filter="url(#filter12_f_459_8232)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 386.603 220.761)" fill="#F0433E"/>
</g>
<g filter="url(#filter13_f_459_8232)">
<ellipse cx="6.44731" cy="3.03647" rx="6.44731" ry="3.03647" transform="matrix(0.817772 0.575543 -0.429804 0.902922 387.799 220.628)" fill="white"/>
</g>
<ellipse cx="1.68971" cy="1.30772" rx="1.68971" ry="1.30772" transform="matrix(0.817772 0.575543 -0.429804 0.902922 391.395 224.78)" fill="url(#paint4_radial_459_8232)"/>
</g>
<g filter="url(#filter14_f_459_8232)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 153.31 96.8049)" fill="#F0433E"/>
</g>
<g filter="url(#filter15_f_459_8232)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 151.263 95.7397)" fill="#F0433E"/>
</g>
<g filter="url(#filter16_f_459_8232)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 149.287 94.8892)" fill="#F0433E"/>
</g>
<g filter="url(#filter17_f_459_8232)">
<ellipse cx="6.14301" cy="2.89316" rx="6.14301" ry="2.89316" transform="matrix(0.817772 0.575543 -0.429804 0.902922 150.428 94.7642)" fill="white"/>
</g>
<ellipse cx="1.60996" cy="1.246" rx="1.60996" ry="1.246" transform="matrix(0.817772 0.575543 -0.429804 0.902922 153.854 98.7207)" fill="url(#paint5_radial_459_8232)"/>
<g opacity="0.5">
<g filter="url(#filter18_f_459_8232)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 187.749 170.725)" fill="#F0433E"/>
</g>
<g filter="url(#filter19_f_459_8232)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 185.701 169.66)" fill="#F0433E"/>
</g>
<g filter="url(#filter20_f_459_8232)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 183.726 168.809)" fill="#F0433E"/>
</g>
<g filter="url(#filter21_f_459_8232)">
<ellipse cx="6.14301" cy="2.89316" rx="6.14301" ry="2.89316" transform="matrix(0.817772 0.575543 -0.429804 0.902922 184.866 168.684)" fill="white"/>
</g>
<ellipse cx="1.60996" cy="1.246" rx="1.60996" ry="1.246" transform="matrix(0.817772 0.575543 -0.429804 0.902922 188.292 172.641)" fill="url(#paint6_radial_459_8232)"/>
</g>
<defs>
<filter id="filter0_f_459_8232" x="0" y="0" width="476.928" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter1_f_459_8232" x="75.0718" y="0" width="476.928" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter2_f_459_8232" x="136.596" y="213.815" width="31.5186" height="29.6902" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter3_f_459_8232" x="135.079" y="213.029" width="31.5186" height="29.6902" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter4_f_459_8232" x="133.615" y="212.399" width="31.5186" height="29.6902" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter5_f_459_8232" x="133.991" y="212.72" width="31.6699" height="30.5139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter6_f_459_8232" x="363.674" y="105.135" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter7_f_459_8232" x="361.525" y="104.019" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter8_f_459_8232" x="359.452" y="103.127" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter9_f_459_8232" x="359.984" y="103.582" width="34.8657" height="33.228" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter10_f_459_8232" x="378.023" y="212.02" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter11_f_459_8232" x="375.875" y="210.904" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter12_f_459_8232" x="373.801" y="210.012" width="34.6519" height="32.0613" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter13_f_459_8232" x="374.334" y="210.467" width="34.8657" height="33.228" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter14_f_459_8232" x="140.547" y="85.9968" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter15_f_459_8232" x="138.5" y="84.9316" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter16_f_459_8232" x="136.524" y="84.0811" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter17_f_459_8232" x="137.031" y="84.5159" width="34.353" height="32.7925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter18_f_459_8232" x="174.985" y="159.917" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter19_f_459_8232" x="172.938" y="158.852" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter20_f_459_8232" x="170.962" y="158.001" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<filter id="filter21_f_459_8232" x="171.469" y="158.436" width="34.353" height="32.7925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8232"/>
</filter>
<linearGradient id="paint0_linear_459_8232" x1="23.5091" y1="34" x2="262.966" y2="324.224" gradientUnits="userSpaceOnUse">
<stop stop-color="#F0433E"/>
<stop offset="0.485231" stop-color="#F0433E" stop-opacity="0.5"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_459_8232" x1="528.491" y1="34" x2="289.034" y2="324.224" gradientUnits="userSpaceOnUse">
<stop stop-color="#F0433E"/>
<stop offset="0.485231" stop-color="#F0433E" stop-opacity="0.5"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint2_radial_459_8232" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.19274 0.923098) rotate(90) scale(0.923098 1.19274)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint3_radial_459_8232" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.68971 1.30772) rotate(90) scale(1.30772 1.68971)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint4_radial_459_8232" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.68971 1.30772) rotate(90) scale(1.30772 1.68971)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint5_radial_459_8232" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.60996 1.246) rotate(90) scale(1.246 1.60996)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint6_radial_459_8232" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.60996 1.246) rotate(90) scale(1.246 1.60996)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>

    `
}

function successIlempi() {
    const deniska = createDeniska('Отлично! Задание выполнено. Тебе начислен 1 балл.');
    document.body.append(deniska.deniska);
    deniska.gameBtnNext.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.innerHTML = '';
        const crossword = createCrossword();
        document.body.append(crossword);
    })
    document.querySelector('.podium').classList.add('success');
    document.querySelector('.game__btn--skip').style.display = 'none';
    document.querySelector('.game__btn--next').style.display = 'block';
    document.querySelector('.game__clothes').classList.remove('open');
    document.querySelector('.podium').innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 208 140" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00366 20.7603V37.8568V49.8245H206.546V20.7603H1.00366Z" fill="url(#paint0_linear_943_656)"/>
<g filter="url(#filter0_d_943_656)">
<path d="M1.00368 110.029C2.00908 73.1047 1.00368 29.064 1.00368 29.064C39.029 50.8621 165.438 51.9001 206.546 29.064C206.546 29.064 207.567 72.3645 206.546 110.029C205.525 147.693 -0.0017277 146.952 1.00368 110.029Z" fill="url(#paint1_radial_943_656)"/>
</g>
<ellipse cx="103.775" cy="20.7601" rx="102.771" ry="20.7601" fill="url(#paint2_radial_943_656)"/>
<defs>
<filter id="filter0_d_943_656" x="0" y="29.064" width="208" height="110.936" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.517647 0 0 0 0 0.223529 0 0 0 0 0.00784314 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_943_656"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_943_656" result="shape"/>
</filter>
<linearGradient id="paint0_linear_943_656" x1="1.00366" y1="29.6675" x2="206.118" y2="30.6533" gradientUnits="userSpaceOnUse">
<stop stop-color="#78DA5F"/>
<stop offset="0.432292" stop-color="#B4FD9A"/>
<stop offset="0.708333" stop-color="#9FDB8A"/>
<stop offset="0.932292" stop-color="#52DD92"/>
</linearGradient>
<radialGradient id="paint1_radial_943_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-53.7596 75.928) rotate(-0.212745) scale(320.943 829.493)">
<stop offset="0.104167" stop-color="#69C077"/>
<stop offset="0.333333" stop-color="#BDF3AA"/>
<stop offset="0.458333" stop-color="#C2F7BA"/>
<stop offset="0.692708" stop-color="#D3FCDE"/>
<stop offset="0.734375" stop-color="#E1E2C3"/>
<stop offset="0.770833" stop-color="#9EDFB0"/>
<stop offset="1" stop-color="#366F83"/>
<stop offset="1" stop-color="#2CEA28"/>
</radialGradient>
<radialGradient id="paint2_radial_943_656" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(103.775 20.7601) rotate(90) scale(20.7601 102.771)">
<stop stop-color="#A7DF6F"/>
<stop offset="0.411458" stop-color="#7DE86C"/>
<stop offset="0.989583" stop-color="#D9FCC8"/>
</radialGradient>
</defs>
</svg>

    `

    document.querySelector('.shine').innerHTML = `
    <svg width="100%" height="100%" viewBox="0 0 552 468" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_459_8566)">
<path d="M462.928 188L14 14L252.902 454L462.928 188Z" fill="url(#paint0_linear_459_8566)" fill-opacity="0.8"/>
</g>
<g filter="url(#filter1_f_459_8566)">
<path d="M89.0716 188L538 14L299.098 454L89.0716 188Z" fill="url(#paint1_linear_459_8566)" fill-opacity="0.8"/>
</g>
<g opacity="0.8">
<g filter="url(#filter2_f_459_8566)">
<ellipse cx="4.55105" cy="1.22811" rx="4.55105" ry="1.22811" transform="matrix(0.817772 0.575543 -0.429804 0.902922 149.161 224.933)" fill="#1BB03C"/>
</g>
<g filter="url(#filter3_f_459_8566)">
<ellipse cx="4.55105" cy="1.22811" rx="4.55105" ry="1.22811" transform="matrix(0.817772 0.575543 -0.429804 0.902922 147.644 224.146)" fill="#1BB03C"/>
</g>
<g filter="url(#filter4_f_459_8566)">
<ellipse cx="4.55105" cy="1.22811" rx="4.55105" ry="1.22811" transform="matrix(0.817772 0.575543 -0.429804 0.902922 146.181 223.516)" fill="#1BB03C"/>
</g>
<g filter="url(#filter5_f_459_8566)">
<ellipse cx="4.55105" cy="2.1434" rx="4.55105" ry="2.1434" transform="matrix(0.817772 0.575543 -0.429804 0.902922 147.026 223.422)" fill="white"/>
</g>
<ellipse cx="1.19274" cy="0.923098" rx="1.19274" ry="0.923098" transform="matrix(0.817772 0.575543 -0.429804 0.902922 149.563 226.353)" fill="url(#paint2_radial_459_8566)"/>
</g>
<g opacity="0.8">
<g filter="url(#filter6_f_459_8566)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 376.475 115.884)" fill="#1BB03C"/>
</g>
<g filter="url(#filter7_f_459_8566)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 374.326 114.768)" fill="#1BB03C"/>
</g>
<g filter="url(#filter8_f_459_8566)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 372.253 113.876)" fill="#1BB03C"/>
</g>
<g filter="url(#filter9_f_459_8566)">
<ellipse cx="6.44731" cy="3.03647" rx="6.44731" ry="3.03647" transform="matrix(0.817772 0.575543 -0.429804 0.902922 373.45 113.744)" fill="white"/>
</g>
<ellipse cx="1.68971" cy="1.30772" rx="1.68971" ry="1.30772" transform="matrix(0.817772 0.575543 -0.429804 0.902922 377.045 117.896)" fill="url(#paint3_radial_459_8566)"/>
</g>
<g opacity="0.5">
<g filter="url(#filter10_f_459_8566)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 390.825 222.769)" fill="#1BB03C"/>
</g>
<g filter="url(#filter11_f_459_8566)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 388.676 221.653)" fill="#1BB03C"/>
</g>
<g filter="url(#filter12_f_459_8566)">
<ellipse cx="6.44731" cy="1.73981" rx="6.44731" ry="1.73981" transform="matrix(0.817772 0.575543 -0.429804 0.902922 386.603 220.761)" fill="#1BB03C"/>
</g>
<g filter="url(#filter13_f_459_8566)">
<ellipse cx="6.44731" cy="3.03647" rx="6.44731" ry="3.03647" transform="matrix(0.817772 0.575543 -0.429804 0.902922 387.799 220.628)" fill="white"/>
</g>
<ellipse cx="1.68971" cy="1.30772" rx="1.68971" ry="1.30772" transform="matrix(0.817772 0.575543 -0.429804 0.902922 391.395 224.78)" fill="url(#paint4_radial_459_8566)"/>
</g>
<g filter="url(#filter14_f_459_8566)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 153.31 96.8052)" fill="#1BB03C"/>
</g>
<g filter="url(#filter15_f_459_8566)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 151.263 95.7397)" fill="#1BB03C"/>
</g>
<g filter="url(#filter16_f_459_8566)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 149.287 94.8892)" fill="#1BB03C"/>
</g>
<g filter="url(#filter17_f_459_8566)">
<ellipse cx="6.14301" cy="2.89316" rx="6.14301" ry="2.89316" transform="matrix(0.817772 0.575543 -0.429804 0.902922 150.428 94.7642)" fill="white"/>
</g>
<ellipse cx="1.60996" cy="1.246" rx="1.60996" ry="1.246" transform="matrix(0.817772 0.575543 -0.429804 0.902922 153.854 98.7207)" fill="url(#paint5_radial_459_8566)"/>
<g opacity="0.5">
<g filter="url(#filter18_f_459_8566)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 187.749 170.725)" fill="#1BB03C"/>
</g>
<g filter="url(#filter19_f_459_8566)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 185.701 169.66)" fill="#1BB03C"/>
</g>
<g filter="url(#filter20_f_459_8566)">
<ellipse cx="6.14301" cy="1.6577" rx="6.14301" ry="1.6577" transform="matrix(0.817772 0.575543 -0.429804 0.902922 183.726 168.81)" fill="#1BB03C"/>
</g>
<g filter="url(#filter21_f_459_8566)">
<ellipse cx="6.14301" cy="2.89316" rx="6.14301" ry="2.89316" transform="matrix(0.817772 0.575543 -0.429804 0.902922 184.866 168.685)" fill="white"/>
</g>
<ellipse cx="1.60996" cy="1.246" rx="1.60996" ry="1.246" transform="matrix(0.817772 0.575543 -0.429804 0.902922 188.292 172.641)" fill="url(#paint6_radial_459_8566)"/>
</g>
<defs>
<filter id="filter0_f_459_8566" x="0" y="0" width="476.928" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter1_f_459_8566" x="75.0718" y="0" width="476.928" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter2_f_459_8566" x="136.596" y="213.816" width="31.5186" height="29.6899" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter3_f_459_8566" x="135.079" y="213.029" width="31.5186" height="29.6899" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter4_f_459_8566" x="133.615" y="212.399" width="31.5186" height="29.6899" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter5_f_459_8566" x="133.991" y="212.72" width="31.6699" height="30.5137" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter6_f_459_8566" x="363.674" y="105.135" width="34.6519" height="32.061" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter7_f_459_8566" x="361.525" y="104.019" width="34.6519" height="32.061" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter8_f_459_8566" x="359.452" y="103.127" width="34.6519" height="32.061" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter9_f_459_8566" x="359.984" y="103.582" width="34.8657" height="33.228" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter10_f_459_8566" x="378.023" y="212.02" width="34.6519" height="32.061" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter11_f_459_8566" x="375.875" y="210.904" width="34.6519" height="32.061" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter12_f_459_8566" x="373.801" y="210.012" width="34.6519" height="32.061" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter13_f_459_8566" x="374.334" y="210.467" width="34.8657" height="33.228" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter14_f_459_8566" x="140.547" y="85.9971" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter15_f_459_8566" x="138.5" y="84.9316" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter16_f_459_8566" x="136.524" y="84.0811" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter17_f_459_8566" x="137.031" y="84.5156" width="34.353" height="32.7925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter18_f_459_8566" x="174.985" y="159.917" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter19_f_459_8566" x="172.938" y="158.852" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter20_f_459_8566" x="170.962" y="158.001" width="34.1489" height="31.6807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<filter id="filter21_f_459_8566" x="171.469" y="158.436" width="34.353" height="32.7925" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_459_8566"/>
</filter>
<linearGradient id="paint0_linear_459_8566" x1="23.5091" y1="34" x2="262.966" y2="324.224" gradientUnits="userSpaceOnUse">
<stop stop-color="#1BB03C"/>
<stop offset="0.485231" stop-color="#1BB03C" stop-opacity="0.5"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_459_8566" x1="528.491" y1="34" x2="289.034" y2="324.224" gradientUnits="userSpaceOnUse">
<stop stop-color="#1BB03C"/>
<stop offset="0.485231" stop-color="#1BB03C" stop-opacity="0.5"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<radialGradient id="paint2_radial_459_8566" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.19274 0.923098) rotate(90) scale(0.923098 1.19274)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint3_radial_459_8566" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.68971 1.30772) rotate(90) scale(1.30772 1.68971)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint4_radial_459_8566" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.68971 1.30772) rotate(90) scale(1.30772 1.68971)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint5_radial_459_8566" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.60996 1.246) rotate(90) scale(1.246 1.60996)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint6_radial_459_8566" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.60996 1.246) rotate(90) scale(1.246 1.60996)">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>

    `
}

