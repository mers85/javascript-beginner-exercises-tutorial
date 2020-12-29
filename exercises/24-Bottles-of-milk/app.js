
function sing(){
    var song = [];
    for(var i = 99; i >= 1; i--){
        let sentence = "";
        if (i == 99){
             sentence = i+ ' ' + 'bottles of milk on the wall, ' + i + ' ' + 'bottles of milk.\n Take one down and pass it around, ';
        }else if (i == 1){
             sentence = i+ ' ' + 'bottles of milk on the wall.\n' + i + ' ' + 'bottles of milk on the wall, ' + i + ' ' + 'bottles of milk.\n Take one down and pass it around, no more bottles of milk on the wall.\n No more bottles of milk on the wall, no more bottles of milk.\n Go to the store and buy some more, 99 bottles of milk on the wall.\n' ;
        }else{
          sentence = i+ ' ' + 'bottle of milk on the wall.\n' + i + ' ' + 'bottle of milk on the wall, ' + i + ' ' + 'bottle of milk.\n Take one down and pass it around ' ;
        }
        console.log(sentence);
        
    };
    //return song.toString();
}
// Your code here:

sing();