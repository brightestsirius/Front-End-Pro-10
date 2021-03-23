import {heroesWrapper} from './script.js'

class Hero{
	constructor(tableId){
		this.tableId = tableId;
		this.getInfo();
	}

	async getInfo(){
		let response = await fetch(`./json/${this.tableId}.json`),
			data = await response.json();

		this.setInfo(data);
	}

	setInfo(data){
		for(let key in data){
			this[key] = data[key];
		}

		this.renderInfo();
	}

	renderInfo(){
		let table = document.createElement('div');
		table.id = this.tableId;

		let tds = [];

		for(let key in this){

			if (key	===	'tableId') {
				continue
			}
			if (key	===	'details') {
				continue
			}

			if(key !== 'file'){
				let content = Array.isArray(this[key]) ? this[key].join(', ') : this[key];

				if(key === 'image'){
					content = this.renderImg();
				}

				if (key	===	'name') {
					content = `<div>${this[key]}</div>`
				}

				tds.push(content);
			}
		}
		
		table.innerHTML = tds.join('');
		table.append(this.renderDetails());
		table.append(this.renderBtn());
		heroesWrapper.append(table);
	}

	renderImg(){
		return `<img class="cyborg-avatar" src="./images/${this.image}" alt="${this.name}">`;
	}

	renderDetails(){
		let detailsCard= document.createElement('div');
		detailsCard.classList.add("cyborg-details");
		let dtls =[];

		for (let key in this) {
			let content=this[key];
			if (key==='details') {
				for (key in content) {
					let contentKeys=Array.isArray(content[key]) ? content[key].join('') : content[key];
					dtls.push(`<div><div class="cyborg-details__subtitle">${key}:</div> ${contentKeys}</div>`);
				}
			}
		}
		detailsCard.innerHTML = dtls.join('');
		return detailsCard;
	}

	renderBtn(){
		let btn = document.createElement('button');
		btn.classList.add("cyborg-btn");
		btn.innerHTML = `Show Info`;
		btn.addEventListener('click',this.btnEvent.bind(this));
		return btn;
	}

	btnEvent(){
		let details = document.querySelector('.cyborg-details');
		let buttonName = document.querySelector('.cyborg-btn');
		
		if (details.classList.contains('cyborg-details__show')) {
			details.classList.remove("cyborg-details__show");
			buttonName.innerHTML = `Show Info`;
			
		} else {
			details.classList.add("cyborg-details__show");
			buttonName.innerHTML = `Hide Info`;
		}
	}
}

export let Cyborg = new Hero('task-6');