import { useEffect, useState } from "react"
import { arrayMethods } from "./assets/arrayMethods"

export const Array = () => {
  const [isWatched, setIsWatched] = useState(false)

  useEffect(() => {}, [isWatched])

  return (
    <article>
      {/* ------------- ARRAY ------------- */}
      <h2 className="font-extrabold text-3xl my-5">Array</h2>
      <div className="my-4">
        Ein Array kann man als eine Art Daten-Container verstehen, der einzelne Elemente in einem Cluster zusammenfasst. Der grundaufbau eines Arrays wird wie folgt aufgebaut
        <p className="code">
          const arrayName(s) = [ ]
        </p>
        Da ein Array eine Sammlung von Elementen ist wird, als Name des Arrays, oft die Mehrzahl von Etwas genommen. Beispiel: Franzi ist ein user und befindet sich im array mit dem Namen "users"
      </div>
      <pre>
        <code>
          const users = ["Sockenrocker83", "Nobody01", "Franzi", "Heardbreaker"]<br />
        </code>
      </pre>
      <p>
        Ein Array sollte übrigens immer als const Variable erstellt werden und dafür gibt es gute gründe. In einem Array sind wichtige Daten, die man nicht ausversehen überschreiben möchte und ein weiterer gute Punkt ist die Weiterverarbeitung. Bei der Weiterverarbeitung mit Methoden, in Loops oder beim Rechnen könnten Fehler passieren und dabei passiert es manchmal, dass man plötzlich kein Array sondern einen String hat. Die Konsole zeigt hierbei keinen Fehler an und die Ausgabe im Terminal sieht der erwarteten Ausgabe sehr ähnlich. Solche Fehler zu finden ist manchmal recht Tricky.
      </p>

      {/* ------------- METHODS ------------- */}
      <h3 className="font-extrabold text-2xl my-5">Array Methods Grundlagen</h3>
      <pre className="code">
        <code>
          const users = ["Sockenrocker83", "Nobody01", "Franzi", "Heardbreaker"]<br />
        </code>
      </pre>
      <p>
        Unter dem Begriff Methods versteht man eine Funktion, die auf etwas angewendet werden kann. Die Anwendung wird eingeleitet durch <span className="code">.methodName</span>
      </p>
      <div className="my-8">
        <ul className="flex flex-wrap">
          {arrayMethods.map((method, i) => (
            <>
              <li className="w-2/5 py-2 font-bold">{method.command}</li>
              <li className="w-2/5 py-2">{method.description}</li>
              <li className="w-1/5 py-2 text-center">
              <a href={method.url} target="_blank" rel="noopener noreferrer">{method.urlName}</a>
              </li>
            </>
          ))}
        </ul>
        <p>
          Neben den oben erklärten array Methoden gibt es noch viele viele mehr. Allerdings sind die oben erklärten, die die wirklich noch verwendet werden, außer in Sonderfällen.
        </p>
      </div>
      {/* ------------- IMAGE ------------- */}
      <div className="imgContainer" >
        {isWatched ? (
          <img  className="imgHover" onClick={() => setIsWatched(!isWatched)}  src="./images/array.png" alt="" />
        ) : (
          <img  className="imgNormal" onClick={() => setIsWatched(!isWatched)}  src="./images/array.png" alt="" />
        )}
      </div>
      <div>
        <h3>Slice und Splice</h3>
        <p>
          Die slice Methode wird verwendet um eine Teilkopie als neues Array auszugeben. Hierbei kann man folgendes Angeben:
        </p>
        <ul>
          <li>Startwert - Endwert</li>
          <li>Startwert</li>
        </ul>
          
         <p className="code">
          const arrayToSlice = [1, 2, 3, 4, 5]<br />
          const startNegativ = arrayToSlice.slice(-3)<br />
          const completeArray = arrayToSlice.slice()<br /><br />

          // const example = arrayToSlice.slice(STARTINDEX, ENDINDEX);<br /><br />
          const StartindexToEndOfArray = arrayToSlice.slice(2);<br />
          const StartindexToEndindex = arrayToSlice.slice(1, 4);<br />
          const StartindexRichtToEndOfArray = arrayToSlice.slice(-2);<br /><br />
          constole.log(
            `
            Eine Kopie des gesamten Arrays um dieses Weiter zu verarbeiten ohne das Originale zu Verändern: &#36;&#123;completeArray&#125;
            Array vom Startindex bis zum Ende: &#36;&#123;StartindexToEndOfArray&#125;
            Ein festgelegter Bereich: &#36;&#123;StartindexToEndindex&#125;
            Es werden immer die Letzten 2 Arrayeinträge ausgegeben: &#36;&#123;StartindexRichtToEndOfArray&#125;
            `)
         </p>
      </div>

      {/* ------------- LINKS ------------- */}
      <div className="flex flex-wrap gap-5 text-xl pb-10">
        <a href="https://www.mediaevent.de/javascript/array.html" target="_blank" >Array (Infos 1)</a>
        <a href="https://www.programiz.com/javascript/array" target="_blank" >Array (Infos 2)</a>
        <a href="https://www.youtube.com/watch?v=7W4pQQ20nJg" target="_blank" >Array (Video)</a>
        <a href="https://www.youtube.com/watch?v=SXb5LN_opbA&list=PLgBH1CvjOA62PBFIDq55-S6Beivje30A2" target="_blank" >Array Methods (Video)</a>
      </div>
    </article>
  )
}