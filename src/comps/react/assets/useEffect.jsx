import { highlights } from "../../../App"

export const UseEffect = () => {
    return (
        <div>
            <h3 className='font-extrabold text-xl'>Die Verwaltung von useState mit useEffect</h3>
            <p>
                Wir wissen nun also wie man mit einer Simplen Interaktion eines Users umgeht. Jedoch gibt es immer wieder Situationen in denen man nicht möchte, dass nach jeder Änderung des States die Component sofort neu gerendert wird.
            </p>
            <p>
                UseEffect ist ebenfall ein sehr wichtiger React-Hook, der in der Lage ist mit Nebeneffekten zu interargieren. Mit useEffect lässt sich Code ausführen, der nicht direkt mit dem Rendern der Komponente zusammenhängt. Dies kann zum Beispiel das Laden von Daten von einer API, das Ändern eines States, ausführen einer Funktion und vieles mehr sein.
            </p>
            <p>
                Die Grundlegende Syntax eines useEffects ist erstmal nichts neues. Ein useEffect ist erstmal ein ganz normaler callback und dependencies []. Wenn dependencies [state1, state2] vorhanden sind und sich einer der Werte in diesem Array ändert, wird der useEffect erneut ausgeführt.
            </p>
            <pre>
                <code>
                    // Dieser useEffect wird einmal beim ersten Rendern ausgeführt, dies liegt an den fehlenden dependencies<br />
                    useEffect(() =&gt; &#123;<br />
                    // Do something...<br />
                    &#125;, [] // &lt;- ohne dependencies)
                </code>
            </pre>
            <p>
                Wie useState, so muss auch der useEffect von react importiert werden.
            </p>
            <pre>
               <code>
                   // 1. Importiere useEffect von React<br />
                   import &#123; <span className={highlights.errorCode}>useEffect</span>, useState &#125; from 'react'<br /><br />
               </code>
            </pre>
            <p>
                
            </p>
        </div>
    )
}