import { RecoilRoot } from 'recoil';

import Visualizer from './components/Visualizer';
import './styles';

const App: React.FC = (): React.ReactElement => {
  return (
      <RecoilRoot>
        <Visualizer />
      </RecoilRoot>
  );
}

export default App;
