// function create2DArray(row,colum,value){
//     let arr=[]
//     for(let i =0;i<row;i++){
//         arr.push([])
//         for(let j=0;j<colum;j++){
//             arr[i].push(value)
//         }
//     }
//     return arr
// }

// const row=5
// const colum=5
// const value=0
// const result= create2DArray(row,colum,value)
// console.log(result)


// function create2DArray(row,colum,value){
//     let arr=[]
//      for(let i =0;i<row;i++){
//         arr.push([])
//         for(let j =0;j<colum;j++){
//             if(j%2==0){
//                 value=0
//             arr[i].push(value)
//             }else{
//                 value=1
//                 arr[i].push(value)
//             }
            
//         }
//      }
//      return arr
// }

// const  row= 5
// const colum=5
// const value=0
// console.log(create2DArray(row,colum,value))

function Create2DArray(row,colum,value){
    let arr=[]
    for(let i =0;i<row;i++){
        arr.push([])
        for(let j=0;j<colum;j++){
            arr[i].push(value)
        }
    }
    return arr
}
const row=5
const colum=5
const value=0
console.log( Create2DArray(row,colum,value))