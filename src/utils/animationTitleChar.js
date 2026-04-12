import { gsap } from "gsap";

const CHAR_SELECTOR = ".tp-char-animation";

function killAnimation(animation) {
  animation?.scrollTrigger?.kill();
  animation?.kill?.();
}

function createCharacterReveal(element) {
  const options = {
    x: 30,
    y: 0,
    duration: 0.8,
  };

  if (element.classList.contains("tp-split-in-left")) {
    options.x = -30;
  }

  if (element.classList.contains("tp-split-in-up")) {
    options.x = 0;
    options.y = 40;
  }

  if (element.classList.contains("tp-split-in-down")) {
    options.x = 0;
    options.y = -40;
  }

  return gsap.from(element, {
    opacity: 0,
    x: options.x,
    y: options.y,
    duration: options.duration,
    force3D: true,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 60%",
      scrub: false,
      markers: false,
      toggleActions: "play none none none",
    },
  });
}

const animationTitleChar = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const cleanups = [];

  document.querySelectorAll(CHAR_SELECTOR).forEach((node) => {
    if (!(node instanceof HTMLElement) || !node.isConnected) {
      return;
    }

    const animation = createCharacterReveal(node);
    cleanups.push(() => {
      killAnimation(animation);
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
};

export default animationTitleChar;
