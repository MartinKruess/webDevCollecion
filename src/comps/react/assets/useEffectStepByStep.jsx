import { highlights } from "../../../App";

export const UseEffectStepByStep = () => {
  return (
    <>
      <h4 className='font-extrabold text-lg pt-5 pb-3'>
        Schritt für Schritt - useEffect und useState()
      </h4>
      <pre>
        <code>
          // 1. Importiere useEffect von React
          <br />
          import &#123; <span className={highlights.errorCode}>useEffect</span>,
          useState &#125; from 'react'
          <br />
          <br />
          // searchFor erhält Daten aus einer searchBar (Suchleiste)
          <br />
          const [searchFor, setSearchFor] = useState("")
          <br />
          <br />
        </code>
        <code>
          // 2. Aufbau von useEffect
          <span className={highlights.code}>
            {" "}
            useEffect(() =&gt; &#123; &#125;, [])
          </span>
          <br />
          useEffect(() =&gt; &#123;
          <br />
          &#9;// Jedesmal wenn der State searchFor aktualisiert wird werden die
          neuen Daten geladen
          <br /> &#9;setData(fetchData(searchFor))
          <br /> &#125;, [searchFor])
          <br />
          <br />
        </code>
      </pre>
      <p>
        Die einzige Aufgabe, die useEffect hat ist es die Page neu zu rendern.
        Das neu Laden der Seite passiert immer nachdem die Funktion zuende ist.
        Das bedeutet, dass als erstes die fetchDate Function ausgeführt wird,
        anschließend werden die Daten an data via setData gebene (hierbei wird
        schon einmal neu gerendert) und abschließend wird die Seite nochmal
        neugeladen durch den useEffect. Wir bestimmen also was vor dem Rendern
        geschehen soll und die bedingung wann oder wodurch neu gerendert werden
        soll. Die Bedingung tragen wir am Ende in die Eckigen Klammern ein. In
        unserem Besipiel bedeutet das: useEffect reagiere nur, wenn sich der
        Wert in searchFor verändert und du alles ausgeführt hast.
      </p>
      <p>
        <span className={highlights.errorCode}>WICHTIG: </span> Auch wenn man
        einen Fetch innerhalb von useEffect ausführen kann, so darf ein
        useEffect nicht async sein! Das bedeutet um Asynchronen Code innerhalb
        eines useEffect auszuführen, benötigt der Asynchrone Code immer eine
        Function, die man auf async setzt
      </p>
    </>
  );
};
