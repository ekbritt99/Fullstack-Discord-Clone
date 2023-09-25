import { useEffect, useState } from "react";

export const useOrigin = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[]);

    //if window is not undefined and we have the location.origin, then render that; otherwise render empty string
    const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

    if (!mounted) {
        return "";
    }

    return origin;

}