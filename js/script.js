// let root = document.getElementById('root')
// let API = "https://jsonplaceholder.typicode.com/albums";
// let html = ''
// fetch(API)
//   .then((response) => response.json())
//   .then((data) => data.map(el => {
//      html+= `
//      <h1>"$ "</h1>
//      `
//     root.innerHTML = html
//   }))
//    .catch(err => {
//     console.log(err);
//    })
// html += `
//      <img src="${el.url}">
//      `;
function add(){
    let body = document.getElementById('body');
    body.style.backgroundColor = "background: linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%);";
    body.style.color = "black";
    body.classList.add("btn-1")
   
}
function row(){
    let body = document.getElementById('body');
    body.style.backgroundColor = "background: linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%);";
    body.style.color = "white";
    body.classList.row("btn-2")
}
function row(){
    let body = document.getElementById('body');
    body.style.backgroundColor = "background: linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%);";
    body.style.color = "white";
    body.classList.row("btn-2")
}
