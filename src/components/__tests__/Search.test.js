import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mocks/mockRestaurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

jest.spyOn(console, "log").mockImplementation(() => {});

test("should search restaurant list for McDonald input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(1);

  // const searchBtn = screen.getByRole("button", { name: "Search" });
  // const searchInput = screen.getByTestId("searchInput");
  // fireEvent.change(searchInput, { target: { value: "McDonald's" } });
  // fireEvent.click(searchBtn);
  // //screen should load cards
  // const cards = screen.getAllByTestId("resCard");
  // expect(cards.length).toBe(1);
});

// test("should render top rated restaurants", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );
//   const cardsBeforeFilter = screen.getAllByTestId("resCard");
//   expect(cardsBeforeFilter.length).toBe(1);
//   const topRateBtn = screen.getByRole("button", {
//     name: "Top Rated Restaurants",
//   });
//   fireEvent.click(topRateBtn);

//   const cardAfterFilter = screen.getAllByTestId("resCard");
//   expect(cardAfterFilter.length).toBe(1);
// });
