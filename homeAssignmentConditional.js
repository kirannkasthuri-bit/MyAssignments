//let browserName=""
function launchBrowser(browserName){
if(browserName==="chrome"){
console.log("success");
}
else{
    console.log("failure");
}
}


 function runTests(testType){
switch(testType){
    
    case "smoke" :
        console.log(testType)
        break;
    case "sanity" :
        console.log(testType)
        break;
    case "regression" :
        console.log(testType)
        break;    
    
   default :
        console.log("smoke"+ "win")
}
//return typename
} 
//launchBrowser("chrome")
runTests("sanity");