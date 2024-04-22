export const errorData = [
  {
    title: "Fehler im Code",
    code: `const CodeWithError = () => {
      const [allTodos, setAllTodos] = useState([]);
      const favTodo = todos[1]

      useEffect(() => {
        setAllTodos(favTodo);
      }, []);
    
      return(
        &lt;article&gt;
          &lt;h1>TODO APP&lt;/h1&gt;;
          &lt;ul&gt;;
            {allTodos.map((todo) =&gt;; (
              &lt;li key={todo.id}&gt;;{todo.title}&lt;/li&gt;;
            ))}
          &lt;/ul&gt;;
        &lt;/article&gt;;
      )
    }`,
    err: `Uncaught TypeError: todos.map is not a function
    at CodeWithError (YourComponentFile.js:lineNumber)
    at renderWithHooks (react-dom.development.js:14985)
    at updateFunctionComponent (react-dom.development.js:17356)
    at beginWork (react-dom.development.js:19063)
    at HTMLUnknownElement.callCallback (react-dom.development.js:3945)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:3994)
    at invokeGuardedCallback (react-dom.development.js:4056)
    at beginWork$1 (react-dom.development.js:23972)
    at performUnitOfWork (react-dom.development.js:22779)
    at workLoopSync (react-dom.development.js:22711)`,
    kind: ["type error", "typeerror", "falscher type"],
    solutionCode: "setAllTodos([...allTodos, todos]);",
  },
  {
    title: "Fehlende Key-Props in der map-Funktion",
    code: `const CodeWithError = () => {
      const todos = [
        { id: 1, title: "Todo 1" },
        { id: 2, title: "Todo 2" },
        { id: 3, title: "Todo 3" }
      ];

      return(
        &lt;article&gt;
          &lt;h1&gt;TODO APP</h1&gt;
          &lt;ul&gt;
            {todos.map((todo) => (
              &lt;li&gt;{todo.title}&lt;/li&gt;
            ))}
          &lt;/ul&gt;
        &lt;/article&gt;
      );
    }`,
    err: `Warning: Each child in a list should have a unique "key" prop.
    Check the render method of \`CodeWithError\`.`,
    kind: ["key prop warnung", "key", "key prop vergessen"],
    solutionCode: `{todos.map((todo) => (
      <li key={todo.id}>{todo.title}</li>
    ))}`,
  },
  {
    title: "Wo liegt der Fehler?",
    code: ``,
    err: `Error: Objects are not valid as a React child (found: object with keys {manager, employees}). If you meant to render a collection of children, use an array instead.
    at throwOnInvalidObjectType (&lt;anonymous&gt;:11158:19)
    at createChild (&lt;anonymous&gt;:11349:17)
    at reconcileChildrenArray (&lt;anonymous&gt;:11529:35)
    at reconcileChildFibers (&lt;anonymous&gt;:11812:26)
    at reconcileChildren (&lt;anonymous&gt;:14915:39)
    at updateHostComponent$1 (&lt;anonymous&gt;:15440:13)
    at beginWork (&lt;anonymous&gt;:16613:24)
    at HTMLUnknownElement.callCallback (&lt;anonymous&gt;:3336:24)
    at Object.invokeGuardedCallbackDev (&lt;anonymous&gt;:3363:26)`,
    kind: [
      "async useffect",
      "async funtion",
      "function",
      "function async",
      "async",
    ],
    solutionCode: `useeffect(() => {
      const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
      }
      fetchData();
    }, []);`,
  },
];
