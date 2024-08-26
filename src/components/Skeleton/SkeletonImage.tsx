"use client";
import React, { useState } from "react";
import Image from "next/image";
import Skeleton from "@/components/Skeleton";
import styles from "./SkeletonImage.module.scss";

interface SkeletonImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function SkeletonImage({
  src,
  alt,
  width,
  height,
}: SkeletonImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={styles.container} style={{ width, height }}>
      {isLoading && <Skeleton width={width} height={height} />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
        unoptimized
        priority
        style={{ display: isLoading ? "none" : "block" }}
        className={styles.image}
      />
    </div>
  );
}
