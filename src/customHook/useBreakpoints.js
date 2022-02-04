import useMediaQuery from "./useMediaQuery";

export default function useBreakpoints() {
    
    const breakpoints = {
        isXs: useMediaQuery("(max-width: 640px)"),
        isSm: useMediaQuery("(max-width: 600px)"),
        isMd: useMediaQuery("(min-width: 769px)"),
    };

    return breakpoints;
}