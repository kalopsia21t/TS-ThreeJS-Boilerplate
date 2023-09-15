import { WebGL1Renderer } from "three";

function createRenderer() {
  const renderer = new WebGL1Renderer();

  return renderer;
}

export { createRenderer };
