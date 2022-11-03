import React, { useCallback, useEffect, useRef } from "react";
import ForceGraph3d, { NodeObject } from "react-force-graph-3d";
import { useContainerDimensions } from "../hooks/useContainerDimensions";

const Graph = (props: GraphProps) => {
  const dt = JSON.parse(JSON.stringify(props.data));
  const ref = useRef();
  const { width: canvasWidth, height: canvasHeight } =
    useContainerDimensions(ref);
  const handleClick = useCallback(
    (node: NodeObject) => {
      // Camera points to node from outside
      const distance = 50;
      const distRatio = 1 + distance / Math.hypot(node.x!, node.y!, node.z!);
      if (
        ref.current &&
        (ref.current as object).hasOwnProperty("cameraPosition")
      ) {
        (ref.current as Graph.CameraPosition).cameraPosition(
          {
            x: node.x! * distRatio,
            y: node.y! * distRatio,
            z: node.z! * distRatio,
          }, // new position
          node, // ({ x, y, z })
          3000 // transition ms
        );
      }
    },
    [ref]
  );
  return (
    <div className={props.className}>
      <ForceGraph3d
        width={canvasWidth || 888} // FIXME: Won't be set
        height={canvasHeight || 888} // FIXME: Won't be set
        ref={ref}
        nodeLabel={(d) => `<span style="color: grey">${d.id}</span>`}
        backgroundColor="rgba(0,0,0,0)"
        nodeColor={(obj) => {
          return (obj as { fillColor: string }).fillColor;
        }}
        linkColor={() => "white"}
        linkWidth={1}
        linkOpacity={1}
        graphData={dt}
        onNodeClick={handleClick}
      />
    </div>
  );
};

interface GraphProps {
  data: Graph.DataObject;
  className: string;
}

export default Graph;
