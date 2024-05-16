








function mostRepeatedOnes(arr){
    let mostOnesIndex=0
    let mostCount=0
    let count=0

    for(let i =0;i<arr.length;i++){
        count =0;
        for(let j =0;j<arr[i].length;j++){
            if(arr[i][j]==1){
                count++;
            }
        }
        if(count>mostCount){
            mostCount=count
            mostOnesIndex=i
        }
    }
    return mostOnesIndex
    
}

const array = [
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 1, 1, 1]
];

const result= mostRepeatedOnes(array)
console.log(result)