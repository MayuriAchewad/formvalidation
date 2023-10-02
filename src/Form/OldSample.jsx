import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Formdata", values);
};
const onChange = (values) => {
  console.log("-------->>>>>", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("invalid email format ").required("required"),
  channel: Yup.string().required("required"),
});

export const OldSample = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate
  });

  console.log("visited fields", formik.touched);

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} className="form" align="center">
          <Grid item xs={12}>
            <h1>Form</h1>
          </Grid>
          <Grid item xs={12}>
            
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              variant="outlined"
              type="text"
              fullWidth
              placeholder="name"
              name="name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ textAlign: "left", color: "red" }}>
                {formik.errors.name}
              </div>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              variant="outlined"
              placeholder="email"
              fullWidth
              type="email"
              name="email"
            />
            {formik.touched.email ? (
              <div style={{ textAlign: "left", color: "red" }}>
                {formik.errors.email}
              </div>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.channel}
              variant="outlined"
              placeholder="channel"
              name="channel"
              fullWidth
            />
            {formik.touched.channel ? (
              <div style={{ textAlign: "left", color: "red" }}>
                {formik.errors.channel}
              </div>
            ) : null}
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button type="reset" variant="contained" color="error" fullWidth>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};
