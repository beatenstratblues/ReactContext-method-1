import "./App.css";
import Profile from "./components/Profile";
import UserLogin from "./components/UserLogin";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <h1>Realist Nigga in the game</h1>
        <UserLogin/>
        <Profile/>
      </div>
    </UserContextProvider>
  );
}

export default App;
