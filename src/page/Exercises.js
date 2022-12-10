import React from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/Exercises/SearchExercises'
import ExerciseSetCards from '../components/Exercises/ExerciseSetCards'
import { useState } from 'react'

const Exercises = () => {
  const [bodyPart,setBodyPart] = useState('all')
  const [exercises,setExercise] = useState([])

  console.log(exercises)
  return (
    <Box>
      <div className='toolbar' />
      <SearchExercises setExercise={setExercise} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <ExerciseSetCards exercises={exercises} bodyPart={bodyPart} setExercise={setExercise}/>
    </Box>
  )
}

export default Exercises