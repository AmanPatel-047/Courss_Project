import React, {useEffect, useState} from "react";
import {apiUrl, filterData} from './data'
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner'
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses]= useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        
        //Save data in a variable
        setCourses(data.data);
        console.log(data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  }, [])

  return ( 
    <div className="min-h-screen flex flex-col bg-bgDark2" >
      <div>
      <Navbar></Navbar>
      </div>

      <div>
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            {
              loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
            } 
        </div>
      </div>

      

    </div>
  );
};

export default App;
