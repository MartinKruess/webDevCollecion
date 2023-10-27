import { highlights } from "../../../App";
import { UseStateStepByStep } from "./useStateStepByStep";

export const State = () => {
  return (
    <div>
      <h3 className='font-extrabold text-xl'>Was versteht man unter Hooks?</h3>
      <p>
        Der Begriff Hooks steht in React für eine bestimmte Art von Funktionen.
        Mit diesen Funktionen haben wir die Möglichkeit des Zustandsmanagements
        (state-Management) und in den Lifecycle von Components einzugreifen ohne
        die Verwendung von Class-Components. Mit der Einführung von Hooks in
        Version 16.8, wurden Function-Components einfacher und Übersichtlicher.
      </p>
      <h4 className='font-extrabold text-lg'>
        Hier eine kleine Vorschau von einigen häufig auftretenden Hooks:
      </h4>
      <ul className='pt-3 pb-5'>
        <li>
          <code>useState</code>: Ermöglicht die Verwaltung des Zustands in
          funktionalen Komponenten.
        </li>
        <li>
          <code>useEffect</code>: Wird für die Verwaltung von Seiteneffekten in
          funktionalen Komponenten verwendet.
        </li>
        <li>
          <code>useContext</code>: Ermöglicht den Zugriff auf das Context-API
          von React.
        </li>
        <li>
          <code>useReducer</code>: Bietet eine alternative Möglichkeit zur
          Verwaltung von Zustand.
        </li>
        <li>
          <code>useRef</code>: Ermöglicht den Zugriff auf ein DOM-Element oder
          einen konstanten Wert.
        </li>
      </ul>
      <h4 className='font-extrabold text-lg'>
        Speziellere Hooks, die nur in bestimmten Situationen auftauchen:
      </h4>
      <ul className='pt-3'>
        <li>
          <code>useMemo</code> und <code>useCallback</code>: Zur Optimierung der
          Leistung von Komponenten.
        </li>
        <li>
          <code>useHistory</code> und <code>useLocation</code>: Verwendet in
          React Router zur Navigation und Zugriff auf die URL.
        </li>
        <li>
          <code>useForm</code> (benutzerdefinierter Hook): Zur Verwaltung von
          Formularen in React-Anwendungen.
        </li>
        <li>
          <code>useAuth</code> (benutzerdefinierter Hook): Für die
          Benutzerauthentifizierung und Identifikation.
        </li>
      </ul>
      <h3 className='font-extrabold text-xl'>
        Der Aufbau und Sinn von useState
      </h3>
      <pre className='text-sm'>
        <code>
          // const [state, setState] = useState(initialState)
          <br />
          <br />
          <span className={highlights.errorCode}>
            // state = Der State (Variable) ist die aktuelle Zustandsvariable,
            die den aktuellen Wert des Zustands speichert.
          </span>
          <br />
          <span className={highlights.directory}>
            // setState = Dies ist die Funktion, die verwendet wird, um den
            Zustand zu aktualisieren. Wenn diese Funktion aufgerufen wird, wird
            der Zustand neu gerendert, und die Komponente wird aktualisiert.
          </span>
          <br />
          <span className={highlights.code}>
            // initialState = Dies ist der anfängliche Wert und Datentype des
            Zustands z.B. eine Zahl, ein String, ein Objekt, ein Array usw.
          </span>
          <br />
          <br />
          const [<span className={highlights.errorCode}>firstname</span>,{" "}
          <span className={highlights.directory}>setFirstname</span>] =
          useState(<span className={highlights.code}>""</span>)
          <br />
          <br />
          // Die verwendung des Setters
          <br />
          setFirstname("Jack")
        </code>
      </pre>
      <UseStateStepByStep />
      <p>
        Wenn <span className={highlights.code}>setCounter</span> aufgerufen
        wird, wird die Komponente neu gerendert, und der neue Zustand wird im UI
        angezeigt. Hiermit lassen sich also Interaktionen eines Users (wie zum
        Beispiel SideSettings, das Ein- und Ausblenden von Content usw.) ideal
        verarbeiten.
      </p>
    </div>
  );
};
