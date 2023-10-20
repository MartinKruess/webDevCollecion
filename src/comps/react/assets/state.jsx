export const State = () => {
  return (
    <div>
      <h3 className='font-extrabold text-xl'>React-Hooks - useState</h3>
      <pre className='text-sm'>
        <code>
          // Variable, Setter, = useState(defaultValue/initial Type)
          <br />
          const [firstname, setFirstname] = useState("")
          <br />
          // Ein neuer Wert wird gesetzt und die Seite wird neu gerendert
          <br />
          setFirstname("Jack")
        </code>
      </pre>
    </div>
  );
};
