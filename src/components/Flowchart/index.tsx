import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  Connection,
  Node,
  ConnectionMode,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { zinc } from 'tailwindcss/colors';
import * as Toolbar from '@radix-ui/react-toolbar';
import { DefaultEdge } from './Edges/DefaultEdges';
import { Square } from './Nodes/Square';

const NODE_TYPES = {
   square: Square, 
}

const EDGE_TYPES = {
    default: DefaultEdge,
}

const INITIAL_NODES = [
    {
        id: crypto.randomUUID(),
        type: "square",
        position: {
            x: 200,
            y: 400,
        },
        data: {},
    },
    {
        id: crypto.randomUUID(),
        type: "square",
        position: {
            x: 1000,
            y: 400,
        },
        data: {},
    },
] satisfies Node[]

const Flowchart: React.FC = () => {
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

    const onConnect = useCallback((params: Connection) => {
        return setEdges((eds) => addEdge(params, eds))
    }, [setEdges]);

    function addSquareNode() {
        setNodes(nodes => [
            ...nodes,
            {
                id: crypto.randomUUID(),
                type: "square",
                position: {
                    x: 750,
                    y: 350,
                },
                data: {},
            },
        ])
    }

    return (
        <div className='w-full h-full p-8 rounded-lg'>
            <ReactFlow
                nodeTypes={NODE_TYPES}
                edgeTypes={EDGE_TYPES}
                nodes={nodes}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodesChange={onNodesChange}
                connectionMode={ConnectionMode.Loose}
                defaultEdgeOptions={{
                    type: 'default',
                }}
            >
                <Background 
                    gap={12}
                    size={12}
                    color={zinc[100]}
                />
                <Controls />
            </ReactFlow>

            <Toolbar.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden'>
                <Toolbar.Button 
                    onClick={addSquareNode}
                    className='w-32 h-32 bg-violet-500 mt-6 rounded transition-transform hover:-translate-y-2' 
                />
            </Toolbar.Root>
        </div>
    )
};

export default Flowchart;
