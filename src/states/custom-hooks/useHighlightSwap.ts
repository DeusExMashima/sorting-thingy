import { useRecoilValue } from 'recoil';

import { swapState  } from "../atoms";

const useSetSwap = () => useRecoilValue(swapState);

export default useSetSwap;