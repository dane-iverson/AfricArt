import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";

test("SignUp component snapshot", () => {
  // Render the SignUp component wrapped in a MemoryRouter, this allows useNavigate to be used
  const { asFragment } = render(
    <MemoryRouter>
      <SignUp />
    </MemoryRouter>
  );
  // Compare the rendered component with the saved snapshot
  expect(asFragment()).toMatchSnapshot();
});
