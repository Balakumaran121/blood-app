import { BrowserRouter as Router } from "react-router-dom";
import { useBloodStore } from "./store/bloodStore";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  const bloodGroup = useBloodStore((state) => state.bloodGroup);
  const bloodType = useBloodStore((state) => state.bloodType);
  return (
    <Router>
      <MainRoutes bloodGroup={bloodGroup} bloodType={bloodType} />
    </Router>
  );
};

export default App;
