import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/mockRestaurantListData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
jest.spyOn(console, "log").mockImplementation(() => {});

test("should load restaurant menu component", async () => {
  const mockData = { info: MOCK_DATA };
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu data={mockData} />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Bestsellers (14)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("fooditems").length).toBe(14);
  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

});
