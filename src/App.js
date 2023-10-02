import logo from './logo.svg';
import './App.css';
import { Sample } from './Form/Sample';
import { Formvalidation } from './Form/Formvalidation';
import { Landing } from './ValidationForm/Landing';
import { Login } from './ValidationForm/Login';
import { Register } from './ValidationForm/Register';
import { Card, CardContent } from '@mui/material';

function App() {
  return (
    <Card sx={{width:{xs:100,mg:200, md:300, xl:500}, margin:"0px auto", marginTop:10}}>
      <CardContent>
        <Landing/>
      </CardContent>
    </Card>
  );
  
}

export default App;
