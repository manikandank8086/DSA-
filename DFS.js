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

//     dfsRecursive(start) {
//         const visited = {};
//         const result = [];

//         const dfs = (vertex) => {
//             if (!vertex) return;
//             visited[vertex] = true;
//             result.push(vertex);
//             this.adjacencyList[vertex].forEach((neighbor) => {
//                 if (!visited[neighbor]) {
//                     dfs(neighbor);
//                 }
//             });
//         };

//         dfs(start);
//         return result;
//     }

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

//     hasCycle() {
//         const visited = {};
//         for (let vertex in this.adjacencyList) {
//             if (!visited[vertex]) {
//                 if (this.dfsHasCycle(vertex, null, visited)) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }

//     dfsHasCycle(vertex, parent, visited) {
//         visited[vertex] = true;
//         for (let neighbor of this.adjacencyList[vertex]) {
//             if (!visited[neighbor]) {
//                 if (this.dfsHasCycle(neighbor, vertex, visited)) {
//                     return true;
//                 }
//             } else if (neighbor !== parent) {
//                 return true;
//             }
//         }
//         return false;
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

// console.log("DFS traversal:", graph.dfsRecursive("A")); // Output: ["A", "B", "D", "C"]
// console.log("BFS traversal:", graph.bfs("A")); // Output: ["A", "B", "C", "D"]
// console.log("Has cycle:", graph.hasCycle()); // Output: false
// graph.addEdge("D", "A"); // Creating a cycle
// console.log("Has cycle after adding edge:", graph.hasCycle()); // Output: true


// class Graph{
//     constructor(){
//         this.adjcencyList={}
//     }
//     addVertex(vertex){
//         if(!this.adjcencyList[vertex]){
//             this.adjcencyList[vertex]=[]
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
//                    if(!visited[neighbor]){
//                     visited[neighbor]=true
//                     stack.push(neighbor)
//                    }
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
// graph.addEdges('B','C')
// graph.addEdges('B','D')

// console.log(graph.dfs('A'))

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
        const visited={}
        const stack=[start]
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
const graph=new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('B','D')
graph.addEdge('B','C')
console.log(graph.dfs('A'))