'use strict';

// import all listener files so they can attach to the DOM

// does your project have code that executes when the document or window are ready?
// that code can go here

'use strict';

import { TypeWriter } from './classes/TypingWord.js'
import { Projects } from './classes/portfolio.js'

console.log('hello');



document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', getWorks);


function init() {
const txtElement = document.querySelector('.txt-type');
const words = JSON.parse(txtElement.getAttribute('data-words'));
const wait = txtElement.getAttribute('data-wait');
new TypeWriter(txtElement, words, wait);
}



const mainDiv = document.querySelector('.items');
async function getWorks () {

const url = "https://api.github.com/users/AnisyaPurnama/repos"
const response = await fetch(url);
const result = await response.json();
const arrayOfProjectsId = [299549951, 301969482, 303477531, 309964973, 320541414, 320234357, 320647334, 320805182, 324753358, 333412658];
result.forEach(item => {
if(!arrayOfProjectsId.includes(item.id)){
return
}

let project = new Projects(item.id, item.name, item.homepage);
const projectRender = project.render();
mainDiv.appendChild(projectRender);

})
}
