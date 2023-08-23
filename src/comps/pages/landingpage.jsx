export const Landingpage = () => {
  return(
    <section className="w-10/12 m-auto">
      <article className="p-4">
        <h1>
          Fullstack WebDev
        </h1>
        <p>
          Willkommen an alle Lernenden.
          Hier entsteht eine Dokumentation über die jewieligen Teilthemen der einzelnen Module. Ziel des Ganzen ist es eine Plattform zu schaffen auf der ihr Informationen leicht verständlich nachlesen könnt, zusätzliche Übungsaufgaben findet und euch eine Linksammlung zu diversen Themen zur Verfügung steht.
        </p>
        <p>
          Die Seite befindet sich noch im Aufbau, daher erhaltet ihr hier eine kleine Übersicht über den aktuellen Stand der Webseite.
        </p>
        <ul className="flex flex-wrap w-80">
          <li className="w-1/2">HTML & CSS</li>
          <li className="w-1/2">90%</li>
          <li className="w-1/2">Javascript inkl. TS</li>
          <li className="w-1/2">65%</li>
          <li className="w-1/2">React</li>
          <li className="w-1/2">0%</li>
          <li className="w-1/2">Node Express</li>
          <li className="w-1/2">0%</li>
          <li className="w-1/2">Database</li>
          <li className="w-1/2">0%</li>
          <li className="w-1/2">Deployment</li>
          <li className="w-1/2">0%</li>
        </ul>
      </article>
    </section>
  )
}