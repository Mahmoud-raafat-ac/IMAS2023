promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
    reject({
    message:"the man likes to keep his word"
});    
}, 1000);
});
// ---------------------------
promise1.then((res) =>{
    console.log("hi")
}

).catch((err) =>{
    console.log("bye")

})
