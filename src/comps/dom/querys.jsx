import { highlights } from "../../App";

export const Querries = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>
        Das selectieren von HTML-Elementen mit Javascript
      </h2>
      <p>
        Durch das Selektieren von HTML-Elementen (DOM-Objekten) greifen wir
        direkt auf das DOM zu und sind in der Lage dieses zu Manipulieren. Durch
        Veränderungen an dem Element selbst, dem Inhalt oder Styling, Löschen
        des Elementes oder spezieller Eigenschaften (class, id, ...), Erzeugen
        von neuen Elementen oder Klassen und dem Aufrufen von Elementen haben
        wir mit Javascript viele Möglichkeiten um zum Beispiel auf
        User-Interaktionen zu reagieren.
      </p>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-3'>.document.getElementById('')</div>
        <div className='col-span-5'>
          Es wird das Element mit der passenden id="myID ausgewählt."
        </div>
        <div className='col-span-4'>
          <pre>
            <code>getElementById('myID')</code>
          </pre>
        </div>

        <div className='col-span-3'>.document.getElementsByClassName('')</div>
        <div className='col-span-5'>
          Es werden alle Elemente mit der class="myClass" ausgewählt.
        </div>
        <div className='col-span-4'>
          <pre>
            <code>
              getElementsByClassName('myClass')
              <br />
              getElementsByClassName('myClass:last-child')
            </code>
          </pre>
        </div>

        <div className='col-span-3'>.document.getElementsByTagName('')</div>
        <div className='col-span-5'>
          Spricht alle Elemente der passenden Art an.
        </div>
        <div className='col-span-4'>
          <pre>
            <code>
              getElementByTagName('div')
              <br /> getElementByTagName('input')
              <br />
              getElementByTagName('form')
            </code>
          </pre>
        </div>
        <p className='col-span-12'>
          Heutzutage langt es vollkommen, wenn man nur noch mit den sogenannten
          'querySelectoren' arbeitet. Diese können alles was die oben genannten
          'getElement/sBy...' ebenfalls können und mehr. Beispielweise kann man
          sämtliche CSS-Selektoren innerhalb des qs verwenden. Ein wichtiger
          Hinweis ist, dass bei der Verwendung von querrySelectoren die
          jeweiligen CSS-Operatoren mitangegeben werden müssen.
        </p>
        <pre className='col-span-12'>
          <code>
            document.querySelector('<span className={highlights.error}>#</span>
            container')
            <br />
            document.querySelector('<span className={highlights.error}>.</span>
            container')
            <br />
          </code>
        </pre>
        <div className='col-span-3'>.document.querrySelector('')</div>
        <div className='col-span-5'>
          Der querrySelector wählt das erste Element aus, dass mit den
          Suchkriterien übereinstimmt.
        </div>
        <div className='col-span-4'>
          <pre>
            <code>
              querrySelector('.myClass')
              <br /> querrySecol-span-3lector('#myID')
              <br />
              querrySelector('div')
              <br /> querrySelector('ul li')
              <br /> querrySelector('.myClass a')
              <br /> querrySelector('input["type:text"]')
            </code>
          </pre>
        </div>

        <div className='col-span-3'>.document.querrySelectorAll('')</div>
        <div className='col-span-5'>
          Der querrySelectorAll findet alle Elemente, die den Suchkriterien
          entsprechen. Egal ob eines oder mehrere gefunden werden, werden diese
          immer in einer NoteList wieder gegeben. Eine NoteList verhält sich
          ähnlich eines Arrays und arbeitet mit Indezes 0 - arr.length
        </div>
        <div className='col-span-4'>
          <pre>
            <code>
              querrySelectorAll('li')
              <br /> querrySelectorAll('ul li')
              <br />
              querrySelectorAll('.myClass')
              <br /> querrySelectorAll('input["type:text"]')
              <br />
              querrySelectorAll('h1, h2')
            </code>
          </pre>
        </div>

        <h2 className='font-extrabold text-xl col-span-12'>
          DOM-Manipulation: Create, Delete, Change
        </h2>
        <pre className='col-span-6'>
          <code>
            &lt;body&gt;
            <br />
            &#9;&lt;ul&gt;
            <br />
            &#9;&#9;&lt;li&gt;Eintrag 1&lt;/li&gt;
            <br />
            &#9;&#9;&lt;li&gt;Eintrag 2&lt;/li&gt;
            <br />
            &#9;&#9;&lt;li&gt;Eintrag 3&lt;/li&gt;
            <br />
            &#9;&lt;/ul&gt;
            <br />
            &lt;/body&gt;
          </code>
        </pre>
        <pre className='col-span-6'>
          JS
          <code>
            <br />
            const ul = document.querySelector('ul')
            <br />
            const newLi = document.createElement('li')
            <br />
            <br />
            newLi.innerText = "Ich bin ein neues Element"
            <br />
            <br />
            ul.append('newLi') // Fügt ein Element ans Ende der UL
            <br />
            ul.prepend('li') // Fügt ein Element als neues erstes Element hinzu
            <br />
            <br />
          </code>
        </pre>
        <pre className='col-span-6'>
          <code>
            const pBefore = document.createElement('p')
            <br />
            const pAfter = document.createElement('p')
            <br />
            <br />
            pAfter.innerText = "Ich wurde nach der UL eingefügt"
            <br />
            pBefore.innerText = "Ich wurde vor der UL eingefügt"
            <br />
            <br />
            ul.before(pBefore) // Fügt Element vor der UL ein
            <br />
            ul.after(pAfter) // Fügt Element nach der UL ein
          </code>
        </pre>
        <pre className='col-span-6'>
          <code>
            const h2 = document.createElement('h2')
            <br />
            const pAfter = document.createElement('p')
            <br />
            <br />
            h2.innerText = "Ich bin h2 und ersetze den P"
            <br />
            <br />
            ul.replace(h2) // Ersetzt das selektierte Element durch ein anderes
            <br />
            h1.remove() // Löscht das selektierte Element
          </code>
        </pre>

        <p>
          FOLGEN IN KÜRZE: setAttribute(), getAttribute(), classListe.add(),
          classList.remove(), classListe.toggle()
        </p>
      </div>
    </article>
  );
};
