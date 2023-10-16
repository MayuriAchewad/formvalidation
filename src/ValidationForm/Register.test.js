import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Register } from "./Register";

describe("Register", () => {
    test("Register Form displays proper validation",()=>{
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const registeBtn = screen.getByText("Register");
  fireEvent.click(registeBtn);
});
});
