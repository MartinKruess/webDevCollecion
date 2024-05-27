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
          <article className=' text-sm' id='ani1'>
            <p>
              CSS-Animationen sind ein kraftvolles Werkzeug zur Verbesserung der
              Benutzererfahrung auf Websites. Mit CSS können Entwickler visuelle
              Effekte und Bewegungen erstellen, die das Design lebendiger machen
              und Informationen auf ansprechende Weise präsentieren.
            </p>
            <p>
              Von einfachen Hover-Effekten bis hin zu komplexen Animationen für
              Benachrichtigungen oder Interaktionen bieten CSS-Animationen eine
              Vielzahl von Möglichkeiten, um das Erscheinungsbild einer Website
              zu verbessern. In dieser Einführung werden wir die Grundlagen von
              CSS-Animationen erkunden und einige praktische Beispiele
              durchgehen, um zu zeigen, wie sie in der Webentwicklung eingesetzt
              werden können.
            </p>
          </article>
          <article className='text-sm max-h-min' id='ani2'>
            <p>
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
          <article className='text-sm' id='ani3'>
            <div class='helperSpace'>
              <figure class='helper'>
                <img
                  src='./images/robby.webp'
                  alt='Robby der kleine Web-Assistant'
                />
                <figcaption className='bg-slate-200 text-red-600 w-16 opacity-70 relative -top-4 left-8 z-10'>
                  Hover me!
                </figcaption>
              </figure>
              <div class='talkbubble'>
                Hi ich bin Robby. Ich bin dein keine Helfer.
              </div>
            </div>
            <p>
              Hover Effekte lassen sich wunderbar mit Transition animieren. Mit
              Transition gibt es ein paar Eigenschaften, die animiert werden
              können. Hier ein paar Beispiele:
            </p>
          </article>
          <article className='text-sm' id='ani4'>
            <div class='helperSpace'>gfdg</div>
            <p>Animationen mit Keyframes sind eine weitere Möglichkeit, um</p>
          </article>
        </div>
      </div>
    </article>
  );
};
