import React ,{useState ,useEffect} from 'react'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'

import AddressFrom from '../components/E-commerce/AddressFrom'
import PaymentFrom from '../components/E-commerce/PaymentFrom'
import Confirmation from '../components/E-commerce/Confirmation'
import { commerce } from '../utils/commerce'

const steps = ['Shipping address','Payment details']

const Checkout = ({cart}) => {
  const [activeStep,setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})

  useEffect(()=>{
    const generateToken =async()=>{
      try {
        const token = await commerce.checkout.generateToken(cart.id,{type:'cart'}) 

        setCheckoutToken(token)
      } catch (error) {
        
      }
    }

    generateToken()
  },[])

  const nextStep=()=>setActiveStep((preStep)=>preStep+1);
  const backStep=()=>setActiveStep((preStep)=>preStep-1);

  const next =(data)=>{
    setShippingData(data);
    nextStep();
  }



  const From =()=> activeStep === 0 ? <AddressFrom checkoutToken={checkoutToken} next={next}/> : <PaymentFrom/>

  return (
    <>
      <main className='layout'>
        <Paper className='paper'>
          <Typography variant='h4' align='center' >
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className='stepper'>
            {steps.map((step)=>(
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation/> : checkoutToken && <From/>}
        </Paper>
      </main>
    </>
  )
}

export default Checkout