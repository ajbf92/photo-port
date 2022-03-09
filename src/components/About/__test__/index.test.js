import React from "react";
// The render function will do just what its name implies: "render" the component.
// The cleanup function is used to remove components from the DOM to prevent memory 
// leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// This will ensure that after each test, we won't have any leftover memory data that could give us 
// false results.
afterEach(cleanup);

describe('About component', () => {
    // renders About test
    // first test
    it('renders', () => {
        render(<About />);
    });
    // second test
    // compare snapshot versions of the DOM node structure. 
    // A snapshot is a serialized version of the DOM node structure, enabled by Jest.
    it('matches snapshot DOM node structure', ()=> {
        // the asFragment function will returns a snapshot of the About component
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})