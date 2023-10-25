import { highlights } from "../../../App";

export const UseStateStepByStep = () => {
  return (
    <>
      <h4 className='font-extrabold text-lg pt-5 pb-3'>
        Schritt für Schritt - useState()
      </h4>
      <pre>
        <code>
          // 1. Importiere useSate von React
          <br />
          import &#123; <span className={highlights.errorCode}>
            useState
          </span>{" "}
          &#125; from 'react'
          <br />
          <br />
          const myComp = () =&gt; &#123;
          <br />
          // 2. Initialisiere die stateVariable mit dem Startzustand
          <br />
          &#9;const [<span className={highlights.directory}>counter</span>,{" "}
          <span className={highlights.code}>setCounter</span>] ={" "}
          <span className={highlights.errorCode}>useState</span>(0)
          <br />
          <br />
          &#9;const <span className={highlights.file}>increment</span> = ()
          =&gt; &#123;
          <br />
          // 3. Setze den neuen Zustand der stateVarliabe und aktualisiere die
          Component
          <br />
          &#9;&#9;<span className={highlights.code}>setCounter</span>(
          <span className={highlights.directory}>counter</span>++)
          <br />
          &#9;&#125;
          <br />
          <br />
          &#9;return (<br />
          &#9;&#9;&lt;div&gt;
          <br />
          &#9;&#9;&#9;&lt;p&gt;Count: &#123;
          <span className={highlights.directory}>counter</span>&#125;&lt;/p&gt;
          <br />
          &#9;&#9;&#9;&lt;button onClick=&#123;
          <span className={highlights.file}>increment</span>
          &#125;&gt;Increment&lt;/button&gt;
          <br />
          &#9;&#9;&lt;/div&gt;
          <br />
          &#9;)
          <br />
          &#125;
        </code>
      </pre>
    </>
  );
};
