import MatchTracker from "./pages/match-tracker";
import { QueryProvider, ThemeProvider } from "./provider";

function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <MatchTracker />
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
