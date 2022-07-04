let email = document.querySelector('#register_email')
let pass = document.querySelector('#register_password')
let phone = document.querySelector('#register_phonenumber')
let userName = document.querySelector("#register_username")
let btnCreate = document.querySelector(".btn__create")

btnCreate.onclick = function () {

    let email = getEmail()
    let password = getPassword()
    let phone1 = phone.value
    let userName1 = userName.value
    const data ={
        email,
        password,
        phone1,
        userName1
    }
    axios.post('https://bach-tran.herokuapp.com/api/Use',data)
    .then(rs => console.log(rs))


}
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}



async function getUsers() {
    let data = await fetch("https://bach-tran.herokuapp.com/api/Use")
        .then(data => {
            return data.json()
        })
    return data
}
function getEmail() {
    return email.value
}
function getPassword() {
    return pass.value
}















