// code your solution here
//function superbowlWin(records){
//    if (records.find(winYear)===true){
//        return records.year
//    }
//}

const test = [
    {year: "2015", result: "L"},
    {year: "2014", result: "W"}
]

/*function superbowlWin(object){
    let result = object.find(winYear)
    debugger
    if(result){
        console.log(result.year)
        return result.year
        
    }else
        return undefined
}*/

/*
//main function
function superbowlWin(object){
    if(object.find(winYear)){
        return object.find(winYear).year
    }
}

//callback function
function winYear(object){
    return object.result === "W"
}
*/











function superbowlWin(record){
    debugger
    return record.find(function(element) { 
        debugger
        if(element.result === "W"){
            return element.year 
        }
            //console.log(element.year)
            //let test2 = element.year
            //return element.year
        
    }).year
    
}
       
        