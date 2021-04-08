export const heroesWrapper = document.querySelector('#heroes__wrapper');


import { Pokemon } from './task-1.js';
import { Zeus } from './task-2.js';
import { Ivanka } from './task-3.js';
import { Rocket } from './task-4.js';
import { Messi } from './task-5.js';
import { Batman } from './task-13.js';
import { Goose } from './task-7.js';
import { Cyborg } from './task-6.js';
import { Minion } from './task-11.js';
import { Panda } from './task-8.js';
import { Winnie } from './task-10.js';
import { Hat } from './task-14.js';

// import * as exampleData from './exampleModule.js';
// import {userName} from './exampleModule.js';
// import {x, userName} from './exampleModule.js';

import * as exampleModuleData from './exampleModule.js';
import { helloUser } from './exampleModule.js';

console.log(Pokemon);
console.log(Zeus);
console.log(Ivanka);
console.log(Batman);
console.log(Goose);
console.log(Messi);
console.log(Rocket);

Ivanka.renderInfo();

// console.log(exampleData);
// console.log(exampleData.x);
// console.log(exampleData.userFriends);

// console.log(x, userName);

console.log(exampleModuleData);

exampleModuleData.helloWorld();

let userok = 'Oleg';
helloUser(userok);