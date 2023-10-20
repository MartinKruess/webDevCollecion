import { highlights } from "../../../App";

export const State = () => {
  return (
    <div>
      <h3 className='font-extrabold text-xl'>Der Aufbau und Sinn von useState</h3>
      <pre className='text-sm'>
        <code>
        // const [state, setState] = useState(initialState)
        <br />
        <br />
        <span className={highlights.errorCode}>// state = Der State (Variable) ist die aktuelle Zustandsvariable, die den aktuellen Wert des Zustands speichert.</span>
        <br />
        <span className={highlights.directory}>// setState = Dies ist die Funktion, die verwendet wird, um den Zustand zu aktualisieren. Wenn diese Funktion aufgerufen wird, wird der Zustand neu gerendert, und die Komponente wird aktualisiert.</span>
        <br />
        <span className={highlights.code}>// initialState =  Dies ist der anfängliche Wert und Datentype des Zustands z.B. eine Zahl, ein String, ein Objekt, ein Array usw.</span>
          <br /><br />
          const [<span className={highlights.errorCode}>firstname</span>, <span className={highlights.directory}>setFirstname</span>] = useState(<span className={highlights.code}>""</span>)
          <br /><br />
          // Die verwendung des Setters
          <br />
          setFirstname("Jack")
        </code>
      </pre>
      <p>
        Hooks sind...
      </p>
      <pre>
        <code>
          // 1. Importiere useSate von React<br />
          import &#123; <span className={highlights.errorCode}>useState</span> &#125; from 'react'<br /><br />
          const myComp = () =&gt; &#123;<br />
          // 2. Initialisiere die stateVariable mit dem Startzustand<br />
          &#9;const [<span className={highlights.directory}>counter</span>, <span className={highlights.code}>setCounter</span>] = <span className={highlights.errorCode}>useState</span>(0)<br /><br />
          &#9;const <span className={highlights.file}>increment</span> = () =&gt; &#123;<br />
          // 3. Setze den neuen Zustand der stateVarliabe und aktualisiere die Component<br />
          &#9;&#9;<span className={highlights.code}>setCounter</span>(<span className={highlights.directory}>counter</span>++)<br />
          &#9;&#125;<br /><br />
          &#9;return (<br />
          &#9;&#9;&lt;div&gt;<br />
          &#9;&#9;&#9;&lt;p&gt;Count: &#123;<span className={highlights.directory}>counter</span>&#125;&lt;/p&gt;<br />
          &#9;&#9;&#9;&lt;button onClick=&#123;<span className={highlights.file}>increment</span>&#125;&gt;Increment&lt;/button&gt;<br />
          &#9;&#9;&lt;/div&gt;<br />
          &#9;)<br />
          &#125;
        </code>
      </pre>
      <p>
        Wenn <span className={highlights.code}>setCounter</span> aufgerufen wird, wird die Komponente neu gerendert, und der neue Zustand wird im UI angezeigt. Hiermit lassen sich also Interaktionen eines Users (wie zum Beispiel SideSettings, das Ein- und Ausblenden von Content usw.)  ideal verarbeiten.
      </p>
    </div>
  );
};
