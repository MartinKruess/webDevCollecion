export const RouterV6 = () => {
    return(
        <article>
            <h2 className='font-extrabold text-2xl'>Router ab Version 6 - react-router-dom</h2>
            <pre><code>npm i react-router-dom</code></pre>
            <p>
                Der Hauptunterschied zwischen react-router Version 5 und Version 6 liegt in der Art und Weise, wie das Routing in React-Anwendungen verwaltet wird. In Version 6 wurde die API vereinfacht und verbessert, und die Verwendung von &lt;Route&gt;-Komponenten wurde entfernt. Stattdessen verwendet man Funktionen und Hooks wie useRoutes, useNavigate und andere, um das Routing zu definieren und zu steuern.
            </p>
            <p>
                Dennoch ist Version 5 immer noch relevant und wird in vielen bestehenden Projekten eingesetzt. Die Wahl zwischen Version 5 und 6 hängt von den Anforderungen Ihres Projekts ab. Version 6 bietet Vorteile in Bezug auf die Leistung, die Bundle-Größe und die Entwicklerfreundlichkeit, während Version 5 weiterhin eine bewährte Lösung für bestehende Projekte darstellt. Beide Versionen haben ihre eigenen Anwendungsfälle und sind wertvoll, je nach den Bedürfnissen Ihrer Anwendung.
            </p>
            <div className="grid grid-cols-12 gap-3 text-center">
                <h3 className='font-extrabold text-xl col-span-full'>Was verändert dieses Router Update?</h3>
                <ul className="col-start-1 col-end-7">
                    <li className="my-3">
                        Die &lt;Route&gt;-Komponenten wurden entfernt. Stattdessen wird das Routing mithilfe von Funktionen und Hooks wie useRoutes, useNavigate, useMatch, usw. gesteuert.
                    </li>
                    <li className="my-3">
                        Das ist Verschachteln von Routen ist einfacher und intuitiver. Sie können Routen in einer hierarchischen Struktur verschachteln, ohne die Verwendung von Render-Props oder React-Komponenten, wie es in Version 5 der Fall war.
                    </li>
                    <li className="my-3">
                        Es wurde das Konzept des context weitgehend eliminiert. Stattdessen wird der Zustand und die Informationen für das Routing in der Regel über Funktionen und Hooks übergeben.
                    </li>
                    <li className="my-3">
                        Es unterstützt dynamische Imports von Routen, was die Code-Splitting-Integration in Routing-Anwendungen erleichtert. Dies verbessert die Leistung und das Laden von Teilen der Anwendung nur dann, wenn sie benötigt werden.
                    </li>
                </ul>
                <ul className="col-start-7 col-end-13">
                    <li className="my-3">
                        Es hat eine kleinere Bundle-Größe im Vergleich zu Version 5, was besonders in Bezug auf die Effizienz von Webanwendungen wichtig ist.
                    </li>
                    <li className="my-3">
                        Es können globale Seiteneffekte und Effekte auf Routebene erstellt werden, um beispielsweise Daten vor dem Rendern einer Seite zu laden.
                    </li>
                    <li className="my-3">
                    In Version 6 können Sie benutzerdefinierte Routing-Strategien definieren, um das Verhalten des Routers weiter anzupassen.
                    </li>
                    <li className="my-3">
                    In Version 6 gibt es weniger Notwendigkeit für "prop drilling" (das Weiterreichen von Props durch mehrere Ebenen von Komponenten), da die Routen und Navigationsfunktionen einfacher zugänglich sind.
                    </li>
                </ul>
                <p className="col-span-full">
                    Diese Änderungen machen Version 6 von react-router leistungsstärker, einfacher zu verwenden und besser für moderne React-Anwendungen geeignet.
                </p>
            </div>
            <pre className="text-sm">
                <code>
                    // mainjsx / index.js<br /><br />
                    const router = createBrowserRouter([<br />
                    &#9;&#123;<br />
                    &#9;&#9;path: "/",<br />
                    &#9;&#9;element: &lt;App /&gt;,<br />
                    &#9;&#9;children: [<br />
                    &#9;&#9;&#9;&#123;<br />
                    &#9;&#9;&#9;&#9;index: true,<br />
                    &#9;&#9;&#9;&#9;path: "/",<br />
                    &#9;&#9;&#9;&#9;element: &lt;Landingpage /&gt;<br />
                    &#9;&#9;&#9;&#125;,<br />
                    &#9;&#9;&#9;&#123;<br />
                    &#9;&#9;&#9;&#9;index: true,<br />
                    &#9;&#9;&#9;&#9;path: "/about",<br />
                    &#9;&#9;&#9;&#9;element: &lt;About /&gt;<br />
                    &#9;&#9;&#9;&#125;,<br />
                    &#9;&#9;&#9;&#123;<br />
                    &#9;&#9;&#9;&#9;path: "/contact",<br />
                    &#9;&#9;&#9;&#9;element: &lt;Contct /&gt;<br />
                    &#9;&#9;&#9;&#125;,<br />
                    &#9;&#9;]<br />
                    &#9;&#125;,<br />
                    ]);<br /><br />

                    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<br />
                    &#9;&lt;React.StrictMode&gt;<br />
                    &#9;&#9;&lt;RouterProvider router=&#123;router&#125; /&gt;<br />
                    &#9;&lt;/React.StrictMode&gt;<br />
                        )<br />
                </code>
            </pre>
        </article>
    )
}