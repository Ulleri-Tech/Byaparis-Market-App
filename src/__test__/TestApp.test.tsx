import { render, screen,  } from "@testing-library/react";
import App from "../App";

test("renders learn react link", async() => {
  render(<App />);

  // the element isn't available yet, so wait for it:
const mainTitle = await screen.findByText(
  /Welcome to Byapari's MarketPlace/i,
  )

  // we want to wait until an assertion passes
// await waitFor(() =>
// expect(mockFn).toHaveBeenCalledWith('some arg'),

  // render(
  //   <label>
  //     Remember Me <input type="checkbox" />
  //   </label>
  // );
  // const checkboxInput = screen.getByRole("checkbox", {
  //   name: /Remember me/i,
  // });
});
