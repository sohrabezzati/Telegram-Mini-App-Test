
import './App.css';

const App: React.FC = () => {


  
  return (
    <div className="iframe-container" style={{ height: '100vh', width: '100vw' }}>
      <iframe
        src="http://192.168.10.2"
        title="Local Site"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
};

export default App;
