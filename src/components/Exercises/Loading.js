import React from 'react'
import { Skeleton , Stack } from '@mui/material'

const Loading = () => {
  return (
    <Stack direction='row'>
        <Stack direction='column' justifyContent='center' alignItems='center' width='100%' gap='10px'>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton width={210} />
            <Skeleton width={210} />
        </Stack>
        <Stack direction='column' justifyContent='center' alignItems='center' width='100%' gap='10px'>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton width={210} />
            <Skeleton width={210} />
        </Stack>
        <Stack direction='column' justifyContent='center' alignItems='center' width='100%' gap='10px'>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton width={210} />
            <Skeleton width={210} />
        </Stack>
        <Stack direction='column' justifyContent='center' alignItems='center' width='100%' gap='10px'>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton width={210} />
            <Skeleton width={210} />
        </Stack>
        <Stack direction='column' justifyContent='center' alignItems='center' width='100%' gap='10px'>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Skeleton width={210} />
            <Skeleton width={210} />
        </Stack>
    </Stack>
  )
}

export default Loading