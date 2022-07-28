import { useRecoilState } from 'recoil';

import { arrayState  } from "../atoms";

const useUpdatedArray = () => useRecoilState(arrayState);

export default useUpdatedArray;