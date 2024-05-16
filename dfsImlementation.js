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

//     dfs(start) {
//         const stack = [start];
//         const visited = {};
//         const result = [];

//         visited[start] = true;
//         while (stack.length) {
//             const currentVertex = stack.pop();
//             result.push(currentVertex);

//             this.adjacencyList[currentVertex].forEach((neighbor) => {
//                 if (!visited[neighbor]) {
//                     visited[neighbor] = true;
//                     stack.push(neighbor);
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

// console.log("DFS traversal using stack:", graph.dfs("A")); // Output: ["A", "C", "D", "B"]



// class  Graph{
//     constructor(){
//         this.adjacencyList = {}
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

//     dfs(start){
//         const stack = [start]
//         const visited={}
//         const result=[]

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


// const graph= new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('B','D')
// graph.addEdge('C','D')

// console.log('Dfs traversal using stack '+ graph.dfs('B'))


// class Graph{
//     constructor(){
//         this.adjacencyList={}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]=[]
//         }
//     }

//     addEdges(vertex1,vertex2){
//          this.adjacencyList[vertex1].push(vertex2)
//          this.adjacencyList[vertex2].push(vertex1)
//     }

//     dfs(start){
//         const stack=[start]
//         const visited={}
//         const result=[]
        
//         visited[start]=true

//         while(stack.length){
//             const currentVertex=stack.pop()
//             result.push(currentVertex)

//             this.adjacencyList[currentVertex].forEach((neighbor)=>{
//                  if(!visited[neighbor]){
//                     visited[neighbor]=true
//                     stack.push(neighbor)
//                  }
//             })
//         }
//         return result
//     }
// }

// const graph= new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addEdges('A','B')
// graph.addEdges('A','C')
// graph.addEdges('B','D')
// graph.addEdges('C','D')

// console.log('graph is '+ graph.dfs('A'))



// class Graph{
//     constructor(){
//         this.adjacenctList={}
//     }

//     addVertex(vertex){
//         if(!this.adjacenctList[vertex]){
//             this.adjacenctList[vertex]=[]
//         }
//     }
//     addEdges(vertex1,vertex2){
//         this.adjacenctList[vertex1].push(vertex2)
//         this.adjacenctList[vertex2].push(vertex1)
//     }

//     dfs(start){
//         const stack=[start]
//         const result=[]
//         const visited={}

//          visited[start]=true
//          while(stack.length){
//             const currentVertex=stack.pop()
//              result.push(currentVertex)

//              this.adjacenctList[currentVertex].forEach((neighbor)=>{
//                   if(!visited[neighbor]){
//                     visited[neighbor]=true
//                     stack.push(neighbor)
//                   }
//              })
//          }
//          return result
//     }
// }

// const graph=new Graph()
// graph.addVertex('a')
// graph.addVertex('b')
// graph.addVertex('c')
// graph.addVertex('d')

// graph.addEdges('a','b')
// graph.addEdges('a','c')
// graph.addEdges('b','d')
// graph.addEdges('c','d')
// console.log('dfs is '+ graph.dfs('a'))



class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    dfs(start){
      const result=[]
      const stack=[start]
      const visited={}

        visited[start]=true

        while(stack.length){
            const currentVertex=stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true
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
graph.addEdge('B','C')
graph.addEdge('C','D')

console.log('dfs is '+ graph.dfs('A'))