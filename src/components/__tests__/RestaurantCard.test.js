import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render restaurant card component with props data ", () => {
  const mockData = { info: MOCK_DATA };
  render(<RestaurantCard data={mockData} />);
  const resName = screen.getByText("Pizza Hut");
  expect(resName).toBeInTheDocument();
});
