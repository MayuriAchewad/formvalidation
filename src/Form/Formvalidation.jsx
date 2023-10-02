import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

export const Formvalidation=()=>{

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            confirmpassword:"",
        },
        onSubmit:values=>{
            console.log('----------',formik.values)
        }
    })
    // console.log('-------->>',formik.values);
    return(
        <div style={{border:"2px solid black",width:"500px", marginLeft:"400px", padding:"40px"}}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={4} align="center">
                    <Grid item xs={12}>
                        <h1>Registration Form</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField values={formik.values.name} onChange={formik.handleChange} fullWidth placeholder="name" name="name"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField values={formik.values.email} onChange={formik.handleChange} fullWidth placeholder="Email id" name="email"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="password" values={formik.values.password} onChange={formik.handleChange} fullWidth placeholder="Password" name="password"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField type="password" values={formik.values.confirmpassword} onChange={formik.handleChange} fullWidth placeholder="Confirm Password" name="confirmpassword"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit">Submit </Button>
                    </Grid>
                    
                </Grid>
            </form>
        </div>
    )
}