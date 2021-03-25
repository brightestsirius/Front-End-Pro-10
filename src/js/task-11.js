import {heroesWrapper} from './script.js'

class Hero{
	constructor(blockId){
		this.blockId = blockId;
		this.getInfo();
	}
	async getInfo(){
		let response = await fetch(`./json/${this.blockId}.json`),
			data = await response.json();
		this.setInfo(data);
	}
	setInfo(data){
		for(let key in data){
			this[key] = data[key];
		}
		this.renderMainBlock();
	}
	renderMainBlock() {
		let div = document.createElement('div');
		div.id = this.blockId;

		let divMain = document.createElement('div');
		divMain.classList = `divMain`;

		let buttonGetHero = document.createElement('button');
		
		buttonGetHero.classList = `getHero`;

		buttonGetHero.innerHTML = `Get Hero`;
		let click = document.createElement('h3');
		click.classList = `click`
		click.innerHTML = `Click!`;

		let buttonGetInfo = document.createElement('button');
		buttonGetInfo.classList = `getInfo`;
		buttonGetInfo.innerHTML = `Get information`;

		divMain.append(click, buttonGetHero, buttonGetInfo);
		div.append(divMain);

		heroesWrapper.append(div);
		buttonGetHero.addEventListener(`click`, this.addDisplay);
		
		this.renderImgBlock(div, buttonGetHero);
		this.createModalWindow(div,buttonGetInfo);

	}
	renderImgBlock(div) {
		let imgWrapper = document.createElement('div');
		imgWrapper.classList = `img__wrapper`;

		let img = this.generateImg();

		imgWrapper.insertAdjacentHTML('afterbegin', img);
		
		div.append(imgWrapper);
		
	}

	generateImg() {
		let img = `<img src='./images/${this.image}' alt='${this.name}'>`;
		return img;
	}
	addDisplay() {
		let imgWrapper = document.querySelector(`.img__wrapper`);
		imgWrapper.classList.toggle('display');

		if(imgWrapper.classList.contains(`display`)) {
			this.innerHTML = `Delete Hero`;
		} else {
			this.innerHTML = `Get Hero`;
		}
	}

	createModalWindow(div,buttonGetInfo) {

		let modalWrapper = document.createElement(`div`);
		modalWrapper.classList = `modal__wrapper`;

		let modalBlock = document.createElement(`div`);
		modalBlock.classList = `modal__block`;

		let closeButton = document.createElement(`button`);
		closeButton.id = `closeModal`;
		closeButton.innerHTML = `Close`


		modalWrapper.append(modalBlock);
		modalBlock.append(closeButton);
		div.append(modalWrapper);

		buttonGetInfo.addEventListener('click',this.showModalFunc);
		modalWrapper.addEventListener('click',this.closeModalFunc);
		closeButton.addEventListener('click',this.closeModalFunc);
		modalBlock.addEventListener('click',this.stopClosing);
		
		this.addAllInfoInModalBlock(modalBlock);

	}

	closeModalFunc(){
		let modalWrapper = document.querySelector(`.modal__wrapper`); 
		modalWrapper.style.display = 'none';
	}
	
	showModalFunc(){
		let modalWrapper = document.querySelector(`.modal__wrapper`); 
		modalWrapper.style.display = 'flex';
	}
	
	stopClosing(e){
		e.stopPropagation();
	}

	addAllInfoInModalBlock(modalBlock) {
		let h3 = document.createElement(`h3`);
		h3.innerHTML = `All information`;

		let divWrap = document.createElement(`div`);
		divWrap.classList = `name`
		
		let name = `Name: ${this.name}`;
		divWrap.append(name)

		let divWrap2 = document.createElement(`div`);
		divWrap2.classList = `films`
		let films = `Films: ${this.films.join(`, `)}`;
		divWrap2.append(films);

		modalBlock.prepend(h3, divWrap, divWrap2)
	}
}

export let Minion = new Hero('task-11');