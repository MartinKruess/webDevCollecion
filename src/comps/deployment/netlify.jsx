import { highlights } from "../../App"

export const Netlify = () => {
    return (
        <article>
            <h2 className="font-extrabold text-2xl">Deployment mit Netlify</h2>
            <p>
                Netlify ist eine Cloud Hosting Plattform, die Serverlos argiert. Es arbeitet mit drei verschiedenen Tiers, das Free Tier ist das was uns aktuell interessiert. Hierbei hast du die Möglichkeit schnell und bequem deine Projekte zu Hosten. Das ganze funktioniert über die Verknüpfung deines Repositories. Netlify arbeitet mit vielen Git-basierten Versionskontrollsystemen zusammen.
            </p>
            <p>
                Um Netlify als Hosting Service nutzen zu können benötigt man einen Account, mit dem Free-Tier. Im Dashboard findet man eine Übersicht über die veröffentlichten Projekte und Builds. Über den Button <span className={highlights.directory}>Add new site</span> kommt man zur Auswahl ob man ein bestehendes Projekt importieren, mit einem template starten oder manuelles Deployment verwenden möchte.
            </p>
            <div className="imgContainer">
                <img className="imgHeight m-auto" src="./images/netlifyDashboard.png" alt="" />
            </div>
            <div className="flex my-5">
                <div className="heightContainer small">
                    <img className="imgHeight" src="./images/netlifyImport.png" alt="" />
                </div>
                <p className="w-2/6 mx-10 text-center border">
                    Das Importieren ist eine Möglichkeit direkt von Github oder anderen Git-basierten Platformen eine Verbindung zwischen dem Repository und der veröffentlichten Webseite herzustellen. Nach der Verknüpfung des Repos mit Netlify, aktualisiert sich die Veröffentlichte Webseite automatisch nach jedem Push.
                </p>
                <div className="heightContainer small">
                    <img className="imgHeight" src="./images/netlifyRepo.png" alt="" />
                </div>
            </div>
            <p className="flex justify-around py-5">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="text-red-600" href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>
                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>
                <a href="https://cyclic.sh/" target="_blank" rel="noopener noreferrer">Cyclic</a>
            </p>
        </article>
    )
}