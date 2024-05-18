import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Web3Provider } from './context/Web3Context';
import { UserProvider } from './context/UserContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <ChakraProvider>
        <Web3Provider>
          <UserProvider>
            <App />
          </UserProvider>
        </Web3Provider>
      </ChakraProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}

reportWebVitals();
