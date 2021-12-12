//a tree with nodes pointing to the parent
//find set traverse the tree upto a node where there isn't any parent
//that is returned

//union operation attaches the small tree to the large tree
//hence the tree node should have a rank attribute with it

//disjoint class, find set operation and union operation

class Node {
    parent = null;
    rank = 1;
    value = null;

    constructor(value) {
        this.value = value;
    }
}

function findSet(node) {
    if(node.parent == null) {
        return node;
    }
    node.parent = findSet(node.parent);
    return node.parent;
}

function union(a, b) {
    if(a.rank < b.rank) {
        a.parent = b;
    }else if(a.rank > b.rank){
        b.parent = a;
    }else{
        a.parent = b;
        b.rank += 1;
    }
}

function print(node) {
    let values = [];
    while(node != null) {
        values.push(node.value);
        node = node.parent;
    }
    console.log(values);
}
//application of disjoint set operation
//finding if two vertices line on the same connected component or not

//adding the edges
let edges = [
    [0,2],
    [0,1],
    [1,4],
    [2,6],
    [3,6],
    [5,7],
    [7,8]
]

let nodes = new Array();
for(let i=0; i <= 8; i++) {
    nodes.push(new Node(i));
}

for(let i=0; i < edges.length; i++) {
    let edge = edges[i];
    let [na, nb] = edge.map(index => nodes[index]);
    union(findSet(na), findSet(nb));
}

for(let node of nodes) {
    print(node);
}

let checks = [
    [1,2],
    [3,4],
    [6,7],
    [7,8]
]

for(let check of checks) {
    if(findSet(nodes[check[0]]) == findSet(nodes[check[1]])) {
        console.log(`${check[0]} ${check[1]} same component`);
    }else{
        console.log(`${check[0]} ${check[1]} different component`);
    }
}