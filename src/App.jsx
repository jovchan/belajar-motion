import "./App.css";
import Sect1 from "./component/section1.tsx";
import Sect2 from "./component/section2.jsx";
import Lenis from "lenis";

function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <Sect1 />
      <Sect2 />
    </>
  );
}

export default App;
