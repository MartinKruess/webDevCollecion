import { useEffect, useState } from "react"

export const Array = () => {
  const [isWatched, setIsWatched] = useState(false)

  useEffect(() => {}, [isWatched])

  return (
    <article>
      <h2 className="font-extrabold text-3xl my-5">Array</h2>
      <p className="my-4">
        Ein Array kann man als eine Art Daten-Container verstehen, der einzelne Elemente in einem Cluster zusammenfasst. Der grundaufbau eines Arrays wird wie folgt aufgebaut
        <p className="code">
          const arrayName(s) = [ ]
        </p>
        Da ein Array eine Sammlung von Elementen ist wird, als Name des Arrays, oft die Mehrzahl von Etwas genommen. Beispiel: Franzi ist ein user und befindet sich im array mit dem Namen "users"
      </p>
      <pre>
        <code>
          const users = ["Sockenrocker83", "Nobody01", "Franzi", "Heardbreaker"]<br />
        </code>
      </pre>
      <div className="imgContainer" >
        {isWatched ? (
          <img  className="imgHover" onClick={() => setIsWatched(!isWatched)}  src="./images/array.png" alt="" />
        ) : (
          <img  className="imgNormal" onClick={() => setIsWatched(!isWatched)}  src="./images/array.png" alt="" />
        )}
      </div>      
      <h3 className="font-extrabold text-2xl my-5">Array Methods Grundlagen</h3>
      <pre className="code">
        <code>
          const users = ["Sockenrocker83", "Nobody01", "Franzi", "Heardbreaker"]<br />
        </code>
      </pre>

      <a href="https://www.w3schools.com/jsref/jsref_splice.asp">Splice</a>
    </article>
  )
}