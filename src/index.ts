import {LGraph, LGraphCanvas} from 'litegraph.js';

export function start(canvasId: string = '#canvas'): void {
    const graph = new LGraph();
    const canvas = new LGraphCanvas(canvasId, graph);
    canvas.canvas.style.backgroundColor = '#333';
    canvas.canvas.style.width = '1024px';
    canvas.canvas.style.height = '720px';
    // const node_const = LiteGraph.createNode('basic/const');
    // node_const.pos = [200, 200];
    // graph.add(node_const);
    // node_const.setValue(4.5);
    //
    // const node_watch = LiteGraph.createNode('basic/watch');
    // node_watch.pos = [1024, 768];
    // graph.add(node_watch);

    // node_const.connect(0, node_watch, 0);
    graph.start();
}

document.addEventListener('DOMContentLoaded', () => start());