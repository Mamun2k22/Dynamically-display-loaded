function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}
function displayUser(data){
    const ul = document.getElementById('Users-List');
    for (const user of data){
        //console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);

    }
    //for (const user of data)
    //console.log(user.email);

};