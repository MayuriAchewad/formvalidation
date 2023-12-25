import React from 'react';
import { Landing } from './ValidationForm/Landing';
import { Card, CardContent } from '@mui/material';
import "./App.css"

function App() {
  return (
    <Card sx={{width:{xs:300,sm:400,md:600, lg:700, xl:800}, margin:"0px auto", marginTop:2,bgcolor:"lightgrey",boxShadow:"0px 0px 10px 10px black"}}>
      <CardContent>
        
        <Landing/>
      </CardContent>
    </Card>
  );
  
}

export default App;
