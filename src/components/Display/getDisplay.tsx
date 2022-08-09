import AnimationDisplay from "./AnimationDisplay";
import NonAnimationDisplay from "./NonAnimationDisplay";

const getDisplay = (isRunning: boolean, isSorted: boolean, hasStarted: boolean) => {
    const START_NONANIMATION = !isRunning && !hasStarted && !isSorted;
    const END_OF_ANIMATION = !isRunning && !hasStarted && isSorted;

    if (START_NONANIMATION) {
        return <NonAnimationDisplay start />
    }

    if (END_OF_ANIMATION) {
        return <NonAnimationDisplay />
    }
    
    return <AnimationDisplay />
}

export default getDisplay;