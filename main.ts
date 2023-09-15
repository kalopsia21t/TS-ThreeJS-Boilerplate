import { Animation } from "./src/Animation";

function main(): void {
  const container = document.body.querySelector("#animation-container");

  const animation = new Animation(container);

  animation.render();
}

main();
