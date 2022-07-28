import { SetterOrUpdater, useSetRecoilState } from 'recoil';

import { swapState  } from "../atoms";

const useSetSwap = (): SetterOrUpdater<SwapState> => useSetRecoilState(swapState);

export default useSetSwap;