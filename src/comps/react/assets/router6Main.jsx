import { highlights } from "../../../App";

export const Router6Main = () => {
  return (
    <>
      <h3 className='font-extrabold text-lg'>
        <span className={highlights.file}>
          main.jsx (Vite) oder index.js (react-app)
        </span>
      </h3>
      <p>
        In der main.jsx Datei muss nun nurch noch der von uns erstellte Router
        innerhalb des RouteProviders aufgerufen werden. Hierbei entfällt das
        laden, der App.jsx, da diese ja bereits als Main-Route im Router-Element
        deklariert wurde. Die Navigation unterschiedet sich nicht von der in
        Version 5, daher führe ich diese hier nicht erneut auf.
      </p>
      <pre className='text-sm'>
        <code>
          ReactDOM.createRoot(document.getElementById('root') as
          HTMLElement).render(
          <br />
          &#9;&lt;React.StrictMode&gt;
          <br />
          &#9;&#9;&lt;RouterProvider router=&#123;router&#125; /&gt;
          <br />
          &#9;&lt;/React.StrictMode&gt;
          <br />
          )<br />
        </code>
      </pre>
      <p className='pb-10 text-lg'>
        <span className={highlights.errorCode}>
          Weitere Themen wie Nested Routes und privateRoutes folgen in kürze
        </span>
      </p>
    </>
  );
};
