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
        <ul className='flex flex-wrap w-1/2 text-sm m-auto px-10 gap-5'>
          <li className='w-1/3'>CSS</li>
          <li className='w-1/3 text-green-600'>
            75%
            <ul className='w-full'>
              <li>Flex 20%</li>
              <li>Animation 5%</li>
            </ul>
          </li>
          <li className='w-1/3'>Javascript</li>
          <li className='w-1/3 text-green-400'>
            92%
            <ul className='w-full'>
              <li>Callback</li>
            </ul>
          </li>
          <li className='w-1/3'>DOM</li>
          <li className='w-1/3 text-green-300'>
            60%
            <ul className='w-full'>
              <li>set/get 10%</li>
              <li>Events 20%</li>
              <li>Import/Export/Modules 10%</li>
            </ul>
          </li>
          <li className='w-1/3'>React</li>
          <li className='w-1/3 text-green-600'>
            80%
            <ul className='w-full'>
              <li>useReducer 10%</li>
              <li>useRef (als letztes) 5%</li>
              <li>Formular 5%</li>
            </ul>
          </li>
          <li className='w-1/3'>Node Express</li>
          <li className='w-1/3 text-green-600'>
            80%
            <ul className='w-full'>
              <li>JWT 10%</li>
              <li>Cookies 10%</li>
            </ul>
          </li>
          <li className='w-1/3'>Database</li>
          <li className='w-1/3 text-yellow-300'>
            55%
            <li>Compass 10%</li>
            <li>MongoDB Commands 10%</li>
            <li>SQL 25%</li>
          </li>
          <li className='w-1/3'>Deployment</li>
          <li className='w-1/3 text-green-300'>
            65%
            <ul className='w-full'>
              <li>Vercel, Render, Cyclic 10%</li>
              <li>Hetzner 25%</li>
            </ul>
          </li>
          <li className='w-1/3'>Sonderthemen</li>
          <li className='w-1/3 text-red-900'>
            0%
            <ul className='w-full'>
              <li>oAuth/Passport 20%</li>
              <li>BigO 10%</li>
              <li>Paymentsystem 15%</li>
              <li>Socket IO 25%</li>
              <li>Cloudinary 15%</li>
              <li>FileSystem 10%</li>
            </ul>
          </li>
          <li>Gesamt: {(75 + 92 + 60 + 80 + 80 + 55 + 65 + 0) / 8}%</li>
        </ul>
      </article>
    </section>
  );
};
