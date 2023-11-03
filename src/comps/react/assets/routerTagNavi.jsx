import { highlights } from "../../../App"

export const RouterTagNavi = () => {
    return (
        <>
            <h3 className='font-extrabold text-lg'>
                <span className={highlights.file}>Die Navigation</span>
            </h3>
            <p>
                Da bisher den Router bereits durch manuelles anpassen der URL benutzbar ist, wird nun die Navigation erstellt/angepasst. Hierfür empfielt sich die Verwendung von NavLinks, da diese die Verwendung der Class active unterstützen. Die active class ist hierbei nicht zu verwechseln mit der CSS-Eigenschaft <span className={highlights.errorCode}>:isActive</span>, welche nur dann aktiv ist, solange die linke Maustaste auf einem Link gedrückt gehalten wird! Hierzu mehr unter dem Unterpunkt Navigation.
            </p>
            <pre>
                <code>
                    import &#123; <span className={highlights.code}>NavLink</span> &#125; from 'react'<br /><br />
                    export const Navi = () =&gt; &#123;<br /><br />

                    &#9;return (<br />
                    &#9;&lt;nav&gt;<br />
                    &#9;&#9;&lt;NavLink to="/" &gt;Home&lt;/NavLink&gt;<br />
                    &#9;&#9;&lt;NavLink to="/about" &gt;About&lt;/NavLink&gt;<br />
                    &#9;&#9;&lt;NavLink to="/dashboard" &gt;Dashboard&lt;/NavLink&gt;<br />
                    &#9;&lt;/nav&gt;<br />
                    &#9;)
                </code>
            </pre>
            <p>
                Innerhalb des NavLink gibt es das Attribut to und dieses setzt den path ans Ende der URL, damit der Router getriggert wird und die dazugehörige Page/Component läd.
            </p>
        </>
    )
}