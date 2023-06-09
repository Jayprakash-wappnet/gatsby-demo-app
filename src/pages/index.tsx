// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";

// Step 2: Define your component
const Index: React.FC = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head: React.FC = () => <title>Gatsby Page</title>;

// Step 3: Export your component
export default Index;
