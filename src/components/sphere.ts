import { Mesh, SphereGeometry, MeshBasicMaterial, Color } from "three";

function createSphere({ color, radius }) {
  console.log(color);
  const sphere = new Mesh(
    new SphereGeometry(radius, 32, 32),
    new MeshBasicMaterial({ color: new Color(color), wireframe: true })
  );

  return sphere;
}

export { createSphere };
