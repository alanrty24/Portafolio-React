import Navbar from "./Components/Navbar";
import Presentation from "./Components/Presentation";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Myprojects from "./Components/Myprojects";
import Contactme from "./Components/Contactme";
import Foot from "./Components/Foot";

function App() {
  return (
    <>
    <Navbar>     
        <Presentation />
        <Aboutme />
        <Skills />
        <Myprojects />
        <Contactme />
    </Navbar>
    <Foot />
    </>
  );
}

export default App;
