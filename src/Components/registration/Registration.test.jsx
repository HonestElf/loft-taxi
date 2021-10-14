import React from "react";
import { render } from "@testing-library/react";

import Registration from "./Registration"

describe("Registration", () => {
    it("renders correctly", () => {
        const {getByLabelText} = render(<Registration/>)

        expect(getByLabelText("Email:")).toHaveAttribute("name", "email")
        expect(getByLabelText("Password:")).toHaveAttribute("name", "password")
    })
})