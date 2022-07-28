import { useSetRecoilState } from 'recoil';

import { widthState  } from "../atoms";

const useSetWidth = () => useSetRecoilState(widthState);

export default useSetWidth;