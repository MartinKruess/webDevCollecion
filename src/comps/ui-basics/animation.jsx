export const Animation = () => {
  return (
    <article className='pb-5'>
      <h2 className='font-extrabold text-xl pt-10'>CSS-Animation</h2>
      <p>
        CSS-Animationen sind eine Möglichkeit, um Elemente auf einer Webseite zu
        animieren. Es gibt auch die Möglichkeit, Animationen mit JavaScript zu
        erstellen, jedoch ist die CSS-Variante meistens performanter.
      </p>
      <p>
        Der Grundsatz lautet: Wenn sich etwas mit CSS regel lässt, dann nutze
        CSS dafür. (hover, active, Animationen, etc.)
      </p>
      <h2 className='font-extrabold text-xl pt-10'>
        Basic Animationen mit Transition
      </h2>
      <div className='animationBox'>
        <aside className='w-48'>
          <ul>
            <li>
              <a href='#ani1'>Was sind Animationen?</a>
            </li>
            <li>
              <a href='#ani2'>Grundregeln von Animationen</a>
            </li>
            <li>
              <a href='#ani3'>Basic Animation mit Transition</a>
            </li>
            <li>
              <a href='#ani4'>Keyframe Animationen</a>
            </li>
            <li>
              <a href='#ani5'>Keyframe Animationen</a>
            </li>
            <li>
              <a href='#ani6'>Animationsübungen</a>
            </li>
          </ul>
        </aside>
        <div className='w-4/5 animationContentBox'>
          <article className=' text-sm min-h-full' id='ani1'>
            <h3 className='text-xl my-2 pt-2'>Was sind Animationen?</h3>
            <p className='py-3'>
              CSS-Animationen sind ein kraftvolles Werkzeug zur Verbesserung der
              Benutzererfahrung auf Websites. Mit CSS können Entwickler visuelle
              Effekte und Bewegungen erstellen, die das Design lebendiger machen
              und Informationen auf ansprechende Weise präsentieren.
            </p>
            <p className='py-3'>
              Von einfachen Hover-Effekten bis hin zu komplexen Animationen für
              Benachrichtigungen oder Interaktionen bieten CSS-Animationen eine
              Vielzahl von Möglichkeiten, um das Erscheinungsbild einer Website
              zu verbessern. In dieser Einführung werden wir die Grundlagen von
              CSS-Animationen erkunden und einige praktische Beispiele
              durchgehen, um zu zeigen, wie sie in der Webentwicklung eingesetzt
              werden können.
            </p>
            <p className='py-3'>
              Achte immer darauf, dass deine Animationen die Benutzererfahrung
              auf deiner Website verbessern und nicht beeinträchtigen. Vermeide
              übermäßige Animationen oder Effekte, die die Benutzer ablenken
              oder verwirren könnten. Wenn du dir nicht sicher bist, ob eine
              Animation angemessen ist, teste sie auf verschiedenen Geräten und
              Browsern, um sicherzustellen, dass sie ordnungsgemäß funktioniert
              und die Benutzer nicht stört.
            </p>
          </article>
          <article className='text-sm min-h-full' id='ani2'>
            <h3 className='text-xl my-0 pt-4'>Grundlagen von Animationen?</h3>
            <p className='py-3'>
              Animationen sind eine wirklich tolle Sache, um Webseiten
              lebendiger zu gestalten. Allerdings sollte man immer darauf
              achten, dass die Webseiten nicht zu überladen sind und die
              Benutzererfahrung nicht durch Animationen beeinträchtigt wird.
              Hier sind einige Grundregeln, die du beim Erstellen von
              Animationen beachten solltest:
            </p>
            <ul className='flex flex-wrap h-min-2/3 gap-y-4 p-2 text-center border'>
              <li className='w-full md:w-2/4'>
                <strong>Keep it simple: </strong>
                <p className='p-2'>
                  Weniger ist manchmal mehr. Vermeide es, zu viele Animationen
                  auf einer Seite zu verwenden.
                </p>
              </li>
              <li className='w-full md:w-2/4'>
                <strong>Be consistent: </strong>
                <p className='p-2'>
                  Halte deine Animationen konsistent um ein einheitliches
                  Erscheinungsbild zu gewährleisten.
                </p>
              </li>
              <li className='w-full md:w-2/4'>
                <strong>Test it:</strong>
                <p className='p-2'>
                  Teste deine Animationen auf verschiedenen Geräten und
                  Browsern, um sicherzustellen, dass sie ordnungsgemäß
                  funktionieren.
                </p>
              </li>
              <li className='w-full md:w-2/4'>
                <strong>Think about performance:</strong>
                <p className='p-2'>
                  Achte darauf, dass deine Animationen performant sind. Verwende
                  CSS-Animationen statt JavaScript-Animationen, um die Leistung
                  zu verbessern.
                </p>
              </li>
            </ul>
          </article>
          <article className='text-sm min-h-full' id='ani3'>
            <h3 className='text-xl my-2 pt-2'>
              Basic Animation mit Transition
            </h3>
            <div class='helperSpace'>
              <div className='w-7/12 flex'>
                <figure class='helper'>
                  <img
                    src='./images/robby.webp'
                    alt='Robby der kleine Web-Assistant'
                  />
                  <figcaption className='bg-slate-200 text-red-600 w-20 opacity-70 relative -top-4 left-2 z-10 text-center'>
                    Hover me!
                  </figcaption>
                </figure>
                <div class='talkbubble'>
                  Hi ich bin Robby. Ich bin dein keine Helfer.
                </div>
              </div>
              <p className='w-5/12'>
                Hover Effekte lassen sich wunderbar mit Transition animieren.
                Mit Transition gibt es ein paar Eigenschaften, die animiert
                werden können.
              </p>
            </div>
            <div className='flex gap-5'>
              <div className='transAniBG'>
                <div className='transAniMid'>
                  <div className='hover'>Hover me</div>
                </div>
              </div>
              <p className='w-8/12 ml-auto'>
                Hier haben wir beispielsweise eine Reihe von Transition Effekten
                nacheinander. Als erstes Dreht sich der Hintergrund, dann die
                Mitte und zuletzt der Text.
                <br />
                Hierbei ist zu beachten, dass die Äußeren Elemente die inneren
                Elemente beeinflussen. Das bedeutet, dass die inneren Elemente
                ebenfalls gedreht werden. Achte auf den Text und den hellen
                Schatten im inneren Kreis.
              </p>
            </div>
          </article>
          <article className='text-sm min-h-full' id='ani4'>
            <p class='helperSpace'>
              Erklärung Keyframe Animationen folgt in Kürze!
            </p>
          </article>
          <article className='text-sm min-h-full' id='ani5'>
            <p class='helperSpace'>Keyframe Animationen folgen in Kürze!</p>
          </article>
          <article className='text-sm min-h-full' id='ani6'>
            <p>Übungen zum Thema Animationen folgen</p>
          </article>
        </div>
      </div>
    </article>
  );
};
