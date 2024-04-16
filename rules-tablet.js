function createRulesTablet(text) {
    const rulesBlock = document.createElement('div');
    const rulesBtn = document.createElement('button');
    const rulesText = document.createElement('div');
    const rulesCloseBtn = document.createElement('button');

    rulesBlock.classList.add('rules', 'rules--tablet');
    rulesBtn.classList.add('rules__btn--tablet', 'btn-reset');
    rulesText.classList.add('rules__text');
    rulesCloseBtn.classList.add('rules__close', 'btn-reset', 'close-btn');

    rulesText.textContent = text;

    rulesText.append(rulesCloseBtn);
    rulesBlock.append(rulesBtn, rulesText);


    rulesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        rulesText.style.display = 'block';
    })


    rulesCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        rulesText.style.display = 'none';
    })

    return rulesBlock;
}

export default createRulesTablet;