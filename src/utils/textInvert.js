import { gsap } from "gsap";

const TEXT_INVERT_SELECTOR = ".tp_text_invert, .tp_text_invert_2";

function killAnimation(animation) {
  animation?.scrollTrigger?.kill();
  animation?.kill?.();
}

const textInvert = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const cleanups = [];

  document.querySelectorAll(TEXT_INVERT_SELECTOR).forEach((node) => {
    if (!(node instanceof HTMLElement) || !node.isConnected) {
      return;
    }

    const animation = gsap.to(node, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: node,
        scrub: 1,
        start: "top 85%",
        end: "bottom center",
      },
    });

    cleanups.push(() => {
      killAnimation(animation);
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
};

export default textInvert;
