export const Vite = () => {
    return (
        <article className="p-4">
            <h2 className="font-extrabold text-2xl">DOM mit Vite Vanilla</h2>
            <div className="grid grid-cols-12 gap-x-20">
                <img className="col-start-1 col-end-3" src="./images/viteLogo.png" alt="" />
                <p className="col-start-5 col-end-13">
                    Wer in der Vergangenheit Vue- oder React-Anwendungen erstellte, nutzte unter der Haube automatisch Webpack. Webpack ist ein JavaScript-Bundler, der die zahlreichen für die Anwendung erforderlichen (JavaScript-, Bild-, CSS-) Dateien analysiert und daraus Module erstellt. Diese wenigen Module werden dann an den Browser ausgeliefert, wodurch die Geschwindigkeit zur Laufzeit erhöht wird.
                </p>
                
                <p className="col-start-1 col-end-7">
                    Der Haken dabei: Das Auflösen der Abhängigkeiten mit all den Importen und Exporten ist ein komplexer Vorgang, der einige Zeit erfordert. Für einen gelegentlichen Produktionsbuild (deployment) ist das verschmerzbar, aber während der Entwicklung mit dem DevServer (der ebenfalls Webpack einsetzt) ist eine kleine Änderung am Code bei großen Anwendungen erst nach einiger Zeit im Browser sichtbar.
                </p>
                <p className="col-start-7 col-end-13">
                    Deshalb entschloss sich Evan You – der Entwickler hinter Vue.js – ein schnelleres Build-Tool für die Frontend-Webentwicklung (nicht nur für Vue.js!) zu programmieren. Diese Alternative, inzwischen in Version 2 verfügbar, heißt Vite und der (französische) Name verspricht nicht zu viel.
                </p>
                <p className="col-start-1 col-end-7">
                    Vite ist dramatisch schneller, je nach Größe der Anwendung um den Faktor 10 bis 100. Diese Performanceverbesserung wird unter anderem durch Nutzung der noch nicht allzu lange verfügbaren nativen ES-Script-Module des Browsers, der Unterteilung des Projektcodes in pre-gebundelte Dependencies und dem eigentlichen Quellcode sowie einem neuen DevServer mit schnellem Hot Module Replacement (HMR) erreicht.
                </p>
                <p className="col-start-7 col-end-13">
                    Letzteres ermöglicht dem Browser, geänderte Teile einer Seite neu zu laden, ohne dabei den Zustand zu verlieren. Da Vite neben den Performanceverbesserungen zudem noch tolle Features wie etwa eine Out-of-the-Box TypeScript-Unterstützung bietet, ist es auf jeden Fall eine interessante Alternative zum altgedienten Vue CLI/react-app.
                </p>
                <h3 className="col-span-12 font-extrabold text-xl">Fazit</h3>
                <p className="col-span-12">
                    Mit der Verwendung von Vite laufen nicht nur die Entwicklungen in VueJs, sondern ebenfalls React und Vanilla JS Anwendungen schneller. Vite optimiert die Kommunikations-, Compiling- und Building Prozesse enorm.
                </p>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <h2 className="col-span-12 gap-10 font-extrabold text-2xl">Durchstarten it Vite</h2>
                <pre className="col-start-1 col-end-4">
                    <code>
                        npm create vite
                    </code>
                </pre>
                <p className="col-start-5 col-end-13">
                    Das erste Vite-Projekt aufzusetzen ist gar nicht so schwer. Wir gehen dafür erstmal in den Hauptordner zurück und erzeugen ein Project-File.
                </p>
                <img  className="col-start-1 col-end-4" src="./images/createVite.png" alt="" />
                <p className="col-start-5 col-end-13">
                    Nun vergeben wir den Namen des Projektes, sowie den Namen des Packages. Diese können ruhig gleich heißen.
                </p>
                <img  className="col-start-1 col-end-4" src="./images/viteSelectFramework.png" alt="" />
                <p className="col-start-5 col-end-13">
                    Da Vite nicht Framework gebunden ist, haben wir eine Auswahl einiger Frameworks. Aus dieser Auswahl beschäftigen wir uns erst einmal mit Vanilla JS. Abschließend währen wir als Sprache ebenfalls vanilla aus.
                </p>
                <img  className="col-start-1 col-end-4" src="./images/viteInstructions.png" alt="" />
                <p className="col-start-5 col-end-13">
                    Nach erfolgreicher Erstellung bekommen wir im Terminal drei Anweisungen, die wir Zeile für Zeile ausführen. Nun läuft unser erstes Projekt und wir können die nötigen Spezifikationen installieren. Abschließend setzen wir einen inital commit und pushen die erste Version auf Github.
                </p>
            </div>
        </article>
    )
}