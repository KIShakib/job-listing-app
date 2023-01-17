import { useEffect, useState } from "react";
import desktopHeader from "./assets/images/bg-header-desktop.svg";
import Jobs from "./components/Jobs/Jobs";

function App() {
  const [jobs, setJobs] = useState([])
  const [searchKeyWord, setSearchKeyWord] = useState([])
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])

  useEffect(() => {

    const searchResults = jobs.map((job) => [job.level, job.role, ...job.languages, ...job.tools])

    const union = searchResults.map((searchResult, i) => {

      if (searchKeyWord.every(keyWord => searchResult.includes(keyWord))) {
        return i;
      }

    }).filter(item => item !== undefined)


    const filteredData = jobs.filter((jobs, i) => union.includes(i))
    setFilteredJobs(filteredData)


  }, [jobs, searchKeyWord])


  const handleTag = (e) => {

    if (searchKeyWord.some(x => x === e.target.innerHTML)) {
      return
    }
    else { setSearchKeyWord([...searchKeyWord, e.target.innerHTML]) }

  }

  const handleRemove = (keyWord) => {

    const filteredSearch = searchKeyWord.filter((x) => x !== keyWord)
    setSearchKeyWord(filteredSearch)

  }



  return (
    <div className="bg-[#EFFAFA]">
      <div className="h-[15vh] bg-no-repeat bg-cover bg-[#5BA4A4]" style={{ backgroundImage: `url(${desktopHeader})` }}>

      </div>
      {
        searchKeyWord.length > 0 &&
        <div className="flex justify-between px-4 rounded shadow-lg shadow-[#d0f5f5] -mt-6 h-14 bg-white lg:w-[70%] md:w-[90%] w-[90%] mx-auto">
          <div className="flex flex-wrap">
            {
              searchKeyWord.map((keyWord, i) =>
                <div key={i} className="bg-[#EFFAFA] rounded-sm flex h-[50%] my-auto gap-x-2 pl-2 ml-2">
                  <h4 className='text-[#5BA4A4] font-bold'>{keyWord}</h4>
                  <button
                    onClick={() => handleRemove(keyWord)}
                    className="bg-[#5BA4A4] hover:bg-[#2C3A3A] px-2 h-full text-white font-bold font-sans rounded-r-sm">
                    X
                  </button>
                </div>
              )
            }
          </div>
          <button onClick={() => setSearchKeyWord([])} className="h-[50%] my-auto text-[#5BA4A4] font-bold font-sans hover:border-b-2 border-[#5BA4A4]">Clear</button>
        </div>
      }
      <div className="lg:w-[70%] md:w-[90%] w-[90%] mx-auto mt-14 pb-20">
        <Jobs jobs={filteredJobs} handleTag={handleTag} />
      </div>
      <div>

        <div className="flex gap-x-4 text-[#5BA4A4] justify-center pb-5">
          <div>
            <a href="https://www.facebook.com/khubaibulislamshakib.xx" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-square-facebook text-3xl hover:text-[#F16A8C] hover:rotate-[360deg] transition-all  duration-500"></i>
            </a>
          </div>
          <div>
            <a href="https://github.com/KIShakib" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github  text-3xl hover:text-[#F16A8C] hover:rotate-[360deg] transition-all  duration-500"></i>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ki-shakib/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin text-3xl hover:text-[#F16A8C] hover:rotate-[360deg] transition-all  duration-500"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;