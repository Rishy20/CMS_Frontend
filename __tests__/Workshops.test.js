import React from "react"
import { render, screen } from '@testing-library/react';
import Workshops from "../components/pages/Workshops";


describe("Test Workshops component", () => {
    test("Check if Workshop component is rendered", () => {
        render(<Workshops/>);
        expect(screen.getByText("Workshops")).toBeInTheDocument();
        expect(screen.getByTestId("workshop-items")).toBeInTheDocument();
    });


});
