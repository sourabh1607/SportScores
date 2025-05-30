import MatchList from "./components/MatchList";

export default function App() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col">
      <header className="p-6 bg-green-600 shadow-md text-white text-center text-2xl font-bold">
        Soccer Match Tracker
      </header>
      <main className="flex-grow">
        <MatchList />
      </main>
      <footer className="p-4 text-center text-gray-500 text-sm">
        Powered by Football-Data.org API
      </footer>
    </div>
  );
}
