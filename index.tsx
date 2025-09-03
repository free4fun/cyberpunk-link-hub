
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./src/App";
import UseGTMPageView from "./src/components/UseGTMPageView";
import './src/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <UseGTMPageView />

    <App />
  </React.StrictMode>
);
