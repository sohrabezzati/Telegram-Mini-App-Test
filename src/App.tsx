
import './App.css';

const App: React.FC = () => {
  return (
   
    <div className="iframe-container" style={{ height: '100vh', width: '100vw' }}>
     
     <div>
      <h1>New Code Deployed</h1>
      </div>
      <iframe
        src="/api/"
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
