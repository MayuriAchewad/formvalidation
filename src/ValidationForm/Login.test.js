import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Login } from "./Login";
import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
  // it("Login form displays correct validation",()=>{
  //     const {getByTestId}=render(<Login/>);
  //     const result = Number(getByTestId("validate").textContent);
  //     expect(result).toEqual(10);
  // })
  test("Login form displays correct validation", () => {
    render(
    <BrowserRouter>
        <Login />;
    </BrowserRouter>
    )
    const loginBtn = screen.getByText("Login");
    fireEvent.click(loginBtn);
  });
  // test("Login form displays correct validation",()=>{
  //     const {getByTestId,getByRole}=
  //     render(
  //         <BrowserRouter>
  //             <Login />
  //         </BrowserRouter>
  //     );
  //     const loginBtn = getByRole("Button",{name:"Login"});
  //     fireEvent.click(loginBtn)
  //     const result = Number(getByTestId("validate").textContent);
  //     expect(result).toEqual(10);
  // })
});
