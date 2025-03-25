"use client";

import { useState, useEffect } from "react";

const useImageLoader = (src) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState(src);

  const fetchImage = () => {
    setIsLoading(true);
    fetch(src)
      .then((res) => {
        setIsLoading(false);
        setError(null);
        setImageUrl(src);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return { isLoading, error, imageUrl, retryImage: fetchImage };
};

export default useImageLoader;
