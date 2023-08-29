import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({course, likedCourses, setLikedCourses} ) => {

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id)));
      toast.warning("Like removed");
    }else{
    // insert course in liked array
    if(likedCourses.length === 0){
      setLikedCourses([course.id]);
    }else{
      setLikedCourses((prev)=> [...prev, course.id]);
    }
    toast.success('Liked Successfully');
    }
}

  return (
    <div className='w-[18.5rem] bg-bgDark rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt='Course'></img>

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 
        bottom-[-12px] grid place-items-center'>
            <button onClick={clickHandler}>
              {
                likedCourses.includes(course.id)?  (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>) 
              }
            </button>
        </div>
      </div>

      <div className='text-white p-4'>
        <p className='font-bold'>{course.title}</p>
        <p className='mt-2'>
          {
            course.description.length > 100 ? (course.description.substr(0, 100))+"..." : (course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card
