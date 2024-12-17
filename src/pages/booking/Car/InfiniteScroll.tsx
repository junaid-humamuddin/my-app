import React, { useState, useEffect, useCallback } from "react";

const InfiniteScrollLocal = () => {
  const localData = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`); // Mock local data
  const [visibleData, setVisibleData] = useState<string[]>([]); // Data currently visible
  const [page, setPage] = useState(1); // Page number
  const itemsPerPage = 5; // Items to load per scroll

  // Load data for the current page
  const loadMoreData = useCallback(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    const nextData = localData.slice(startIndex, endIndex);
    setVisibleData((prevData) => [...prevData, ...nextData]);
  }, [page, localData]);

  // Load more when page changes
  useEffect(() => {
    loadMoreData();
  }, [page, loadMoreData]);

  // Scroll handler to detect bottom
  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5 && visibleData.length < localData.length) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [visibleData.length, localData.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <h1>Infinite Scroll with Local Data</h1>
      <ul>
        {visibleData.map((item, index) => (
          <li key={index} className="testbox">{item}</li>
        ))}
      </ul>
      {visibleData.length === localData.length && <p>No more data</p>}
    </div>
  );
};

export default InfiniteScrollLocal;