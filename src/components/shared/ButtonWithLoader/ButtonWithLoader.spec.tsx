import { render, screen } from '@testing-library/react';
import ButtonWithLoader from './ButtonWithLoader';

describe('<ButtonWithLoader /> tests', () => {
  const BUTTON_TEXT = 'Testing the button';

  it('should render the button properly', () => {
    render(<ButtonWithLoader loading={false}>{BUTTON_TEXT}</ButtonWithLoader>);

    const ButtonElement = screen.getByText(BUTTON_TEXT);

    expect(ButtonElement).not.toBeDisabled();
    expect(ButtonElement).toBeInTheDocument();
  });

  it('should render the loading version of the button', () => {
    render(
      <ButtonWithLoader loading={true} disabled={true}>
        {BUTTON_TEXT}
      </ButtonWithLoader>
    );

    const ButtonElement = screen.getByRole('button');
    const ButtonWithText = screen.queryByText(BUTTON_TEXT);
    const SpinnerElement = screen.getByTestId('buttonWithLoader--spinner');

    expect(ButtonElement).toBeDisabled();
    expect(ButtonWithText).not.toBeInTheDocument();
    expect(SpinnerElement).toBeInTheDocument();
  });
});
