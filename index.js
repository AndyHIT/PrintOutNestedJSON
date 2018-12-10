var deepCounter = 0;
var printNestedObj = function(arrToObj){
    for(var key in arrToObj){
        if(key === 'title'){
            console.log(nestedDepth(deepCounter) + '- ' + arrToObj["title"]);
        }else{ 
            for(var child of arrToObj["children"]){  
                if(child.children !== null){
                    deepCounter++;
                    printNestedObj(child); 
                    deepCounter--;
                }else{
                    deepCounter++;
                    console.log(nestedDepth(deepCounter) + '- ' + child.title);
                    deepCounter--;
                }
            }        
        }
    }
}

function nestedDepth(count){
    var buff = '';
    while(count > 0){
        buff +='-';
        count--;
    }
    return buff;
}
