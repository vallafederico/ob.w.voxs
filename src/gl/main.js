import { Group, MeshNormalMaterial } from "three";
import Skin from "./skin";

export default class extends Group {
  constructor(data) {
    super();

    this.create(data);
  }

  create(data) {
    this.model = this.findAndReplace(data.model);

    this.skin = new Skin({ anim: data.animation, model: this.model });

    this.rotation.y = 1.53;
    this.add(this.model);
  }

  findAndReplace(model) {
    model.traverse((o) => {
      if (o.isMesh) o.material = new MeshNormalMaterial();
    });

    return model;
  }

  render(t) {
    // console.log(t); // YEP!
  }
}
