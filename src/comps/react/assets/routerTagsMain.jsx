import { highlights } from "../../../App";

export const RouterTagMain = () => {
  return (
    <>
      <h3 className='font-extrabold text-lg'>
        <span className={highlights.file}>
          main.jsx (Vite) oder index.js (react-app)
        </span>
      </h3>
      <p>
        In der main.jsx (Vite) oder der index.js (react-app) verwenden wir den
        sogenannten BrowserRouter. Dieser wird vom App gewrappt und hat dadurch
        auf die gesammten Webseite inkl. Subpages Zugriff. In diesem Beispiel
        benennen wird den BrowserRouter der Einfachheit halber in Router um. Ab
        jetzt haben wir bereits die Möglichkeit die URL manuell anzupassen.
      </p>
      <pre>
        <code>
          import React from 'react'
          <br />
          import ReactDOM from 'react-dom/client'
          <br />
          import App from './App'
          <br />
          import './index.css'
          <br />
          import &#123;{" "}
          <span className={highlights.code}>BrowserRouter as Router</span>{" "}
          &#125; from 'react-router-dom'
          <br />
          <br />
          ReactDOM.createRoot(document.getElementById('root')).render(
          <br />
          &lt;Router&gt;
          <br />
          &#9;&lt;App /&gt;
          <br />
          &lt;/Router&gt;
          <br />)
        </code>
      </pre>
    </>
  );
};
