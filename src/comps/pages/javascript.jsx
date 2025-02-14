import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../global/loadTheme";

import { NPM } from "../programmingBasic/npm";
import { Variable } from "../programmingBasic/variable";
import { IfElse } from "../programmingBasic/ifelse";
import { Array } from "../programmingBasic/array";
import { Ternary } from "../programmingBasic/ternary";
import { JSText } from "../programmingBasic/jsText";
import { Loop } from "../programmingBasic/loop";
import { NodeInstaller } from "../programmingBasic/node";
import { Function } from "../programmingBasic/function";
import { Callstack } from "../programmingBasic/callstacks";
import { JSExercises } from "../programmingBasic/exercisesAL";

import { Vite } from "../programmingBasic/vite";
import { Objects } from "../programmingBasic/objects";
import { ObjectsAdv } from "../programmingBasic/objectsAdv";
import { DataTypen } from "../programmingBasic/datatype";
import { SelfTest } from "../programmingBasic/jsSelfText";
import { Classes } from "../programmingBasic/classes";
import { Console } from "../programmingBasic/console";
import { Sort } from "../programmingBasic/sort";
import { JSNavi } from "../navigations/jsNavi";
import { JSON } from "../programmingBasic/json";
import { Callback } from "../programmingBasic/callback";

export const PB = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme("");
  }, []);

  return (
    <>
      <JSNavi />
      <section className="w-10/12 m-auto">
        <Routes>
          <Route path="node" element={<NodeInstaller />} />
          <Route path="npm" element={<NPM />} />
          <Route path="json" element={<JSON />} />
          <Route path="console" element={<Console />} />
          <Route path="variables" element={<Variable />} />
          <Route path="datatype" element={<DataTypen />} />
          <Route path="ifelse" element={<IfElse />} />
          <Route path="array" element={<Array />} />
          <Route path="loop" element={<Loop />} />
          <Route path="sort" element={<Sort />} />
          <Route path="function" element={<Function />} />
          <Route path="callback" element={<Callback />} />
          <Route path="callstack" element={<Callstack />} />
          <Route path="objects" element={<Objects />} />
          <Route path="objectsAdv" element={<ObjectsAdv />} />
          <Route path="classes" element={<Classes />} />
          <Route path="jsexercises" element={<JSExercises />} />
          <Route path="jsSelfTest" element={<SelfTest />} />
        </Routes>
      </section>
    </>
  );
};
