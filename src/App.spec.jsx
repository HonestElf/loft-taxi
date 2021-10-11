import React from "react";
import {render, fireEvent} from "@testing-library/react"

import App from "./App";

jest.mock('./Components/map/MapPage',()=>({MapPage: ()=>{<div>Map Component</div>}}))
jest.mock('./Components/profile/ProfilePage',()=>({ProfilePage: ()=>{<div>Profile Component</div>}}))
jest.mock('./Components/login/LoginPage',()=>({LoginComponent: ()=>{<div>Login Component</div>}}))

describe("App", () => {
    it('renders correctly', () => {
        const {container} = render(<App/>)
        expect (container.innerHTML).toMatch("Login Component")
    })

    describe("when clecked on navigation buttons", () => {
        it("opens the corresponding page", () => {
            const {getByText, container} = render(<App/>)

        fireEvent.click(getByText("Profile"))   
        expect(container.innerHTML).toMatch("Profile Component")
        
        fireEvent.click(getByText("Login"))   
        expect(container.innerHTML).toMatch("Login Component")
        })
    })
})