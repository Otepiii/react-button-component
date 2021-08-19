import logo from './logo.svg';
import './App.css';
import {TestButton} from './components/Buttons/TestButton'
import styled from 'styled-components';

const ModifiedTestButton = styled(TestButton)`
  background-color: orange;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModifiedTestButton>Child</ModifiedTestButton>
      </header>
    </div>
  );
}

export default App;
