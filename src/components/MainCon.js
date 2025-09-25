import Tickets from "./Tickets";
import StatusBar from "./StatusBar";

function MainCon() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-2">
      <Tickets />
      <StatusBar />
    </section>
  );
}

export default MainCon;
