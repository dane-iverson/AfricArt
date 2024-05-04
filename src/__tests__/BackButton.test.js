import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BackButton from "../components/BackButton";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/";

describe("BackButton component", () => {
  test("renders correctly and handles click event", () => {
    // Render the BackButton component with the provided props, wrapped in a BrowserRouter
    render(
      <BrowserRouter>
        <BackButton destination="/previous-page" />
      </BrowserRouter>
    );

    // Check if the BackButton component is rendered with the correct label
    const backButton = screen.getByRole("link");
    expect(backButton).toBeInTheDocument();

    // Simulate a click event on the BackButton
    fireEvent.click(backButton);

    // Verify that the click event works correctly
    // You can add assertions here to verify the expected behavior
  });
});
