import React from "react";
import {render} from "@testing-library/react"

import LoginPage from "./LoginPage";

describe("Login", () => {
    it("Renders correctly", () => {
    const {getByLabelText} = render(<LoginPage/>)
    
    expect(getByLabelText("Email:")).toHaveAttribute("name", "email")
    expect(getByLabelText("password:")).toHaveAttribute("name", "password")
    })
})