import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import CreateOrder from "../components/CreateOrder";
import { useSnackbar } from "notistack";

// Mock axios
jest.mock("axios");

describe("CreateOrder component", () => {
  const mockArt = { _id: "1", title: "Test Art" };
  const mockEmail = "test@example.com";

  // Setting up the mock email before each test
  beforeEach(() => {
    localStorage.setItem("email", mockEmail);
  });

  // Test case for submitting the form
  test("submits the form and makes an API call", async () => {
    // Mock API response for successful form submission
    axios.post.mockResolvedValue({
      status: 201,
      data: {
        message: "Order request sent successfully",
      },
    });

    // Render the CreateOrder component with a mock art prop
    render(<CreateOrder art={mockArt} />);

    // Fill in the description field
    fireEvent.change(
      screen.getByLabelText(/Why are you interested in this artwork\?/i),
      {
        target: { value: "I love this piece of art." },
      }
    );

    // Submit the form
    fireEvent.click(screen.getByText(/Save/i));

    // Wait for the API call to resolve and check the result
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith("http://localhost:5555/orders", {
        artId: mockArt._id,
        description: "I love this piece of art.",
        email: mockEmail,
      });
    });
  });
});
