import { Nav } from "./components/index";
import { SidebarProvider } from "./components/ui/sidebar";
import { CTA } from "./components/index";

import LandingPage from "./components/LandingPage";

import "./App.css";

function App() {
  return (
    <>
      <div className="h-full w-full  flex-col">
        <SidebarProvider>
          <Nav />
          <LandingPage />
        </SidebarProvider>
        <CTA />
      </div>
    </>
  );
}

export default App;
