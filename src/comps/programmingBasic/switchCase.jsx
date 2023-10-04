import { highlights } from "../../App";

export const SwitchCase = () => {
  return (
    <article className='p-4'>
      <h2 className='font-extrabold text-2xl'>Switch Case</h2>
      <p>
        <span className={highlights.code}>Switch Case</span> ist eine ältere
        aber dennoch gängige Alternative zu
        <span className={highlights.code}> If else</span>. Es gibt bei der
        verwendung von <span className={highlights.code}>Switch Case </span>
        einige Besonderheiten, auf die man achten muss.
      </p>
      <div className='flex gap-8'>
        <pre className='w-1/3 text-sm'>
          <code>
            const value = 'value1'
            <br />
            <br />
            switch (key) &#123;
            <br />
            &#9;case 'value1':
            <br />
            &#9;&#9;&#9;console.log('value1')
            <br />
            &#9;&#9;break;
            <br />
            &#9;case 'value2':
            <br />
            &#9;&#9;&#9;console.log('value1')
            <br />
            &#9;&#9;break;
            <br />
            &#9;default:
            <br />
            &#9;&#9;&#9;console.log('Key not found!')
            <br />
            &#9;&#9;break;
            <br />
            &#125;
          </code>
        </pre>
        <div className='w-2/3'>
          <p className='p-0'>
            In diesem Beispiel sieht man den Grundaufbau von Switch. Wie der
            Name schon sagt funktioniert der programmierte Switch wie ein
            physischer Switch aus der Server- und Netzwerktechnik. Je nach input
            wird ein Output angesprochen. Das bedeutet wir habe den Input
            'value1' und der Switch vergleicht die Keywords der jeweiligen Fälle
            (cases) mit dem eingehenden Keyword (key === caseKey). Neben den
            jeweiligen Fällen gibt es auch noch einen DefaultCase, dieser ist
            für fehlerhafte Keys zuständig. Wird also kein passender Case
            gefunden, geht der Switch automatisch in den DefaultCase. Wie im
            Beispiel wird damit der Fall abgedeckt, dass eine fehlerhafte
            Eingabe gemacht wurde.
          </p>
          <p className='pt-2'>
            Ein wichtiger Hinweis ist, dass am Ende eines Cases IMMER ein{" "}
            <span className={highlights.code}>break; oder return;</span> stehen
            muss, da nur dies den jeweiligen Case beendet. Ohne einen break oder
            return würde der Switch weiter laufen bis er auf ein break oder
            return trifft oder der Switch zuende ist (Ende Default).
          </p>
        </div>
      </div>
      <div className='flex gap-8 py-8'>
        <div className='w-1/3'>
          <p className='pt-2'>
            Ein ebenfalls wichtiger Punkt ist, dass ein Case keinen Scope
            erzeugt, das bedeutet, dass eine Variable nicht Case bezogen
            verwendet werden kann. Doch dafür gibt es einen Trick (siehe Case 1)
          </p>
          <p className='pt-2'>
            Auch eine Gewisse Logic ist durchaus einbau bar. Manchmal mit amn
            ein wenig Tricksen, aber als Key kann auch einiges durch
            Logic-Operators überprüft werden.
          </p>
          <p className='pt-2'>
            Die Zahlen 14 und 15 gehe in den selben Case. Dies funktioniert
            durch die Eigenschaft, des Switches, erst einen Case zu beenden
            durch einen break oder return.
          </p>
        </div>
        <pre className='w-2/3 text-sm'>
          <code>
            const value = 15
            <br />
            <br />
            switch (value &lt; 20) &#123;
            <br />
            &#9;case 13: &#123;
            <br />
            &#9;&#9;&#9;const difference = 15 - value
            <br />
            &#9;&#9;&#9;console.log(`Du musst noch $&#123;difference&#125; Jahr
            warten!`)
            <br />
            &#125;
            <br />
            &#9;&#9;break;
            <br />
            &#9;case 14:
            <br />
            &#9;case 15:
            <br />
            &#9;&#9;&#9;console.log('Du kannst den Mofa-Führerschein machen!')
            <br />
            &#9;&#9;break;
            <br />
            &#9;case &gt; 15:
            <br />
            &#9;&#9;&#9;console.log('Du kannst Roller, A1 oder B1 machen!')
            <br />
            &#9;&#9;break;
            <br />
            &#9;default:
            <br />
            &#9;&#9;&#9;console.log('Key not found!')
            <br />
            &#9;&#9;break;
            <br />
            &#125;
          </code>
        </pre>
      </div>
      <p className='pt-2'>
        Wie man sehr gut sieht gibt es einige Wege einen Switch wesendlich
        Komplexer zu nutzen als er auf anhieb wirkt. Gerade für unterschiedliche
        Ereignisse mit ähnlichen Events ist ein Switch deie richtige Wahl.
        Ebenso wenn die If-Abfragen zu groß werden würden, ist ein Switch eine
        logische Alternative
      </p>
    </article>
  );
};
