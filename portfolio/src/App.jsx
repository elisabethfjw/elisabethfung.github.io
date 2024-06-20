
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Header />
      <Experience />
      <Projects />
    </div>
  );
}

export default App
