import Post from './Post';
import './styles/styles.css';
import './styles/styleLess.less';
import data from './assets/data.json';
import xml from './assets/data.xml';
import ReactLogo from './assets/react-logo.png';

const post = new Post("Webpack Post Title", ReactLogo);

console.log("Post to String", post.toString());

console.log('JSON: ', data);
console.log('XML: ', xml);
console.log(ReactLogo);

let img = `<img src="${ReactLogo}">`;
document.getElementById('image').innerHTML = img;
