import logo from './assets/logo.svg';
import './App.css';
import Header from "./components/Header";
import Profile from "./pages/Profile";

function App() {
	return (
		<div className="App">
			<Header logo={logo}/>
			<Profile userName="tunmie" />
		</div>
	);
}

export default App;
