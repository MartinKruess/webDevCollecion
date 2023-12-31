export const Landingpage = () => {
  return (
    <section className='w-10/12 m-auto'>
      <article className='p-4'>
        <h1 className='font-extrabold text-2xl'>Fullstack WebDev</h1>
        <p className='text-sm'>
          Willkommen an alle Lernenden. Hier entsteht eine Dokumentation über
          die jewieligen Teilthemen der einzelnen Module. Ziel des Ganzen ist es
          eine Plattform zu schaffen auf der ihr Informationen leicht
          verständlich nachlesen könnt, zusätzliche Übungsaufgaben findet und
          euch eine Linksammlung zu diversen Themen zur Verfügung steht.
        </p>
        <p className='text-sm'>
          Die Seite befindet sich noch im Aufbau, daher erhaltet ihr hier eine
          kleine Übersicht über den aktuellen Stand der Webseite.
        </p>
        <ul className='flex flex-wrap w-80 text-sm'>
          <li className='w-1/2'>CSS</li>
          <li className='w-1/2 text-green-600'>
            75%
            <ul className='w-full'>
              <li>Flex 20%</li>
              <li>Animation 5%</li>
            </ul>
          </li>
          <li className='w-1/2'>Javascript</li>
          <li className='w-1/2 text-green-400'>
            92%
            <ul className='w-full'>
              <li>Callback</li>
            </ul>
          </li>
          <li className='w-1/2'>DOM</li>
          <li className='w-1/2 text-yellow-300'>
            60%
            <ul className='w-full'>
              <li>set/get 10%</li>
              <li>Events 20%</li>
              <li>Import/Export/Modules 10%</li>
            </ul>
          </li>
          <li className='w-1/2'>React</li>
          <li className='w-1/2 text-green-600'>
            75%
            <ul className='w-full'>
              <li>privatRoute 5%</li>
              <li>useReducer 10%</li>
              <li>useRef (als letztes) 5%</li>
              <li>Formular 5%</li>
            </ul>
          </li>
          <li className='w-1/2'>Node Express</li>
          <li className='w-1/2 text-yellow-600'>
            40%
            <ul className='w-full'>
              <li>API-Adv. 5%</li>
              <li>Bcrypt 10%</li>
              <li>JWT 10%</li>
              <li>Data-Management 10%</li>
              <li>Other Stuff 20%</li>
            </ul>
          </li>
          <li className='w-1/2'>Database</li>
          <li className='w-1/2 text-yellow-700'>
            25%
            <li>Mongo 15%</li>
            <li>Compass 10%</li>
            <li>MongoDB 5%</li>
            <li>Mongoose 10%</li>
            <li>Models 10%</li>
            <li>SQL 25%</li>
          </li>
          <li className='w-1/2'>Deployment</li>
          <li className='w-1/2 text-yellow-300'>
            60%
            <ul className='w-full'>
              <li>Vercel 5%</li>
              <li>Cyclic 5%</li>
              <li>Render 5%</li>
              <li>Hetzner 25%</li>
            </ul>
          </li>
        </ul>
      </article>
    </section>
  );
};
