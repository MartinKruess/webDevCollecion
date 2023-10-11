import { useEffect, useState } from "react";
import { arrayMethods } from "./assets/arrayMethods";
import { highlights } from "../../App";

export const Array = () => {
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {}, [isWatched]);

  return (
    <article>
      {/* ------------- ARRAY ------------- */}
      <h2 className='font-extrabold text-3xl my-5'>Array</h2>
      <div className='my-4'>
        Ein Array kann man als eine Art Daten-Container verstehen, der einzelne
        Elemente in einem Cluster zusammenfasst. Der grundaufbau eines Arrays
        wird wie folgt aufgebaut
        <pre>
          <code>const arrayName(s) = [ ]</code>
        </pre>
        Da ein Array eine Sammlung von Elementen ist wird, als Name des Arrays,
        oft die Mehrzahl von Etwas genommen. Beispiel: Franzi ist ein user und
        befindet sich im array mit dem Namen{" "}
        <span className={highlights.code}>users</span>
      </div>
      <pre>
        <code>
          const users = ["Sockenrocker83", "Nobody01", "Franzi", "Heardbreaker"]
          <br />
        </code>
      </pre>
      <p>
        Ein Array sollte übrigens immer als{" "}
        <span className={highlights.code}>const</span> Variable erstellt werden
        und dafür gibt es gute gründe. In einem Array sind wichtige Daten, die
        man nicht ausversehen überschreiben möchte und ein weiterer gute Punkt
        ist die Weiterverarbeitung. Bei der Weiterverarbeitung mit Methoden, in
        Loops oder beim Rechnen könnten Fehler passieren und dabei passiert es
        manchmal, dass man plötzlich kein Array sondern einen String hat. Die
        Konsole zeigt hierbei keinen Fehler an und die Ausgabe im Terminal sieht
        der erwarteten Ausgabe sehr ähnlich. Solche Fehler zu finden ist
        manchmal recht Tricky.
      </p>

      {/* ------------- METHODS ------------- */}
      <h3 className='font-extrabold text-2xl my-5'>Array Methods Grundlagen</h3>
      <pre>
        <code>
          const users = ["Sockenrocker83", "Nobody01", "Franzi", "Heardbreaker"]
          <br />
        </code>
      </pre>
      <p>
        Unter dem Begriff Methods versteht man eine Funktion, die auf etwas
        angewendet werden kann. Die Anwendung wird eingeleitet durch{" "}
        <span className={highlights.code}>&#123;" "&#125;</span>
      </p>
      <pre>
        <code>.methodName</code>
      </pre>
      <div className='my-8'>
        <ul>
          {arrayMethods.map((method, i) => (
            <div className='flex flex-wrap border-b md:border-none' key={i}>
              <li className='sm:w-2/5 py-2 font-bold'>{method.command}</li>
              <li className='sm:w-2/5 py-2'>{method.description}</li>
              <li className='sm:w-1/5 py-2 text-center'>
                <a href={method.url} target='_blank' rel='noopener noreferrer'>
                  {method.urlName}
                </a>
              </li>
            </div>
          ))}
        </ul>
        <p>
          Neben den oben erklärten array Methoden gibt es noch viele viele mehr.
          Allerdings sind die oben erklärten, die die wirklich noch verwendet
          werden, außer in Sonderfällen.
        </p>
      </div>
      {/* ------------- IMAGE ------------- */}
      <div className='imgContainer'>
        {isWatched ? (
          <img
            className='imgHover'
            onClick={() => setIsWatched(!isWatched)}
            src='./images/array.png'
            alt=''
          />
        ) : (
          <img
            className='w-full md:w-10/12 lg:w-8/12'
            onClick={() => setIsWatched(!isWatched)}
            src='./images/array.png'
            alt=''
          />
        )}
      </div>
      <div>
        <h3 className='font-extrabold text-xl mt-24'>Die Slice-Methode</h3>
        <p>
          Die slice Methode wird verwendet um eine Teilkopie als neues Array
          auszugeben. Bei dieser Methode wird das Ausgangs-Array/der
          Ausgangs-String nicht verändert, sondern der ausgewählte Bereich in
          einem neuen Array/String gespeichert. Die Slice Methode nimmt bis zu 2
          Parameter an (Start- und Endwert).
        </p>
        <ul>
          <li>
            Startwert - Endwert:
            <span className={highlights.code}> slice(0, 5)</span> -&gt; Das
            bedeutet es wird Position 0-4 in ein neues Array/einen neuen String
            kopiert (exclusive 5)
            <pre>
              <code>
                'Javascript' -&gt; 'Java'
                <br />
                [1, 2, 3, 4, 5, 6] -&gt; [1, 2, 3, 4]
              </code>
            </pre>
          </li>
          <li>
            Startwert: <span className={highlights.code}>slice(2)</span> -&gt;
            Das bedeutet es wird von Position 2 automatisch alles bis ans Ende
            in ein neues Array/einen neuen String kopiert
            <pre>
              <code>
                'Javascript' -&gt; 'vascript'
                <br />
                [1, 2, 3, 4, 5, 6] -&gt; [3, 4, 5, 6]
              </code>
            </pre>
          </li>
        </ul>

        <p>Hier sind einige Beispiele der Slice Methode.</p>

        <pre className='text-sm'>
          <code>
            const arrayToSlice = [1, 2, 3, 4, 5]
            <br />
            const startNegativ = arrayToSlice.slice(-3)
            <br />
            const completeArray = arrayToSlice.slice()
            <br />
            <br />
            // const example = arrayToSlice.slice(STARTINDEX, ENDINDEX);
            <br />
            <br />
            const StartindexToEndOfArray = arrayToSlice.slice(2);
            <br />
            const StartindexToEndindex = arrayToSlice.slice(1, 4);
            <br />
            const StartindexRichtToEndOfArray = arrayToSlice.slice(-2);
            <br />
            <br />
            console.log( `<br />
            &#9;Eine Kopie des gesamten Arrays um dieses Weiter zu verarbeiten
            ohne das Originale zu Verändern:) &#36;&#123;completeArray&#125;
            <br />
            &#9;Array vom Startindex bis zum Ende:
            &#36;&#123;StartindexToEndOfArray&#125;
            <br />
            &#9;Ein festgelegter Bereich: &#36;&#123;StartindexToEndindex&#125;
            <br />
            &#9;Es werden immer die Letzten 2 Arrayeinträge ausgegeben:
            &#36;&#123;StartindexRichtToEndOfArray&#125;
            <br />
            `)
          </code>
        </pre>
      </div>
      <div>
        <h3 className='font-extrabold text-xl'>Die Splice-Methode</h3>
        <p>
          Die splice Methode wird verwendet um ein Array zu bearbeiten. Bei
          dieser Methode wird das Ausgangs-Array verändert!
        </p>
        <p>Hier sind einige Beispiele der Splice Methode.</p>
        <pre className='text-sm'>
          <code>
            const arrayToSplice = [Tobi, Lisa, Marc, Nina, Christian]
            <br />
            <br />
            // Löscht 1 Element an Index 2<br />
            const removed_I = arrayToSplice.splice(2, 1)
            <br />
            <br />
            // Löscht alle Elemente ab Index 2<br />
            const removed_II = arrayToSplice.splice(2)
            <br />
            <br />
            // Löscht 2 Elemente ab Index 0 und ersetzt diese durch "Hans",
            "Sabrina" und "Otto"
            <br />
            const replace = arrayToSplice.splice(0, 2, "Hans", "Sabrina",
            "Otto");
            <br />
            <br />
            // Lösche 0 Elemente und Füge an Index 2 "Tina" und "Gaby" ein
            <br />
            const StartindexToEndOfArray = arrayToSplice.splice(2, 0, "Tina",
            "Gaby"); `)
          </code>
        </pre>
      </div>

      {/* ------------- LINKS ------------- */}
      <div className='linkContainer'>
        <a
          href='https://www.mediaevent.de/javascript/array.html'
          target='_blank'
        >
          Array (Infos 1)
        </a>
        <a href='https://www.programiz.com/javascript/array' target='_blank'>
          Array (Infos 2)
        </a>
        <a href='https://www.youtube.com/watch?v=7W4pQQ20nJg' target='_blank'>
          Array (Video)
        </a>
        <a
          href='https://www.youtube.com/watch?v=SXb5LN_opbA&list=PLgBH1CvjOA62PBFIDq55-S6Beivje30A2'
          target='_blank'
        >
          Array Methods (Video)
        </a>
      </div>
    </article>
  );
};
