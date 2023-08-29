import React from 'react'
import Card from './Card'
import {useState} from 'react'

const Cards = ({courses, category}) => {

    const [likedCourses, setLikedCourses]= useState([]); 
    let allcourses = [];

    //returns a list of all courses
    function getCourses() {
        if(category === "All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((courseData)=>{
                    allcourses.push(courseData);
                })
            })
            return allcourses;
        } 
        else{
            return courses[category];
        }
        
    }
    
    
    

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map( (course) => {
                return <Card course={course} 
                    key={course.id}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}>
                </Card>
            })
        }
    </div>
  )
}

export default Cards;
