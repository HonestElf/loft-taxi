import React from "react";
import {render} from "@testing-library/react"

import MapPage from "./MapPage"

describe("Map", () => {
    it("Renders correctly", () => {
    const {container} = render(<MapPage/>)
    expect(container.innerHTML).toMatch("Map Component")
    })
})