/**
 * @jest-environment jsdom
 */

"use strict";

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import profilePic from "../public/images/profile.png";

describe("Home", () => {
  it("renders profile image", () => {
    render(<Home />);

    const profileImage = screen.getByAltText();
    expect(getByAltText);
  });
});
