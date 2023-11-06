import { highlights } from "../../../App";

export const CreateBrowserRoouter = () => {
  return (
    <>
      <h3 className='font-extrabold text-lg pb-3'>
        <span className={highlights.file}>
          App.jsx/Main.jsx (Vite) oder App.js (react-app)
        </span>
      </h3>
      <p>
        Da gewohnheitsmäßig die Routes innerhalb der app.jsx Datei aufgebaut
        wurden, ist es naheliegend dies auch weiterhin zu tun. Alternativ lässt
        sich nun der Router auch in der main.jsx erstellen. Es ist dem
        Entwickler oder dem Entwickler-Team überlassen.
      </p>
      <p>
        Mit der Version 6 wurde die Funktion{" "}
        <span className={highlights.code}>createBrowserRouter()</span>{" "}
        eingeführt. Dies ist das Herzstück des Routers. Innerhalb eines Array of
        Objects werden die Routes angegeben, wobei alle benötigten Daten als
        Key-Value-Pair übergeben werden. Alte bekannte aus Version 5 sind
        hierbei <span className={highlights.code}>path</span> und{" "}
        <span className={highlights.code}>element</span>. neu hingegen ist der
        sogenannte loader, index und einige mehr.
      </p>
      <pre className='text-sm'>
        <code>
          const router = createBrowserRouter([
          <br />
          &#9;&#123;
          <br />
          &#9;&#9;path: "/",
          <br />
          &#9;&#9;element: &lt;App /&gt;,
          <br />
          &#9;&#9;children: [<br />
          &#9;&#9;&#9;&#123;
          <br />
          &#9;&#9;&#9;&#9;index: true,
          <br />
          &#9;&#9;&#9;&#9;element: &lt;Landingpage /&gt;
          <br />
          &#9;&#9;&#9;&#125;,
          <br />
          &#9;&#9;&#9;&#123;
          <br />
          <br />
          &#9;&#9;&#9;&#9;path: "/about",
          <br />
          &#9;&#9;&#9;&#9;element: &lt;About /&gt;
          <br />
          &#9;&#9;&#9;&#125;,
          <br />
          &#9;&#9;&#9;&#123;
          <br />
          &#9;&#9;&#9;&#9;path: "/contact",
          <br />
          &#9;&#9;&#9;&#9;element: &lt;Contct /&gt;
          <br />
          &#9;&#9;&#9;&#125;,
          <br />
          &#9;&#9;]
          <br />
          &#9;&#125;,
          <br />
          ]);
        </code>
      </pre>
      <p>
        Bei genauerer Betrachtung ist die Struktur des Routers relativ
        selbsterklärend. Wir starten wie im typischen Router mit der Main-Route
        ("/"). Wie im alten Router ist auch hier die App die Haupt-Route, unser
        sogenanntes Layout. Innerhalb der App wird geregelt Was, wie und wo die
        unterschiedlichen Bauteile verwendet werden. Während die Children
        hierbei die einzelenen Components wiederspiegeln, die über die
        navigation aufrufbar sind.
      </p>
      <p>
        In der Regel wird die erste Component mit dem Key{" "}
        <span className={highlights.code}>index: true</span> gekennzeichnet.
        Dieses ist die Component, die beim Laden der Webseite sofort angezeigt
        werden soll. Wichtig hierbei ist, dass eine mit index: ture
        gekennzeichnete Main-Components keine weiteren Children haben darf und
        keinen path benötigt, da sich dieser auf die Main-Route bezieht. Die
        Children kann man auch als Outlets bezeichnen, da sie mit dem &lt;Outlet
        /&gt; Tag geladen werden. Dieser wird innerhalb der App definiert.
      </p>
      <pre className='text-sm'>
        <code>
          function App() &#123;
          <br />
          &#9;return (<br />
          &#9;&#9;&lt;&gt;
          <br />
          &#9;&#9;&#9;&lt;Navi /&gt;
          <br />
          &#9;&#9;&#9;&lt;Outlet /&gt;
          <br />
          &#9;&#9;&#9;&lt;Footer /&gt;
          <br />
          &#9;&#9;&lt;/&gt;
          <br />
          &#9;);
          <br />
          &#125;
        </code>
      </pre>
      <p>
        Das Outlet ist ein Platzhalter für die jeweilige Component, die geladen
        werden soll. Anders als das Outlet, worüber immer neuer Content auf den
        unterschiedlichen Routes geladen wird, werden die Navi und der Footer
        statisch auf jeder Route angezeigt. Dieser Aufbau ist des selbe Aufbau
        wie in Version 5. Auch dort wird die Navi und der Footer außerhalb des
        &lt; Routes &gt; Containers geladen und sind dadurch Route unabhänig.
      </p>
    </>
  );
};
