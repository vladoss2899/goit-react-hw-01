import Profiler from "../componets/Profile/Profile";
import userData from "../userData.json";

export default function App() {
  return (
    <>
      <Profiler
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}
