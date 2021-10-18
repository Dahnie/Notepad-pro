import Mainpage from "./Mainpage";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="container grid grid-cols-12 w-full bg-white h-screen">
      <Sidebar />
      <Mainpage />
    </div>
  );
}

export default App;
