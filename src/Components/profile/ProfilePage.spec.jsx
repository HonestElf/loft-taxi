import React from "react";
import {render} from "@testing-library/react"

import ProfilePage from "./ProfilePage"

describe("Profile", () => {
    it("Renders correctly", () => {
    const {container} = render(<ProfilePage/>)
    expect(container.innerHTML).toMatch("Profile Component")
    })
})