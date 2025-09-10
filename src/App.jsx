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
      <header className="p-4 bg-(--color-font-p1) fixed sm:w-full right-0 left-0 md:px-8">
        <Navbar />
      </header>
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
    </>
  );
}

export default App;
