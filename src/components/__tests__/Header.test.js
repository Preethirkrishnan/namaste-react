import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../store/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import reducer from "../../store/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const mockStore = configureStore({
    reducer: {
        cart: () => ({
            items: []
        })
    }
});

it("Should render header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});
 
    expect(logoutButton).toBeInTheDocument();
});

it("Should check cart item is 0 after rendering", () => {
    render(
        <BrowserRouter>
            <Provider store={mockStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(0);

    expect(cartItems).toBeInTheDocument();
});