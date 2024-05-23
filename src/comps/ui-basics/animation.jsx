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
      <div class='helperSpace'>
        <figure class='helper'>
          <img src='./images/robby.webp' alt='Robby der kleine Web-Assistant' />
          <figcaption className='bg-slate-200 text-red-600 w-16 opacity-70 relative -top-4 left-8 z-10'>
            Hover me!
          </figcaption>
        </figure>
        <div class='talkbubble'>
          Hi ich bin Robby. Ich bin dein keine Helfer.
        </div>
      </div>
      <h2 className='font-extrabold text-xl pt-10'>
        Basic Animationen mit Transition
      </h2>
      <div className='animationBox'>
        <aside className='w-1/5'>
          <ul>
            <li>
              <a href='#ani1'>Was sind Animationen?</a>
            </li>
            <li>
              <a href='#ani2'>Grundregeln von Animationen</a>
            </li>
            <li>
              <a href='#ani3'>Grundregeln von Animationen 2</a>
            </li>
            <li>
              <a href='#ani4'>Basic Animation mit Transition</a>
            </li>
            <li>
              <a href='#ani5'>Keyframe Animationen</a>
            </li>
            <li>
              <a href='#ani6'>Keyframe Animationen</a>
            </li>
            <li>
              <a href='#ani7'>Animationsübungen</a>
            </li>
          </ul>
        </aside>
        <div className='w-4/5 animationContentBox'>
          <p className='h-full mb-4' id='ani1'>
            CSS-Animationen sind ein kraftvolles Werkzeug zur Verbesserung der
            Benutzererfahrung auf Websites. Mit CSS können Entwickler visuelle
            Effekte und Bewegungen erstellen, die das Design lebendiger machen
            und Informationen auf ansprechende Weise präsentieren. Von einfachen
            Hover-Effekten bis hin zu komplexen Animationen für
            Benachrichtigungen oder Interaktionen bieten CSS-Animationen eine
            Vielzahl von Möglichkeiten, um das Erscheinungsbild einer Website zu
            verbessern. In dieser Einführung werden wir die Grundlagen von
            CSS-Animationen erkunden und einige praktische Beispiele durchgehen,
            um zu zeigen, wie sie in der Webentwicklung eingesetzt werden
            können.
          </p>
          <article className='h-full'>
            <p id='ani2'>
              Animationen sind eine wirklich tolle Sache, um Webseiten
              lebendiger zu gestalten. Allerdings sollte man immer darauf
              achten, dass die Webseiten nicht zu überladen sind und die
              Benutzererfahrung nicht durch Animationen beeinträchtigt wird.
              Hier sind einige Grundregeln, die du beim Erstellen von
              Animationen beachten solltest:
            </p>
            <ul className='flex flex-wrap gap-y-3'>
              <li className='w-3/7'>
                <strong>Keep it simple:</strong> Weniger ist manchmal mehr.
                Vermeide es, zu viele Animationen auf einer Seite zu verwenden.
              </li>
              <li className='w-1/7'></li>
              <li className='w-3/7'>
                <strong>Be consistent:</strong> Halte deine Animationen
                konsistent um ein einheitliches Erscheinungsbild zu
                gewährleisten.
              </li>
              <li className='w-3/7'>
                <strong>Test it:</strong> Teste deine Animationen auf
                verschiedenen Geräten und Browsern, um sicherzustellen, dass sie
                ordnungsgemäß funktionieren. Achte darauf, dass die Animationen
                nicht zu langsam oder zu schnell sind und dass sie auf allen
                Geräten flüssig abgespielt werden.
              </li>
              <li className='w-1/7'></li>
              <li className='w-3/7'>
                <strong>Think about performance:</strong> Achte darauf, dass
                deine Animationen performant sind. Verwende CSS-Animationen
                statt JavaScript-Animationen, um die Leistung zu verbessern.
              </li>
            </ul>
          </article>
          <p className='h-full mb-4' id='ani3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ipsam unde maiores quo eligendi id reprehenderit ab totam doloribus
            expedita odio laborum recusandae, animi distinctio nesciunt alias
            repudiandae, non quisquam!
          </p>
          <p className='h-full mb-4' id='ani4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ipsam unde maiores quo eligendi id reprehenderit ab totam doloribus
            expedita odio laborum recusandae, animi distinctio nesciunt alias
            repudiandae, non quisquam!
          </p>
          <p className='h-full mb-4' id='ani5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ipsam unde maiores quo eligendi id reprehenderit ab totam doloribus
            expedita odio laborum recusandae, animi distinctio nesciunt alias
            repudiandae, non quisquam!
          </p>
          <p className='h-full mb-4' id='ani6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ipsam unde maiores quo eligendi id reprehenderit ab totam doloribus
            expedita odio laborum recusandae, animi distinctio nesciunt alias
            repudiandae, non quisquam!
          </p>
        </div>
      </div>
    </article>
  );
};
