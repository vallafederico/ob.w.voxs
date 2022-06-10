import Emitter from "tiny-emitter";
import loadModel from "./util/model-loader";
import { LIB } from "../assets/lib";

export default class extends Emitter {
  constructor() {
    super();
  }

  async start() {
    // load things
    const mainModel = await loadModel(LIB.model);

    // stricture data flow
    const loadedData = { mainModel };

    // finshed
    this.emit("loaded", loadedData);
  }
}
