import Gl from "./gl/gl.js";
import Loader from "./gl/loader";

class App {
  constructor() {
    this.load();
  }

  load() {
    // setup loader
    this.loader = new Loader();
    this.loader.once("loaded", (loadedData) => {
      this.init(loadedData);
    });

    this.gl = new Gl("c");
    this.loader.start();
  }

  init(loadedData) {
    this.gl.init(loadedData);
  }
}

new App();
