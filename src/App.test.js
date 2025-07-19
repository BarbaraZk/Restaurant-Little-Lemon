import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

// Przykładowe mocki dla propsów
const mockAvailableTimes = {
  availableTimes: ["18:00", "19:00", "20:00"]
};

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

test("Renders the BookingForm with heading and submit button", () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      SubmitForm={mockSubmitForm}
    />
  );

  // Sprawdź obecność etykiety "Choose Date:"
  const dateLabel = screen.getByLabelText("Choose Date:");
  expect(dateLabel).toBeInTheDocument();

  // Sprawdź obecność opcji "18:00"
  const timeOption = screen.getByText("18:00");
  expect(timeOption).toBeInTheDocument();

  // Sprawdź obecność przycisku wysyłania formularza
const submitButton = screen.getByDisplayValue(/make your reservation/i);
expect(submitButton).toBeInTheDocument();
});
