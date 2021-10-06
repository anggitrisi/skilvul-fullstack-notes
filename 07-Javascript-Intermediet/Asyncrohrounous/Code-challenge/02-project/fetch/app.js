async function getUsers() {
  let response = await fetch("https://randomuser.me/api/?results=2");
  response = await response.json();
  return response;
}

async function renderUsers() {
  let users  = await getUsers ()
  users = users.results;
  console.log(users)
  const container = document.querySelector('.container')

    for(i = 0; i<users.length; i++){
    const user = document.createElement('div');
    user.classList.add("user");
    container.appendChild(user);

    const img = document.createElement("img");
    img.src = 
    users[i].picture.large;
    user.appendChild(img);

    const h2 = document.createElement("h2");
    const name = document.createTextNode(users[i].name.first + users[i].name.last);
    h2.appendChild(name);
    user.appendChild(h2);


    let a = document.createElement('a');
    let email = document.createTextNode(users[i].email);
    a.appendChild(email);
    a.title = users[i].email;
    a.href = users[i].email;
   user.appendChild(a);

    }
}

renderUsers();




