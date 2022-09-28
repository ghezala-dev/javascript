const poisonMushrooms = new Array(10).fill('🍄').map(function(mushroom){
    return `<div class="box">${mushroom}</div>`
}).join('')

document.getElementById('mushrooms').innerHTML = poisonMushrooms