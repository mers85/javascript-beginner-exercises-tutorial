var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
    for (var i = 0; i < anArray.length; i++){ 
        person = anArray[i];
        for (var n = 0; n < person.lucky_numbers.length; n++){
            sumOfAllLuckyNumbers += person.lucky_numbers[n]
        }
    }
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:

function change4LuckyNumber(person, newluckynum){
    person.lucky_numbers[3] = newluckynum
    return person.lucky_numbers
}

function createNewPerson(name, lastname, age, gender, lucky_numbers, significant_other){
 var newPerson = {
     name: name,
     lastname: lastname,
     age: age,
     gender: gender,
     lucky_numbers: lucky_numbers,
     significant_other: significant_other
 };
 return newPerson
}

function AddNewPersonToFamily(newPerson){
    family.members.push(newPerson);
    return family
}

change4LuckyNumber(person, 33);
var person3 = createNewPerson('Jimmy','Doe',13,'male',[1,2,3,4],null);
var totalFamily = AddNewPersonToFamily(person3);

//console.log(person.lucky_numbers);
//console.log(person3);
//console.log(family.members);

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 