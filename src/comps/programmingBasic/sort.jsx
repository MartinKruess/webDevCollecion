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
      <pre className='text-sm'>
        <code>
          for (let i = 0; i &lt; arr.length; i++) &#123;
          <br />
          &#9;let min = i;
          <br />
          &#9;for (let j = i + 1; j &lt; arr.length; j++) &#123;
          <br />
          &#9;&#9;if (arr[min] &gt; arr[j]) &#123;
          <br />
          &#9;&#9;&#9;min = j;
          <br />
          &#9;&#9;&#125;
          <br />
          &#9;&#125;
          <br />
          &#9;if (i != min) &#123;
          <br />
          &#9;&#9;[arr[i], arr[min]] = [arr[min], arr[i]];
          <br />
          &#9;&#125;
          <br />
          &#125;
        </code>
      </pre>
    </article>
  );
};
