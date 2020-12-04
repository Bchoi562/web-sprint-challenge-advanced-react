import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
import App from '../App';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);

    const header = screen.getByText(/Checkout Form/i);

    expect(header).toHaveTextContent(/Checkout Form/i);

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText(/First Name:/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/City/i);
    const stateInput = screen.getByLabelText(/State/i);
    const zipInput = screen.getByLabelText(/Zip/i);

    userEvent.type(firstNameInput, "Brian");
    userEvent.type(lastNameInput, "Choi");
    userEvent.type(addressInput, "123 Fake Street");
    userEvent.type(cityInput, "Lakewood");
    userEvent.type(stateInput, "CA");
    userEvent.type(zipInput, "90715");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const newCheckout = screen.queryByText(/Fake Street/i);
    expect(newCheckout).toBeInTheDocument();
});
