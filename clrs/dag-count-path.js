class Node {
    value = null;
    edges = [];
    p = 0;

    constructor(value) {
        this.value = value;
    }
}

function count(u, v) {
    v.p = v.p + u.p;
}

function dagCountPath(nodes) {
    for(let node of nodes) {
        for(let other of node.edges) {
            count(node, other);
        }
    }
}

function preFormatting(n, s, e) {
    let nodes = [];
    for(let i=0; i < n; i++) {
        nodes.push(new Node(i));
    }
    nodes[s].p = 1;

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
]

let nodes = preFormatting(6, 0, edges);
dagCountPath(nodes);

for(let node of nodes) {
    console.log(node.value, node.p);
}