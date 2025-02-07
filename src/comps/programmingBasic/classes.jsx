export const Classes = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl my-5">Was sind Klassen?</h2>
      <p>
        In JavaScript sind Klassen eine Möglichkeit, Objekte zu erstellen und
        sie zu organisieren. Es gibt sie seit der Einführung von ES6. Eine
        Klasse ist im Grunde genommen ein Bauplan für Objekte. Sie sind ein
        wichtiger Bestandteil der modernen JavaScript-Entwicklung und bieten
        eine bessere Möglichkeit zur Organisation und Erstellung von Objekten
        und deren Verhalten.
      </p>
      <h3 className="font-extrabold text-xl my-5">
        Klassen wichtig oder nicht?
      </h3>
      <p>
        Mit der Verwendung von Klassen bewegen wir uns im Bereich OOP. Ob du nun
        den OOP oder Function Programming verwendest hängt nicht alleine von
        deiner Vorliebe sonderen ebenso von äußeren Faktoren ab. So gibt es
        neben deinen Vorlieben im Team auch andere Entwickler, Firmenpolitik,
        Projekt bezogene Vor- und Nachteile und Framework einschränkungen, die
        darüber entscheiden ob du FP oder OOP verwendest.
      </p>
      <h3 className="font-extrabold text-xl my-5">
        JavaScript-Frameworks, die Klassen verwenden
      </h3>
      <p className="w-1/4 text-lg pb-0">
        <strong>REACT</strong>
      </p>
      <p className="w-3/4">
        Die Verwendung von Klassen oder Funktionen ist möglich React ist ein
        Frontend-Framework, das Komponenten als Klassen oder Funktionen
        erstellen kann. Seit React 16.8 hat React Hooks eingeführt, die die
        Verwendung von Funktionen für die Komponentenerstellung fördern.
        Trotzdem können immer noch Klassenkomponenten verwendet werden.
      </p>
      <p className="w-1/4 text-lg pb-0">
        <strong>Vue.js</strong>
      </p>
      <p className="w-3/4">
        Ermöglicht die Erstellung von Komponenten sowohl mit Klassen als auch
        mit Objekten, die Eigenschaften und Methoden enthalten. Es besteht die
        Wahl zwischen verschiedenen Ansätzen, je nach Vorlieben.
      </p>
      <p className="w-1/4 text-lg pb-0">
        <strong>Angular</strong>
      </p>
      <p className="w-3/4">
        Verwendet Klassen für die Definition von Komponenten und Services. Das
        Framework basiert auf einem komponentenbasierten Ansatz und verwendet
        TypeScript, um Klassen zu definieren.
      </p>
      <p></p>
      <h3 className="font-extrabold text-xl my-5">
        JavaScript-Framework, die keine Klassen verwenden
      </h3>
      <p className="w-1/4 text-lg pb-0">
        <strong>Express</strong>
      </p>
      <p className="w-3/4">
        Express.js ist ein Backend-Framework für Node.js, das auf Funktionen und
        Middleware setzt, um Routen und Endpunkte zu definieren. Es verwendet
        keine Klassen für die Hauptkomponenten.
      </p>
      <h3 className="font-extrabold text-xl my-5">Vorteile von Klassen</h3>
      <ul>
        <li>
          Klare und strukturierte Möglichkeit, Objekte zu erstellen und zu
          organisieren.
        </li>
        <li>
          Klassen ermöglichen die Vererbung, was es erleichtert, Eigenschaften
          und Methoden von einer Klasse zu einer anderen zu übertragen und den
          Code wiederzuverwenden.
        </li>
        <li>
          Der Konstruktor einer Klasse definiert, wie Objekte initialisiert
          werden, was die Standardisierung der Objekterstellung erleichtert.
        </li>
        <li>
          Klassen können Methoden enthalten, die das Verhalten der Objekte
          definieren, was die Funktionalität klarer strukturiert.
        </li>
        <li>
          Es ist nicht möglich, Methoden zu überladen, wie es in einigen anderen
          objektorientierten Programmiersprachen möglich ist. Dies kann zu
          weniger flexiblen Lösungen führen.
        </li>
        <li>
          Klassen unterstützen den Zugriff auf Eigenschaften und Methoden mit
          verschiedenen Sichtbarkeitsmodifikatoren wie public, private und
          protected. (Zugriffskontrolle)
        </li>
      </ul>
      <p>
        Es ist wichtig zu beachten, dass Klassen in JavaScript eine Option sind,
        aber nicht die einzige Möglichkeit zur objektorientierten
        Programmierung. Es gibt immer noch andere Ansätze wie die Verwendung von
        Funktionen und Prototypen. Die Wahl zwischen diesen Ansätzen hängt von
        den Anforderungen des Projektes, dem gewählten Framwork und den
        persönlichen Vorlieben ab.
      </p>
      <h3 className="font-extrabold text-xl my-5">
        Was ist der "Constructor"?
      </h3>
      <p>
        Ein Konstruktor ist eine spezielle Methode in einer Klasse, die
        automatisch aufgerufen wird, wenn ein neues Objekt aus dieser Klasse
        erstellt wird. Der Zweck eines Konstruktors besteht darin, die
        anfänglichen Eigenschaften und Zustände des Objekts festzulegen.
      </p>
      <p>
        Der Konstruktor ist eine nützliche Möglichkeit, um sicherzustellen, dass
        Objekte einer Klasse mit den erforderlichen Informationen initialisiert
        werden, und um eine konsistente Struktur für Objekte innerhalb Ihrer
        Anwendung zu schaffen.
      </p>
      <h3 className="font-extrabold text-xl my-5">Constructor-Code Beispiel</h3>
      <pre className="text-sm">
        <code>
          class Person &#123;
          <br />
          &#9;constructor (name, age) &#123;
          <br />
          &#9;&#9;this.name = name;
          <br />
          &#9;&#9;this.age = age;
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          <br />
          // Erzeugt ein neues Objekt mit folgenden Values
          <br />
          const person1 = new Person("Max", 30);
          <br />
          console.log(person1.name); // Gibt "Max" aus
          <br />
          console.log(person1.age); // Gibt 30 aus
          <br />
        </code>
      </pre>
      <h3 className="font-extrabold text-xl my-5">Methoden in Klassen</h3>
      <p>
        Da eine Klasse der Blueprint/Bauplan von Objekten ist, liegt es nahe,
        dass wir in Klassen ebenfalls Methoden aufbauen können, die später an
        die erstellen Objekte vererbt werden. Hierbei werden die Methoden
        einfach als Funktion innerhalb der Klasse Definiert.
      </p>
      <pre className="text-sm">
        <code>
          class Heros &#123;
          <br />
          &#9;constructor(name)&#123;
          <br />
          &#9;&#9;this.name = name
          <br />
          &#9;&#125;
          <br />
          &#9;// Wert aus Daten abgeleitet
          <br />
          &#9;greet()&#123;
          <br />
          &#9;&#9;console.log(`Hey ich bin $&#123;this.name&#125;.`)
          <br />
          &#9;&#125;
          <br />
          &#9;// Wert aus Parameter
          <br />
          &#9;favFood(food)&#123;
          <br />
          &#9;&#9;console.log(`Mein liebings Essen ist $&#123;food&#125;.`)
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          <br />
          let player1 = new Heros("Bernhard Bleifuß")
          <br />
          player1.greet()
          <br />
          player2.favFood("Pizza")
          <br />
        </code>
      </pre>

      {/*  
            ## 6. Übung: Erstelle eine class Auto

            1. Erstelle eine class mit den Werten Hersteller, Modell, Type, NettoPreis,
            2. Erstelle eine Methode, die den Titel aus dem Hersteller, Modell und Type erstellen
            3. Erstelle eine Mathode, die den BruttoPreis ausrechnet (19% MwSt)
            4. Erstelle ein zweites Fahrzeug
        */}
    </article>
  );
};
