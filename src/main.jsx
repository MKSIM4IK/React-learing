import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const google = (
  <a href="https://www.google.com">
    Go to Google
  </a>
);

const apple = (
  <a href="https://www.apple.com">
    Go to Apple Website
  </a>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {google},
    {apple}
  </StrictMode>
);