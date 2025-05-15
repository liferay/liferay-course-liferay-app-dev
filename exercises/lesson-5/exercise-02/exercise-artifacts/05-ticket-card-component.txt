import React, { useState, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import './assets/style.css';
import TicketsList from './assets/components/TicketsList';
// Custom Element class
class CustomElement extends HTMLElement {
    connectedCallback() {
        // Ensure the React component is rendered only once
        if (!this.rendered) {
            // Create a container if it doesn't exist
            const container = document.createElement('div');
            container.id = 'tickets-root';
            this.appendChild(container);
            // Render the React component into the container
            ReactDOM.render(<TicketsList />, container);
            this.rendered = true;
        }
    }
    disconnectedCallback() {
        // Clean up the React component when the element is removed
        const container = this.querySelector('#tickets-root');
        if (container) {
            ReactDOM.unmountComponentAtNode(container);
        }
        this.rendered = false;
    }
}
// Define the custom element
const ELEMENT_NAME = 'clarity-ticketing-ui';
if (!customElements.get(ELEMENT_NAME)) {
    customElements.define(ELEMENT_NAME, CustomElement);
}
// Automatically add the custom element to the page if not already present
document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector(ELEMENT_NAME)) {
        const customElement = document.createElement(ELEMENT_NAME);
        document.body.appendChild(customElement);
    }
});