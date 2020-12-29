
function sing(){
    var song = [];
    for(var i = 0; i < 12; i++){
        let sentence = "";
        if (i == 0){
             sentence = 'let it be';
        }else if(i == 4 ){
            sentence = ' words of wisdom';
        }else if (i == 10){
            sentence = ' there will be an answer';
        }else{
            sentence = ' let it be';
        }
        song.push(sentence);
    };
    return song.toString();
}
//Your code above ^^^

console.log(sing());