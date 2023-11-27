export const NestedRouteCode = () => {
  return (
    <>
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
          &#9;&#9;&#9;&#9;path: "/shop",
          <br />
          &#9;&#9;&#9;&#9;element: &lt;Shop /&gt;
          <br />
          &#9;&#9;&#9;&#9;children: [<br />
          &#9;&#9;&#9;&#9;&#9;&#123;
          <br />
          &#9;&#9;&#9;&#9;&#9;&#9;index: true,
          <br />
          &#9;&#9;&#9;&#9;&#9;&#9;element: &lt;Articles /&gt;
          <br />
          &#9;&#9;&#9;&#9;&#9;&#125;,
          <br />
          &#9;&#9;&#9;&#9;&#9;&#123;
          <br />
          &#9;&#9;&#9;&#9;&#9;&#9;path: "/hoodies"
          <br />
          &#9;&#9;&#9;&#9;&#9;&#9;element: &lg;Hoodies /&gt;
          <br />
          &#9;&#9;&#9;&#9;&#9;&#125;
          <br />
          &#9;&#9;&#9;&#9;],
          <br />
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
    </>
  );
};
