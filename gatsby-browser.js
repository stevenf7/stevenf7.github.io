/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// Store the current pathname to detect page changes
let currentPathname = typeof window !== 'undefined' ? window.location.pathname : '/';

// Store a flag to track if we need to regenerate the background grid
window.shouldRegenerateBackgroundGrid = true;

// This function is called when a page is created
export const onRouteUpdate = ({ location }) => {
  // Check if the pathname has changed
  if (location.pathname !== currentPathname) {
    // Update the current pathname
    currentPathname = location.pathname;
    
    // Set the flag to regenerate the background grid
    window.shouldRegenerateBackgroundGrid = true;
  }
};

// This function is called when the initial render is complete
export const onInitialClientRender = () => {
  // Set the flag to regenerate the background grid
  window.shouldRegenerateBackgroundGrid = true;
};
