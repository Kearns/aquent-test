import fetch from 'isomorphic-fetch';
import { filterList, sortList } from './filter';

const pizzaFilter = document.querySelector('.pizza-filter');
const pizzaSort = document.querySelector('.pizza-sort')

fetch('/pizza.json').then((res) => {
    return res.json();
}).then(function(data) {
    data = data.pizzas;

    updateView(data);
    pizzaFilter.addEventListener('input', e => onFilterInput(e.target.value, data));
    pizzaSort.addEventListener('click', e => onSortClick(data));
})


const onFilterInput = (filterValue, data) => {
    updateView(filterList(filterValue, data));
}

const onSortClick = (data) => {
    pizzaFilter.value.length ? updateView(filterList(pizzaFilter.value, sortList(data))) : updateView(sortList(data));
}

const updateView = (data) => {    
    const pizzaDisplay = document.querySelector('.pizza-display');
    const pizzaList = pizzaDisplay.querySelector('ul');
    const loader = document.querySelector('.loader');
    
    pizzaList.innerHTML = '';

    data.forEach((val,i) => {
        pizzaList.innerHTML += `<li>${val}</li>`;
    })
    
    loader.style.display = 'none';
    pizzaDisplay.classList.remove('preload');
}