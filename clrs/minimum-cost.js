let input = [[0,0],[1,1],[1,0],[-1,1]];

/**
 * @param {number[][]} points
 * @return {number}
 */

 class Node {
    parent = null;
    x = -1;
    y = -1;
    rank = 1;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Edge {
    distance = 0;
    point1 = null;
    point2 = null;

    constructor(point1, point2) {
        this.point1 = point1;
        this.point2 = point2;
        this._calculateDistance();
    }

    _calculateDistance() {
        let p1 = this.point1;
        let p2 = this.point2;
        this.distance = Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
    }
}

function findSet(point) {
    if(point.parent == null) {
        return point;
    }
    point.parent = findSet(point.parent);
    return point.parent;
}

function union(p1, p2) {
    if(p1.rank > p2.rank) {
        p2.parent = p1;
    }else if(p1.rank < p2.rank) {
        p1.parent = p2;
    }else{
        p1.parent = p2;
        p2.rank += 1;
    }
}

var minCostConnectPoints = function(points) {
    //make all points connected to one another
    //calculate distance between every points
    //sort by distance to get the potential light edge for minimum spanning tree
    let edges = new Array();
    let p = new Array();
    for(let point of points) {
        p.push(new Node(...point));    
    }
    points = p;
    
    for(let i=0; i < points.length - 1; i++) {
        for(let j=i+1; j < points.length; j++) {
            edges.push(new Edge(points[i], points[j]));
        }
    }
    
    edges.sort((a,b) => a.distance - b.distance);
    
    let totalDistance = 0;
    for(let edge of edges) {
        let p1 = edge.point1;
        let p2 = edge.point2;
        if(findSet(p1) != findSet(p2)) {
            let s1 = findSet(p1);
            let s2 = findSet(p2);
            console.log(s1.x, s1.y, s2.x, s2.y);
            console.log(edge.point1.x, edge.point1.y, edge.point2.x, edge.point2.y);
            console.log('---');
            union(p1, p2);
            totalDistance += edge.distance;
        }
    }
    
    return totalDistance;
};

minCostConnectPoints(input);
