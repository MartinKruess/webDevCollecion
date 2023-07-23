import { highlights } from "../../App"

export const TippsTricks = () => {
    return (
        <article>
            <h2 className="font-extrabold text-2xl">Deployment - Tipps und Tricks</h2>
            <h3 className="font-extrabold text-xl">IONOS Hosting via FTP</h3>
            <p>
                Wie bei Netlify die <span className={highlights.file}>_redirects</span> benötigt wird um den Fehler <span className={highlights.file}>Error 404 - Page not found</span> zu vermeiden, wird bei manchen Hosting Dientsen eine <span className={highlights.file}>.htaccess</span> Datei benötigt. Ein sehr gutes Beispiel hierfür ist der Hosting-Service IONOS. Für das Hosting  bei IONOS erstelle eine .htaccess Datei und kopiere folgenden Code in die Datei. Dieser code erlaubt das Redirect zwischen den Seiten und verweist auf die <span className={highlights.file}>index.html</span> als Referenz.
            </p>
            <pre>
                <code>
                    RewriteEngine On <br />
                    RewriteBase /<br />
                    RewriteCond %&#123;REQUEST_FILENAME&#125; !-f<br />
                    RewriteCond %&#123;REQUEST_FILENAME&#125; !-d<br />
                    RewriteRule ^(.*)$ /index.html?path=$1 [NC,L,QSA]
                </code>
            </pre>
            <div className="flex">
                <div className="imgContainer small">
                    <img src="./images/htaccess.png" alt="" />
                </div>
                <p className="">
                    Bei IONOS ist die Position der <span className={highlights.file}>.htaccess</span> direkt im oberen Verzeichniss. Das selbe Verzeichnis, in dem sich die index.html, bei Vite Projekten, befindet. Ebenfalls wichtig ist, dass die <span className={highlights.file}>.htaccess</span> beim build Prozess NICHT verarbeitet wird und bei Hosting via FTP unbedingt händisch mit hochgeladen werden muss, sowie die neue <span className={highlights.file}>index.html</span>, da diese die Informationen zur <span className={highlights.file}>.htaccess</span> Datei beinhaltet.
                </p>
            </div>
        </article>
        )
}