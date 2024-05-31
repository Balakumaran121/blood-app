import { useBloodStore } from "./store/bloodStore";
const App = () => {
  const bloodGroup = useBloodStore((state) => state.bloodGroup);
  const bloodType = useBloodStore((state) => state.bloodType);
  return (
    <div>
      <p>
        App :{bloodGroup} {bloodType}
      </p>
    </div>
  );
};

export default App;
