import { highlights } from "../../App";

export const Grid = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Das Grid-System</h2>
      <p className='pt-4 pb-2'>
        Das Grid-System erzeugt ein individuelles Raster auf Webseiten. Dieses
        arbeitet mit max. 12 columns (Spalten) und beliebig vielen rows (Reihen)
        um Elemente zu strukturieren und dadurch ein leichteres Layout für eine
        Webseite aufzubauen. Im Webdesign waren das Tabellen-Layout der 90er und
        die Entwicklung von „CSS-Frameworks“ wie bootstrap Versuche, Webseiten
        übersichtlich mit Rastern zu gestalten. Allerdings benötigten diese
        Ansätze eine Vielzahl von zusätzlichen HTML-Elementen, die das Markup an
        sich unübersichtlich werden ließen und das Prinzip der Trennung von
        Inhalt, Präsentation und Verhalten missachteten. Mit dem CSS Grid Layout
        Modul ist nun endlich eine Lösung gefunden worden.
      </p>
      <p className='pt-4 pb-2'>
        Das Grid-System vereinfach zudem die Responsiveness und Flexibilität
        einer Webseite. Durch das Erweitern oder Verringern der Columns auf der
        Webseite lässt sich schnell und einfach ein Mobile Layout zu einem
        Desktop Layout abändern und umgekehrt. Wie bei Flexbox benötigt auch ein
        Grid-System einen Grid-Conatiner. Durch diesen Container verhalten sich
        die inneren Elemente wir Grid-Elemente und lassen sich anhand des
        Rasters ausrichten.
      </p>
      <p className='pt-4 pb-2'>
        Mit diesem kleinen Beispiel lässt sich ein wenig herumbasteln um die
        Grid-Basics besser zu verstehen. Es gibt die start-end und die
        Kurzschreibweise um die Elemente einem Bereich im Grid zuzuweisen.
      </p>
      <div className='w-full md:heighContainer mb-8 mt-2'>
        <img className='md:medium' src='./images/gridExample.png' alt='' />
      </div>
      <pre className='flex flex-wrap gap-y-10'>
        <code className='w-2/6'>
          &lt;section class="gridContainer"&gt;
          <br />
          &#9;&lt;div class="gridElement elem1"&gt;Div1&lt;/div&gt;
          <br />
          &#9;&lt;div class="gridElement elem2"&gt;Div2&lt;/div&gt;
          <br />
          &lt;/section&gt;
        </code>
        <code className='w-2/6'>
          .gridContainer &#123;
          <br />
          &#9;display: grid;
          <br />
          &#9;grid-template-columns: 1fr 1fr 1fr;
          <br />
          &#9;grid-template-rows: 1fr 1fr 1fr;
          <br />
          &#9;gap: 1rem;
          <br />
          &#125;
          <br />
        </code>
        <code className='w-2/6'>
          .gridElement &#123;
          <br />
          &#9;background-color: red;
          <br />
          &#9;text-align: center;
          <br />
          &#9;border: solid;
          <br />
          &#125;
        </code>
        <code className='w-2/6'>
          Schreibweise:
          <br />
          <span className={highlights.code}>
            start: 2, end: 3 oder grid-column/grid-row: 1/2
          </span>
          <br />
          .elem1 &#123;
          <br />
          &#9;grid-column-start: 2;
          <br />
          &#9;grid-column-end: 3;
          <br />
          &#9;grid-row: 1/2;
          <br />
          &#125;
          <br />
        </code>
        <code className='w-2/6'>
          Shorthand:
          <br />
          <span className={highlights.code}>
            grid-area: col-start/row-start / col-end/row-end
          </span>
          <br />
          .elem2 &#123;
          <br />
          &#9;grid-area: 2/3/4/4;
          <br />
          &#125;
          <br />
        </code>
      </pre>
      <div className='linkContainer'>
        <a
          href='https://css-tricks.com/snippets/css/complete-guide-grid/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Grid Guide
        </a>
        <a
          href='https://www.mediaevent.de/css/grid.html'
          target='_blank'
          rel='noopener noreferrer'
        >
          Grid in vier Schritten
        </a>
      </div>
    </article>
  );
};
