import Navbar from "./Components/Navbar";
import Presentation from "./Components/Presentation";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Myprojects from "./Components/Myprojects";

function App() {
  return (
    <>
      <header className="px-4 py-4 bg-(--color-font-p1) fixed sm:w-full right-0 left-0 md:px-8">
        <Navbar />
      </header>
      <main className="pt-17 grid-rows-4 lg:pt-20 ">
        <Presentation />
        <Aboutme />
        <Skills />
        <Myprojects /> 
        
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
