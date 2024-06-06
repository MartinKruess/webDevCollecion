export const AnimationPart4 = () => {
  return (
    <article className='text-sm min-h-full border' id='ani4'>
      <h3 className='text-xl my-2 pt-2'>Was sind Keyframes?</h3>
      <p class='p-0'>
        Ein Keyframe kann man sich als Einzelabschnitt einer Animation
        vorstellen in dem ein Gewisser Zustand definiert wird. In CSS
        Animationen werden Keyframes verwendet, um die Zwischenzustände einer
        Animation zu definieren. Ein Keyframe besteht aus einem Satz von
        CSS-Regeln, die den Zustand eines Elements zu einem bestimmten Zeitpunkt
        in der Animation beschreiben.
      </p>
      <p class='p-0'>
        Hier ist ein Beispiel: Der Slider bewegt sich anfangs schnell, dann
        langsam ans Ende und auf dem Rückweg mit mittlerer, gleichbleibender
        Geschwindigkeit.
      </p>
      <div class='border'>
        <div class='slider'></div>
      </div>
    </article>
  );
};
