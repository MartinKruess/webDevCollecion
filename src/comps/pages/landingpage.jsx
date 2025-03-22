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
          Die Seite befindet sich ständig im Wandel, daher erhaltet ihr hier
          eine kleine Übersicht über Themen, die noch kommen werden.
        </p>
        <div className="grid grid-cols-5 w-full text-sm m-auto px-10 gap-5">
          <p>CSS (70%)</p>
          <ul className="col-span-1 text-green-300">
            <li>:has, :isValid, :not 10%</li>
            <li>3D Optik 10%?</li>
            <li>Übungen für Animationen 5%</li>
            <li>Github Projects 5%</li>
          </ul>
          <br />
          <p>Javascript (85%)</p>
          <ul className="text-green-300">
            <li>Solutions 5%?</li>
            <li>SelfTest neue Fragen 5%</li>
            <li>Benutzer Stufe * - ***</li>
            <li>Recursion Function 10%</li>
          </ul>
          <p>DOM (50%)</p>
          <ul className="text-yellow-500">
            <li>Selectoren: set/get 10%</li>
            <li>Events 10%</li>
            <li>Import/Export/Modules 10%</li>
            <li>neue Übungen 10%</li>
            <li>Übungen rework! 10%</li>
          </ul>
          <br />
          <p>React (70%)</p>
          <ul className=" text-green-400">
            <li>useRef 5%</li>
            <li>V6 privatRoute 10%</li>
            <li>V7 React Router</li>
            <li>TanStack</li>
            <li>React Query</li>
            <li>useReducer 15%</li>
          </ul>
          <p>Node Express (70%)</p>
          <ul className=" text-green-400">
            <li>JWT 10%</li>
            <li>Web Sockets 20%</li>
          </ul>
          <br />
          <p>Database (60%)</p>
          <ul className=" text-green-200">
            <li>Populate 10%</li>
            <li>Populate advanced 5%</li>
            <li>mySQL 15%</li>
            <li>SQL vs NoSQL 10%</li>
          </ul>
          <p>Deployment (65%)</p>
          <ul className=" text-green-300">
            <li>Render 5%</li>
            <li>Hetzner 30%</li>
          </ul>
          <br />
          <p className=" text-yellow-300">
            Gesamt: {((75 + 85 + 50 + 70 + 70 + 60 + 60) / 7).toFixed(2)}%
          </p>
        </div>
      </article>
    </section>
  );
};
