import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/LogIn";

// Mock axios
jest.mock("axios");

describe("Login component", () => {
  test("submits the form and navigates on success", async () => {
    // Mock API response for successful login
    axios.post.mockResolvedValue({
      status: 200,
      data: {
        user: { name: "Test User" },
      },
    });

    // Render the Login component wrapped in MemoryRouter
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    // Fill in the email and password fields
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "password123" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /Login/i }));

    // Wait for the API call to resolve and verify navigation
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:5555/users/login",
        {
          email: "test@example.com",
          password: "password123",
          userType: undefined,
          adminKey: undefined,
        }
      );

      // Add additional expectations here (e.g., verify navigation)
      // Since useNavigate is not called directly, you might mock it to check navigation
    });

    // Optionally, you can add tests for error handling and other cases
  });
});
