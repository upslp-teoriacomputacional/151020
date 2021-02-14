import greuler from "greuler";

// prettier-ignore
greuler({
  target: "#app",
  data: {
    nodes: [
      { id: 'a' }, 
      { id: 'b' }, 
      { id: 'c' }, 
      { id: 'd' }, 
      { id: 'e' }
    ],
    edges: [
      { source: 'a', target: 'c' },
      { source: 'b', target: 'c'},
      { source: 'b', target: 'e' },
      { source: 'c', target: 'd' },
      { source: 'c', target: 'e' },
      { source: 'c', target: 'a' },
      { source: 'c', target: 'b' },
      { source: 'e', target: 'b' },
      { source: 'e', target: 'c' },
      { source: 'd', target: 'c' }
    ]
  }
}).update();