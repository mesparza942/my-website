import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-slate-200 dark:bg-slate-900 h-screen w-full p-20 transition-colors duration-500 ease-in-out">
      <div className="flex flex-col items-start h-full">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
