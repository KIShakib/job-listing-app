import { useEffect, useState } from "react";
import desktopHeader from "./assets/images/bg-header-desktop.svg";
import Jobs from "./components/Jobs/Jobs";

function App() {
  const [jobs, setJobs] = useState([])
  const [searchTag, setSearchTag] = useState([])
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])

  useEffect(() => {

    const searchResults = jobs.map((item) => [item.level, item.role, ...item.languages, ...item.tools])

    const union = searchResults.map((innerArray, index) => {
      if (searchTag.every(element => innerArray.includes(element))) {
        return index;
      }
    }).filter(item => item !== undefined)


    const filteredData = jobs.filter((object, index) => union.includes(index))
    setFilteredJobs(filteredData)


  }, [jobs, searchTag])


  const handleTag = (e) => {

    if (searchTag.some(x => x === e.target.innerHTML)) {
      return
    }
    else { setSearchTag([...searchTag, e.target.innerHTML]) }

  }

  const handleRemove = (keyWord) => {

    const filteredSearch = searchTag.filter((x) => x !== keyWord)
    setSearchTag(filteredSearch)

  }



  return (
    <div className="bg-[#EFFAFA]">
      <div className="h-[15vh] bg-no-repeat bg-cover bg-[#5BA4A4]" style={{ backgroundImage: `url(${desktopHeader})` }}>

      </div>
      {
        searchTag.length > 0 &&
        <div className="flex justify-between px-4 rounded shadow-lg shadow-[#d0f5f5] -mt-6 w-auto h-14 bg-white lg:w-[70%] mx-auto">
          <div className="flex">
            {
              searchTag.map(keyWord =>
                <div className="bg-[#EFFAFA] rounded-sm flex h-[50%] my-auto gap-x-2 pl-2 ml-2">
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
          <button onClick={() => setSearchTag([])} className="h-[50%] my-auto text-[#5BA4A4] font-bold font-sans hover:border-b-2 border-[#5BA4A4]">Clear</button>
        </div>
      }
      <div className="lg:w-[70%] mx-auto mt-14 pb-20">
        <Jobs jobs={filteredJobs} handleTag={handleTag} />
      </div>
    </div>
  );
}

export default App;