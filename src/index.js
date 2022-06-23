import './styles/styles.css';
import './styles/styleLess.less';
import './styles/styleScss.scss';
import data from './assets/data.json';
import xml from './assets/data.xml';
import ReactLogo from './assets/react-logo.png';
import './babel';

console.log('JSON: ', data);
console.log('XML: ', xml);
console.log(ReactLogo);

let img = `<img src="${ReactLogo}">`;
document.getElementById('image').innerHTML = img;
