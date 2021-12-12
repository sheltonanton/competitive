//directed cyclic/acyclic graph
//list of edges pointing from u -> v with weight w as (u,v,w)

class Node {
    parent = null;
    d = Infinity;
    value = null;

    constructor(value) {
        this.value = value;
    }
}
let vertices = {};
function getVerticesAndEdges(source, edges) {
    edges = edges.map(edge => {
        let [u,v,w] = edge;
        if(!vertices[u]) {
            vertices[u] = new Node(u);
        }
        if(!vertices[v]) {
            vertices[v] = new Node(v);
        }
        return [vertices[u], vertices[v], w];
    });

    if(!vertices[source]) {
        vertices[source] = new Node(source);
    }
    vertices[source].d = 0;

    return [vertices, edges];
}

function relax(u, v, w) {
    if(v.d > u.d + w) {
        v.d = u.d + w;
        v.parent = u;
    }
}

function printPath(u, v) {
    v = vertices[v];
    path = [v.value];
    while(v.parent != null) {
        v = v.parent;
        path.push(v.value);
    }
    console.log(path.reverse());
}

function bellmanFord(e, s) {
    let [vertices, edges] = getVerticesAndEdges(s, e);
    for(let i=0; i < Object.keys(vertices).length - 1; i++) {
        for(let edge of edges) {
            relax(...edge);
        }
    }

    for(let edge of edges) {
        let [u,v,w] = edge;
        if(v.d > u.d + w) {
            return false;
        }
    }

    return true;
}

let edges = [
    [0, 1, 6],
    [0, 2, 7],
    [1, 2, 8],
    [1, 3, 5],
    [3, 1, -2],
    [2, 4, 9],
    [4, 0, 2],
    [4, 3, 7],
    [1, 4, -4],
    [2, 3, -3],
]

let acyclic = bellmanFord(edges, 0);
if(!acyclic) {
    console.log('has cycle');
}else{
    printPath(0, 4);
}