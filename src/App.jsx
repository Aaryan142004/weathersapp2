  
import './App.css'
import "./weatherapp.css";

import Weatherapp from './Weatherapp';
function App() {

  const styles = {
    paperContainer: {
        height: 800,
        backgroundImage: `url(${"./bg2.jpg"})`
    }
};
  return (
    <>
    <div style={styles.paperContainer}>
    <Weatherapp/>
    </div>
    </>
  );
}

export default App;
