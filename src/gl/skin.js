import { AnimationMixer } from "three";
import Tween from "gsap";

export default class {
  constructor({ anim, model }) {
    // console.log("SKIN", anim, model);
    this.clips = anim;
    this.model = model;
    this.time = { c: 0, s: this.clips[0].duration / 4 };

    this.create();
  }

  create() {
    // create mixer
    this.mixer = new AnimationMixer(this.model);

    this.clips.forEach((clip) => {
      //   console.log(clip);
      this.mixer.clipAction(clip).play();
    });

    this.testAnimation();
  }

  testAnimation() {
    this.playTo(0, 0);
    // TEST animation
    setTimeout(() => {
      this.playTo(this.time.s * 1);
    }, 1000);
    setTimeout(() => {
      this.playTo(this.time.s * 2);
    }, 3000);
    setTimeout(() => {
      this.playTo(this.time.s * 3);
    }, 6000);
    setTimeout(() => {
      this.playTo(this.time.s * 4);
    }, 9000);

    // reset
    setTimeout(() => {
      this.testAnimation();
    }, 13000);
  }

  playTo(step, dur = 2) {
    Tween.to(this.time, {
      c: step,
      duration: dur,
      ease: "slow",
      onUpdate: () => this.updateMixer(this.time.c),
    });
  }

  updateMixer(num) {
    this.mixer.setTime(num);
  }
}

/**
 * Data
 *
 * Clip Duration: 16.66666603088379
 * Clip Number: 4
 *
 */
