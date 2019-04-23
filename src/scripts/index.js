
var entry = '[{"name":"Luis","age":25},{"name":"Osuna","age":29},{"name":"Diego","age":17},{"name":"Tulio","age":31},{"name":"William","age":31}]';
var persons = JSON.parse(entry);
var less26 = '';
var exactperson = '';
function under26(){
less26 = persons.filter( 
    persons => persons.age < 26
    );
}

function diego(){
exactperson = persons.filter( 
    persons => persons.name === "Diego"
    );
}

function printunder26(){
    for (var j in less26) 
     {
      console.log(less26[j]);
     }
}

function printexactperson(){
    for (var j in less26) 
    {
     console.log(exactperson[j]);
    }
}

under26();
printunder26();
console.log("-------------------------");
diego();
printexactperson();




