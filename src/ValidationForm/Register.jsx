import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().min(2).max(15).required("Fill your Full Name"),
  email: Yup.string()
    .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test())
    .required("required"),
  mob: Yup.number().min(5).max(10).required("Fill Valid Mobile Number"),
  userename: Yup.string().min(8).max(12).required("Required Username"),
  password: Yup.string()
    .min(5)
    .max(8)
    .required("Password should be maximum 8 characters"),
  confirmpassword: Yup.string().required("please retype your password")
    .oneOf([Yup.ref('password')],'Password must match')
});

export const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    mob: "",
    username: "",
    password: "",
    confirmpassword: "",
    dob:""
  };
  const onSubmit = (values) => {
    console.log("--->>", values);
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });
  console.log("->->->", formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} align="center">
        <h1>Registration Form</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          Name:<TextField
            placeholder="name"
            required
            name="Enter your full name"
            value={formik.values.name}
            onChange={formik.handleChange}
            fullWidth
            variant="filled"
            error={formik.errors.name}
            helperText={
              formik.errors ? <span>{formik.errors.name}</span> : null
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          Email Id:<TextField
            placeholder="Enter your valid email-id"
            required
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
            helperText={
              formik.errors ? <span>{formik.errors.email}</span> : null
            }
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          Mobile Number:<TextField
            placeholder="Enter your number"
            required
            name="mob"
            value={formik.values.mob}
            onChange={formik.handleChange}
            error={formik.errors.mob}
            helperText={formik.errors ? <span>{formik.errors.mob}</span> : null}
            fullWidth
            variant="filled"
          />
        </Grid>
        
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
         DOB: <TextField
            placeholder="DOB"
            required
            type="date"
            name="dob"
            value={formik.values.dob}
            onChange={formik.handleChange}
            error={formik.errors.dob}
            helperText={formik.errors ? <span>{formik.errors.dob}</span> : null}
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          Username:<TextField
            data-testid="register"
            placeholder="Create new username"
            required
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.errors.mob}
            helperText={
              formik.errors ? <span>{formik.errors.username}</span> : null
            }
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          Password:<TextField
            placeholder="Create new Password"
            required
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
            helperText={
              formik.errors ? <span>{formik.errors.password}</span> : null
            }
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          Confirm Password:<TextField
            placeholder="Confirm your Password"
            required
            name="confirmpassword"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            error={formik.errors.confirmpassword}
            helperText={
              formik.errors ? <span>{formik.errors.confirmpassword}</span> : null
            }
            fullWidth
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button type="submit" fullWidth variant="contained">
            Register
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
