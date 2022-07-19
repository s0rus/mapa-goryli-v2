import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('<Header /> tests', () => {
  it('header should render', () => {
    render(<Header />);

    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
