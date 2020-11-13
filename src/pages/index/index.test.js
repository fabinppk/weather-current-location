import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Index from '_pages/index';

it('renders Index', () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    );
    expect(getByTestId('app')).toBeInTheDocument();
});
