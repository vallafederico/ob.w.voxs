import { Scene } from "three";
import Main from "./main";

export default class extends Scene {
  constructor(data = {}) {
    super();
    this.data = data;
    // console.log("SCENE", data);

    this.create();
  }

  create() {
    this.mainModel = new Main(this.data.mainModel);

    this.add(this.mainModel);
    this.shouldRender = true;
  }

  /** Pass
   */

  render(t) {
    if (!this.shouldRender) return;

    this.renderChild(t);
  }

  renderChild(t) {
    if (this.mainModel && this.mainModel.render) this.mainModel.render(t);
  }

  resize() {}
}
