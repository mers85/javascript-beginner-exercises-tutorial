function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	
    //your loop here
    var myArrayOfColors = [];
    for(var i = 1; i <= 10; i++){
        let min = Math.ceil(1);
        let max = Math.floor(5);
        var randomNumber = Math.floor(Math.random() * (max - min) + min); 
       
        var exampleColor = getColor(randomNumber);
        console.log(exampleColor);
        myArrayOfColors.push(exampleColor);
    } 
	return myArrayOfColors;
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();