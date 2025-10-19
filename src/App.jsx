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
    <div className="">    
        <Navbar />
      <main className="pt-17 grid-rows-4 lg:pt-20 ">
        <Presentation />
        <Aboutme />
        <Skills />
        <Myprojects /> 
        <Contactme />
      </main>
      <footer className="p-4 bg-(--color-font-p1) text-white flex flex-col items-center">
        <Foot />
      </footer>
    </div>
    </>
  );
}

export default App;
