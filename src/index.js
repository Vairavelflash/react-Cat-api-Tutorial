import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'tachyons';
import App from './App';
import Card from './Card';
import CardList from './CardList';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <Card /> */}

    <CardList />
  </StrictMode>
);
