import { highlights } from "../../App"

export const GHPages = () => {
    return (
        <article>
            <h2 className="font-extrabold text-2xl">Deployment mit Github Pages</h2>
            <p>
                GitHub selbst hat eine Deploy Funktion, die für kleinere Frontend Webseiten genau das richtige ist. Die Funktion nennt sich <span className={highlights.directory}>Github Pages</span> und ist direkt im jeweiligen Repository zu finden. Github Pages eignet sich gut für die veröffentlichung deines Portfolios und Final Projects.
            </p>
            <div className="flex flex-wrap">
                <div className="heightContainer xsmall">
                    <img className="imgHeight" src="./images/ghRepo.png" alt="" />
                </div>
                <div className="medium">
                    <div className="smallContainer">
                        <img src="./images/ghSettings.png" alt="" />
                    </div>
                    <p className="px-10">
                        Zu erst gehst du wie links im Bild in dein <span className={highlights.directory}>Repository</span>, dass du veröffentlcihen möchtest. Anschließend müsst du in die <span className={highlights.directory}>Repo-Settings</span> und dort den Unterpunkt <span className={highlights.directory}>Pages</span>. Abschließend musst du nur noch deinen <span className={highlights.directory}>Branch</span> auswählen und auf Save klicken. Die Veröffentlichung kann einige Minuten in Anspruch nehmen.
                    </p>
                </div>
                
                <div className="heightContainer xsmall">
                    <img className="imgHeight" src="./images/ghPages.png" alt="" />
                </div>
                <div className="heightContainer small">
                    <img className="imgHeight" src="./images/ghDeployment.png" alt="" />
                </div>
            </div>
            
        </article>
    )
}