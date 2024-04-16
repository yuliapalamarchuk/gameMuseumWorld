import {createGameIlempi, choiceOfClothes, checkIlempi} from './ilempi.js';

let points = 0;
localStorage.setItem('points', points);

window.addEventListener('DOMContentLoaded', () => {

    createGameIlempi();
    const headIlempi = document.querySelector('.girl__head');
    const dressIlempi = document.querySelector('.girl__dress');
    const shoesIlempi = document.querySelector('.girl__shoes');

    const heads = document.querySelectorAll('.head');


    heads.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.head').forEach(el => {
                if (el.classList.contains('active')) el.classList.remove('active')
            })
            
            if ((!headIlempi.src) || (headIlempi.src && !dressIlempi.src || !shoesIlempi.src)) {
                el.classList.add('active');
                choiceOfClothes('head', el, document.querySelector('.girl__head'));
            } else if (headIlempi.src && dressIlempi.src && shoesIlempi.src) return false

            const result = checkIlempi();
            if (result) {
                let points = JSON.parse(localStorage.getItem('points'));
                points += 1;
                localStorage.setItem('points', points)
                const point = document.querySelector('.game__point');
                point.textContent = points;
              
                point.classList.add('animation');
            } 
        })
    })

    heads.forEach(el => {
        el.removeEventListener('click', choiceOfClothes)
    })

    const dresses = document.querySelectorAll('.dress');
    dresses.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.dress').forEach(el => {
                if (el.classList.contains('active')) el.classList.remove('active')
            })
            
            if ((!dressIlempi.src) || (dressIlempi.src && !headIlempi.src || !shoesIlempi.src)) {
                el.classList.add('active');
                choiceOfClothes('dress', el, document.querySelector('.girl__dress'));
            } else if (headIlempi.src && dressIlempi.src && shoesIlempi.src) return false

            const result = checkIlempi();
            if (result) {
                let points = JSON.parse(localStorage.getItem('points'));
                points += 1;
                localStorage.setItem('points', points)
                const point = document.querySelector('.game__point');
                point.textContent = points;
              
                point.classList.add('animation');
            } 
        })
    })

    const shoes = document.querySelectorAll('.shoes');
    shoes.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.shoes').forEach(el => {
                if (el.classList.contains('active')) el.classList.remove('active')
            })
           
            if ((!shoesIlempi.src) || (shoesIlempi.src && !headIlempi.src || !dressIlempi.src)) {
                el.classList.add('active');
                choiceOfClothes('shoes', el, document.querySelector('.girl__shoes'));
            } else if (headIlempi.src && dressIlempi.src && shoesIlempi.src) return false

            const result = checkIlempi();
            if (result) {
                let points = JSON.parse(localStorage.getItem('points'));
                points += 1;
                localStorage.setItem('points', points)
                const point = document.querySelector('.game__point');
                point.textContent = points;
              
                point.classList.add('animation');
            } 
        })
    })






})