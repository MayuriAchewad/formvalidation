import React from 'react';
import { Landing } from './ValidationForm/Landing';
import { Card, CardContent } from '@mui/material';

function App() {
  return (
    <Card sx={{width:{xs:100,mg:200, md:300, xl:500}, margin:"0px auto", marginTop:10}}>
      <CardContent>
        <h1>Validation Form</h1>
        <Landing/>
      </CardContent>
    </Card>
  );
  
}

export default App;
