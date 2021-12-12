class Node {
    d = Infinity;
    w = null;
    value = null;
    parent = null;
    edges = [];

    constructor(value, w) {
        this.value = value;
        this.w = w;
    }
}

function relax(u, v) {
    if(v.d > u.d - v.w) {
        v.d = u.d - v.w;
        v.parent = u;
    }
}

function printPath(node) {
    let path = [node.value];
    while(node.parent != null) {
        node = node.parent;
        path.push(node.value);
    }
    path.reverse();
    return path;
}

function dagShortestPath(nodes) {
    for(let node of nodes) {
        for(let other of node.edges) {
            relax(node, other);
        }
    }
}

function preFormatting(n, s, e) {
    let nodes = [];
    for(let [index, weight] of n.entries()) {
        nodes.push(new Node(index, weight));
    }
    nodes[s].d = -nodes[s].w;

    for(let edge of e) {
        let [u,v] = edge;
        u = nodes[u];
        v = nodes[v];
        u.edges.push(v);
    }

    return nodes;
}

let edges = [
    [0,1],
    [0,2],
    [1,2],
    [1,3],
    [2,3],
    [2,4],
    [2,5],
    [3,4],
    [3,5],
    [4,5]
];

let weights = [10, 2, 18, 15, 7, 9];

let nodes = preFormatting(weights, 0, edges);
dagShortestPath(nodes);
for(let i=0; i < 6; i++) {
    console.log(printPath(nodes[i]));
}