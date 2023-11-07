import { highlights } from "../../App";

export const Context = () => {
  return (
    <>
      <h2 className='font-extrabold text-2xl'>
        Globales Daten-Management mit useContext
      </h2>
      <p>
        Die Verwendung von useContaxt ist eine Art der globalen
        Datenverarbeitung innerhalb einer Web-Application. Hierbei wird der
        Provider des Contextes um die eigentliche App bzw. den Router gewrappt.
        Dadurch lässt sich bei der Verwendung von useState innerhalb von
        useContext der State-Lift verwenden.
      </p>
      <div className='heightContainer'>
        <img className='imgHeight' src='./images/context.png' alt='' />
      </div>
      <p>
        Es gibt verschiedene Wege useContext zu verwenden. Die wohl am
        häufigsten angewendete Variante ist die Auslagerung in eine externe
        Datei.
      </p>
      <pre className='text-sm'>
        <code>
          import &#123; createContext, useState &#125; from "react";
          <br />
          <br />
          // Um useContext anwenden zu können muss zuvor ein Context erstellt
          werden. Dies geschieht mit der Funktion createContext()
          <br />
          export const
          <span className={highlights.program}>FirstNameContext</span> =
          <span className={highlights.code}> createContext()</span>;
          <br />
          <br />
          // Die 'childrern', die hier als Props übergeben werden beziehen sich
          auf alle Components, um die der Provider gewrapped wird.
          <br />
          export const FirstNameProvider = (
          <span className={highlights.code}>&#123; children &#125;</span>) =&gt;
          &#123;
          <br />
          &#9;
          <span className={highlights.directory}>
            const [firstname, setFirstname] = useState("")
          </span>
          <br />
          <br />
          &#9;return (<br />
          &#9;&#9;// Der Provider stellt die im value angegebenen Daten, allen
          children, zur Verfügung
          <br />
          &#9;&#9;
          <span className={highlights.program}>
            &lt;FirstNameContext.Provider{" "}
            <span className={highlights.directory}>
              value=&#123;&#123; firstname, setFirstname &#125;&#125;
            </span>
            &gt;
          </span>
          <br />
          &#9;&#9;&#9;
          <span className={highlights.code}>&#123; children &#125;</span>
          <br />
          &#9;&#9;&lt;/FirstNameContext.Provider&gt;
          <br />
          &#9;);
          <br />
          &#125;;
        </code>
      </pre>
      <p></p>
      <pre>
        <code>
          import &#123; FirstNameProvider &#125; from
          "./components/globale/firstnameProvider.jsx";
          <br />
          <br />
          ReactDOM.createRoot(document.getElementById("root")).render(
          <br />
          &#9;&lt;React.StrictMode&gt;
          <br />
          &#9;&#9;
          <span className={highlights.code}>&lt;FirstNameProvider&gt;</span>
          <br />
          &#9;&#9;&#9;&lt;App /&gt; // children
          <br />
          &#9;&#9;
          <span className={highlights.code}>&lt;/FirstNameProvider&gt;</span>
          <br />
          &#9;&lt;/React.StrictMode&gt;
          <br />
          );
        </code>
      </pre>
      <p>
        Abschließend kann man in jeder Component die globalen Daten mit Hilfe
        von useContext aufrufen und verwenden. Wichtig hierbei ist es nur
        innerhalb der runden Klammern anzugeben welcher Context verwendet werden
        soll.
      </p>
      <pre className='text-sm'>
        <code>
          import &#123; useContext, useEffect &#125; from "react"
          <br />
          import &#123; FirstNameContext &#125; from
          "./globale/firstnameProvider"
          <br />
          <br />
          // Daten werden in Objekt-Struktur übergeben:&#32;
          <span className={highlights.code}>
            useContext(<span className={highlights.errorCode}>Welcher?</span>)
          </span>
          <br />
          const &#123; firstname, setFirstname &#125; =
          useContext(FirstNameContext);
        </code>
      </pre>
      <p></p>
    </>
  );
};
