import { highlights } from "../../../App"

export const RouterTagApp = () => {
    return (
        <>
            <h3 className='font-extrabold text-lg pb-3'>
                <span className={highlights.file}>App.jsx (Vite) oder App.js (react-app)</span>
            </h3>
            <p>
                In der App Datei wird als erstes der Routes-Container aufgebaut. Dieser ist für die Verwaltung der jeder einzelnen Routezuständig. Wichtig zu beachten ist hierbei, dass es nur einen äußeren Routes-Container geben kann, während im inneren weitere sogenannte Nested-Routes angegeben werden können. Die einzelne Route besteht aus mindestens den Attributen/Props <span className={highlights.code}>path</span> und <span className={highlights.code}>element</span>.<br />
                Der path ist ein Teil der gesamt URL, der auf die Subpage leitet, wie im folgenden Beispiel markiert: <strong>https://www.example.de<span className={highlights.errorCode}>/about</span></strong><br />
                Das element ist hierbei die übergeordnete Page-Component, die die Teil-Components beinhaltet.
            </p>
            <pre>
                <code>
                    import "./App.scss";<br /><br />

                    // Public Routes<br />
                    import &#123; Route, Routes &#125; from "react-router-dom";<br />
                    import &#123; Navi &#125; from "./comps/reusable/nav";<br />
                    import &#123; Home &#125; from "./comps/home";<br />
                    import &#123; About &#125; from "./comps/about";<br />
                    import &#123; Login &#125; from "./comps/auth/login";<br />
                    import &#123; Footer &#125; from "./comps/reusable/footer";<br />
                    import &#123; Page404 &#125; from "./comps/404page";<br />
                    <span className={highlights.errorCode}>import &#123; PrivateRoute &#125; from "./comps/privateRoute";</span><br /><br />

                    // Private Routes<br />
                    import &#123; Dashboard &#125; from "./comps/logedIn/dashboard";<br /><br />

                    function App() &#123;<br /><br />

                    &#9;return (<br />
                        &#9;&#9;&lt;main className="App"&gt;<br />
                        &#9;&#9;&#9;&lt;Navi /&gt;<br />
                        &#9;&#9;&#9;&lt;Routes&gt;<br />
                        &#9;&#9;&#9;    &lt;Route path="/" element=&#123;&lt;Home /&gt;&#125; /&gt;<br />
                        &#9;&#9;&#9;    &lt;Route path="/about" element=&#123;&lt;About /&gt;&#125; /&gt;<br />
                        &#9;&#9;&#9;    &lt;Route path="/login" element=&#123;&lt;Login /&gt;&#125; /&gt;<br />
                        &#9;&#9;&#9;    &lt;Route path="/dashboard" element=&#123;<br />
                        &#9;&#9;&#9;&#9;    &lt;PrivateRoute&gt;<br />
                        &#9;&#9;&#9;&#9;        &lt;Dashboard /&gt;<br />
                        &#9;&#9;&#9;&#9;    &lt;/PrivateRoute&gt;&#125;<br />
                        &#9;&#9;&#9;&#9;/&gt;<br />
                        &#9;&#9;&#9;    &lt;Route path="*" element=&#123;&lt;Page404 /&gt;&#125; /&gt;<br />
                        &#9;&#9;&#9;&lt;/Routes&gt;<br />
                        &#9;&#9;&#9;&lt;Footer /&gt;<br />
                        &#9;&#9;&lt;/main&gt;<br />
                    &#9;)<br />
                    &#125;<br /><br />

                    export default App;
                </code>
            </pre>
        </>
    )
}