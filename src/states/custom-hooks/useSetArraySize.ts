import { useSetRecoilState } from 'recoil';

import { heightState  } from "../atoms";

const useSetArraySize = () => useSetRecoilState(heightState);

export default useSetArraySize;