import { highlights } from "../../App";

export const SwitchCase = () => {
  return (
    <article className="p-4">
      <h2 className="font-extrabold text-2xl">Switch Case</h2>
      <p>
        <span className={highlights.code}>Switch Case</span> ist eine ältere
        aber dennoch gängige Alternative zu
        <span className={highlights.code}> If else</span>. Es gibt bei der
        verwendung von <span className={highlights.code}>Switch Case </span>
        einige Besonderheiten, auf die man achten muss.
      </p>
    </article>
  );
};
