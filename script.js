let space = " ";

let firstName = prompt(`Please enter your first name:`);
    if (firstName === "") {
        firstName = prompt('You must enter a first name. Please enter it now:')
    } else {
        alert(`Thank you, ${firstName}!`)
    }
console.log(firstName);

let middleName = prompt(`Please enter your middle name:`);
    if (middleName != "") {
        firstName = firstName.concat(space,middleName);
    }
console.log(middleName);

let lastName = prompt(`Please enter your last name:`);
    if (lastName === "") {
        lastName = prompt(`You must enter a last name. Please enter it now:`)
    }
console.log(lastName);

let fullName = firstName.concat(space,lastName);

let greeting = `Hello`;
let exclam = "!";
greeting = greeting.concat(space,fullName,exclam);
alert(greeting);
console.log(greeting);
