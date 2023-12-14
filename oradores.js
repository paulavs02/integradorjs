function getUsers (){
    //preparo la petición
    Const respuesta = fetch ('https://regres.in/api/users?page=2');

    //intento resolver la promesa
    respuesta
        .then(response => response json())
        .then(users => {
            dibujarTabla(users)
        })
        .catch(error => console.log(error))
}

function dibujarTabla(data) {
    const rows = dibujarFilas(data.data);
    document.getElementById('usersRows').innerHTML = rows;
}

function dibujarFilas(users){
    let rows = '';
    for(let user of users){
        console.log(user)
        rows += 
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td>
                img src="${user.avatar}"

            </td>
        </tr>

    }
    return rows;
}
document.getElementById('btnGetUsers').addEventListener("click",getUsers);
