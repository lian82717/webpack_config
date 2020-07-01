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

const logAsync = (message, time) => {
    return new Promise((resolve, reject) => {
        if (message && time) {
            setTimeout(() => {
                console.log(message);
                resolve()
            }, time);
        } else {
            reject();
        }
    });
};

const demo = async () => {
    await logAsync('1 秒後會出現這句', 1000);
    await logAsync('再 1.5 秒後會出現這句', 1500);
    await logAsync('再 2 秒後會出現這句', 2000);
};

demo();
