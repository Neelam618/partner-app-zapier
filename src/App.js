import PageLayout from './components/IntegrationHome/PageLayout'
import 'antd/dist/antd.css';
import Home from './components/Home';
import CreateIntegration from './components/CreateIntegration';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <CreateIntegration />
      {/* <PageLayout /> */}
    </div>
  );
}

export default App;
