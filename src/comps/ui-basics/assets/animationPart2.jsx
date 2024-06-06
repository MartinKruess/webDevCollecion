export const AnimationPart2 = () => {
  return (
    <article className='text-sm min-h-full' id='ani2'>
      <h3 className='text-xl my-0 pt-4'>Grundlagen von Animationen?</h3>
      <p className='py-3'>
        Animationen sind eine wirklich tolle Sache, um Webseiten lebendiger zu
        gestalten. Allerdings sollte man immer darauf achten, dass die Webseiten
        nicht zu überladen sind und die Benutzererfahrung nicht durch
        Animationen beeinträchtigt wird. Hier sind einige Grundregeln, die du
        beim Erstellen von Animationen beachten solltest:
      </p>
      <ul className='flex flex-wrap h-min-2/3 gap-y-4 p-2 text-center border'>
        <li className='w-full md:w-2/4'>
          <strong>Keep it simple: </strong>
          <p className='p-2'>
            Weniger ist manchmal mehr. Vermeide es, zu viele Animationen auf
            einer Seite zu verwenden.
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
            Teste deine Animationen auf verschiedenen Geräten und Browsern, um
            sicherzustellen, dass sie ordnungsgemäß funktionieren.
          </p>
        </li>
        <li className='w-full md:w-2/4'>
          <strong>Think about performance:</strong>
          <p className='p-2'>
            Achte darauf, dass deine Animationen performant sind. Verwende
            CSS-Animationen statt JavaScript-Animationen, um die Leistung zu
            verbessern.
          </p>
        </li>
      </ul>
    </article>
  );
};
