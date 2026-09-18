import StationStatus from './components/StationStatus';
import ModulesList from './components/ModulesList';
import AlertsList from './components/AlertsList';

function App() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">⚡ Orbital Station Control Panel</h1>

      <div className="dashboard-grid">
        <StationStatus />
        <ModulesList />
        <AlertsList />
      </div>
    </div>
  );
}

export default App;
