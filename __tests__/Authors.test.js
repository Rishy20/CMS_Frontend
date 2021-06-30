import React from "react"
import { render, screen } from '@testing-library/react';
import Authors from "../components/pages/Authors";

describe("Test Authors component", () => {
    test("Check if Authors component is rendered", () => {
        render(<Authors/>);
        expect(screen.getByText("Authors")).toBeInTheDocument();
        expect(screen.getByTestId("speaker-items")).toBeInTheDocument();
    });


});
