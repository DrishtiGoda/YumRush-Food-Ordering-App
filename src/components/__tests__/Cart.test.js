import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/mockRestaurantListData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

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
      <Provider store={appStore}>
        <RestaurantMenu data={mockData} />
      </Provider>
    )
  );
  const accordianHeader = screen.getByText("Bestsellers (14)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("fooditems").length).toBe(14);
});
