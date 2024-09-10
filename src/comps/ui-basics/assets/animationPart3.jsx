export const AnimationPart3 = () => {
  return (
    <article className="text-sm min-h-full" id="ani3">
      <h3 className="text-xl my-2 pt-2">Basic Animation mit Transition</h3>
      <div class="helperSpace">
        <div className="w-7/12 flex">
          <figure class="helper">
            <img
              src="/images/robby.webp"
              alt="Robby der kleine Web-Assistant"
            />
            <figcaption className="bg-slate-200 text-red-600 w-20 opacity-70 relative -top-4 left-2 z-10 text-center">
              Hover me!
            </figcaption>
          </figure>
          <div class="talkbubble">
            Hi ich bin Robby. Ich bin dein keine Helfer.
          </div>
        </div>
        <p className="w-5/12">
          Hover Effekte lassen sich wunderbar mit Transition animieren. Mit
          Transition gibt es ein paar Eigenschaften, die animiert werden können.
        </p>
      </div>
      <div className="flex gap-5">
        <div className="transAniBG">
          <div className="transAniMid">
            <div className="hover">Hover me</div>
          </div>
        </div>
        <p className="w-8/12 ml-auto">
          Hier haben wir beispielsweise eine Reihe von Transition Effekten
          nacheinander. Als erstes Dreht sich der Hintergrund, dann die Mitte
          und zuletzt der Text.
          <br />
          Hierbei ist zu beachten, dass die Äußeren Elemente die inneren
          Elemente beeinflussen. Das bedeutet, dass die inneren Elemente
          ebenfalls gedreht werden. Achte auf den Text und den hellen Schatten
          im inneren Kreis.
        </p>
      </div>
    </article>
  );
};
