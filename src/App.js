
import desktopHeader from "./assets/images/bg-header-desktop.svg";
import Jobs from "./components/Jobs/Jobs";

function App() {



  return (
    <div className="bg-[#EFFAFA]">
      <div className="h-[15vh] bg-no-repeat bg-cover bg-[#5BA4A4]" style={{ backgroundImage: `url(${desktopHeader})` }}>
      </div>
      <div className="lg:w-[70%] mx-auto mt-10 pb-20">
        <Jobs />
      </div>
    </div>
  );
}

export default App;
