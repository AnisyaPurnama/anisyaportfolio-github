'use strict';

export class Projects {
    constructor(id, name, link){
        this.id = id,
        this.name = name,
        this.link = link
    }

    render(){
        const divEl = document.createElement('div');
        divEl.className = 'item';

        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'item-image';
        divEl.appendChild(imgWrapper);

        const imgEl = document.createElement('img');
        imgEl.src = `./public/${this.id}.png`;
        imgWrapper.appendChild(imgEl);

        const h2El = document.createElement('h2');
        h2El.className = 'item-text-title';
        h2El.innerHTML = `${this.name}`;
        imgWrapper.appendChild(h2El);

        const textWrapper = document.createElement('div');
        textWrapper.className= 'item-text';
        divEl.appendChild(textWrapper);

        const itemText = document.createElement('div');
        itemText.className = 'item-text-wrap';
        textWrapper.appendChild(itemText);

        const aEl = document.createElement('a');
        aEl.className = "btn-bright";
        aEl.innerHTML = 'CHECK';
        aEl.href = `${this.link}`;
        textWrapper.appendChild(aEl);

        return divEl;
    }
}