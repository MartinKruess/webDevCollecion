import { highlights } from "../../App";
import { GitList } from "./assets/gitList";

export const GithubFlow = () => {
  return (
    <article>
      <h2 className="font-extrabold text-2xl">Was ist GitHub?</h2>
      <h3 className="font-extrabold mb-5 text-xl">
        GitHub Workflow - Der Umgang mit einem Repo
      </h3>
      <div className="grid grid-cols-3 grid-rows-3 mb-5">
        <img
          src="/images/gh-menu.png"
          alt=""
          className="col-start-1 col-end-2 row-start-1 row-end-4"
        />
        <p className="col-start-2 col-end-4 row-start-1 row-end-2">
          Unter Your respoitories findest du deine gespeicherten Projekte, wobei
          jedes Projekt ein Repository ist. Repositories kannst du hier direkt
          auf Github anlegen oder du kannst auch ein lokaes Projekt über VS-Code
          als ein neues Repository pushen.
        </p>
        <p className="col-start-2 col-end-4 row-start-2 row-end-3">
          In Organisationen können mehrere Repositories sein. Organisationen
          nutzt du also für ähnliche Repos, die du an einem Ort haben möchtest,
          ein gutes Beispiel hierfür wäre eine organisation Namens playground.
          In Playground befinden sich alle deine Repos in denen du neue
          Techniken, Libaries, Sprachen und Ideen ausprobiert hast. So hast du
          einen Ort, an dem du jederzeit neue Dinge testen oder bereits
          getestetes nachschlagen kannst. Ein anderer Grund für Organisationen
          sind zusammengehörige Repos wie Frontend (Repo) und Backend (Repo)
          eines Projektes.
        </p>
        <p className="col-start-2 col-end-4 row-start-3 row-end-4">
          In den Settings findest du allgemeine Setting Einstellungen für
          Github, sowie die Verwaltung deines Accounts, deiner Organisationen
          und mehr.
        </p>
      </div>
      <div className="grid grid-cols-6 grid-rows-3 mb-5">
        <img
          src="/images/gh-repo.png"
          alt="create new gh repo"
          className="col-span-2 row-span-3"
        />
        <p className="col-span-4 row-span-1 ml-4">
          Um ein neues Github Repo zu erstellen, musst du zuerst auswählen wer
          der Besitzer dieses Repos sein soll. Der Besitzer kannst du selbst
          oder eine deiner Organisationen sein. Diesen wählst du als erstes aus.
          Anschließend musst du dem repo einen einzigartigen Namen geben.
        </p>
        <p className="col-span-4 row-span-1 ml-4">
          In einem neuen Repo kann direkt eine neue README.md erstellt werden.
          Eine README.md ist die Startseite deines Repositories, allerdings ist
          es keine Pflicht so eine Datei zu haben. Wichtig ist, dass wenn es so
          eine Datei als Startseite geben soll, diese unbeingt groß geschrieben
          werden muss! Da die README.md das Aushängeschild deines Projektes ist,
          sollte deine Startseite ein paar Dinge beinhalten.
        </p>
        <ul className="col-span-2 row-span-1 ml-4">
          <li>- die eine kurze Beschreibung deines Projektes</li>
          <li>
            - eine Anleitung falls dieses Projekt zum Testen oder Benutzen ist
          </li>
          <li>- Eventuelle Bilder zur Anleitung und Erklärung</li>
          <li>- geplante Features falls das Projekt noch im Aufbau ist</li>
        </ul>
        <ul className="col-span-2 row-span-1 ml-4">
          <li>- verwendete Techniken z.B. readline, spezielle Libaries usw.</li>
          <li>- Links zu eventuellen Mitwirkenden</li>
          <li>- Links zu Dokumentationen</li>
        </ul>
      </div>
      <p>
        Nach dem erstellen eines neuen Repos auf Github kannst du das Repo
        Clonen, darin arbeiten und auch wieder dahin pushen. Solltest du
        hingegen ein Lokaes Repo mit diesem Repo verbinden wollen um dein
        bereits ausgearbeitetes Projekt in das GH-Repo zu pushen, so musst du
        zuerst den remote setzen!
        <br />
        Siehe hierfür unter Git.
      </p>
      <h3 className="font-extrabold mb-5 text-xl">
        GitHub - Wichtige Einstellungen
      </h3>
      <div className="grid grid-cols-3 grid-rows-3">
        <img
          src="/images/gh-settings.png"
          alt=""
          className="col-start-1 col-end-2 row-start-1 row-end-4"
        />
        <p className="col-start-2 col-end-4 row-start-1 row-end-2">
          Unter dem Punkt Password and authentication findest du unter anderem
          die Einstellungen für die Zwei-Faktor Authentifizierung.
        </p>
        <p className="col-start-2 col-end-4 row-start-2 row-end-3">
          In Sessions kannst du den remote Zugriff auf dein Github und für
          remote Projekte steuern. Das bedeutet, dass du eine Session einrichten
          kannst um kurzzeitig von anderen Geräten, wie Desktop oder mobilen
          Endgeräten zu steuern. Dadurch verhinderst du, das öffentliche Geräte
          (Geräte, die nicht nur du alleine nutzt), permanenten Zugriff haben.
        </p>
        <p className="col-start-2 col-end-4 row-start-3 row-end-4">
          Unter dem Punkt SSH and GPG Keys kannst du neue SSH-Keys einpflegen.
          Aktuell benutzt du https oder ssh als Verschlüsselung. Das bedeutet
          beim clonen deiner Repos verwendest du einen der beiden. der SSH-Key
          ist wesendlich sicherer verschlüsselt als https (wobei htpps, schon
          sicher ist!). Einen neuen SSH-key benötigst du als Beispiel, wenn du
          neue Hardware verwendest, so es durch eine Neuanschaffung oder gar
          einen Jobwechsel. Dieser regelt die verbindung zwischen den Lokalen
          Repos (VS-Code) und Github, sowie die Datenübertragung
          (push/pull/clone/fetch).
        </p>
      </div>
      <h3 className="font-extrabold text-xl">GitHub Projects</h3>
      <p>folgt demnächst...</p>
    </article>
  );
};
