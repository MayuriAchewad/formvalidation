import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().min(2).max(15).required("Fill your Full Name"),
  email: Yup.string().matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test()).required("required"),
  mob: Yup.number().min(5).max(10).required("Fill Valid Mobile Number"),
  userename: Yup.string().min(8).max(12).required("Required Username"),
  password: Yup.string().min(12).max(12).required("Password should be maximum 8 characters"),
});

export const Register = () => {

  const initialValues = {
    name: "",
    email: "",
    mob: "",
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("--->>", values);
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  })
  console.log("->->->", formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        
          <Grid item xs={12}>
            <TextField
              placeholder="name"
              required
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              fullWidth
              variant="filled"
              error={formik.errors.name}
              helperText={formik.errors ? <span>{formik.errors.name}</span>:null}
            />
            
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="email-id"
              required
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
              helperText={formik.errors ? <span>{formik.errors.email}</span>:null}
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Mobile Number"
              required
              name="mob"
              value={formik.values.mob}
              onChange={formik.handleChange}
              error={formik.errors.mob}
              helperText={formik.errors ? <span>{formik.errors.mob}</span>:null}
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="UserName"
              required
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.errors.mob}
              helperText={formik.errors ? <span>{formik.errors.username}</span>:null}
              fullWidth
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Password"
              required
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors.mob}
              helperText={formik.errors ? <span>{formik.errors.password}</span>:null}
              fullWidth
              variant="filled"
            />
          </Grid>
          {/* <Grid item xs={12}>
                <TextField placeholder="Confirm Password" fullWidth variant="filled"/>
            </Grid> */}
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained">
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <p>
              If you Dont have an account please.{" "}
              <span style={{ color: "red" }}>
                <Link to="/"> Login here</Link>
              </span>
              
            </p>
          </Grid>
       
      </Grid>
      </form>
    
  );
};
