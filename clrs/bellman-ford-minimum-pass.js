class Node {
    parent = null;
    value = null;
    d = Infinity;

    constructor(value) {
        this.value = value;
    }
}

function bellmanFord(edges, source) {
    let nodes = [];

    function printPath(v) {
        let path = [];
        v = nodes[v];
        while(v != null) {
            path.push(v.value);
            v = v.parent;
        }
        console.log(path.reverse(), ('m=' + m));
    }

    function printNodes() {
        console.log(nodes.map(node => [node.value, node.d]));
    }

    
    for(let edge of edges) {
        let [u,v,_] = edge;
        if(nodes[u] == null) {
            nodes[u] = new Node(u);
        }

        if(nodes[v] == null) {
            nodes[v] = new Node(v);
        }
    }

    if(nodes[source] == null) {
        nodes[source] = new Node(source);
    }
    nodes[source].d = 0;

    var m = 0;
    for(let i=0; i < nodes.length - 1; i++) {
        let changed = false;
        for(let edge of edges) {
            let [u,v,w] = edge;
            u = nodes[u];
            v = nodes[v];
            if(v.d > u.d + w) {
                v.d = u.d + w;
                v.parent = u;
                changed = true;
            }
        }

        m = m + 1;
        console.log(m);

        if(!changed) {
            break;
        }
    }

    return {
        printPath,
        printNodes
    };
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

const {
    printPath,
    printNodes
} = bellmanFord(edges, 0);
printPath(4);
printNodes();
