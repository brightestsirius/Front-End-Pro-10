export let x = 10;
export let userName = "Jacob";
export let userFriends = [
	{
		name: 'Inna',
		age: 100
	},
	{
		name: 'Ivan',
		age: 90
	}
]

export let info = 100;

export function helloWorld(){
	console.log('hello, World');
}

export let helloUser = userName => console.log(`hello, ${userName}`);