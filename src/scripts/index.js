/*let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
    }
};
xhttp.open("GET", "http://5cb75dfda3763800149fd5fa.mockapi.io/api/v1/users", true);
xhttp.send();
*/

/*
import $ from 'jquery';

let promise = $.get("http://5cb75dfda3763800149fd5fa.mockapi.io/api/v1/users");
promise.then(
    data => console.log('sucess: ', data),
    error => console.log('error: ', error)
);

*/

/*
import $ from 'jquery';
let user = {
    name: 'Alejandro Macias',
    avatar: 'mark.jpg'
};

let promise = $.post("http://5cb75dfda3763800149fd5fa.mockapi.io/api/v1/users"
);

promise.then(
    data => console.log('sucess: ', data),
    error => console.log('error: ', error)
);

*/


let entry = '[{"name":"Luis","age":25},{"name":"Osuna","age":29},{"name":"Diego","age":17},{"name":"Tulio","age":31},{"name":"William","age":31}]';

let persons = JSON.parse(entry);
console.log(persons);

function under26(){
let less26 = persons.filter( 
    persons => persons.age < 26
    );
console.log(less26);
}

function diego(){
    let X = persons.filter( 
        persons => persons.name === "Diego"
        );
    console.log(X);
    }

under26();
diego();


// imprimir linea por linea. 



