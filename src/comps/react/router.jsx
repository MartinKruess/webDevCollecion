import { RouterTagApp } from "./assets/routerTagApp";
import { RouterTagNavi } from "./assets/routerTagNavi";
import { RouterTagMain } from "./assets/routerTagsMain";

export const Router = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl">
        Router Version 5-6 - react-router-dom
      </h2>
      <pre>
        <code>npm i react-router-dom</code>
      </pre>
      <p>
        Der react-router ist ein extra Package, dass vor der Benutzung
        installiert werden muss.Diese Libary verwendet sogenannte Routes. Wobei
        eine Route eine übergeordnete Komponente darstellt wie zum Beispiel
        Home, About oder Contact. Mit Hilfe dieser Routes ist es möglich
        innerhalb einer React-Anwendung zu Navigieren. Wichtig hierfür ist, dass
        der Router auf insgesamt zwei bist drei Dateien aufgeteilt wird.
      </p>
      <RouterTagApp />
      <RouterTagMain />
      <RouterTagNavi />
    </article>
  );
};
