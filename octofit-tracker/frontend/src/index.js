
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Log the codespace backend API base for debugging
console.log('Codespace API base:', `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/`);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
