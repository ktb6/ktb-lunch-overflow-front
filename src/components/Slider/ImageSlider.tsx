"use client";
import React from "react";
import SkeletonImage from "@/components/Skeleton/SkeletonImage";
import styles from "./ImageSlider.module.scss";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
  slideOption?: "default" | "reverse";
}

const ImageSlider = ({ images, slideOption = "default" }: ImageSliderProps) => {
  const containerClassName = `${styles.sliderContainer} ${
    slideOption === "reverse" ? styles.reverse : ""
  }`;

  return (
    <div className={containerClassName}>
      <div className={styles.sliderWrapper}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <SkeletonImage
              src={image.src}
              alt={image.alt}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
