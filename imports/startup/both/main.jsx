import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { renderWithSSR } from "meteor/communitypackages:react-router-ssr";
import { App } from '/imports/ui/App';

// Meteor.startup(() => {
//   // const container = document.getElementById('react-target');
//   // const root = createRoot(container);
//   // root.render(<App />);
//
//   // const container = document.getElementById('react-target');
//   // ReactDOM.hydrateRoot(container, <App />);
//
//   const AppRoutes = [
//     { path: "/home", element: <App /> },
//   ];
//   renderWithSSR(AppRoutes, {
//     renderTarget: 'react-target',
//   });
// });
const AppRoutes = [
  { path: "/home", element: <App /> },
];
// renderWithSSR(AppRoutes, {
//   renderTarget: 'react-target',
// });
renderWithSSR(AppRoutes);
// const container = document.getElementById('react-target');
// ReactDOM.hydrateRoot(container, <App />);