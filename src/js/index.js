import Fox from './test_1';
import _ from 'lodash';
import '../scss/index.scss';

console.log('Fox',Fox);
console.log(`The quick ${Fox.color} ${Fox.name} jumps over the lazy dog.`)
function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());

import triss from '../images/copic_2.jpg'; 
var img = new Image(); 
img.src = triss; 
document.body.appendChild(img);
