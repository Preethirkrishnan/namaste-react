import RestaurantCard, {withVegLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


it("should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Pizza Paradise");

    expect(name).toBeInTheDocument();
});

//HOC test case
it("should render restaurantCard with veg label", () => {
    const VegRestaurantCard = withVegLabel(RestaurantCard);

    render(<VegRestaurantCard resData={MOCK_DATA} />);

    const label = screen.getByText("Veg");

    expect(label).toBeInTheDocument();
});