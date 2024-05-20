// class MinHeap {
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

//     removeMin() {
//         if (this.heap.length === 0) {
//             return null;
//         }
//         if (this.heap.length === 1) {
//             return this.heap.pop();
//         }
//         const min = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return min;
//     }

//     heapifyUp(index) {
//         let parentIndex = Math.floor((index - 1) / 2);
//         while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//             index = parentIndex;
//             parentIndex = Math.floor((index - 1) / 2);
//         }
//     }

//     heapifyDown(index) {
//         let leftChildIndex = 2 * index + 1;
//         let rightChildIndex = 2 * index + 2;
//         let smallest = index;

//         if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
//             smallest = leftChildIndex;
//         }

//         if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
//             smallest = rightChildIndex;
//         }

//         if (smallest !== index) {
//             [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//             this.heapifyDown(smallest);
//         }
//     }
// }

// // Example usage of MinHeap
// const minHeap = new MinHeap();
// minHeap.buildHeap([10, 5, 7, 3, 2, 6]);
// console.log("MinHeap:", minHeap.heap); // Output: [2, 3, 6, 5, 10, 7]
// minHeap.insert(4);
// console.log("MinHeap after insert:", minHeap.heap); // Output: [2, 3, 4, 5, 10, 7, 6]
// console.log("Removed min:", minHeap.removeMin()); // Output: 2



// class MinHeap{
//     constructor(){
//     this.heap=[]
//     }

//     buildHeap(arr){
//         this.heap=arr
//         for(let i = Math.floor(this.heap.length/2);i>=0;i--){
//               this.heapfiDown(i)
//         }
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     removeMin(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return  this.heap.pop()
//         }

//         const  min = this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapfiDown(0)
//         return min
//     }

//     heapifyUp(index){
//         const parentIndex= Math.floor((index-1)/2)

//         while(index>0 && this.heap[index]<this.heap[parseFloat]){
//             [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//              index=parentIndex
//              parentIndex=Math.floor((index-1)/2)
//         }
//     }

//     heapfiDown(index){
//         let smallest = index
//         const leftChildIndex= 2*index+1
//         const rightChildIndex= 2*index+2

//         if( leftChildIndex< this.heap.length && this.heap[leftChildIndex]<this.heap[smallest] ){
//             smallest=leftChildIndex
//         }
//         if( rightChildIndex < this.heap.length && this.heap[rightChildIndex]< this.heap[smallest]){
//             smallest=rightChildIndex
//         }
//         if(smallest !== index){
//             [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
//             this.heapfiDown(smallest)
//         }
//     }
// }

// const minheap= new MinHeap()
// minheap.buildHeap([1,4,3,10,516])
// console.log('build array is '+ minheap.heap)
// minheap.insert(0)
// console.log('after insertion '+ minheap.heap)
// console.log('after remove'+ minheap.removeMin())
// console.log('after insertion '+ minheap.heap)


// class MinHeap {
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

//     removeMin() {
//         if (this.heap.length === 0) {
//             return null;
//         }
//         if (this.heap.length === 1) {
//             return this.heap.pop();
//         }

//         const min = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown(0);
//         return min;
//     }

//     heapifyUp(index) {
//         let parentIndex = Math.floor((index - 1) / 2);

//         while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
//             [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//             index = parentIndex;
//             parentIndex = Math.floor((index - 1) / 2);
//         }
//     }

//     heapifyDown(index) {
//         let smallest = index;
//         const leftChildIndex = 2 * index + 1;
//         const rightChildIndex = 2 * index + 2;

//         if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
//             smallest = leftChildIndex;
//         }
//         if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
//             smallest = rightChildIndex;
//         }
//         if (smallest !== index) {
//             [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//             this.heapifyDown(smallest);
//         }
//     }
// }

// const minheap = new MinHeap();
// minheap.buildHeap([1, 4, 3, 10, 516]);
// console.log('build array is ' + minheap.heap);
// minheap.insert(0);
// console.log('after insertion ' + minheap.heap);
// console.log('after remove ' + minheap.removeMin());
// console.log('after insertion ' + minheap.heap);



// class MinHeap{
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
//         this.heapFyUp(this.heap.length-1)
//     }

//     removeMin(){

//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         const min= this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }

//     heapifyDown(index){
//         let smaller=index
//         const leftChildIndex=2*index+1
//         const rightChildIndex=2*index+2

//         if(leftChildIndex>0 && this.heap[leftChildIndex]<this.heap[smaller]){
//             smaller=leftChildIndex
//         }
//         if(rightChildIndex> 0 && this.heap[rightChildIndex]< this.heap[smaller]){
//             smaller= rightChildIndex
//         }
//         if( smaller!==index){
//             [this.heap[index],this.heap[smaller]]=[this.heap[smaller],this.heap[index]]
//             this.heapifyDown(smaller)
//         }
//     }

//     heapFyUp(index){
//         let parentIndex= Math.floor((index-1)/2)

//         while(index > 0 && this.heap[index]<this.heap[parentIndex]){
//               [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//               index=parentIndex
//               parentIndex=Math.floor((index-1)/2)
//         }
        
//     }
// }

// const minheap=new MinHeap()
// minheap.buildHeap([2,3,1,4,5,6])
// console.log('build heap' + minheap.heap)
// minheap.insert(0)
// console.log('build heap' + minheap.heap)
// console.log('remove '+ minheap.removeMin())
// console.log('build heap' + minheap.heap)


// class Minheap{
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
    
//     removeMin(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }

//         const min = this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }

//     heapifyUp(index){
//         let parentIndex= Math.floor((index-1)/2)

//         while(index>0 && this.heap[index]< this.heap[parentIndex]){
//              [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//              index=parentIndex
//              parentIndex=Math.floor((index-1)/2)
//         }
//     }
//     heapifyDown(index){
//         let smaller=index
//         const leftChildIndex=2*index+1
//         const rightChildIndex= 2*index+2

//         if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]< this.heap[smaller]){
//             smaller=leftChildIndex
//         }
//         if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]< this.heap[smaller]){
//             smaller=rightChildIndex
//         }
//         if(smaller!== index){
//             [this.heap[index],this.heap[smaller]]=[this.heap[smaller],this.heap[index]]
//             this.heapifyDown(smaller)
//         }
//     }
// }

// const minheap=new Minheap()
// minheap.buildHeap([2,3,4,5,6])
// console.log('build heap'+ minheap.heap)
// minheap.insert(0)
// console.log('build heap'+ minheap.heap)
// minheap.removeMin()
// console.log('build heap'+ minheap.heap)




// class MinHeap{
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

//     removeMin(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }

//         const min = this.heap[0]
//         this.heap[0]= this.heap.pop()
//         this.heapifyDown(0)
//         return min

//     }

//     heapifyUp(index){
//         let parentIndex= Math.floor((index-1)/2)

//         while(index>0 && this.heap[index]< this.heap[parentIndex]){
//              [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//              index=parentIndex
//              parentIndex=Math.floor((index-1)/2)
//         }
//     }

//     heapifyDown(index){
//         let smaller= index
//         const leftChildIndex= 2*index+1
//         const rightChildIndex= 2*index+2

//         if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]< this.heap[smaller]){
//             smaller=leftChildIndex
//         }
//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex]< this.heap[smaller]){
//             smaller=rightChildIndex
//         }
//         if(smaller !== index){
//             [this.heap[index],this.heap[smaller]]=[this.heap[smaller],this.heap[index]]
//             this.heapifyDown(smaller)
//         }
//     }
// }

// const minheap= new MinHeap()
// minheap.buildHeap([2,3,4,5,6])
// console.log('build '+ minheap.heap)
// minheap.insert(0)
// console.log('build' + minheap.heap)
//  console.log(minheap.removeMin())
//  console.log('heap' + minheap.heap)



// class Minheap{
//     constructor(){
//         this.heap=[]
//     }

//     bulidHeap(arr){
//         this.heap=arr
//          for(let i = Math.floor((this.heap.length)/2);i>=0;i--){
//             this.heapfiDown(i)
//          }
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     removeMin(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         const min = this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapfiDown(0)
//         return min
//     }

//     heapifyUp(index){
//         let parentIndex=Math.floor((index-1)/2)
        
//         while(index> 0 && this.heap[index]< this.heap[parentIndex]){
//             [this.heap[index],this.heap[parentIndex]]= [this.heap[parentIndex],this.heap[index]]
//              index= parentIndex
//              parentIndex=Math.floor((index-1)/2)
//         }
//     }

//     heapfiDown(index){
//         let smaller= index
//         let leftChildIndex= 2*index+1
//         let rightChildIndex= 2*index+2

//         if(leftChildIndex< this.heap.length && this.heap[leftChildIndex]< this.heap[smaller]){
//             smaller=leftChildIndex
//         }
//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex]< this.heap[smaller]){
//             smaller=rightChildIndex
//         }
//         if(smaller !== index){
//             [this.heap[index],this.heap[smaller]]=[this.heap[smaller],this.heap[index]]
//             this.heapfiDown(smaller)
//         }
//     }
// }

// const minheap= new Minheap()
// minheap.bulidHeap([2,3,4,5,6,7])
// console.log('build '+ minheap.heap)
// minheap.insert(0)
// console.log('build '+ minheap.heap)
// console.log('remove '+ minheap.removeMin())
// console.log('build '+ minheap.heap)



// class Heap{
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

//     deletionHeap(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }

//         const min = this.heap[0]
//          this.heap[0]=this.heap.pop()
//          this.heapifyDown(0)
//          return min
//     }

//     heapifyUp(index){
//         let parentIndex= Math.floor((index-1)/2)
//         while(index>0 && this.heap[index]< this.heap[parentIndex]){
//             [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//             index=parentIndex
//             parentIndex=Math.floor((index-1)/2)
//         }
//     }
//     heapifyDown(index){
//         let smaller=index
//         const leftChildIndex= 2*index+1
//         const rightChildIndex= 2*index+2

//         if(leftChildIndex< this.heap.length&& this.heap[leftChildIndex]<this.heap[smaller]){
//             smaller=leftChildIndex
//         }
//         if(rightChildIndex< this.heap.length && this.heap[rightChildIndex]<this.heap[smaller]){
//             smaller=rightChildIndex
//         }
//         if(smaller !==index){
//             [this.heap[index],this.heap[smaller]]=[this.heap[smaller],this.heap[index]]
//             this.heapifyDown(smaller)
//         }
//     }

// }


// const heap= new Heap()

// heap.buildHeap([2,3,4,5,6,7])
// console.log('heap is '+ heap.heap)
// heap.insert(10)
// console.log('afeter inserting '+ heap.heap)

// console.log('removed value' + heap.deletionHeap())
// console.log('aftere removing'+ heap.heap)


// class Heap{
//     constructor(){
//         this.heap=[]
//     }

//     buildHeap(arr){
//         this.heap=arr
//         for(let i = Math.floor(this.heap.length/2) ;i>=0;i--){
//             this.heapifyDown(i)
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     remove(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         const min = this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }

//     heapifyDown(index){
//         let smaller= index
//         const leftIndexChild = 2*index+1
//         const rightIndexChild= 2*index+2

//         if(leftIndexChild < this.heap.length && this.heap[leftIndexChild]< this.heap[smaller]){
//             smaller=leftIndexChild
//         }
//         if(rightIndexChild < this.heap.length && this.heap[rightIndexChild]< this.heap[smaller]){
//             smaller=rightIndexChild
//         }
//         if(smaller !== index){
//             [this.heap[index],this.heap[smaller]]=[this.heap[smaller],this.heap[index]]
//             this.heapifyDown(smaller)
//         }
//     }

//     heapifyUp(index){
//         const parentIndex = Math.floor((index-1)/2)

//         while(index>0 && this.heap[index]<this.heap[parentIndex]){
//              [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//              index=parentIndex
//              parentIndex=Math.floor((index-1)/2)
//         }
//     }
// }


// const heap = new Heap()
// heap.buildHeap([34,5,6,8,4,2,0])
// console.log('heap is '+  heap.heap)
// heap.insert(11)
// console.log('after insertion'+ heap.heap)
// console.log('removed value is '+ heap.remove())
// console.log('after deletiion ' + heap.heap)


// class Heap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(arr){
//         this.heap=arr
//         for(let i = Math.floor(this.heap.length/2);i>=0;i--){
//             this.heapifyDown(i)
//         }
//     }
//      remove(){
//         const min = this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return min
//      }

//      heapifyDown(index){
//         let smaller= index
//         const leftIndexChild= 2*index+1
//         const rightChildIndex= 2*index+2

//         if(leftIndexChild<this.heap.length && this.heap[leftIndexChild]< this.heap[smaller]){
//             smaller= leftIndexChild
//         }
//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex]< this.heap[smaller]){
//             smaller=rightChildIndex
//         }
//         if(smaller !== index){
//             [this.heap[index],this.heap[smaller]]=[this.heap[smaller],this.heap[index]]
//             this.heapifyDown(smaller)
//         }
//      }
// }


// const heap = new Heap()
// console.log('halooo')
// heap.buildHeap([2,3,1,4,5,6])
// console.log('heap is '+ heap.heap)
// console.log('remove values is '+ heap.remove())
// console.log('after remove ' + heap.heap)

// class Heap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(arr){
//         this.heap=arr
//           for(let i =Math.floor(this.heap.length/2);i>=0;i--){
//             this.heapifyDown(i)
//           }
//     }
//     insert(value){
//          this.heap.push(value)
//          this.heapifyUp(this.heap.length-1)
//     }

//     remove(){
//         const min= this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }

//     heapifyDown(index){
//         let smallerl= index
//         const leftChildIndex= 2*index+1
//         const  rightChildIndex= 2*index+2

//         if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]< this.heap[smallerl]){
//             smallerl=leftChildIndex
//         }
//         if(rightChildIndex< this.heap.length && this.heap[rightChildIndex]< this.heap[smallerl]){
//             smallerl= rightChildIndex
//         }
//         if(smallerl !== index){
//             [this.heap[index],this.heap[smallerl]]=[this.heap[smallerl],this.heap[index]]
//              this.heapifyDown(smallerl)
//         }
//     }
     
//       heapifyUp(index){
//         const parentIndex= Math.floor(index-1)/2
//         while(index > 0 && this.heap[index]< this.heap[parentIndex]){
//              [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
//              index=parentIndex
//              parentIndex=Math.floor((index-1)/2)
//         }
//       }
// }

// const  heap = new Heap()
// heap.buildHeap([3,2,4,6,1,8])
// console.log('builded heap is '+ heap.heap)
// console.log('after remove value'+ heap.remove())
// console.log('builded heap is '+ heap.heap)


class Heap{
    constructor(){
        this.heap=[]
    }

    buildHeap(arr){
        this.heap=arr
        for(let i = Math.floor(this.heap.length/2);i>=0;i--){
            this.heapifyDown(i)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    remove(){
        const min = this.heap[0]
        this.heap[0]= this.heap.pop()
        this.heapifyDown(0)
        return min
    }
      
    smallestValue(){
        return this.heap[0]
    }

    heapifyUp(index){
        const parentIndex= Math.floor((index-1)/2)

        while(index>0 && this.heap[index]<this.heap[parentIndex]){
            [this.heap[index],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[index]]
            index=parentIndex
            parentIndex= Math.floor((index-1)/2)
        }
    }

    heapifyDown(index){
        let  smaller= index
        const leftChildIndex= 2*index+1
        const rightChildIndex= 2*index+2

        if(leftChildIndex< this.heap.length && this.heap[leftChildIndex]< this.heap[smaller]){
            smaller=leftChildIndex
        }
        if(rightChildIndex< this.heap.length && this.heap[rightChildIndex]< this.heap[smaller]){
            smaller= rightChildIndex
        }
        if(smaller !== index){
            [this.heap[index],this.heap[smaller]]=[this.heap[smaller],this.heap[index]]
            this.heapifyDown(smaller)
        }
    }
}

const heap= new Heap()
heap.buildHeap([2,3,1,4,5])
console.log('build heap is '+ heap.heap)
heap.insert(11)
console.log('insertion then'+ heap.heap)
console.log('removing value is '+ heap.remove())
console.log('removing value'+ heap.heap)
console.log('smallest value is '+  heap.smallestValue())