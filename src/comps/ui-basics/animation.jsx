import { AnimationAside } from "./assets/animationAside";
import { AnimationPart1 } from "./assets/animationPart1";
import { AnimationPart2 } from "./assets/animationPart2";
import { AnimationPart3 } from "./assets/animationPart3";
import { AnimationPart4 } from "./assets/animationPart4";
import { AnimationPart5 } from "./assets/animationPart5";
import { AnimationPart6 } from "./assets/animationPart6";

export const Animation = () => {
  return (
    <article className="pb-5">
      <h2 className="font-extrabold text-xl pt-10">CSS-Animation</h2>
      <p>
        CSS-Animationen sind eine Möglichkeit, um Elemente auf einer Webseite zu
        animieren. Es gibt auch die Möglichkeit, Animationen mit JavaScript zu
        erstellen, jedoch ist die CSS-Variante meistens performanter.
      </p>
      <p>
        Der Grundsatz lautet: Wenn sich etwas mit CSS regel lässt, dann nutze
        CSS dafür. (hover, active, Animationen, etc.)
      </p>
      <h2 className="font-extrabold text-xl pt-10">
        Basic Animationen mit Transition
      </h2>
      <div className="animationBox">
        <AnimationAside />
        <div className="w-3/4 lg:w-4/5 animationContentBox">
          <AnimationPart1 />
          <AnimationPart2 />
          <AnimationPart3 />
          <AnimationPart4 />
          <AnimationPart5 />
          <AnimationPart6 />
        </div>
      </div>
    </article>
  );
};
