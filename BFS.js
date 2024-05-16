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

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfs(start) {
        const result = [];
        const visited = {};
        const queue = [start];
        visited[start] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');

console.log(graph.bfs('A')); // Output: ['A', 'B', 'C', 'D']
