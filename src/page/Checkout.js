import React ,{useState ,useEffect} from 'react'
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'
import { Link ,useHistory } from 'react-router-dom'

import AddressFrom from '../components/E-commerce/AddressFrom'
import PaymentFrom from '../components/E-commerce/PaymentFrom'
import { commerce } from '../utils/commerce'

const steps = ['Shipping address','Payment details']

const Checkout = ({cart ,order ,onCaptureCheckout,error}) => {
  const [activeStep,setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const [isFinished,setIsFinished] = useState(false)  
  const history = useHistory()

  useEffect(()=>{
    const generateToken =async()=>{
      try {
        const token = await commerce.checkout.generateToken(cart.id,{type:'cart'}) 

        setCheckoutToken(token)
      } catch (error) {
        console.log(error)
        history.pushState('/')
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

  const timeOut=()=>{
    setTimeout(() => {  
      setIsFinished(true)
    }, 3000);
  }

  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className='divider' />
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>
  ) :isFinished ?(
    <>
    <div>
      <Typography variant="h5">Thank you for your purchase!</Typography>
      <Divider className='divider' />
      <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
    </div>
    <br />
    <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
  </>
  ) : (
    <div className='spinner'>
      <CircularProgress />
    </div>
  ));

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
    );
  }

  const From =()=> activeStep === 0 ? <AddressFrom checkoutToken={checkoutToken} next={next}/> 
  : <PaymentFrom shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} timeOut={timeOut}/>

  return (
    <>
    <CssBaseline/>
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