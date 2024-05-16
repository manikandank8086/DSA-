// function heapify(arr,n,i){
//     let largest = i
//     let left = 2*i+1
//     let right = 2*i+2
    
//     if(left < n &&arr[left]>=arr[largest]){
//         largest=left
//     }

//     if( right<n && arr[right]>=arr[largest]){
//         largest=right
//     }
//     if(largest!==i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }

// function heapSort(arr){
//     let n = arr.length

//     for(let i = Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }

//     for(let i = n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
//     }

//     const array=[3,2,1,5,6]
//     console.log(heapSort(array))


// function heapify(arr,n,i){
//     let largest= i
//     let left=2*i+1
//     let right=2*i+2

//     if(left<n && arr[left]>arr[largest]){
//         largest=left
//     }
//     if(right< n && arr[right]>arr[largest]){
//         largest = right
//     }

//     if(largest!==i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }

// function heapSort(arr){
//     let  n = arr.length

//     for(let i = Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }

//     for(let i = n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }

// const array =[3,4,1,3,1]
// console.log(heapSort(array))


// function heapify(arr,n,i){
// let largest = i
// let left = 2*i+1
// let right=2*i+2

// console.log('largest is '+""+ largest)
// console.log('left is '+''+ left)
// console.log('right is '+''+ right)

//    if(left<n && arr[left]> arr[largest]){
//     largest=left
//    }
//    if(right <n && arr[right]>arr[largest]){
//     largest = right
//    }
//    if(largest!==i){
//     [arr[i],arr[largest]]=[arr[largest],arr[i]]
//     heapify(arr,n,largest)
//    }
// }

// function heapSort(arr){
//     let n = arr.length

//     for(let i =Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i =n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }

// const array = [4,2,5,2,7]
// console.log(heapSort(array))


// function heapify(arr,n,i){
//     let largest= i
//     let left = 2*i+1
//     let right = 2*i+2
    
//      if(left<n && arr[left]>arr[largest]){
//         largest=left
//      }
//      if(right<n && arr[right]>arr[largest]){
//         largest=right
//      }
//      if(largest!==i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//      }
// }

// function heapSort(arr){
//     let n = arr.length

//     for(let i = Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i =n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]] 
//         heapify(arr,i,0)
//        }
//        return arr
// }
// const array=[3,2,4,1]
// console.log(heapSort(array))

// function heapify(arr,n,i){
//     let largest=i
//     let left = 2*i+1
//     let right = 2*i+2
//     if(left<n && arr[left]>arr[largest]){
//         largest=left
//     }
//     if(right<n && arr[right]>arr[largest]){
//         largest=right
//     }
//     if(largest!==i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//     }
// }

// function heapSort(arr){
//     let n = arr.length
//     for(let i =Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)

//     }
//     for(let i =n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }

// const array = [3,2,4,1]
// console.log(heapSort(array))

// function heapify(arr,n,i){
//     let largest = i
//     let left= 2*i+1
//     let right= 2*i+2

//     if(left < n && arr[left]< arr[largest]){
//         largest = left
//     }
//     if(right < n && arr[right]<arr[largest]){
//         largest=right
//     }
//     if(largest!==i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//     }
// }

// function heapSort(arr){
//     let n =arr.length

//     for(let i= Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i =n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
     
//     }
//     return arr
// }

// const array=[3,2,4,1]
// console.log(heapSort(array))


// function heapify(arr,n,i){
//     let largest=i
//     let left = 2*i+1
//     let right=2*i+2
//     if(left<n && arr[left]<arr[largest]){
//         largest= left
//     }
//     if(right<n && arr[right]<arr[largest]){
//         largest=right
//     }
//     if(largest!==i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//     }
// }

// function heapSort(arr){
//     let n = arr.length
//     for(let i = Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i = n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }

//  const array = [3,2,4,1]
//  console.log(heapSort(array))



// function heapify(arr,n,i){
//     let largest = i
//     let left = 2*i+1
//     let right = 2*i+2

//     if(left< n && arr[left]<arr[largest]){
//         largest=left
//     }
//     if(right<n && arr[right]<arr[largest]){
//         largest=right
//     }
//     if(largest!==i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//     }
// }

// function heapSort(arr){
//     let n = arr.length

//     for(let i = Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i = n-1;i>0;i--){
//     [arr[0],arr[i]]=[arr[i],arr[0]]
//     heapify(arr,i,0)
//     }
//     return arr
// }

// function heapify(arr,n,i){
//     let largest= i
//     let left= 2*i+1
//     let right =2*i+2
//     if(left<n && arr[left]>arr[largest]){
//         largest=left
//     }
//     if(right<n && arr[right]>arr[largest]){
//         largest=right
//     }
//     if(largest!==i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//     }
// }

//  function heapSort(arr){
//     let n = arr.length
//     for(let i =Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i =n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
//  }

// const array = [3,2,4,1]
// console.log(heapSort(array))



// function heapify(arr,n,i){
//     let largest= i 
//     let left = 2*i+1
//     let right =2*i+2

//      if(left< n && arr[left]> arr[largest]){
//       largest= left
//      }
//      if(right< n && arr[right]> arr[largest]){
//         largest=right
//      }
//      if(largest !== i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//      }
// }

//  function heapSort(arr){
//     let n = arr.length

//     for(let i = Math.floor((n-1)/2);i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i = n-1 ;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
//     return arr
// }

// const array =[6,9,4,1]
// console.log(heapSort(array))


// function heapify(arr,n,i){
//     let smaller= i
//     let left= 2 *i+1
//     let right = 2*i+2

//     if(left< n && arr[left]< arr[smaller]){
//         smaller= left

//     }
//     if( right< n && arr[right]< arr[smaller]){
//         smaller=right
//     }
//     if(smaller !== i ){
//         [arr[i],arr[smaller]]=[arr[smaller],arr[i]]
//         heapify(arr,n ,smaller)

//     }
// }

//  function heapSort(arr){
//     let n = arr.length

//     for(let i = Math.floor((n/2)-1);i>=0;i--){
//         heapify(arr,n,i)
//     }
//     for(let i = n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//          heapify(arr,i,0)
//     }
//     return arr
//  }

//  const array = [3,2,4,2,3,6,3,4,5]
//  console.log(heapSort(array))




function heapify(arr,n,i){
    let largest= i 
    let left = 2*i+1
    let right =2*i+2

    if(left< n && arr[left]> arr[largest]){
        largest=left
    }
    if(right<n && arr[right]> arr[largest]){
        largest=right
    }
    if(largest!==i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}

function heapSort(arr){
    let n = arr.length
    for(let i = Math.floor((n/2)-1);i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i = n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}

const array = [3,2,4,1]
console.log( heapSort(array))