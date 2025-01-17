import { useEffect, useRef, useState } from 'react';

// Định nghĩa kiểu cho hướng cuộn
type ScrollDirection = 'up' | 'down' | null;

const useScrollHandling = () => {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
    const previousScrollPosition = useRef<number>(0);
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDirection('up');
        }

        previousScrollPosition.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return {
        scrollDirection,
        scrollPosition,
    };
};

export default useScrollHandling;
