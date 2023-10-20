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
      <h3 className='font-extrabold text-xl my-5'>Funktionen von SASS/SCSS</h3>
      <div className='flex flex-wrap'>
        <p className='-my-4 md:w-6/12'>
          SASS erlaubt das Verschachteln von Klassen und Pseudoklassen, was
          Redundanz verringert und weniger Schreibaufwand bedeutet. Ferner wird
          dabei auch die BEM-Methodik1 unterstützt.
        </p>
        <p className='-my-4 md:w-1/12'></p>
        <p className='-my-4 md:w-5/12'>
          In SASS lassen sich einfache Berechnungen wie +, -, * und /
          durchführen, sowie die Verwendung von Schleifen und
          Fallunterscheidungen womit sich Wiederholungen und Wenn-/Dann-Regeln
          umsetzen lassen.
        </p>
        <p className='-my-4 md:w-6/12'>
          Eine @function kann mit Werten gefüttert werden, die sie verarbeitet
          und schliesslich das Resultat zurückgibt. Ein @mixin funktioniert
          ähnlich wie eine @function, unterscheidet sich aber dadurch, dass es
          CSS statt einem Wert zurückliefert. @extend ermöglicht es
          verschiedenen CSS-Klassen Eigenschaften miteinander zu teilen.
        </p>
        <p className='-my-4 md:w-1/12'></p>
        <p className='-my-4 md:w-5/12'>
          Die SASS-Befehle @import und @use erlauben es, den Code in Teildateien
          aufzuteilen, womit sich der Code besser strukturieren und in anderen
          Zusammenhängen wiederverwenden lässt. Im Gegensatz zum CSS-Import
          Befehl wird beim Seitenaufruf kein zusätzlicher HTTP-Request erzeugt.
        </p>
      </div>

      <p>
        Es gibt allerdings in Verbindung mit Frameworks ein paar Dinge, auf die
        man achten sollte.
      </p>
      <ul className='grid grid-cols-12 gap-10'>
        <li className='col-start-1 col-end-4'>Bootstrap</li>
        <li className='col-start-4 col-end-8 sm:col-end-12'>
          Bei der Arbeit mir Bootstrap wird gerne SCSS verwendet um das
          randomizen etwas zu vereinfachen.
        </li>
        <li className='col-start-1 col-end-4'>Tailwind</li>
        <li className='col-start-4 col-end-8 sm:col-end-12'>
          Tailwind und SCSS arbeiten gut zusammen, aber auch normal CSS langt
          zum Randomizen
        </li>
        <li className='col-start-1 col-end-4'>Javascript</li>
        <li className='col-start-4 col-end-8 sm:col-end-12'></li>
        <li className='col-start-1 col-end-4'>React</li>
        <li className='col-start-4 col-end-8 sm:col-end-12'></li>
      </ul>
      <div className='linkContainer'>
        <a href='https://www.webmasters-fernakademie.de/webmasters-fernakademie-leseprobe-scss-und-bootstrap.pdf'>
          SCSS & SASS PDF
        </a>
      </div>
    </article>
  );
};
