import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { cn } from "./utils";

const styles = {
  container: "min-h-dvh flex items-center justify-center",
  content: "max-w-screen-xl mx-auto p-8 text-center",
  logosContainer: "mb-8",
  logo: cn(
    "h-24 p-6",
    "will-change-auto",
    "transition-all duration-300",
    "inline-block",
  ),
  viteLogo: "hover:drop-shadow-[0_0_2em_#646cffaa]",
  reactLogo: cn(
    "hover:drop-shadow-[0_0_2em_#61dafbaa]",
    "animate-spin motion-reduce:animate-none",
  ),
  title: "text-5xl leading-tight mb-8",
  card: "p-8 mb-8",
  button: cn(
    "px-5 py-3",
    "text-base font-medium",
    "bg-gray-900",
    "border border-transparent rounded-lg",
    "cursor-pointer",
    "transition-colors duration-250",
    "hover:border-blue-500",
    "focus:outline-4 focus:outline-auto focus:-outline-offset-4",
  ),
  description: "mt-4",
  readTheDocs: "text-gray-500",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logosContainer}>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={viteLogo}
              className={cn(styles.logo, styles.viteLogo)}
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={reactLogo}
              className={cn(styles.logo, styles.reactLogo)}
              style={{ animationDuration: "20s" }}
              alt="React logo"
            />
          </a>
        </div>
        <h1 className={styles.title}>Vite + React</h1>
        <div className={styles.card}>
          <button
            className={styles.button}
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className={styles.description}>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className={styles.readTheDocs}>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
