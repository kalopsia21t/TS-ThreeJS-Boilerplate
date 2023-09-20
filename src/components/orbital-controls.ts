import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, element) {
  const controls = new OrbitControls(camera, element);

  return controls;
}

export { createControls };
