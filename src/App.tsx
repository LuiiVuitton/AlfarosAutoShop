import Home from "./pages/Home";
import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is imported

function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
