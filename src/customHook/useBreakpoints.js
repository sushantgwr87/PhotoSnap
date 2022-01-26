import useMediaQuery from "./useMediaQuery";

export default function useBreakpoints() {
    
    const breakpoints = {
        isXs: useMediaQuery("(max-width: 640px)"),
        isSm: useMediaQuery("(min-width: 641px) and (max-width: 768px)"),
        isMd: useMediaQuery("(min-width: 769px)"),
    };

    return breakpoints;
}