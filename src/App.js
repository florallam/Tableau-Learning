import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const link = "https://www.coursera.org/learn/analytics-tableau"
  return (
    <div className="App">
      <Navbar/>
      <div className = "content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
