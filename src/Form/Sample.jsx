import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Formdata", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("invalid email format ").required("required"),
  channel: Yup.string().required("required"),
});

export const Sample = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    // validate
  });

  console.log("visited fields", formik.touched);

  return (
    <div
      style={{
        width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
        margin: 100,
      }}
    >
      {/* style={{padding:"100px 500px"}} */}

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} className="form" align="center">
          <Grid item xs={12}>
            <h1>Form</h1>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              {...formik.getFieldProps("name")}
              data-testid="validation"
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
          <Grid item xs={12} md={6}>
            <TextField
              {...formik.getFieldProps("email")}
              data-testid="validation"
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
              {...formik.getFieldProps("channel")}
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
    </div>
  );
};
