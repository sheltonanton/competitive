class Node {
    d = Infinity;
    value = null;
    parent = null;
    edges = [];

    constructor(value) {
        this.value = value;
    }
}

function relax(u, v, w) {
    if(v.d > u.d + w) {
        v.d = u.d + w;
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
        for(let edge of node.edges) {
            relax(node, edge[0], edge[1]);
        }
    }
}

function preFormatting(n, s, e) {
    let nodes = [];
    for(let i=0; i < n; i++) {
        nodes.push(new Node(i));
    }
    nodes[s].d = 0;

    for(let edge of e) {
        let [u,v,w] = edge;
        u = nodes[u];
        v = nodes[v];
        u.edges.push([v,w]);
    }

    return nodes;
}

let edges = [
    [0,1,5],
    [0,2,3],
    [1,2,2],
    [1,3,6],
    [2,3,7],
    [2,4,4],
    [2,5,2],
    [3,4,-1],
    [3,5,1],
    [4,5,-2]
]

let nodes = preFormatting(6, 0, edges);
dagShortestPath(nodes);
for(let i=0; i < 6; i++) {
    console.log(printPath(nodes[i]));
}