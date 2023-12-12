export const Bcrypt = () => {
  return (
    <article>
      <h2 className='font-extrabold text-xl'>Bcrypt Syntax</h2>
      <p>Bcrypt besteht hash, salt, rounds, compare</p>
      <pre className='text-sm'>
        <code>
          export const register = async (req, res) =&gt; &#123;
          <br />
          &#9;try &#123;
          <br />
          &#9;&#9;let dataOfUser = &#123;&#125;
          <br />
          &#9;&#9;const hashedRegisterPassword = await
          bcrypt.hash(req.body.password, saltRounds)
          <br />
          <br />
          &#9;&#9;dataOfUser = &#123;
          <br />
          &#9;&#9;&#9;mail: req.body.email,
          <br />
          &#9;&#9;&#9;firstname: req.body.firstname,
          <br />
          &#9;&#9;&#9;lastname: req.body.lastname,
          <br />
          &#9;&#9;&#9;username: req.body.username,
          <br />
          &#9;&#9;&#9;password: hashedRegisterPassword,
          <br />
          &#9;&#9;&#125;,
          <br />
          <br />
          &#9;&#9;//SAVE: userData to userDB
          <br />
          &#9;&#9;UserDataModel(dataOfUser).save()
          <br />
          &#9;&#9;res.send('Successfull registrated!')
          <br />
          <br />
          &#9;&#123; catch (error) &#123;
          <br />
          &#9;&#9;console.log("ERROR:", error, "Error by registration!")
          <br />
          &#9;&#125;
          <br />
          &#125;;
        </code>
      </pre>
      <pre>
        <code>
          const passwordFromFrontend = 'password123';
          <br />
          const saltRounds = 12;
          <br />
          // Generate salt
          <br />
          const salt = bcrypt.genSaltSync(saltRounds);
          <br />
          // Hash the password
          <br />
          const hashedPassword = bcrypt.hashSync(password, salt);
          <br />
          // Compare passwords
          <br />
          const isMatch = bcrypt.compareSync(password, hashedPassword);
          <br />
          // Generate salt
          <br />
          const salt = bcrypt.genSaltSync(saltRounds); // Hash the password
          <br />
          const hashedPassword = bcrypt.hashSync(password, salt); // Compare
          passwords
          <br />
          const isMatch = bcrypt.compareSync(password, hashedPassword);
        </code>
      </pre>
      <h3 className='font-extrabold text-lg'>Bcrypt Salt, Rounds, compare</h3>
      <h3 className='font-extrabold text-lg'>Time/hash</h3>
    </article>
  );
};
