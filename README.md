# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Box Shipping Cost Calculator (React + Tailwind)
A single-page React application built using TypeScript and Tailwind CSS.
This project allows users to add boxes, calculate their shipping cost based on destination and weight, and view all saved boxes in a responsive layout.

Features

Add and list boxes (receiver name, destination, color, weight, cost).
Validations for required fields and non-negative weights.
Automatic cost calculation per box based on destination.
Data stored locally using localStorage.
Fully responsive UI (works on mobile, tablet, and desktop).
Simple single-page flow with navigation using React Router.

Tech Stack

React (with TypeScript)
Tailwind CSS for styling
React Router DOM for routing
Vite as build tool
localStorage for data persistence

How Cost Calculation Works

Each country has a currency conversion rate defined in .env.
Example: Shipping from India to Sweden = weight × 7.35 INR.
Cost is automatically calculated and shown in the list.

Validations

All fields (Receiver, Weight, Destination, Color) are required.
If weight is negative, it resets to 0 and displays an error.
If any field is missing, an alert message is shown.

Data Storage

Data is saved locally in the browser using localStorage.
On reload, the saved boxes are automatically loaded into the list.

Responsive Design

Mobile: List collapses into scrollable cards.
Tablet: Compact table layout.
Desktop: Full-width table with spacing.

Example Flow
Open the app.
Enter Receiver Name, Weight, Destination, and Box Color.
Click Save Box.
View the added box in the Box List page with the calculated cost.

Author

Shubham Kumar
Front-End Developer (React.js)
