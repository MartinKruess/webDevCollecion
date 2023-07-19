export const SASS = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl my-5">SCSS und SASS</h2>
      <p>
        SCSS kann als erweitertes CSS beschrieben werden, womit das Aussehen von
        Websites beeinflusst wird. Ein mit SCSS verwandter Begriff ist SASS.
        Während die SASS-Syntax mit ***Einrückungen*** und ohne die im CSS
        üblichen geschweiften Klammern und Semikolons auskommt, ist die Syntax
        von SCSS der von CSS ähnlich. SCSS wird gerne als die modernere Syntax
        bezeichnet.
      </p>
      <p>
        Damit SASS von einem Browser verstanden wird, muss der Code zuerst in
        CSS konvertiert werden. Deshalb wird SASS als Präprozessor bezeichnet.
        SASS bietet im Gegensatz zu CSS verschiedene Funktionen, die das
        Schreiben von CSS-Anweisungen erleichtern. Duch die Entwicklung von SASS
        ist auch die Verwendug von SCSS möglich. Die verwendete Syntax wird
        automatisch erkennt.
      </p>
      <pre>
        <code>npm i sass</code>
      </pre>
      <p>
        Die Installation von SASS ist ganz einfach mit NPM umzusetzen. Es gibt
        allerdings in Verbindung mit Frameworks ein paar Dinge, auf die man
        achten sollte.
      </p>
      <ul className="grid grid-cols-12 gap-10">
        <li className="col-start-1 col-end-6">Bootstrap</li>
        <li className="col-start-6 col-end-12">
          Bei der Arbeit mir Bootstrap wird gerne SCSS verwendet um die das
          randomizen etwas zu vereinfachen.
        </li>
        <li className="col-start-1 col-end-6">Tailwind</li>
        <li className="col-start-6 col-end-12">
          Tailwind und SCSS arbeiten gut zusammen, aber auch normal CSS langt
          zum Randomizen
        </li>
        <li className="col-start-1 col-end-6">Javascript</li>
        <li className="col-start-6 col-end-12"></li>
        <li className="col-start-1 col-end-6">React</li>
        <li className="col-start-6 col-end-12"></li>
      </ul>

      <a href="https://www.webmasters-fernakademie.de/webmasters-fernakademie-leseprobe-scss-und-bootstrap.pdf">
        SCSS und SASS PDF 45 Seiten Download
      </a>
    </article>
  );
};
