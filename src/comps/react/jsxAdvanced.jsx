export const JSXAdvanced = () => {
  return (
    <article>
      <h3 className='font-extrabold text-xl'>React Behind the Scenes</h3>
      <p>
        React verwendet JSX (Javascript XML, JavaScript Syntax Extension), um
        Benutzeroberflächenelemente in JavaScript-Code einzufügen. JSX
        ermöglicht eine deklarative Beschreibung von
        Benutzeroberflächenkomponenten und erleichtert das Lesen und Schreiben
        von React-Code. Unter der Haube wird JSX von Babel übersetzt.
      </p>
      <pre>
        <code>
          // JSX Syntax
          <br />
          const JSXComponent = () =&gt; &#123;
          <br />
          &#9;&lt;div&gt;
          <br /> &#9;&#9;&lt;div&gt;Hello World!&lt;/div&gt;
          <br />
          &#9;&#9;&lt;div&gt;Hallo Welt!&lt;/div&gt;
          <br /> &#9;&lt;/div&gt;
          <br />
          &#125;
          <br />
          export default JSXComponent
        </code>
      </pre>
      <h4>
        <strong>Classic Version</strong>
      </h4>
      <pre className='text-sm'>
        <code>
          import React from 'react';
          <br />
          // React-Komponente mit JSX in der Classic-Version
          <br />
          const ClassicComponent = () =&gt; &#123;
          <br />
          &#9;/*#__PURE__*/React.createElement("div", null,
          <br />
          &#9;&#9;/*#__PURE__*/React.createElement("div", null, "Hello World!"),
          <br />
          &#9;&#9;/*#__PURE__*/React.createElement("div", null, "Hallo Welt!"));
          <br />
          &#125;
          <br />
          export default ClassicComponent;
        </code>
      </pre>
      <p>
        In der "Classic"-Version von React wird das React-Modul importiert und
        erstellt eine Klasse, die von React.Component erbt. Die JSX-Syntax wird
        direkt in der render-Methode der Komponente verwendet.
      </p>
      <h4>
        <strong>JSX-Runtime Version</strong>
      </h4>
      <pre className='text-sm'>
        <code>
          import &#123; jsx as _jsx &#125; from 'react/jsx-runtime';
          <br />
          import &#123; jsxs as _jsxs &#125; from 'react/jsx-runtime';
          <br />
          // React-Komponente mit JSX in der jsx-runtime-Version
          <br />
          const JsxRuntimeComponent = () =&gt; &#123;
          <br />
          const App = () =&lt; &#123;
          <br />
          &#9;return /*#__PURE__*/_jsxs("div", &#123;
          <br />
          &#9;&#9;children: [
          <br />
          &#9;&#9;&#9;/*#__PURE__*/_jsx("p", &#123; children: "Hello
          World!"&#125;),
          <br />
          &#9;&#9;&#9;/*#__PURE__*/_jsx("p", &#125; children: "Hallo
          Welt!"&#125;)
          <br />
          &#9;&#9;]
          <br />
          &#9;&#125;);
          <br />
          &#125;;
          <br />
          <br />
          export default JsxRuntimeComponent;
        </code>
      </pre>
      <p>
        In der "jsx-runtime"-Version wird die jsx-Funktion aus dem
        react/jsx-runtime-Modul verwendet, um JSX in JavaScript umzuwandeln. Zu
        beachten ist hierbei, wie das children-Attribut verwendet wird, um die
        Elemente zu definieren, die im &lt;div&gt;-Element enthalten sind. Dies
        ist eine häufige Praxis bei Verwendung der "jsx-runtime"-Variante.
      </p>
      <p>
        Der gezeigte Code verwendet die "jsx-runtime"-Version von React, während
        die "Classic"-Version die vorherige Art und Weise ist, wie JSX in React
        verwendet wurde. Der Hauptunterschied zwischen den beiden besteht in der
        Art und Weise, wie JSX in JavaScript-Code umgewandelt wird und wie die
        React-Elemente erstellt werden.
      </p>
      <ul className='grid grid-cols-12 gap-3'>
        <li className='row-start-1 row-end-3 col-span-3 text-lg'>
          <strong>JSX-Umwandlung</strong>
        </li>
        <li className='row-start-1 row-end-2 col-span-9'>
          Im "Classic"-Ansatz verwendet man in der Regel Babel mit dem
          "@babel/preset-react"-Plugin, um JSX in JavaScript-Code umzuwandeln.
          Dies führt oft zur Verwendung von "React.createElement" und
          "React.Fragment" für die Erstellung von React-Elementen.
        </li>
        <li className='row-start-2 row-end-3 col-span-9'>
          Im "jsx-runtime"-Ansatz wird die "jsx"-Funktion aus dem
          "react/jsx-runtime"-Modul verwendet, um JSX-Elemente in
          JavaScript-Code umzuwandeln. Dies ermöglicht eine kürzere und
          lesbarere Syntax und eliminiert die Notwendigkeit,
          "React.createElement" explizit zu verwenden.
        </li>
        <li className='row-start-3 row-end-5 col-span-3 text-lg'>
          <strong>Schlüsselwort</strong>
        </li>
        <li className='row-start-3 row-end-4 col-span-9'>
          Im "Classic"-Ansatz werden React-Elemente normalerweise mit einem
          "children"-Prop erstellt, um die darin enthaltenen JSX-Elemente zu
          definieren.
        </li>
        <li className='row-start-4 row-end-5 col-span-9'>
          Im "jsx-runtime"-Ansatz wird das "children"-Prop häufig durch die
          geschachtelte Struktur des JSX-Codes implizit festgelegt.
        </li>
        <li className='row-start-5 row-end-7 col-span-3 text-lg'>
          <strong>Imports</strong>
        </li>
        <li className='row-start-5 row-end-6 col-span-9'>
          Im "Classic"-Ansatz müssen Sie "React" normalerweise explizit
          importieren, wenn Sie JSX verwenden.
        </li>
        <li className='row-start-6 row-end-7 col-span-9'>
          m "jsx-runtime"-Ansatz importieren Sie stattdessen die "jsx"-Funktion
          aus dem "react/jsx-runtime"-Modul.
        </li>
      </ul>
      <div className='linkContainer'>
        <a
          href='https://babeljs.io/repl'
          target='_blank'
          rel='noopener noreferrer'
        >
          Babel - Next Generation JS Compiler
        </a>
      </div>
    </article>
  );
};
