// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     buildHeap(arr) {
//         this.heap = arr;
//         for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
//             this.heapifyDown(i);
//         }
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     removeMax() {
//         if (this.heap.length === 0) {
//             return null;
//         }
//         if (this.heap.length === 1) {
//             return this.heap.pop();
//         }
//         const max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return max;
//     }

//     heapifyUp(index) {
//         let parentIndex = Math.floor((index - 1) / 2);
//         while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//             index = parentIndex;
//             parentIndex = Math.floor((index - 1) / 2);
//         }
//     }

//     heapifyDown(index) {
//         let leftChildIndex = 2 * index + 1;
//         let rightChildIndex = 2 * index + 2;
//         let largest = index;

//         if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
//             largest = leftChildIndex;
//         }

//         if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
//             largest = rightChildIndex;
//         }

//         if (largest !== index) {
//             [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//             this.heapifyDown(largest);
//         }
//     }
// }

// // Example usage of MaxHeap
// const maxHeap = new MaxHeap();
// maxHeap.buildHeap([3, 7, 2, 5, 10, 6]);
// console.log("MaxHeap:", maxHeap.heap); // Output: [10, 7, 6, 5, 3, 2]
// maxHeap.insert(8);
// console.log("MaxHeap after insert:", maxHeap.heap); // Output: [10, 8, 6, 7, 3, 2, 5]
// console.log("Removed max:", maxHeap.removeMax()); // Output: 10


// class MaxHeap{
//     constructor(){
//         this.heap=[]
//     }

//     buildHeap(arr){
//         this.heap=arr
//         for(let i = Math.floor(this.heap.length/2);i>=0;i--){
//            this.heapifyDown(i)
//         }
//     }

//         insert(value){
//             this.heap.push(value)
//             this.heapifyUp(this.heap.length-1)
//     }

//     heapifyDown(i){
//         let largest=i
//          let leftIndex=2*i+1
//          let rightChild=2*i+2

//         if(leftIndex< this.heap.length && this.heap[leftIndex]>this.heap[largest]){
//             largest=leftIndex
//         }
//         if(rightChild< this.heap.length && this.heap[rightChild]>this.heap[largest]){
//             largest=rightChild
//         }
//         if(largest!==i){
//             [this.heap[i],this.heap[largest]]=[this.heap[largest],this.heap[i]]
//             this.heapifyDown(largest)
//         }
//     }
//     heapifyUp(index){
//         let parentIndex= Math.floor((index-1)/2)
        
//       while(index>0 && this.heap[index]> this.heap[parentIndex]){
//         [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//         index=parentIndex
//         parentIndex=Math.floor((index-1)/2)
//       }
//     }
// }

// const heap=new MaxHeap()
// heap.buildHeap([3,2,4,5,6,1])
// console.log('heap is '+ heap.heap)
// heap.insert(88)
// console.log('after insertion'+ heap.heap)


// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(arr){
//         this.heap=arr
//         for(let i = Math.floor((this.heap.length)/2);i>=0;i--){
//             this.heapifyDown(i)
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         let parentIndex= Math.floor((index-1)/2)
//         while(index>0 && this.heap[index]<this.heap[parentIndex]){
//              [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//               index=parentIndex
//               parentIndex=Math.floor((index-1)/2)
//         }
//     }
//     heapifyDown(index){
//         smallest=index
//         leftIndex=2*i+1
//         rightIndex= 2*i+2

//         if(leftIndex< this.heap.length && this.heap[leftIndex] < this.heap[smallest]){
//             smallest=leftIndex
//         }
//         if(rightIndex< this.heap.length && this.heap[rightIndex]< this.heap.smallest){
//             smallest=rightIndex
//         }
//         if(smallest!==index){
//             [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
//             this.heapifyDown(smallest)
//         }
//     }
// }


// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(arr){
//        this.heap=arr
//        for(let i = Math.floor(this.heap.length/2);i>=0;i--){
//         this.heapfiDown(i)
//        }
//     }
//     insert(value){
//         this.heap.push(value)
//        this.heapifyUp(this.heap.length-1)
//     }

//     heapfiDown(index){
//         let smaller= index
//         let leftIndex=2*index+1
//         let rightIndex=2*index+2

//         if(leftIndex<this.heap.length && this.heap[leftIndex]<this.heap[smaller]){
//             smaller=index
//         }
//         if(rightIndex< this.heap.length && this.heap[rightIndex]< this.heap[smaller]){
//             smaller=rightIndex
//         }
//         if(smaller!==index){
//             [this.heap[index],this.heap[smaller]]=[this.heap[index]]
//             this.heapfiDown(smaller)
//         }
//     }
//     heapifyUp(index){
//         let parentIndex= Math.floor((index-1)/2)

//         while(index> 0 && this.heap[index]<this.heap[parentIndex]){
//             [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//              index=parentIndex
//              parentIndex=Math.floor((index-1)/2)
//         }
//     }
// }

// const heap= new MinHeap()
// heap.buildHeap([3,2,4,1,8])
// console.log('builded heap is '+ heap.heap)
// heap.insert(0)
// console.log('after insertion is '+ heap.heap)


class MinHeap{
    constructor(){
        this.heap=[]
    }
    buildHeap(arr){
        this.heap=arr
        for(let i = Math.floor((this.heap.length/2)-1);i>=0;i--){
            this.heapifyDown(i)
        }
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    heapifyDown(index){
        let smallest= index
        let leftIndex= 2*index+1
        let rightIndex= 2*index+2

        if(leftIndex< this.heap.length && this.heap[leftIndex]< this.heap[smallest]){
            smallest=leftIndex
        }
        if(rightIndex<this.heap.length && this.heap[rightIndex]<this.heap[smallest]){
            smallest=rightIndex
        }
        if(smallest!==index){
            [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
            this.heapifyDown(smallest)
        }
    }
    heapifyUp(index){
        let parent= Math.floor((index-1)/2)
        while(index>0 && this.heap[index]<this.heap[parent]){
            [this.heap[index],this.heap[parent]]= [this.heap[parent],this.heap[index]]
            index=parent
            parent=Math.floor((index-1)/2)
        }
    }
}

const heap=new MinHeap()
heap.buildHeap([3,2,5,1,6])
console.log('heap is '+ heap.heap)
heap.insert(0)
console.log('after heap is '+ heap.heap)