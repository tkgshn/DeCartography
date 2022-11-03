type LayoutType = "top" | "dashboard";

namespace Graph {
  type Node = {
    id: string;
    group: number;
    fillColor?: string;
  };
  type Link = {
    source: string;
    target: string;
    value: number;
  };
  type DataObject = {
    author?: string;
    nodes: Node[];
    links: Link[];
  };
  type CameraPosition = {
    cameraPosition: (
      arg0: { x: number; y: number; z: number },
      arg1: object,
      arg2: number
    ) => void;
  };
}
