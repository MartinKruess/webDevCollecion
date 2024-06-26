import { useEffect, useMemo, useState } from 'react';

export const Sort = () => {
  const [sorted, setSorted] = useState(false);

  // Array with 100 random numbers
  const arrOfNums = [
    92, 4, 44, 42, 76, 72, 51, 3, 61, 29, 64, 80, 71, 84, 10, 80, 24, 15, 14, 4,
    0, 89, 73, 18, 40, 35, 83, 84, 29, 77, 80, 92, 76, 97, 6, 92, 30, 75, 96,
    23, 54, 56, 6, 29, 88, 35, 57, 37, 84, 2, 76, 61, 38, 18, 91, 24, 79, 87,
    53, 1, 9, 63, 75, 23, 99, 90, 93, 78, 9, 25, 75, 48, 48, 92, 74, 74, 31, 7,
    75, 20, 15, 71, 59, 71, 90, 3, 8, 54, 21, 84, 64, 46, 10, 59, 71, 12, 89,
    80, 58, 74,
  ];

  const newArrOfNums = useMemo(() => {
    const sortedArray = [...arrOfNums];
    selectionSort(sortedArray);
    return sortedArray;
  }, [arrOfNums]);

  function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      if (i != min) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  }

  return (
    <article className='flex flex-wrap justify-center'>
      <h2 className='text-2xl font-bold text-center'>
        Sortieren von Zahlen in einem Array
      </h2>
      <pre>
        <p>Das Ausgangsarray mit 200 Random generierten Zahlen</p>
        <code>[{arrOfNums.join(', ')}]</code>
      </pre>
      <button
        className='py-2 px-3 bg-slate-400 my-8 text-slate-800'
        onClick={() => setSorted(!sorted)}
      >
        Sortieren
      </button>
      <pre>
        <p>Ausgabe des sortieren Arrays</p>
        <code>[{(sorted ? newArrOfNums : arrOfNums).join(', ')}]</code>
      </pre>
      <h3 className='text-xl font-bold'>
        Warum gibt es verschiedene Algorythmen zum sortieren von Daten?
      </h3>
      <p>
        Es gibt verschiedene Algorythmen zum sortieren von Daten, da es beim
        sortieren von Daten unterschiedliche Ansprüche gibt. So kann ein
        Algorythmus für geringe Datenmengen sehr effizient sein, jedoch bei
        großen Datenmengen sehr langsam. Ebenso gibt es Algorythmen, die bei
        großen unsortierten Datenmengen sehr effizient sind, jedoch bei kleinen
        sortierten länger brauchen als andere. Ein weiterer Punkt können die
        Kosten sein. Ein Algorythmus kann sehr effizient, aber auch sehr teuer
        in der Umsetzung sein. Das bedeutet, dass bei der Ausführung mehr
        Speicher benötigt wird als bei anderen Algorythmen. Daher müssen wir bei
        der Auswahl des Algorythmus immer die Anforderungen, Datenmenge und
        äußeren Behebenheiten berücksichtigen.
      </p>
      <h3 className='text-lg font-bold'>Hier verwendetes Code Beispiel</h3>
      <pre className='text-sm'>
        <code>
          11. for (let i = 0; i &lt; arr.length; i++) &#123;
          <br />
          12. &#9;let min = i;
          <br />
          13. &#9;for (let j = i + 1; j &lt; arr.length; j++) &#123;
          <br />
          14. &#9;&#9;if (arr[min] &gt; arr[j]) &#123;
          <br />
          15. &#9;&#9;&#9;min = j;
          <br />
          16. &#9;&#9;&#125;
          <br />
          17. &#9;&#125;
          <br />
          18. &#9;if (i != min) &#123;
          <br />
          19. &#9;&#9;[arr[i], arr[min]] = [arr[min], arr[i]];
          <br />
          20. &#9;&#125;
          <br />
          21. &#125;
        </code>
      </pre>
      <p>
        Die Besonderheit an diesem Beispiel ist, dass der Algorythmus nur zwei
        Loops hat. Der erste Loop geht durch das Array und der zweite Loop
        vergleicht die Werte. Wenn der Wert des aktuellen Indexes größer ist als
      </p>
    </article>
  );
};
