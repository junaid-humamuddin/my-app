import React, { useState, useEffect, useRef, useCallback } from "react";
import cars from '../../../data/cars.json';

const LazyInfiniteScroll = () => {
    const localData = cars;
    const [visibleData, setVisibleData] = useState<string[]>([]); // Data currently visible
    const [page, setPage] = useState(1); // Page number
    const itemsPerPage = 5; // Items to load per scroll
    const observerRef = useRef<HTMLDivElement | null>(null); // Ref for observing the last element

    // Load data for the current page
    const loadMoreData = useCallback(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = page * itemsPerPage;

        const nextData = localData.slice(startIndex, endIndex);
        setVisibleData((prevData:any) => [...prevData, ...nextData]);
         
    }, [page, localData]);

    // Observer callback to detect intersection
    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setPage((prevPage) => prevPage + 1);
            }
        },
        []
    );

    useEffect(() => {
        loadMoreData();
    }, [page, loadMoreData]);

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, { threshold: 1.0 });
        if (observerRef.current) observer.observe(observerRef.current);

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, [handleObserver]);

    return (
        <div>
            <h1>Lazy Loaded Infinite Scroll</h1>
            <ul>
                {visibleData.map((item:any, index) => (
                    <li className="testbox" key={index}>{item.id}</li>
                ))}
            </ul>
            {visibleData.length < localData.length && (
                <div ref={observerRef} style={{ height: "50px", backgroundColor: "lightgray", textAlign: "center" }}>
                    Loading more...
                </div>
            )}
            {visibleData.length === localData.length && <p>No more data</p>}
        </div>
    );
};

export default LazyInfiniteScroll;
