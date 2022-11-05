import React,{useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import DetailOfExercise from '../components/Exercises/ExerciseDetails/DetailOfExercise'
import ExerciseVideo from '../components/Exercises/ExerciseDetails/ExerciseVideo'
import SimilarExercises from '../components/Exercises/ExerciseDetails/SimilarExercises'

import {fetchExercise , exerciseOptions , youtubeOptions} from '../utils/fetchData'

const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail] = useState([])
  const [exercisesVideos,setExercosesVideo] = useState([])
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const {id} = useParams()

  useEffect(()=>{
    const fetchExercisesData = async() =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchExercise (`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchExercise (`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExercosesVideo(exerciseVideoData.contents);

      const targetMuscleExercisesData = await fetchExercise (`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
      setTargetMuscleExercise(targetMuscleExercisesData)

      const equipmentExercisesData = await fetchExercise (`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
      setEquipmentExercises(equipmentExercisesData)
    }

    fetchExercisesData();
  },[id])

  return (
    <Box>
      <DetailOfExercise exerciseDetail={exerciseDetail}/>
      <ExerciseVideo exercisesVideos={exercisesVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail