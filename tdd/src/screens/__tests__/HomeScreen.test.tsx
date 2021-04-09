import {render} from "@testing-library/react-native";
import React from "react";
import HomeScreen from "../HomeScreen";

// Check element rendering
describe("HomeScreen", () => {
  test("Should render correctly", () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByTestId("home-screen");
  });
});

// Check current date
describe("Title section", () => {
  // we use jest fake timer
  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(946684800000); // Saturday, 01 January 2000 00:00 UTC
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  test("Should contain current date", () => {
    const wrapper = render(<HomeScreen />);
    wrapper.getByText("Jan 01, 2000");
  });
});
