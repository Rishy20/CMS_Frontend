import React from "react"
import { render, screen } from '@testing-library/react';
import Login from "../components/pages/Login";


describe("Test Login component", () => {
    test("Check if login component is rendered", () => {
        render(<Login/>);
        expect(screen.getByTestId("login")).toBeInTheDocument();
    });
    test("Check if form labels are rendered", () => {
        render(<Login />);
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

});
