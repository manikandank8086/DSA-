// class Graph {
//     // Constructor and methods...

//     bfs(start) {
//         const queue = [start];
//         const result = [];
//         const visited = {};
//         visited[start] = true;

//         while (queue.length) {
//             const currentVertex = queue.shift();
//             result.push(currentVertex);

//             this.adjacencyList[currentVertex].forEach((neighbor) => {
//                 if (!visited[neighbor]) {
//                     visited[neighbor] = true;
//                     queue.push(neighbor);
//                 }
//             });
//         }

//         return result;
//     }
// }

// // Example usage:
// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "D");

// console.log("BFS traversal:", graph.bfs("A")); // Output: ["A", "B", "C", "D"]


// class Graph{
//     constructor(){
//         this.adjacentList={}
//     }

//     addVertex(vertex){
//         if(!this.adjacentList[vertex]){
//           this.adjacentList[vertex]=[]
//         }
//     }
//     addEdge(vertex1,vertex2){
//         this.adjacentList[vertex1].push(vertex2)
//         this.adjacentList[vertex2].push(vertex1)
//     }

//     bfs(start){
//         const queue=[start]
//         const result=[]
//         const visited={}

//         visited[start]=true
//         while(queue.length){
//             const currentVertex=queue.shift()
//             result.push(currentVertex)

//             this.adjacentList[currentVertex].forEach((neighbor)=>{
//                  if(!visited[neighbor]){
//                     visited[neighbor]=true
//                     queue.push(neighbor)
//                  }
//             })
//         }return result
//     }
// }

// const graph=new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('B','C')
// graph.addEdge('C','D')

// console.log('bfs is ' + graph.bfs('D'))


// class Graph{
//     constructor(){
//     this.adjacentList=[]
//     }


//     addVertex(vertex){
//         if(!this.adjacentList[vertex]){
//             this.adjacentList[vertex]=[]
//         }
//     }
//         addEdge(vertex1,vertex2){
//             this.adjacentList[vertex1].push(vertex2)
//             this.adjacentList[vertex2].push(vertex2)
//     }

//     bfs(start){
//         const result=[]
//         const visited={}
//         const queue=[start]
//         visited[start]=true

//         while(queue.length){
//             const currentVertex=queue.shift()
//               result.push(currentVertex)

//               this.adjacentList[currentVertex].forEach((neighbor)=>{
//                 if(!visited[neighbor]){
//                       visited[neighbor]=true
//                       queue.push(neighbor)
//                 }
//               })
//         }
//         return result
//     }
// }

// const graph=new Graph
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('B',"C")
// graph.addEdge('C','D')

// console.log(' queuw is ' + graph.bfs('A'))



// class Graph{
//     constructor(){
//         this.adjacentList=[]
//     }

//     addVertex(vertex){
//         if(!this.adjacentList[vertex]){
//             this.adjacentList[vertex]=[]
//         }
//     }
//     addEdge(vertex1,vertex2){
//          this.adjacentList[vertex1].push(vertex2)
//          this.adjacentList[vertex2].push(vertex1)
//     }

//     dfs(start){
//          const result = []
//          const stack = [start]
//          const visited={}
//          stack[start]=true

//          while(stack.length){
//             const currentVertex= stack.pop()
//             result.push(currentVertex)

//             this.adjacentList[currentVertex].forEach((neighbor)=>{
//                  if(!visited[neighbor]){
//                     visited[neighbor]=true
//                     stack.push(neighbor)
//                  }
//             })
//          }
//          return result
//     }
// }




// class Graph{
//     constructor(){
//         this.adjacebtList={}
//     }
//     addVertex(vertex){
//         if(!this.adjacebtList[vertex]){
//             this.adjacebtList[vertex]=[]
//         }
//     }
//     addEdge(vertex1,vertex2){
//         this.adjacebtList[vertex1].push(vertex2)
//         this.adjacebtList[vertex2].push(vertex1)
//     }

//     bfs(start){
//         const result=[]
//         const visited={}
//         const queue=[start]
//           visited[start]=true
//         while(queue.length){
//             const currentVertex= queue.shift()
//             result.push(currentVertex)

//             this.adjacebtList[currentVertex].forEach((neighbor)=>{
//                 if(!visited[neighbor])
//                     visited[neighbor]=true
//                     queue.push(neighbor)
                
//             })
//         }
//         return result
//     }
// }

// const graph = new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('B','C')
// graph.addEdge('C','D')

// console.log(graph.bfs('A'))

// class Graph {
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = [];
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         this.adjacencyList[vertex1].push(vertex2);
//         this.adjacencyList[vertex2].push(vertex1);
//     }

//     bfs(start) {
//         const result = [];
//         const visited = {};
//         const queue = [start];
//         visited[start] = true;

//         while (queue.length) {
//             const currentVertex = queue.shift();
//             result.push(currentVertex);

//             this.adjacencyList[currentVertex].forEach((neighbor) => {
//                 if (!visited[neighbor]) {
//                     visited[neighbor] = true;
//                     queue.push(neighbor);
//                 }
//             });
//         }
//         return result;
//     }
// }

// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'C');
// graph.addEdge('C', 'D');

// console.log(graph.bfs('A')); // Output: ['A', 'B', 'C', 'D']



// class Graph {
//     constructor(){
//         this.adjacencyList={}
//     }

//     addEdge(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]=[]
//         }
//     }

//     addVertex(vertex1,vertex2){
//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     bfs(start){
//         const result = []
//         const queue=[start]
//         const visited={}

//         queue[start]=true

//         while(queue.length){
//             const currentVertex=queue.shift()
//             result.push(currentVertex)

//             this.adjacencyList[currentVertex].forEach((neighbor)=>{
//                   if(!visited[neighbor]){
//                     visited[neighbor]=true
//                     queue.push(neighbor)
//                   }
//             })
//         }
//         return result
//     }
// }

// const graph= new Graph()

// graph.addEdge('A')
// graph.addEdge('B')
// graph.addEdge('C')
// graph.addEdge('D')

// graph.addVertex('A','B')
// graph.addVertex('A','C')
// graph.addVertex('C',"D")
// graph.addVertex('C','D')

// console.log('queue values  is '+ graph.bfs('A'))



// class Graph{
//     constructor(){
//         this.adjacencyList={}
//     }

//     addEdge(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]=[]
//         }
//     }

//     addVertex(vertex1,vertex2){
//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex1].push(vertex1)
//     }

//     dfs(start){
//         const stack = [start]
//         const result=[]
//         const visited={}

//         stack[start]=true
//         while(stack.length){
//             const currentNode=stack.pop()
//             result.push(currentNode)

//             this.adjacencyList[currentNode].forEach((neighbor)=>{
//                 if(!visited[neighbor]){
//                     visited[neighbor]=true
//                     stack.push(neighbor)
//                 }

//             })
//         }
//         return result
//     }
// }

// const graph= new Graph()
// graph.addEdge('A')
// graph.addEdge('B')
// graph.addEdge('C')
// graph.addEdge('D')
// graph.addVertex('A','B')
// graph.addVertex('A','C')
// graph.addVertex('B','D')
// graph.addVertex('B','C')

// console.log('this is stack values '+ graph.dfs('A'))



// class Graph{
//     constructor(){
//         this.adjcencyList={}
//     }
//     addEdge(vertex){
//         if(!this.adjcencyList[vertex]){
//             this.adjcencyList[vertex]=[]
//         }
//     }

//     addVertex(vertex1,vertex2){
//         this.adjcencyList[vertex1].push(vertex2)
//         this.adjcencyList[vertex2].push(vertex1)
//     }


//     dfs(start){
//         const result=[]
//         const visited={}
//         const stack=[start]
//         stack[start]=true

//         while(stack.length){
//             const currentVertex=stack.pop()
//             result.push(currentVertex)

//             this.adjcencyList[currentVertex].forEach((neighbor)=>{
//                 if(!visited[neighbor]){
//                     visited[neighbor]=true
//                     stack.push(neighbor)
//                 }
//             })
//         }
//         return result
//     }
// }

// const graph= new Graph()
// graph.addEdge('A')
// graph.addEdge('B')
// graph.addEdge('C')
// graph.addEdge('D')
// graph.addVertex('A','B')
// graph.addVertex('A','C')
// graph.addVertex('B','D')
// graph.addVertex('B','C')

// console.log('graph traversal' + graph.dfs('A'))

// class Graph{
//     constructor(){
//         this.adjcacncyList={}
//     }

//     addVertex(vertex){
//         if(!this.adjcacncyList[vertex]){
//             this.adjcacncyList[vertex]=[]
//         }
//     }

//     addEdge(vertex1,vertex2){
//         this.adjcacncyList[vertex1].push(vertex2)
//         this.adjcacncyList[vertex2].push(vertex1)
//     }
 
//      bfs(start){
//         const result=[]
//         const visited={}
//         const queue=[start]

//         visited[start]=true

//         while(queue.length){
//             const currentVertex=queue.shift()
//             result.push(currentVertex)
            

//                 this.adjcacncyList[currentVertex].forEach((neighbot)=>{
//                     if(!visited[neighbot]){
//                         visited[neighbot]=true
//                         queue.push(neighbot)
//                     }
//                 })
//             }
//             return result
//         }
//      }
   
//      const graph=new Graph()

//      graph.addVertex('A')
//      graph.addVertex('B')
//      graph.addVertex('C')
//      graph.addVertex('D')
//      graph.addEdge('A','B')
//      graph.addEdge('A','B')
//      graph.addEdge('B','D')
//      graph.addEdge('B','C')
//      console.log('bfs traversal is '+ graph.bfs('A'))


// class Graph{
//     constructor(){
//         this.adjacencyList={}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]=[]
//         }
//     }
//     addEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].push(vertex2)
//         this.adjacencyList[vertex2].push(vertex1)
//     }

//     bfs(start){
//         const stack=[start]
//         const result=[]
//         const visited={}
//         visited[start]=true

//         while(stack.length){
//             const currentVertex=stack.pop()
//             result.push(currentVertex)

//             this.adjacencyList[currentVertex].forEach((neighbor)=>{
//                 if(!visited[neighbor]){
//                     visited[neighbor]=true
//                     stack.push(neighbor)
//                 }
//             })
//         }
//         return result
//     }
// }

// const graph=new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')

// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('C','B')
// graph.addEdge('C','D')

// console.log('bfs is '+graph.bfs('A'))

// class Graph{
//     constructor(){
//         this.adjcencyList ={}
//     }

//     addVertex(vertex1){
//         if(!this.adjcencyList[vertex1]){
//             this.adjcencyList[vertex1]=[]
//         }
//     }
//     addEdges(vertex1,vertex2){
//         this.adjcencyList[vertex1].push(vertex2)
//         this.adjcencyList[vertex2].push(vertex1)
//     }
//     dfs(start){
//         const result=[]
//         const visited={}
//         const stack=[start]
//         visited[start]=true

//         while(stack.length){
//             const currentVertex=stack.pop()
//             result.push(currentVertex)

//             this.adjcencyList[currentVertex].forEach((neighbor)=>{
//                 if(!visited[neighbor]){
//                     visited[neighbor]=true
//                     stack.push(neighbor)
//                 }
//             })
//         }
//         return result
//     }
// }
// const graph= new  Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')

//  graph.addEdges('A','C')
//  graph.addEdges('A','B')
//  graph.addEdges('B','C')
//  graph.addEdges('B','D')

//  console.log('dfs is '+ graph.dfs('A'))

class Graph{
    constructor(){
        this.adjcencyList={}
    }
    addVertex(vertexr){
        if(!this.adjcencyList[vertexr]){
            this.adjcencyList[vertexr]=[]
        }
    }
    addEdge(vertex1,vertex2){
        this.adjcencyList[vertex1].push(vertex2)
        this.adjcencyList[vertex2].push(vertex1)
    }

    dfs(start){
        const result=[]
        const visited={}
        const stack=[start]

        visited[start]=true
         
          while(stack.length){
            const currentVertex=stack.pop()
            result.push(currentVertex)

            this.adjcencyList[currentVertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor]= true
                    stack.push(neighbor)
                }
            })
          }
          return result
    }
}

const graph= new Graph()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addVertex('D')
   graph.addEdge('A','B')
   graph.addEdge('A','C')
   graph.addEdge('B','D')
   graph.addEdge('B','C')

   console.log('dfs is '+ graph.dfs('A'))
