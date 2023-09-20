import { createCamera } from "./components/camera";
import { createSphere } from "./components/sphere";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";
import { createRenderer } from "./systems/renderer";
import { createControls } from "./components/orbital-controls";

import { Resizer } from "./systems/Resizer";

class Animation {
  private scene: any;
  private camera: any;
  private renderer: any;
  private sphere: any;
  private light: any;
  private controls: any;
  constructor(container) {
    this.camera = createCamera();
    this.scene = createScene();
    this.light = createLights();
    this.renderer = createRenderer();

    container.append(this.renderer.domElement);

    this.sphere = createSphere({ color: "blue", radius: 0.7 });

    this.scene.add(this.sphere, this.light);

    this.controls = createControls(this.camera, this.renderer.domElement);

    const resizer = new Resizer(container, this.camera, this.renderer);
  }

  render(): void {
    this.renderer.setAnimationLoop(() => {
      this.sphere.rotation.x += 0.01;
      this.sphere.rotation.y += 0.4;
      this.renderer.render(this.scene, this.camera);
    });
  }
}

export { Animation };
