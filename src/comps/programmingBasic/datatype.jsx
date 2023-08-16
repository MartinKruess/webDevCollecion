import { highlights } from "../../App";

export const Datentypen = () => {
    return(
        <article className="p-4">
            <h2 className="font-extrabold text-2xl">
                Die unterschiedlichen Datentypen in JS
            </h2>
            <p>
                Bei der Deklaration und Definition von Variablen wurden bereits verschiedene Daten­typen vorgestellt, ebenso wie mit typeof der Typ des Wertes einer Variable ermittelt werden kann. Im Gegensatz zu einer Programmiersprache wie C, geht JavaScript recht locker mit den unterschiedlichen Datentypen um. So erfolgt die Zuweisung eines Datentyps bei der Initialisierung einer Variablen automatisch bzw. wird durch die Syntax vorgeben. Weiterhin kann der Datentyp des Wertes einer Variablen relativ leicht verändert werden, insofern es die Abarbeitung eines Scripts oder die Programmausführung verlangt.
            </p>
            <p>
                Je nach Einteilung wird zwischen primitiven Datentypen und referenzierten Daten­typen unterschieden, wobei sich die Einteilungen etwas unterscheiden. So erfolgt im MSDN (Microsoft Developer Network) zum Beispiel eine Unterteilung der primitiven Datentypen in primäre und spezielle Datentypen, wobei zu letzten die Datentypen Null und Undefined gerechnet werden.
            </p>
            <h3 className="font-extrabold text-xl">Primitive Datentypen</h3>
            <p>
                In javascript unterschiedet man bei Datentypen zwischen den primitiven und den referenzierten Datentypen.
            </p>
            <h2 className="font-extrabold text-2xl">Pointer</h2>
            <p>
                Zu den primitiven Datentypen gehören string, number, boolean, null und undefined.
            </p>
            <div className="imgContainer border">
                <img
                    className="imgHeight"
                    onClick={() => setIsWatched("variable")}
                    src="./images/variablePointer.png"
                    alt="Image about if and nested if´s"
                />
            </div>
            <div className="heightContainer border">
                <img
                    className="imgHeight"
                    onClick={() => setIsWatched("object")}
                    src="./images/objectPointer.png"
                    alt="Image about if and nested if´s"
                />
            </div>
            <div className="imgContainer border">
                <img
                    className="imgHeight"
                    onClick={() => setIsWatched("copy")}
                    src="./images/objectCopyPointer.png"
                    alt="Image about if and nested if´s"
                />
            </div>
        </article>
    )
}