import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().min(2).max(10).required("Required"),
  password: Yup.string().required("required"),
  name:Yup.string().max(6,'please name too short')
// .required('please enter your name')
.matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
// .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
// .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
.max(9, 'name too short'),
  email: Yup.string().email(),

});

export const Login = () => {
  const [msg, setMsg] = useState("");

  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit=(values)=>{
    console.log("--------->>", values);
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit
    
  });
  console.log('------->>>>', formik.values);

  return (
    <form onSubmit={formik.values.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.errors.username}
            helperText={formik.errors ? <span>{formik.errors.username}</span> : null}
            placeholder="Username"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error = {formik.errors.username}
            helperText={formik.errors ? <span>{formik.errors.password}</span>: null}
            placeholder="Username"
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <p>
            If you Dont have an account.{" "}
            <span style={{ color: "red" }}>
              <Link to="/register">Register here</Link>
            </span>
          </p>
        </Grid>
      </Grid>
    </form>
  );
};
