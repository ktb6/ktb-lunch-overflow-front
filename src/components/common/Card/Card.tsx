import Image from "next/image";
import React from "react";
import styles from "./Card.module.scss";
interface CardProps {
  src: string;
  name: string;
  description: string;
  price: string;
  tags: string[];
  category: string;
}

const Card = ({ src, name, description, price, tags, category }: CardProps) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div className={styles.imageContainer}>
        <Image
          src={src}
          alt="card"
          width={150}
          height={150}
          priority
          className={styles.img}
        />
      </div>
      <div>
        <span className={styles.category}>{category}</span>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p>{price}</p>
        <div style={{ display: "flex", gap: "4px" }}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
