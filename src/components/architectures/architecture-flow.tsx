"use client";

import { useEffect, useMemo, useState } from "react";
import ELK from "elkjs/lib/elk.bundled.js";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  Position,
  type Edge,
  type Node,
  type NodeProps,
} from "reactflow";
import "reactflow/dist/style.css";

import type { ArchitectureDefinition, ArchitectureNodeType } from "@/lib/architectures";

const elk = new ELK();

const palette: Record<ArchitectureNodeType, string> = {
  agent: "bg-slate-900 text-white border-slate-900",
  tool: "bg-blue-50 text-blue-900 border-blue-200",
  approval: "bg-amber-50 text-amber-900 border-amber-200",
  memory: "bg-emerald-50 text-emerald-900 border-emerald-200",
  trigger: "bg-violet-50 text-violet-900 border-violet-200",
  output: "bg-slate-50 text-slate-900 border-slate-200",
};

function ArchitectureNode({ data }: NodeProps<{ label: string; description: string; type: ArchitectureNodeType }>) {
  return (
    <div className={`w-64 rounded-xl border p-4 shadow-sm ${palette[data.type]}`}>
      <p className="text-sm font-semibold">{data.label}</p>
      <p className="mt-2 text-xs leading-5 opacity-80">{data.description}</p>
    </div>
  );
}

const nodeTypes = {
  architectureNode: ArchitectureNode,
};

export function ArchitectureFlow({ architecture }: { architecture: ArchitectureDefinition }) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const baseNodes = useMemo(
    () =>
      architecture.nodes.map((node) => ({
        id: node.id,
        type: "architectureNode",
        position: { x: 0, y: 0 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: node,
      })),
    [architecture.nodes],
  );

  const baseEdges = useMemo(
    () =>
      architecture.edges.map((edge) => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
        label: edge.label,
        markerEnd: { type: MarkerType.ArrowClosed },
        style: { stroke: "#94a3b8" },
        labelStyle: { fill: "#475569", fontSize: 12 },
      })),
    [architecture.edges],
  );

  useEffect(() => {
    async function layout() {
      const graph = {
        id: "root",
        layoutOptions: {
          "elk.algorithm": "layered",
          "elk.direction": "RIGHT",
          "elk.spacing.nodeNode": "36",
          "elk.layered.spacing.nodeNodeBetweenLayers": "80",
        },
        children: architecture.nodes.map((node) => ({ id: node.id, width: 256, height: 104 })),
        edges: architecture.edges.map((edge) => ({ id: edge.id, sources: [edge.source], targets: [edge.target] })),
      };

      const result = await elk.layout(graph);
      setNodes(
        baseNodes.map((node) => {
          const layoutNode = result.children?.find((child) => child.id === node.id);
          return {
            ...node,
            position: { x: layoutNode?.x ?? 0, y: layoutNode?.y ?? 0 },
          };
        }),
      );
      setEdges(baseEdges);
    }

    layout();
  }, [architecture, baseEdges, baseNodes]);

  return (
    <div className="h-[560px] overflow-hidden rounded-xl border bg-white">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background color="#e2e8f0" gap={20} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
