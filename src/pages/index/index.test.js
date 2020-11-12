import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '_redux/';
import Index from '_pages/index';

it('renders Index', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Index />
            </BrowserRouter>
        </Provider>
    );
    expect(getByTestId('app')).toBeInTheDocument();
});
