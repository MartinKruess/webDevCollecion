export const Landingpage = () => {
  return (
    <section className="w-10/12 m-auto">
      <article className="p-4">
        <h1 className="font-extrabold text-2xl">Fullstack WebDev</h1>
        <p className="text-sm">
          Willkommen an alle Lernenden. Hier entsteht eine Dokumentation über
          die jewieligen Teilthemen der einzelnen Module. Ziel des Ganzen ist es
          eine Plattform zu schaffen auf der ihr Informationen leicht
          verständlich nachlesen könnt, zusätzliche Übungsaufgaben findet und
          euch eine Linksammlung zu diversen Themen zur Verfügung steht.
        </p>
        <p className="text-sm">
          Die Seite befindet sich noch im Aufbau, daher erhaltet ihr hier eine
          kleine Übersicht über den aktuellen Stand der Webseite.
        </p>
        <ul className="flex flex-wrap w-80 text-sm">
          <li className="w-1/2">HTML & CSS</li>
          <li className="w-1/2 text-red-500">70%</li>
          <li className="w-1/2">Javascript inkl. TS</li>
          <li className="w-1/2 text-red-300">80%</li>
          <li className="w-1/2">React</li>
          <li className="w-1/2 text-red-900">0%</li>
          <li className="w-1/2">Node Express</li>
          <li className="w-1/2 text-red-900">0%</li>
          <li className="w-1/2">Database</li>
          <li className="w-1/2 text-red-900">0%</li>
          <li className="w-1/2">Deployment</li>
          <li className="w-1/2 text-red-700">25%</li>
        </ul>
      </article>
    </section>
  );
};
