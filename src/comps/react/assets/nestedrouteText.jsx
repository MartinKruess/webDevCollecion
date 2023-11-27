import { highlights } from "../../../App";

export const NestedRouteText = () => {
  return (
    <>
      <h2 className='font-extrabold text-xl'>Nesting Routes</h2>

      <p>
        Das Routing allgemein arbeitet nach dem Prinzip, dass es statische
        Elemente wie eine Navigation gibt und das sogenannte Outlet. Das Outlet
        ist ein Platzhalter für die jeweiligen Components, die über die
        Navigation geladen werden können. Durch diese Vorgehensweise wirkt es
        so, als würde unsere WebApplication aus mehreren Seiten bestehen, wobei
        wir uns immernoch auf einer Singlepage Application befinden.
      </p>
      <p>
        Eben diesen Effekt macht sich auch das nested Routing zu Nutze. Unter
        dem Begriff nested Routing versteht man ineinander verschachtelte
        Routes. Das bedeutet eine Route (eine Component) beinhaltet weiter
        Routes (children). Ein wohl bekanntes Beispiel hierfür sind folgende
        Pfade
      </p>
      <ul className='mb-5'>
        <li>
          Wie gewohnt hat die Main-Route
          <span className={highlights.code}> "/"</span> childrens wie
          beispielweise "/shop" oder "/login"
        </li>
        <li>
          https://myshop.de<span className={highlights.code}>/shop</span>
        </li>
        <li>
          https://myshop.de<span className={highlights.code}>/login</span>
        </li>
        <li>
          Nach dem Login landet der User auf der NestedRoute
          <span className={highlights.code}> "/auth</span>
          <span className={highlights.errorCode}>/user"</span> wobei die Route
          <span className={highlights.code}> "/auth/"</span> weitere unterpunkte
          wie z.B. <span className={highlights.errorCode}>"/orders/"</span>
          beinhaltet
        </li>
        <li>
          https://myshop.de<span className={highlights.code}>/auth</span>
          <span className={highlights.errorCode}>/user</span>
        </li>
        <li>
          https://myshop.de<span className={highlights.code}>/auth</span>
          <span className={highlights.errorCode}>/orders"</span>
        </li>
      </ul>
    </>
  );
};
