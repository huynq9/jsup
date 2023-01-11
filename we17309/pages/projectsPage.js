import header from "../conmponents/Header";
import {projects} from "../data/"
const projects = () => `${header()} <h1>Projects Page</h1> 

${projects.map((item) => `<div>
    <a href="/project/${item.id}">${item.name}</a>
</div>`)}`;


export default projects ;