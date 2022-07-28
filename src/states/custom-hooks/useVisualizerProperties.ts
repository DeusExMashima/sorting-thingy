import { useRecoilValue } from 'recoil';

import { visualizerProperties  } from "../selectors";

const useVisualizerProperties = () => useRecoilValue(visualizerProperties);

export default useVisualizerProperties;