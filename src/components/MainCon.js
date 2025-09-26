import Tickets from "./Tickets";
import StatusBar from "./StatusBar";

function MainCon() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-7 gap-2 bg-gray-100">
      <Tickets />
      <StatusBar />
    </section>
  );
}

export default MainCon;
