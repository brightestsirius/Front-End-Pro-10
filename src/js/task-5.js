import { heroesWrapper } from "./script.js";

class Hero {
    constructor() {
        this.getInfo();
    }
    async getInfo() {
        let response = await fetch("./json/task-5.json"),
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
        console.log(this);
        let table = document.createElement("table");
        table.id = 'task-5';
        let tds = [];

        for (let key in this) {
            let td = `<td>${this[key]}</td>`;
            tds.push(td);
        }

        table.innerHTML = `<tr>
            ${tds.join("")}
        </tr>`;
        heroesWrapper.append(table);
    }
}

export let Messi = new Hero();
