//import logo from './logo.svg';
//import './App.css';
import LoginButton from './components/ButtonLogin';

function App() {
  console.log(process.env.AUTH_CLIENTID)
  return (
    <div className="App">
      app
      <p>
        {}
      </p>
      <LoginButton />
    </div>
  );
}

export default App;
