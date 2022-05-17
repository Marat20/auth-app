import React from "react";
import * as ReactDOM from 'react-dom/client';
import { App } from "../components/App";
import './styles.css';
import { Provider } from 'react-redux';
import { store } from '../redux'

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);