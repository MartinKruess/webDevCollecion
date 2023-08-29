export const Console = () => {
  const style = [
    "background-color: #ff0000",
    "color: yellow",
    "font-size: 2rem",
    "font-family: fantasy",
  ].join(";");
  console.log("%cEin weiterer Text", style);

  return (
    <article>
      <h2></h2>
      <p>
        Man kann Daten aus Objekten im Console.log in tabellarischer Form
        darstellen.
      </p>
      <pre>
        <code>
          const obj = &#123;
          <br />
          &#9;row1: "string",
          <br />
          &#9;row2: 42,
          <br />
          &#9;row3: "a longer string",
          <br />
          &#125;
          <br />
          <br />
          console.table(obj);
        </code>
      </pre>
      <div className="imgContainer mb-20">
        <img src="./images/consoleTable.png" alt="" className="medium m-auto" />
      </div>
      <pre>
        <code>
          console.group("URL Info");
          <br />
          &#9;console.log("Protocol", window.location.protocol);
          <br />
          &#9;console.log("Host", window.origin);
          <br />
          &#9;console.log("Path", window.location.pathname);
          <br />
          &#9;console.groupCollapsed("Meta Info");
          <br />
          &#9;&#9;console.log("Data Fetched", new Date().getTime());
          <br />
          &#9;&#9;console.log("OS", navigator["platform"]);
          <br />
          &#9;&#9;console.log("Browser", navigator["appCodeName"]);
          <br />
          &#9;&#9;console.log("Language", navigator["language"]);
          <br />
          &#9;&#9;console.log("Location", navigator["geolocation"]);
          <br />
          &#9;console.groupEnd(); console.groupEnd();
          <br />
        </code>
      </pre>
      <div className="imgContainer mb-20">
        <img src="./images/consoleGroup.png" alt="" className="medium m-auto" />
      </div>
      <pre>
        <code>
          console.log("\u001b[1;31m Red message");
          <br />
          console.log("\u001b[1;32m Green message");
          <br />
          console.log("\u001b[1;33m Yellow message");
          <br />
          console.log("\u001b[1;34m Blue message");
          <br />
          console.log("\u001b[1;35m Purple message");
          <br />
          console.log("\u001b[1;36m Cyan message");
          <br />
          <br />
          console.log("\u001b[1;41m Red background");
          <br />
          console.log("\u001b[1;42m Green background");
          <br />
          console.log("\u001b[1;43m Yellow background");
          <br />
          console.log("\u001b[1;44m Blue background");
          <br />
          console.log("\u001b[1;45m Purple background");
          <br />
          console.log("\u001b[1;46m Cyan background");
          <br />
        </code>
      </pre>
      <div className="imgContainer mb-20">
        <img
          src="./images/coloredConsoleLogs.png"
          alt=""
          className="imgHeight m-auto"
        />
      </div>
      <pre>
        <p>Code direkt im Console.log</p>
        <code className="my-3">
          console.log(
          <br />
          &#9;"%cStylen mit CSS!",
          <br />
          &#9;"color: #f709bb;text-decoration:underline;font-size:2rem;"
          <br />
          );
        </code>
        <br />
        <br />
      </pre>
      <div className="imgContainer mb-20">
        <img
          src="./images/consoleStyling.png"
          alt=""
          className="medium m-auto"
        />
      </div>
      <pre>
        <p>Code in einer Variable gespeichert</p>
        <code className="my-3">
          const style = [<br />
          &#9;"background-color: #ff0000",
          <br />
          &#9;"color: yellow",
          <br />
          &#9;"font-size: 2rem",
          <br />
          ].join(";");
          <br />
          console.log("%cEin weiterer Text", style);
        </code>
      </pre>
      <div className="imgContainer mb-20">
        <img
          src="./images/consoleStyling2.png"
          alt=""
          className="medium m-auto"
        />
      </div>
      <div>
        <a
          href="https://stackoverflow.com/questions/43528123/visual-studio-code-debug-console-colors/55493884#55493884"
          target="_blank"
          rel="noopener noreferrer"
        >
          Console Colors
        </a>
      </div>
    </article>
  );
};
