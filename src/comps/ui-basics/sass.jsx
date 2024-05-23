import { highlights } from '../../App';

export const SASS = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl my-5'>SCSS und SASS</h2>
      <p>
        SCSS kann als erweitertes CSS beschrieben werden, womit das Aussehen von
        Websites beeinflusst wird. Ein mit SCSS verwandter Begriff ist SASS.
        Während die ältere SASS-Syntax mit Einrückungen und ohne die im CSS
        üblichen geschweiften Klammern und Semikolons auskommt, ist die neuere
        Syntax von SCSS der von CSS ähnlich. SCSS wird gerne als die modernere
        Syntax bezeichnet.
      </p>
      <p>
        Damit SASS/SCSS von einem Browser verstanden wird, muss der Code zuerst
        in CSS konvertiert werden. Deshalb wird SASS als CSS-Präprozessor
        bezeichnet. SASS bietet im Gegensatz zu CSS verschiedene Funktionen, die
        das Schreiben von CSS-Anweisungen erleichtern. Duch die Entwicklung von
        SASS ist auch die Verwendug von SCSS möglich. Die verwendete Syntax wird
        automatisch erkennt.
      </p>
      <p>Die Installation von SASS ist ganz einfach mit NPM umzusetzen.</p>
      <pre>
        <code>npm i sass</code>
      </pre>
      <p>
        Um SCSS/SASS zu verwenden, muss der Code in einer Datei mit der Endung
        .scss oder .sass gespeichert werden. Diese Datei wird dann in eine CSS
        Datei kompiliert, die dann in die Website eingebunden wird. Ein
        nebötigtes Tool hierfür ist der SASS-Compiler.
      </p>
      <img
        src='./images/liveSassCompiler.png'
        alt='Live Sass Compiler Extention'
        className=' sm:w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/3'
      />
      <h2 className='font-extrabold text-2xl my-5'>Funktionen von SASS/SCSS</h2>
      <div className='flex flex-wrap'>
        <p className='-my-4 md:w-6/12'>
          SASS erlaubt das Verschachteln von Klassen und Pseudoklassen, was
          Redundanz verringert und weniger Schreibaufwand bedeutet. Ferner wird
          dabei auch die{' '}
          <a href='https://en.bem.info/methodology/css/'>BEM-Methodik</a>{' '}
          unterstützt. (Mitlerweile in CSS auch möglich!)
        </p>
        <p className='-my-4 md:w-1/12'></p>
        <p className='-my-4 md:w-5/12'>
          <strong>Arithmetische Operationen: </strong>
          In SASS lassen sich einfache Berechnungen wie +, -, * und /
          durchführen, sowie die Verwendung von Schleifen und
          Fallunterscheidungen womit sich Wiederholungen und Wenn-/Dann-Regeln
          umsetzen lassen.
        </p>
        <p className='-my-4 md:w-5/12'>
          SASS ermöglicht es Informationen in Variablen zu Speichern und an
          verschiedenen Stellen wiederzuverwenden. Variablen sind nützlich um
          zum Beispiel Schriftarten, -grössen, Farben und andere Werte über die
          ganze Website konsistent einzusetzen. Ebenfalls ist es mit SASS
          möglich Schleifen und Fallunterscheidungen zu verwenden, womit sich
          Wiederholungen (loops) und if-/else (wenn/dann Abfragen) umsetzen
          lassen.
        </p>
        <p className='-my-4 md:w-5/12'>
          <strong>Funktionen, Mixins und Extend: </strong> Eine @function kann
          mit Werten gefüttert werden, die sie verarbeitet und schliesslich das
          Resultat zurückgibt. Ein @mixin funktioniert ähnlich wie eine
          @function, unterscheidet sich aber dadurch, dass es CSS statt einem
          Wert zurückliefert. @extend ermöglicht es verschiedenen CSS-Klassen
          Eigenschaften miteinander zu teilen.
        </p>
        <p className='-my-4 md:w-1/12'></p>
        <p className='-my-4 md:w-5/12'>
          Die SASS-Befehle @import und @use erlauben es, den Code in Teildateien
          aufzuteilen, womit sich der Code besser strukturieren und in anderen
          Zusammenhängen wiederverwenden lässt. Im Gegensatz zum CSS-Import
          Befehl wird beim Seitenaufruf kein zusätzlicher HTTP-Request erzeugt.
        </p>
      </div>
      <div>
        <h2 className='font-extrabold text-2xl my-5'>
          Vorteile von SCSS/Sass gegenüber CSS
        </h2>
        <ul className='list-disc list-inside'>
          <li>zusätzliche Funktionen (durch Mixins, Functions, Loops)</li>
          <li>Weniger Redundanz</li>
          <li>Hohe Modularität</li>
          <li>Wiederverwendbarkeit</li>
        </ul>
        <h3 className='font-extrabold text-xl my-5'>
          Unterschiede zwischen SCSS und SASS
        </h3>
        <div className='flex flex-wrap justify-between'>
          <div className='w-2/5 flex flex-col gap-y-5'>
            <h3 className='font-extrabold text-lg my-5'>SCSS - Sassy CSS</h3>
            <ul className='list-disc list-inside'>
              <li>neuere Syntax</li>
              <li>ähnlich der CSS Syntax</li>
              <li>Standard</li>
            </ul>
            <pre className='text-sm'>
              <code>
                .container &#123;
                <br />
                &#9;float: left;
                <br />
                &#9;width: 100%;
                <br />
                <br />
                &#9;p &#123;
                <br />
                &#9;color: #111;
                <br />
                &#9;&#125;
                <br />
                &#125;
              </code>
            </pre>
          </div>
          <div className='w-2/5 flex flex-col gap-y-5'>
            <h3 className='font-extrabold text-lg my-5'>
              SASS - Syntactically Awesome Style-Sheets
            </h3>
            <ul className='list-disc list-inside'>
              <li>original Syntax</li>
              <li>kürzere Syntax</li>
            </ul>
            <pre className='text-sm'>
              <code>
                .container
                <br />
                &#9;float: left
                <br />
                &#9;width: 100%
                <br />
                <br />
                &#9;p
                <br />
                &#9;&#9;color: #111
              </code>
            </pre>
          </div>
          <div className='w-full'>
            <h3 className='font-extrabold text-lg my-5'>
              CSS / SCSS / SASS - Snytax und Funktionen
            </h3>
            <table className='full'>
              <thead>
                <tr>
                  <th>CSS</th>
                  <th>SCSS</th>
                  <th>SASS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>geschweifte Klammern & Semikoline</td>
                  <td>geschweifte Klammern & Semikoline</td>
                  <td>Einrückung</td>
                </tr>
                <tr>
                  <td>Leertasten werden ignoriert</td>
                  <td>Leertasten werden ignoriert</td>
                  <td>Strikte Regeln was Leerzeichen angeht</td>
                </tr>
                <tr>
                  <td>x</td>
                  <td>@example-mixin</td>
                  <td>=example-mixin</td>
                </tr>
                <tr>
                  <td>x</td>
                  <td>@include example-mixin</td>
                  <td>+example-mixin</td>
                </tr>
                <tr>
                  <td>x</td>
                  <td>@import foo</td>
                  <td>@import foo (same)</td>
                </tr>
                <tr>
                  <td>x</td>
                  <td>@extend foo</td>
                  <td>@extend foo (same)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className='font-extrabold text-lg my-5'>
              Mixin - Wie funktioniert es?
            </h3>
            <p>
              Im Gegensatz zu Variablen, die global arbeiten sind Mixins eine
              Art vordefiniertes und wiederverwenbares Pattern an CSS
              Attributen, das ähnlich einer Funktion diese via @include ausgibt.
            </p>
            <pre>
              <code>
                @mixin flex &#123;
                <br />
                &#9;display: flex;
                <br />
                &#9;display: -webkit-flex;
                <br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div>
        <h2 className='font-extrabold text-2xl my-5'>Praktisches Beispiel</h2>
        <p>
          <strong>1. Als erstes initialisieren wir git</strong>
          <pre>
            <code>git init</code>
          </pre>
        </p>
        <p>
          <strong>2. SASS und SCSS Installation</strong>
          <pre>
            <code>npm i sass</code>
          </pre>
        </p>
        <p>
          <strong>3. Unser erstes einfaches Mixin</strong>
          <pre>
            <code>
              @mixin flex &#123;
              <br />
              &#9;display: flex;
              <br />
              &#9;display: -webkit-flex;
              <br />
              &#9;flex-wrap: wrap;
              <br />
              &#125;
            </code>
          </pre>
        </p>
        <p>
          <strong>4. Wir erstellen globale Variablen </strong>
          <br />
          <span className={highlights.errorCode}>
            Hierbei ist folgendes zu beachten: Variablen in SCSS müssen im
            Gegensatz zu CSS immer im Root-Element definiert werden!
          </span>
          <pre className='text-sm mb-5'>
            CSS (Variablen)
            <br />
            <br />
            <code>
              --primary: #08061c;
              <br />
              --secondary: #ededed;
              <br />
              --third: #7a0202;
              <br />
              --highlight: #d15305;
              <br />
              --smallspace: 0.5rem;
              <br />
              --mediumspace: 1rem;
              <br />
              --largespace: 1.5rem;
            </code>
          </pre>
          <pre className='text-sm'>
            SCSS (Variablen)
            <br />
            <br />
            <code>
              $primary: #08061c;
              <br />
              $secondary: #ededed;
              <br />
              $third: #7a0202;
              <br />
              $highlight: #d15305;
              <br />
              $smallspace: 0.5rem;
              <br />
              $mediumspace: 1rem;
              <br />
              $largespace: 1.5rem;
            </code>
          </pre>
        </p>
        <p>
          <strong>5. Was sind Partials und wie werden diese genutzt?</strong>
          <p>
            Partials sind Dateien, die vom Compiler ignoriert werden, bis diese
            in eine CompolierbareDatei importiert werden.
            <br />
            <span className={highlights.errorCode}>Wichtig: </span>Um das
            Compelieren von Partials zu verhindern benötgt man einen Präfix vor
            dem eigentlihen Dateinamen. "
            <span className={highlights.errorCode}>_</span>name" durch den "_"
            wird diei Datei ignoriert.
          </p>
        </p>
        <pre className='text-sm'>
          <code>
            @mixin border &#123;
            <br />
            border: solid 0.2rem $highlight-SCSS;
            <br />
            border-radius: 1rem;
            <br />
            &#125;
            <br />
            <br />
            // Dynamic borders by setting parameters
            <br />
            @mixin borderWithParameters($width: 0.5rem, $color: $highlight-SCSS)
            &#123;
            <br />
            border-width: $width;
            <br />
            border-style: solid;
            <br />
            border-color: $color;
            <br />
            border-radius: 5rem;
            <br />
            &#125;
            <br />
            <br />
            @import "./partials/mixin";
          </code>
        </pre>
      </div>
      <div>
        <h2 className='font-extrabold text-2xl my-5'>Aufgaben</h2>
        <ul>
          <li>
            6. Style die Buttons und den Paragraphen mit Hilfe eines Mixins
            innerhalb der <span className={highlights.code}>main.scss</span>
            .Nutze die globalen Variablen um padding und margin zu setzen.
          </li>
          <li>
            7. Nun versuche das fertige Mixin nach{' '}
            <span className={highlights.errorCode}>_mixin.scss</span>{' '}
            auszulagern. und importiere das Mixin in die *main.scss*.
          </li>
          <li>8. Erstelle ein media querry Mixin.</li>
        </ul>
        <pre className='text-sm'>
          <code>
            @mixin breakpoints ($medium) &#123;
            <br />
            &#9;@if $medium == desktop &#123;
            <br />
            &#9;&#9;@media (min-width: 1024px) &#123;
            <br />
            &#9;&#9;&#9;@content;
            <br />
            &#9;&#9;&#125;
            <br />
            &#9;&#125;
            <br />
            &#125;
          </code>
        </pre>
      </div>
      <div className='linkContainer'>
        <a href='https://www.npmjs.com/package/sass'>Dokumentation</a>
        <a href='https://www.youtube.com/watch?v=3wXqwX4nu8I'>
          Video (Englisch)
        </a>
        <a href='https://www.youtube.com/watch?v=Vyp3Nh0QvSk&list=PLNmsVeXQZj7oopYYGy5hX-Y6b07_3DPp5'>
          Video (Deutsch)
        </a>
        <a href='https://www.webmasters-fernakademie.de/webmasters-fernakademie-leseprobe-scss-und-bootstrap.pdf'>
          SCSS & SASS PDF
        </a>
      </div>
    </article>
  );
};
