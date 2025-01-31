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
        <ul className="flex flex-wrap w-1/2 text-sm m-auto px-10 gap-5">
          <li className="w-1/3">CSS</li>
          <li className="w-1/3 text-green-400">
            65%
            <ul className="w-full">
              <li>3D Optik 10%</li>
              <li>Übungen für Animationen 5%</li>
              <li>Git und Github Workflow 20%</li>
              <li>VS-Code</li>
            </ul>
          </li>
          <li className="w-1/2">Javascript</li>
          <li className="w-1/2 text-green-300">
            67%
            <ul className="w-full">
              <li>Closure 10%</li>
              <li>Recursion Function 10%</li>
              <li>Callstack 5%</li>
              <li>Callback 8%</li>
            </ul>
          </li>
          <li className="w-1/2">DOM</li>
          <li className="w-1/2 text-green-400">
            70%
            <ul className="w-full">
              <li>Selectoren: set/get 10%</li>
              <li>Events 10%</li>
              <li>Import/Export/Modules 10%</li>
            </ul>
          </li>
          <li className="w-1/2">React</li>
          <li className="w-1/2 text-green-300">
            60%
            <ul className="w-full">
              <li>useRef 5%</li>
              <li>V6 privatRoute 10%</li>
              <li>V5 privatRoute 10%</li>
              <li>useReducer 15%</li>
            </ul>
          </li>
          <li className="w-1/2">Node Express</li>
          <li className="w-1/2 text-green-500">
            90%
            <ul>
              <li>JWT 10%</li>
            </ul>
          </li>
          <li className="w-1/2">Database</li>
          <li className="w-1/2 text-green-500">
            85%
            <ul>
              <li>Populate 10%</li>
              <li>Populate advanced 5%</li>
            </ul>
          </li>
          <li className="w-1/2">Deployment</li>
          <li className="w-1/2 text-green-300">
            55%
            <ul className="w-full">
              <li>Vercel 5%</li>
              <li>Render 5%</li>
              <li>Hetzner 35%</li>
            </ul>
          </li>

          <li>
            Gesamt: {((65 + 67 + 70 + 60 + 90 + 85 + 55) / 7).toFixed(2)}%
          </li>
        </ul>
      </article>
    </section>
  );
};
