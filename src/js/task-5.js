import {heroesWrapper} from './script.js';

class Hero {
    constructor() {
        this.getInfo();
    }
    async getInfo() {
        let response = await fetch('./json/task-5.json'),
            data = await response.json();
        this.setInfo(data);
    }
    setInfo(data) {
        for (let key in data) {
            this[key] = data[key];
        }

        this.renderInfo();
    }
    renderInfo() {
        let table = document.createElement('table');
        table.id = 'task-5';

        let tr = document.createElement('tr');

        let tds = [];

        for (let key in this) {
            let content = Array.isArray(this[key])
                ? this[key].join(', ')
                : this[key];

            if (key === 'image') {
                content = this.renderImg();
            }
            let td = `<td>${content}</td>`;
            tds.push(td);
        }

        tr.innerHTML = tds.join('');
        tr.append(this.renderBtn());
        table.append(tr);

        heroesWrapper.append(table);
    }

    renderImg() {
        return `<img src="./images/${this.image}" alt="${this.name}" height="100">`;
    }

    renderBtn() {
        let td = document.createElement('td');
        let btn = document.createElement('button');
        btn.innerHTML = `Click me`;
        btn.addEventListener('click', this.btnEvent.bind(this));

        td.append(btn);

        return td;
    }
    btnEvent() {
        let addTd =  document.querySelector('#task-5 td img')
        addTd.classList.toggle('add__rotate');
    }
}

export let Messi = new Hero();
