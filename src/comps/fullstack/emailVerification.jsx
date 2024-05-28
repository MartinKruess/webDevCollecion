export const EmailVerification = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>Verifizierungs E-Mail</h2>
      <p>
        <strong>
          Um die Registrierung abzuschließen, klicke bitte auf den Link in der
          E-Mail.
        </strong>
        <br />
        Diesen Satz liest man ganz häufig, doch warum ist dieser Schritt
        überhaupt notwendig?
      </p>
      <h3 className='font-extrabold text-lg'>
        Warum ist eine E-Mail-Verifizierung notwendig?
      </h3>
      <p>
        Die E-Mail-Verifizierung ist ein wichtiger Schritt um die Echtheit der
        angegebenen E-Mail-Adresse zu überprüfen. Dieser Schritt ist wichtig um
        die Sicherheit der Nutzer zu gewährleisten. Es gibt viele
        <strong> Spam-Bots</strong>, die sich automatisiert auf Webseiten
        registrieren und dann versuchen die Nutzer zu schädigen. Um dies zu
        verhindern, wird die E-Mail-Adresse verifiziert. Nur wenn die E-Mail
        bestätigt wurde, kann der Nutzer sich einloggen und die Dienste der
        Webseite nutzen.
      </p>
      <h3 className='font-extrabold text-lg'>
        Wie funktioniert eine E-Mail-Verifizierung?
      </h3>
      <pre className='text-sm'>
        <code>
          // npm i nodemailer
          <br />
          <br />
          import &#123;createTransport&#125; from 'nodemailer';
          <br />
          <br />
          const transporter = createTransport(&#123;
          <br />
          &#9;service: 'gmail',
          <br />
          &#9;host: 'smtp.gmail.com',
          <br />
          &#9;secure: true,
          <br />
          &#9;auth: &#123;
          <br />
          &#9;&#9;user: process.env.GMAIL_USER,
          <br />
          &#9;&#9;pass: process.env.GMAIL_PASS
          <br />
          &#9;&#125;
          <br />
          &#125;)
          <br />
          <br />
          const sendMail = async () =&gt; &#123;
          <br />
          &#9;try &#123;
          <br />
          &#9;&#9;const info = await transporter.sendMail(&#123;
          <br />
          &#9;&#9;&#9;from: `"Martin"
          &lt;$&#123;process.env.GMAIL_USER&#125;&gt;`,
          <br />
          &#9;&#9;&#9;to: 'martin@mail.com',
          <br />
          &#9;&#9; &#9;subject: 'Verfication Code',
          <br />
          &#9;&#9;&#9;text: 'Your verification code is: 123456',
          <br />
          &#9;&#9;&#9;html: '&lt;p&gt;Your verification code is:
          123456&lt;/p&gt;'
          <br />
          &#9;&#9;&#125;)
          <br />
          &#9;&#9;console.log(info.messageId)
          <br />
          &#9;&#125; catch (error) &#123;
          <br />
          &#9;&#9;console.log(error)
          <br />
          &#9;&#125;
          <br />
          &#125;
          <br />
          <br />
          sendMail()
        </code>
      </pre>
    </article>
  );
};
