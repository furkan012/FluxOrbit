// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FluxOrbit title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FluxOrbit/i);
    expect(titleElement).toBeInTheDocument();
});
