let clr = `red`

fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(r => r.json())
  .then(r => {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="wrapper">${r.map(n => `
        <div class="item">
          <div id = 'avatarkaClr' class="avatarka">
              <div style = 'background-color: ${randomClr()};' id = 'avatarka-text' class = 'avatarka-text'>${n.email[0].toUpperCase() + n.email[n.email.indexOf('@') + 1].toUpperCase()} </div>
          </div>
          <div  class = 'desc'>
              <p class = 'name'>${n.email.split('@')[0] + ' ' + n.email.split('@')[1][0].toUpperCase() + n.email.split(`${n.email.split('@')[1][0]}`).pop()}</p>
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


// document.getElementById('avatarka-text').style.backgroundColor = `red`







 