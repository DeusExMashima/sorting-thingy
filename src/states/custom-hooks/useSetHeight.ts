import { useSetRecoilState } from 'recoil';

import { heightState  } from "../atoms";

const useSetHeight = () => useSetRecoilState(heightState);

export default useSetHeight;