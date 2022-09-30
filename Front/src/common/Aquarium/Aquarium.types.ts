export interface CubeProps {
  rotationX: number;
  rotationY: number;
}

export interface FishProps {
  fish?: string;
  key?: number;
  left?: number;
  top?: number;
  size?: number;
}

export interface BubbleType {
  id: number;
  top: number;
  left: number;
  size: number;
  animatebubble: number;
  sideway: number;
}

export interface StyledBubbleType {
  top: number;
  left: number;
  size: number;
  animatebubble: number;
  sideway: number;
}
