class Node {
    static get PENDING() { return 0 };
    static get CURRENT() { return 1 };
    static get FINISHED() { return 2};
    status = PENDING;
    value = null;
    d = Infinity;

    constructor(value) {
        this.value = value;
    }
}

class Edge {
    u = null;
    v = null;
    w = Infinity;

    constructor(u, v, w) {
        this.u = u;
        this.v = v;
        this.w = w;
    }
}

function getAdjacentList(edges) {
    let adjacentList = [];
    let nodes = [];
    for(let edge of edges) {
        let [u,v,w] = edge;
        if(nodes[u] == null) {
            nodes[u] = new Node(u);
        }

        if(nodes[v] == null) {
            nodes[v] = new Node(v);
        }

        if(adjacentList[u.value] == null) {
            adjacentList[u.value] = [];
        }

        adjacentList[u].push([v, w]);
    }

    return [nodes, adjacentList];
}

function checkNegativeCycle(edges) {
    let [nodes, adjacentList] = getAdjacentList(edges);
    function dfs(node) {

    }

    
}