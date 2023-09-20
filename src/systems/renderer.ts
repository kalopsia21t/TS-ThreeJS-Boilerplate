import { WebGL1Renderer } from "three";

function createRenderer() {
  const renderer = new WebGL1Renderer();

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
