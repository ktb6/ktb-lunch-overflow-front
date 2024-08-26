import styles from "./ScreenIntro.module.scss";

interface ScreenIntroProps {
  title?: string;
  description: string;
}

const ScreenIntro = ({ title, description }: ScreenIntroProps) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.descriptionContainer}>
        {description.split("\n").map((line, index) => (
          <p key={index} className={styles.description}>
            {line}
          </p>
        ))}
      </div>
    </>
  );
};

export default ScreenIntro;
