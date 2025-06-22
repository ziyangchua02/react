const App = () => {
const names = ['Alice', 'Bob', 'Charlie'];
const name = 'World';
const x = 5;
const y = 10;
const loggedIn = false;


return (
    <>
      <div className='text-5xl'>App</div>
      <p style = {{ color: 'red', fontSize: '20px' }}>Hello {name}</p>
      <p>The sum of {x} and {y} is {x + y}</p>
      <ul>
        {names.map((name,index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
    </>
  );
};

export default App;
