import React from "react";
import {render} from "@testing-library/react"

import Header from "./Header"

describe("Header", () => {
    it("Renders correctly", () => {
    const {container} = render(<Header/>)
    expect(container.innerHTML).toMatch("Header Component")
    })
})