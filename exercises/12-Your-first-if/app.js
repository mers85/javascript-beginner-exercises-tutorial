var total = prompt('How many km are left to go?');

// Your code below:
function insertKm(total){
    let int = parseInt(total);
    let result = "";
    if(int > 100 ){
        result = "Are we there yet?";
    }else if(int > 50){
        result = "We'll be there in 5 minutes";
    }else if(int <= 50){
        result = "I'm parking, I see you right now";
    }

    return result;
}
console.log(insertKm(total));