import { highlights } from "../../../App";

export const Cors = () => {
  return (
    <>
      <h3 className='font-extrabold text-xl'>Was ist 'Cors'?</h3>
      <pre className='mt-10'>
        <code>npm i cors</code>
      </pre>
      <p>
        Cors handelt die Zugriffsberechtigungen, welcher "Frontend Server"
        Zugriff auf das Backend hat. Der Begriff "Frontend Server" könnte etwas
        verwirrend sein. Im Grunde ist damit gemeint, der Server auf dem das
        Frontend deployed wurde. Daher verhindert Cors, dass wenn du ein
        Frontend baust, dass du Zugriff auf deinen Server hat, ich nicht einfach
        ein Frontend bauen kann dass ebenfalls auf deinen Server zugreifen kann.
        Cors selbst wird bereits im Browser ausgeführt und ist nur aktiv, wenn
        der Server es installiert hat und mit
        <span className={highlights.code}> app.use(cors())</span> verwendet.
      </p>
    </>
  );
};
