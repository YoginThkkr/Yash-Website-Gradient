import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import ResumeSection from "./components/ResumeSection";
import WorksSection from "./components/WorksSection";
import ToolkitSection from "./components/ToolkitSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen font-sans text-white">
      {/* Fixed backdrop: blue with a coral glow and fine grain (see index.css) */}
      <div className="page-backdrop" aria-hidden="true">
        <div className="page-grain" />
      </div>
      <Navbar />
      <main>
        <IntroSection />
        <ResumeSection />
        <WorksSection />
        <ToolkitSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
