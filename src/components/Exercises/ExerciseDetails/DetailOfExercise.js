import React from 'react'
import { Typography , Stack , Button } from '@mui/material'

import LogoP from '../../../assets/icons/Exercise icon/LogoP.jpg'
import LogoG from '../../../assets/icons/Exercise icon/LogoG.jpg'
import LogoW from '../../../assets/icons/Exercise icon/LogoW.jpg'

const DetailOfExercise = ({exerciseDetail}) => {
    const {bodyPart ,gifUrl , name , target , equipment } = exerciseDetail;

    const ExtraDetail = [
        {
            icon : LogoP,
            name : bodyPart,
        },        {
            icon : LogoG,
            name : target,
        },        {
            icon : LogoW,
            name : equipment,
        }
    ]

  return (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
            <Typography variant='h3'>
                {name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong.{' '}
                <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                <br /> mood and gain energy.
            </Typography>
            {ExtraDetail?.map((item)=>(
                <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                    <Button sx={{background : '#fff2db',borderRadius:'50%',width:'100px' ,height:'100px'}}>
                        <img src={item.icon} alt={item.name} style={{width:'50px',height:'50px'}}/>
                    </Button>
                    <Typography textTransform='capitalize' variant='h5'>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default DetailOfExercise