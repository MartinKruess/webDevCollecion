import { highlights } from "../../../App";

export const ImportRequire = () => {
  return (
    <>
      <h3 className='font-extrabold text-lg'>Backend - Require und Import</h3>
      <p>
        In Dokumentationen sieht man oft das Schlüsselwort
        <span className={highlights.code}> require()</span>. Noch vor einigen
        Jahren konnte man in Node weder Fetch noch import/export verwenden.
        Daher wurde als Fetch ersatz Axios und anstelle von import, das Node
        eigene require/exports verwendet. Heutzutage ist es allerdings möglich
        durch die Installation/Verwendung von ES6 auch im Backend ganz normal
        mit import/export zu arbeiten. Hierbei gibt es ein paar Unterschiede und
        ein paar Regeln, die beachtet werden müssen.
      </p>
      <p>
        Wie auch im Frontend muss in der package.json, bei der Verwendung von
        import/export unbedingt
        <span className={highlights.code}> "type":"modlue",</span> angebene
        werden, sowie ES6 installiert sein. Anschließend verhält es sich genau
        so wie auch in React. Es gibt
        <span className={highlights.code}> export const...</span>
        <span className={highlights.code}> export default()</span> und
        <span className={highlights.code}> export&#123;...&#125;</span>. Import
        müssen immer ganz oben in einer Datei geladen werden, bevor wir zum
        eigentlichen Code kommen!
      </p>
      <p>
        Um jedoch das Node eigene
        <span className={highlights.code}> require</span> verwenden zu können
        ist es zwingend erfolderlich, dass
        <span className={highlights.code}> "type":"Module"</span> NICHT in der
        package.json stehen darf! Einer der Vorteile von require ist, dass
        require immer und überall aufgerufen werden darf und dadurch flexibler
        ist. Allerdings sollte aus reiner Übersichtlichkeit dennoch eine
        Sinnevolle Struktur bewahrt werden, daher ist es eigl. normal auch
        require wie imports überhalb der eigentlichen Logic zu deklarieren.
      </p>
    </>
  );
};
