1. JSX is short form of Javascript XML, a syntax extension for Javascript to describe UI structure in React. It is used to to read and write code and make components reusable in React/ JS based application.

2. State and props are used in React to manage and pass data. State is component's internal, mutable data that can change over time. However, props are read-only values that are passed from parent to child component and can not be modified.

3. UseState hook is used to manage state in functional component in React. It returns a value and a setter function. i.e: const [name, setName] = useState('Annya')

4. States can be shared across components by mainly lifting the state up or Context-API or any state management libraries like Zustand, Redux. Lifting state up means storing state in central/ parent components, then pass it as props to children.

5. Event handling is done using controlled-component by passing down functions. example -
   const handleClick =() =>{cl('annya is good')}

   <button onClick(handleClick)>Click</button>
