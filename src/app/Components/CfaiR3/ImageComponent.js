import React from "react";
import useImageLoader from "./CustomHooks/useImageLoader";
import Image from "next/image";

const ImageComponent = ({ imageSrc, width, height, imageAlt }) => {
  const { isLoading, error, imageUrl, retryImage } = useImageLoader(imageSrc);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error while loading. <button onClick={retryImage}>Retry</button>
      </div>
    );
  }

  return <Image src={imageUrl} alt={imageAlt} width={width} height={height} />;
};

export default ImageComponent;
