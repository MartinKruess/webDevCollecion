import { highlights } from "../../App";

export const Components = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Das Arbeiten mit Komponenten</h2>
      <p>
        In React sind Components (Komponenten) grundlegende Bausteine zur
        Erstellung von Benutzeroberflächen. Sie ermöglichen die Modulare
        Organisation deiner Anwendung, indem sie in wiederverwendbare und
        unabhängige Code-Elemente aufgeteilt werden. Components können
        Eigenschaften (Props) akzeptieren, um Informationen zu erhalten, und sie
        können auch ihren eigenen internen Zustand (State) haben. Dies
        ermöglicht die einfache Erstellung und Verwaltung von
        Benutzeroberflächenkomponenten in React.
      </p>
      <h3 className='font-extrabold text-xl'>Aufbau und Verwendung</h3>
      <p>
        Der Aufbau von Components unterliegen bestimmten Regeln.
        <br />
        Eine der Regeln für Components ist, dass diese immer mit einem
        Großbuchstaben anfangen müssen. Ein weiteres Erkennungsmerkmal ist, dass
        der return einer Component JSX beinhaltet.
      </p>
      <pre className='text-sm'>
        <code>
          export const
          <span className={highlights.errorCode}> H</span>ome = () =&gt; &#123;
          <br />
          &#9;// Logic Part
          <br />
          &#9;const numbers = [1, 2, 3, 4, 5, 6]
          <br />
          <br />
          &#9;for(let i = 0; i &lt; numbers.length; i++) &#123;
          <br />
          &#9;&#9;const newNumber =numbers[i] * numbers[-1]
          <br />
          &#9;&#9;numbers.push(newNumbers)
          <br />
          &#9;&#125;
          <br />
          <br />
          <span className={highlights.errorCode}>&#9;return</span> (<br />
          &#9;&#9;&lt;article&gt;
          <br />
          &#9;&#9;&#9;&lt;p&gt;&#123;number[-1]&#125;&lt;/p&gt;
          <br />
          &#9;&#9;&lt;/article&gt;
          <br />
          &#9;)
          <br />
          &#125;
        </code>
      </pre>
      <p>
        Auch beim Aufrufen einer Component gibt es eine wichtige Regel. So wird
        eine Component immer wie ein HTML-Element (
        <span className={highlights.errorCode}>
          &#9;&#9;&lt;ComponentName /&gt; &#9;
        </span>
        ) aufgerufen/verwendet.
      </p>
      <pre className='text-sm'>
        <code>
          import &#123; Home &#125; from './components/home.jsx'
          <br />
          <br />
          const App = () =&gt; &#123;
          <br />
          &#9;return (<br />
          <span className={highlights.errorCode}>
            &#9;&#9;&lt;Home /&gt; &#9;
          </span>
          <br />
          &#9;)
          <br />
          &#125;
        </code>
      </pre>
      <h3 className='font-extrabold text-xl'>Anwendung von Props</h3>
      <p>
        Die sogennanten 'props' (Properties) werden verwendet um Daten von einer
        Eltern-Component an das Child-Component weiter zu geben. Props sind
        schlicht JavaScript-Objekte, die Informationen oder Konfigurationsdaten
        enthalten.
        <br />
        <span className={highlights.code}>
          Parent-Component -&gt; Child-Component = unidirektionaler Datenfluss
        </span>
      </p>
      <pre className='text-sm'>
        <code>
          // Zu übergebende Variable
          <br />
          const name = "Max"
          <br />
          <br />
          // Beim Aufruf der Komponente werden die Props als Attribute übergeben
          <br />
          &lt;ChildComponent name=&#123;name&#125; age=&#123;30&#125; /&gt;
        </code>
      </pre>
      <p>
        Die Props werden in einem Parent-Component definiert und an eine
        Child-Component übergeben, indem sie als Attribute in JSX-Tags verwendet
        werden.
      </p>
      <pre className='text-sm'>
        // Variante 1 props.key
        <br />
        <code>
          export const ChildComponent = (props) =&gt; &#123;
          <br />
          &#9;return (<br />
          &#9;&#9;&lt;div&gt;
          <br />
          &#9;&#9;&#9;&lt;p&gt;Name: &#123;props.name&#125;&lt;/p&gt;
          <br />
          &#9;&#9;&#9;&lt;p&gt;Alter: &#123;props.age&#125;&lt;/p&gt;
          <br />
          &#9;&#9;&lt;/div&gt;
          <br />
          &#9;)
          <br />
          &#125;
        </code>
      </pre>
      <p>
        Im Child-Component kannst du auf diese Props zugreifen, indem du sie als
        Parameter der Funktion (bei funktionellen Components) oder als
        Eigenschaften des this.props-Objekts (bei Klassenkomponenten)
        verwendest.
      </p>
      <pre className='text-sm'>
        // Variante 2 Destructuring
        <br />
        <code>
          export const ChildComponent = (&#123;name, age&#125;) =&gt; &#123;
          <br />
          &#9;return (<br />
          &#9;&#9;&lt;div&gt;
          <br />
          &#9;&#9;&#9;&lt;p&gt;Name: &#123;name&#125;&lt;/p&gt;
          <br />
          &#9;&#9;&#9;&lt;p&gt;Alter: &#123;age&#125;&lt;/p&gt;
          <br />
          &#9;&#9;&lt;/div&gt;
          <br />
          &#9;)
          <br />
          &#125;
        </code>
      </pre>
      <p>
        Props erlauben die Kommunikation und den Datenaustausch zwischen
        Components und tragen dazu bei, Components wiederverwendbar und flexibel
        zu gestalten. Sie sind schreibgeschützt und können nicht innerhalb des
        Child-Components verändert werden, was die Vorhersagbarkeit und den
        Zustand der Anwendung verbessert.
      </p>
      <p className='w-8/12 m-auto text-lg'>
        <span className={highlights.errorCode}>
          Die Themen Components und Props bieten noch ein paar Kleinigkeiten,
          die in besonderen Fällen zu beachten sind. Weitere Hinweise auf das
          Arbeiten mit Components und Props gibt es in
          <span className={highlights.code}> Hooks & Refs</span>, sowei in
          <span className={highlights.code}> React Router</span>
        </span>
      </p>
      <div className='linkContainer'>
        <a
          href='https://react.dev/learn/passing-props-to-a-component'
          target='_blank'
          rel='noopener noreferrer'
        >
          Props
        </a>
        <a
          href='https://dev.to/alexmercedcoder/react-data-flow-understanding-state-and-props-2759'
          target='_blank'
          rel='noopener noreferrer'
        >
          Props dataflow
        </a>
      </div>
    </article>
  );
};
