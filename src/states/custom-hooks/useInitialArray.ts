import { useRecoilValue } from 'recoil';

import { initialArray  } from "../selectors";

const useInitialArray = () => useRecoilValue(initialArray);

export default useInitialArray;