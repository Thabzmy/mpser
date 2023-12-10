import './App.css';
import ManagingAdd from './components/Managing/ManagingAdd/ManagingAdd';
import ManagingTable from './components/Managing/ManagingTable/ManagingTable';

function App() {
  return (
    <div className="App">
      <h1>Managing Table</h1>
      <ManagingAdd />
      <ManagingTable />
    </div>
  );
}

export default App;
