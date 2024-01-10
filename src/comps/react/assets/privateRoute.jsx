export const PrivateRoute = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl py-2 my-2'>Private Route</h2>
      <pre>
        <code>
          import &#123;useContext&#125; from "react";
          <br />
          import &#123;Navigate&#125; from "react-router-dom";
          <br />
          import &#123;AppContext&#125; from "./context/userContext";
          <br />
          <br />
          export const PrivateRoute = (&#123; children &#125;) =&gt; &#123;
          <br />
          &#9;const &#123;loginToken&#125; = useContext(AppContext)
          <br />
          &#9;return loginToken ? children : &lt;Navigate to='/login' replace
          /&gt;
          <br />
          &#125;
        </code>
      </pre>
      <p>
        Eine PrivateRoute ist eine Route, die nur angezeigt wird, wenn der User
        eingeloggt ist. Hierfür wird der useContext-Hook verwendet um den
        loginToken aus dem Context zu holen. Ist der loginToken vorhanden wird
        die Route angezeigt, ist der loginToken nicht vorhanden wird der User
        auf die Login-Seite weitergeleitet.
      </p>
    </article>
  );
};
