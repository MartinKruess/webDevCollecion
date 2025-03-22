import { Routes, Route } from "react-router-dom";

import { VSCode } from "../ui-basics/vsCode";
import { Grid } from "../ui-basics/grid";
import { Animation } from "../ui-basics/animation";
import { SASS } from "../ui-basics/sass";
import { Frameworks } from "../ui-basics/frameworks";
import { GitFlow } from "../ui-basics/git";
import { GithubFlow } from "../ui-basics/github";
import { Pseudo } from "../ui-basics/pseudo";

export const UIUX = () => {
  return (
    <>
      <section className="px-8">
        <Routes>
          <Route exact path="vs-code" element={<VSCode />} />
          <Route exact path="git" element={<GitFlow />} />
          <Route exact path="github" element={<GithubFlow />} />
          <Route path="grid" element={<Grid />} />
          <Route path="pseudo" element={<Pseudo />} />
          <Route path="animation" element={<Animation />} />
          <Route path="sass" element={<SASS />} />
          <Route path="frameworks" element={<Frameworks />} />
        </Routes>
      </section>
    </>
  );
};
