import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Adds custom Jest matchers for DOM elements
import App from '../App.jsx';

describe('App', () => {
    it('renders "Vite + Reactooooo"', () => {
        render(<App />);
        expect(screen.getByText('Vite + Reactooooo')).toBeInTheDocument();
    });
});
