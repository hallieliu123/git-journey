// 456
// 789
function test(){
    var arr = [];
    for( var i = 0; i< 6; i++ ){
           arr[i] = (function(i){
               console.log(i)
           })(i)
    }
}
