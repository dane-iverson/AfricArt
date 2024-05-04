import React from "react";
import { render, screen } from "@testing-library/react";
import ArtSingleCard from "../components/home/ArtSingleCard";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("ArtSingleCard component", () => {
  // Before each test, set the local storage item "isLoggedIn" to true
  beforeEach(() => {
    localStorage.setItem("isLoggedIn", "true");
  });

  test("renders art details correctly", () => {
    // Create a mock art object
    const mockArt = {
      _id: "1",
      title: "Test Art",
      artist: "Test Artist",
      image: "test_image.jpg",
    };

    // Render the ArtSingleCard component inside a BrowserRouter
    render(
      <BrowserRouter>
        <ArtSingleCard art={mockArt} />
      </BrowserRouter>
    );

    // Check if the art title and artist are rendered
    expect(screen.getByText("Test Art")).toBeInTheDocument();
    expect(screen.getByText("Test Artist")).toBeInTheDocument();

    // Check if the image is rendered correctly
    const imageElement = screen.getByAltText(mockArt.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      `http://localhost:5555/static/${mockArt.image}`
    );
  });
});
