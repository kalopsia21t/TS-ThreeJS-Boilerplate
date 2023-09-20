import { Mesh, SphereGeometry, MeshStandardMaterial, Color } from "three";

function createSphere({ color, radius }) {
  const sphere = new Mesh(
    new SphereGeometry(radius, 256, 256),
    new MeshStandardMaterial({ color: new Color(color) })
  );

  return sphere;
}

export { createSphere };
