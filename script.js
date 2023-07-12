
fetch('https://jsonplaceholder.typicode.com/users')
  .then(r => r.json())
  .then(r => {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="wrapper">${r.map(n => `
        <div class="item">
          <div id = 'avatarkaClr' class="avatarka">
              <div style = 'background-color: ${randomClr()};' id = 'avatarka-text' class = 'avatarka-text'>${n.name[0].toUpperCase()+n.name.split(' ')[1][0]}</div>
          </div>
          <div  class = 'desc'>
              <p class = 'name'>${n.name}</p>
              <p class = 'email'>${n.email}</p>
          </div>
        </div>`).join('')}
      </div>
    `);
  });



function randomClr() 

{

  let clr = ''
  clr = '#' + Math.floor(Math.random()*16777215).toString(16);
  return clr

}

console.log(randomClr())








 
