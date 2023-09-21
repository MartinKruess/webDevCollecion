export const DOMText = () => {
  return (
    <article>
      <h1 className='font-extrabold text-2xl'>
        Singlepage Application - Javascript im Browser
      </h1>
      <p>
        In diesem Modul geht es darum, dass wir die bereitsgelernten Module
        (HTML, CSS und JS) zu einer funktionsfähigen Webseite kombinieren. Wie
        wir bereits gelernt haben, bauen wir die Grundstruktur einer Webseite
        durch HTML auf. Diese Struktur lässt sich durch CSS optisch
        manipulieren. Durch die Anwendung von JS sind wir nun in der Lage durch
        die Strukturierung und Manipulation von Daten simple und komplexe
        logische Funktionen aufzubauen.
      </p>
      <p>
        Was uns nun noch fehlt ist eine Schnittstelle um das Design mit der
        Logik zu verbinden. Genau um dieses Thema wird es in diesem Modul gehen.
        Wir verwenden dafür das sogenannte DOM.
      </p>
      <h2 className='font-extrabold text-xl'>Was ist das DOM?</h2>
      <p>
        Das DOM (Document Object Model) ist die Schnittstelle zwischen HTML und
        dynamischem JavaScript. Alle Elemente werden zu Objekten, die dynamisch
        aufgerufen, verändert, hinzugefügt und gelöscht werden können.
      </p>
      <p>
        Das DOM besteht also aus der HTML-Grundstruktur (Baumstruktur), in dem
        jedes Element als ein einzelnes Objekt angesprochen wird. Wir können
        diese Elemente zum Beispiel mit dem querrySelector selektieren und mit
        ihnen Arbeiten. Das ist die Art und Weise wie wir das DOM mit JS
        manipulieren können.
      </p>
    </article>
  );
};
