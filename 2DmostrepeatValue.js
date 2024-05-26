








// function mostRepeatedOnes(arr){
//     let mostOnesIndex=0
//     let mostCount=0
//     let count=0

//     for(let i =0;i<arr.length;i++){
//         count =0;
//         for(let j =0;j<arr[i].length;j++){
//             if(arr[i][j]==1){
//                 count++;
//             }
//         }
//         if(count>mostCount){
//             mostCount=count
//             mostOnesIndex=i
//         }
//     }
//     return mostOnesIndex
    
// }

// const array = [
//     [0, 1, 0, 1, 1],
//     [1, 1, 0, 0, 1],
//     [0, 0, 0, 1, 0],
//     [1, 0, 0, 1, 0],
//     [1, 0, 1, 1, 1]
// ];

// const result= mostRepeatedOnes(array)
// console.log(result)



function twoDimensionalArray(row,colum,value){
       let arr=[]
       for(let i =0;i<row;i++){
          arr.push([])
          for(let j =0;j<colum;j++){
            arr[i].push(value)
          }
       }
       return arr
}
const row=5
const colum=5
const result= twoDimensionalArray(row,colum,1)
console.log(result)