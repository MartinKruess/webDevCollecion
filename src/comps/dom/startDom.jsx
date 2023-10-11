import { highlights } from "../../App";

export const StartDom = () => {
  return (
    <article>
      <h2 className='font-extrabold text-2xl'>Erzeugen von Content</h2>
      <h3 className='font-extrabold text-xl'>
        Arbeiten mit .innerText, .textContent und .innerHTML
      </h3>
      <p>
        Mit <span className={highlights.code}>.innerText</span> wird Text im
        inneren eines HTML-Elementes und seinen Unterelementen (direkte Kinder)
        erzeugt oder ausgelesen.
      </p>
      <p>
        Mit <span className={highlights.code}>.textContent</span> wird
        sämtlicher Text innerhalb des HTML-Elementes und aller Unterelemente
        ausgelesen, der nur zu Formatierungszwecken dient.
      </p>
      <p>
        Mit <span className={highlights.code}>.innerHTML</span> wird der gesamte
        Text, einschließlich HTML-Tags der Kinder, ausgegeben.
      </p>
      <pre>
        <code>
          &lt;div id="mylinks"&gt;This is my link collection:
          <br />
          &#9;&lt;ul&gt;
          <br />
          &#9;&#9;&lt;li&gt;&lt;a href="www.borland.com"&gt;Bye bye
          Borland&lt;/a&gt;&lt;/li&gt;
          <br />
          &#9;&#9;&lt;li&gt;&lt;a href="www.microfocus.com"&gt;Welcome to Micro
          Focus&lt;/a&gt;&lt;/li&gt;
          <br />
          &#9;&lt;/ul&gt;
          <br />
          &lt;/div&gt;
        </code>
      </pre>
      <pre>
        <code>
          OUTPUT <span className={highlights.code}>.innerText</span>: This is my
          link collection:
          <br />
          OUTPUT <span className={highlights.code}>.textContent</span>: This is
          my link collection:Bye bye Borland Welcome to Micro Focus
          <br />
          OUTPUT <span className={highlights.code}>.innerHTML</span>: This is my
          link collection:
          <br />
          &#9;&#9;&#9;&#9;&#9;&lt;ul&gt;
          <br />
          &#9;&#9;&#9;&#9;&#9;&#9;&lt;li&gt;&lt;a href="www.borland.com"&gt;Bye
          bye Borland&lt;/a&gt;&lt;/li&gt;
          <br />
          &#9;&#9;&#9;&#9;&#9;&#9;&lt;li&gt;&lt;a
          href="www.microfocus.com"&gt;Welcome to Micro
          Focus&lt;/a&gt;&lt;/li&gt;
          <br />
          &#9;&#9;&#9;&#9;&#9;&lt;/ul&gt;
        </code>
      </pre>
      <h3 className='font-extrabold text-xl'>Arbeiten mit .innerHTML</h3>
      <p>
        Ähnlich wie <span className={highlights.code}>.innerText</span> Text im
        inneren eines HTML-Elementes erzeugt, so erzeugt
        <span className={highlights.code}>.innerHTML</span> HTML-Elemente
        innerhalb eines HTML-Elementes.
      </p>
      <pre>
        <code>
          const text = "Hier ist mein neues li";
          <br /> ul.innerHTML = '&lt;li&gt;$&#123;text&#125;&lt;/li&gt;'
        </code>
      </pre>
      <p>
        Ein kleiner Nachteil von
        <span className={highlights.code}> .innerHTML</span>, ist, dass ein
        HTML-Element aus einem String erzeugt wird. Daher muss man bei der
        Verwendung von Array-Mathoden (map, filter, reduce...) anschließend
        <span className={highlights.code}>.join()</span> angewendet werden.
        Under the Hood wird also die standard Methode
        <span className={highlights.code}> .toString()</span> verwendet worduch
        die Ausgabe eines Arrays wie folgt aussieht.
      </p>
      <pre>
        <code>
          const arr = ["Elem-1", "Elem-2", "Elem-3", "Elem-4"]
          <br /> ul.innerHTML = `$&#123;arr.map((elem) =&gt; `
          &lt;li&gt;$&#123;elem&#125;&lt;/li&gt; `)&#125;`
          <br />
          <br />
          OUTPUT: &lt;"Elem-1"&gt; &lt;","&gt; &lt;"Elem-2"&gt; &lt;","&gt;
        </code>
      </pre>
      <pre>
        <code>
          const arr = ["Elem-1", "Elem-2", "Elem-3", "Elem-4"]
          <br /> ul.innerHTML = `$&#123;arr.map((elem) =&gt; `
          &lt;li&gt;$&#123;elem&#125;&lt;/li&gt; `).join('')&#125;`
        </code>
      </pre>
    </article>
  );
};
