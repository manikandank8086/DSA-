

function findLongestStrig(string){
    let mostCount=0
    let j=0
    let value=''
    let Output=''
    const str= string.split('')

    for(let i =0;i<str.length;i++){
        let count = 0
          if(i!==j){
        for( j = 0;j<str.length;j++){
            if(str[i]==str[j]){
                count ++;
            }
        } if(count>mostCount){
            mostCount=count
            value=str[i]
        }
        
    }
        
    }
    for(let k=0;k<mostCount;k++){
        Output += value
   }
    return Output
}



const string = 'ghhgggyyyyyyyyyyyyy'
const result = findLongestStrig(string)
console.log(result)