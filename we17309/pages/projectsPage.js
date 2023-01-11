import header from "../conmponents/Header";
import {projects} from "../data/"
const project = () => `${header()} <h1>Projects Page</h1> 

${projects.map((item) => `\<div>
    <a href="/project-detail/${item.id}">${item.name}</a>
</div>`).join("")}`;


export default project ;