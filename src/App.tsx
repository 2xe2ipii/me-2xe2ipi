import { Navbar } from "./components/layout/NavBar";
import { Showcase } from "./features/Showcase";

function App() {
  return (
    <main className="bg-midnight-900 min-h-screen text-gray-300 antialiased selection:bg-accent-blue/30 selection:text-white">
      <Navbar />
      <Showcase />
    </main>
  );
}

export default App;