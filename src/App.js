import SkipSelection from './pages/SkipSelection';
import styles from './App.module.css';

function App() {
  return (
      <div className={`${styles.App} min-h-screen bg-gray-100 dark:bg-gray-900`}>
        <SkipSelection />
      </div>
  );
}

export default App;
