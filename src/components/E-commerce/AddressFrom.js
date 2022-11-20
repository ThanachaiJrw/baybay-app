import React , {useState,useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@mui/material'
import {useForm ,FormProvider} from 'react-hook-form'
import { Link } from 'react-router-dom'

import { commerce } from '../../utils/commerce'

import FromInput from './FromInput'

const AddressFrom = ({checkoutToken ,next}) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const method = useForm()


  //Country
  const fetchShippingCountries =async(checkoutTokenId)=>{
    const {countries} =await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  }

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  //Subdivision
  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  //ShippingOption
  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  return (
    <>
      <Typography variant='h6' gutterBottom sx={{mt:'15px'}}>Shipping Address</Typography>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit((data)=>next({...data,shippingCountry,shippingSubdivision,setShippingOption}))}>
          <Grid container spacing={3}>
            <FromInput required name='firstName' label='First Name'/>
            <FromInput required name='lastName' label='Last Name'/>
            <FromInput required name='address1' label='Address'/>
            <FromInput required name='email' label='E-mail'/>
            <FromInput required name='city' label='City'/>
            <FromInput required name='zip' label='ZIP / Postal Code'/>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select variant="standard"  value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}  >
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select variant="standard"  value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)} >
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select variant="standard" value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressFrom