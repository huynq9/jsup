const project = ['project A', 'project B', 'project C', 'project D', 'project E', 'project F'];
let result = '';
//for
// for (let i = 0; i < project.length; i++) {
//     result += `<div>${project[i]}</div>`;
// }
// for in
for (let index in project) {
    result += `<div>${[index]}</div>`;
}
console.log(result);