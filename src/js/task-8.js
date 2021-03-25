// const heroesWrapper = document.querySelector('#heroes__wrapper')
import { heroesWrapper } from './script.js'
class Hero {
    constructor() {
        this.getInfo();
    }
    async getInfo() {
        let response = await fetch('./json/task-8.json'),
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
        table.id = 'task-8';
        let tr = document.createElement('tr');
        let tds = [];
        for (let key in this) {
            let content = Array.isArray(this[key]) ? this[key].join(', ') : this[key];
            if (key == 'image') {
                content = this.renderImage();
            }

            let td = `<td>${content}</td>`;
            tds.push(td);
        }
        tr.innerHTML = tds.join('');
        tr.append(this.renderButton());
        table.append(tr);
        heroesWrapper.append(table);
    }
    renderImage() {
        return `<img src="./images/panda_task-8.png" alt ="${this.name}" height="50">`;
    }
    renderButton() {
        let td = document.createElement('td');
        let btn = document.createElement('button');
        btn.innerHTML = `Click`;
        btn.addEventListener('click', this.btnEvent.bind(this))
        td.append(btn);

        return td;
    }
    btnEvent() {

        alert(`Hello. My name is Panda. My friends are ${this.friends.join(';')}`);
    }
}
export let Panda = new Hero();