function findIndex(arr, callback){
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return i;
        }
    }
    return -1;
};

var arr = [3,4,6,2,1];
var exercise1 = findIndex(arr, function(num, index, array){
    return num === 6;
});
console.log('exercise1 ', exercise1);
var exercise2 = findIndex(arr, function(num, index, array){
    return num %2 === 0;
});
console.log('exercise2 ', exercise2);