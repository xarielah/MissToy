import { useEffect, useState } from "react";

const useDebounce = (func, delay = 300) => {
    const [debouncedValue, setDebouncedValue] = useState();

    const debounce = (args) => {
        setDebouncedValue(args);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            func(debouncedValue);
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [debouncedValue]);

    return debounce;
};

export default useDebounce;