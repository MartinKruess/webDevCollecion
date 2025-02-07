import { highlights } from "../../../App";

export const GitList = () => {
  return (
    <ul className="grid grid-cols-3 items-center text-lg gap-y-8 gap-x-1 ">
      <li className="text-center bg-slate-600">
        <strong>GIT COMMAND</strong>
      </li>
      <li className="text-center bg-slate-600">
        <strong>GIT COMMAND (SHORT)</strong>
      </li>
      <li className="text-center bg-slate-600">
        <strong>BESCHREIBUNG</strong>
      </li>

      {/* Git init */}
      <li className="text-center">git init</li>
      <li className="text-center">-</li>
      <li className=" text-center">
        Initialisiert/Erstellt eine git Umgebung. Dadurch sagen wir git,
        beobachte diesen und alle Unterordner auf Änderungen. Es wird die
        <span className={highlights.file}> .git </span> Datei erstellt.
      </li>

      {/* Git status */}
      <li className="text-center">git status</li>
      <li className="text-center">-</li>
      <li className="text-center">
        Git erkennt, dass seid dem letzten Speicherpunkt, eine Änderung in einer
        Datei geschehen ist und markiert solche Dateien als{" "}
        <span className={highlights.errorCode}>U</span> für{" "}
        <span className={highlights.errorCode}>untracked</span>. Mit dem Status
        Befehl überprüfst du ob Änderungen vorliegen und welcher der nächste
        Schritt wäre um diese zu Sichern.
      </li>

      {/* Git add */}
      <li className="text-center">git add &lt;FILENAME&gt;</li>
      <li className="text-center">-</li>
      <li className=" text-center">
        Git erkennt, dass seid dem letzten Speicherpunkt, eine Änderung in einer
        Datei geschehen ist und markiert solche Dateien als{" "}
        <span className={highlights.errorCode}>U</span> für{" "}
        <span className={highlights.errorCode}>untracked</span>. Um diese Datei
        zu Tracken und alle Änderungen zu speichern, muss diese zuerst mit{" "}
        <span className={highlights.file}>git add</span> akzeptiert werden.
      </li>

      {/* Git add all */}
      <li className="text-center">git add --all</li>
      <li className="text-center">git add .</li>
      <li className=" text-center">
        Git tracked alle Datei die Änderungen beinhalten und bereitet diese für
        einen Commit vor.
      </li>

      {/* Git commit */}
      <li className="text-center">git commit --message="initial commit"</li>
      <li className="text-center">git commit -m "initial commit"</li>
      <li className=" text-center">
        Initialisiert eine git Umgebung. Dadurch sagen wir git, beobachte diesen
        und alle Unterordner. Mit <span className={highlights.file}>-y</span>{" "}
        bestätigen wir die Default Settings und müssen nichts eingeben.
      </li>

      {/* Git commit and add */}
      <li className="text-center">
        git commit --all --message="initial commit"
      </li>
      <li className="text-center">git commit -am "initial commit"</li>
      <li className=" text-center">
        Dies ist eine Kombination aus{" "}
        <span className={highlights.file}>add</span> und{" "}
        <span className={highlights.file}>commit</span>. <br /> ❌ Wenn du neue
        Dateien oder unversionierte Dateien hinzufügst, dann musst du vorher git
        add . ausführen.
      </li>

      {/* Git branch newBranch */}
      <li className="text-center">git branch branchName</li>
      <li className="text-center">-</li>
      <li className=" text-center">
        Erzeugt einen neuen Branch. Ein Brach ist eine Abzweigung/Kopie, auf der
        man arbeiten kann ohne die originalversion der Datei zu verändern oder
        beschädigen.
      </li>

      {/* Git branch */}
      <li className="text-center">git branch</li>
      <li className="text-center">-</li>
      <li className=" text-center">
        Zeigt alle offenen Branches an. Angezeigt werden der main oder master
        Branch und alle erstellen Branch Namen.
      </li>

      {/* Git checkout */}
      <li className="text-center">git checkout branchName</li>
      <li className="text-center">git switch branchName</li>
      <li className=" text-center">
        Nach dem erstellen eines neuen branches mit{" "}
        <span className={highlights.errorCode}>git branch branchName</span>
        wechselt man mit <span className={highlights.file}> checkout </span>
        oder <span className={highlights.file}> switch </span> auf diesen Branch
        um dort zu arbeiten.
      </li>

      {/* Git branch und Checkout */}
      <li className="text-center">git checkout --b branchName</li>
      <li className="text-center">git switch -c branchName</li>
      <li className=" text-center">
        Erzeugt einen neuen Branch und wechselt sofort auf diesen Branch.
      </li>

      {/* Git clone */}
      <li className="text-center">git clone GitHub-Link</li>
      <li className="text-center">-</li>
      <li className=" text-center">
        Klont ein Repositorie von GitHub um dieses bearbeiten zu können. Durch
        das Klonen besteht ein Upstream zum GitHub Repositorie. Der Upstream ist
        ein Link, damit git weiß wo das Repositorie auf GitHub ist.
      </li>

      {/* Git push */}
      <li className="text-center">git push</li>
      <li className="text-center">-</li>
      <li className=" text-center">
        Läd alle Änderungen, die beim letzten Commit gespeichert wurden, auf
        GitHub hoch, wenn bereits ein Upstream besteht. Der Upstream ist ein
        Link, damit git weiß wo das Repositorie auf GitHub ist.
      </li>

      {/* Git push upstream setzen */}
      <li className="text-center">git push --up-stream origin branchName</li>
      <li className="text-center">git push -u origin branchName</li>
      <li className=" text-center">
        Setzt den Upstream für einen neuen Branch zu dem origin des main/master
        Branches. Mit -u lässt sich die Schreibweise verkürzen.
      </li>

      {/* Git pull */}
      <li className="text-center">git pull</li>
      <li className="text-center">-</li>
      <li className=" text-center">
        Git zieht sich alle Änderungen von GitHub in das lokale Repositorie und
        überprüft um es Konflikte gibt.
      </li>

      {/* Git merge */}
      <li className="text-center">git merge branchName</li>
      <li className="text-center">-</li>
      <li className=" text-center">
        Git zieht sich alle Änderungen des angegeben Branches in den Branch in
        dem du dich gerade befindest und überprüft ob es Konflikte zwischen den
        Versionen gibt.
      </li>

      {/* Git remote -v */}
      <li className="text-center">git remote --verbose</li>
      <li className="text-center">git remote -v</li>
      <li className=" text-center">
        Zeigt dir den origin Link zu deinem GitHub Repositorie an, der verwendet
        wird bei fetch und push Befehlen.
      </li>

      {/* Git remote -v */}
      <li className="text-center">git remote remove origin</li>
      <li className="text-center">git remote rm origin</li>
      <li className=" text-center">
        Löscht den bestehenden remote Link um die Verbindung zum bisherigen
        Repositorie zu lösen und einen neuen Link setzen zu können.
      </li>

      {/* Git remote add */}
      <li className="text-center">git remote add origin GitHub-Link</li>
      <li className="text-center">-</li>
      <li className=" text-center">
        Bei einem Repositorie, dass nur Lokal besteht und noch nicht auf GitHub
        ist, kann das Lokale Repositorie mit einem auf GitHub verbunden werden.
        (neues Repo auf GitHub pushen) <br />
        Auch wenn der remote Link gelöscht wurde, kann hiermit ein neuer gesetzt
        werden.
      </li>

      {/* Git remote set-url */}
      <li className="text-center">git remote set-url origin GitHub-Link</li>
      <li className="text-center">-</li>
      <li className=" text-center">
        Ersetzt den bestehenden remote Link durch einen neuen, ohne ihn zuvor
        löschen zu müssen.
      </li>
    </ul>
  );
};
