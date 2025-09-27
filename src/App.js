import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainCon from "./components/MainCon";
import Hero from "./components/Hero";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <MainCon />
      <Footer />

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "#4ade80",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "#4ade80",
            },
          },
          error: {
            style: {
              background: "#f87171",
              color: "white",
            },
          },
        }}
      />
    </main>
  );
}

export default App;
