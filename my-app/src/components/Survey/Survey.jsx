import styles from './Survey.module.css';

export const Survey = ({ props, data }) => {
  const findLabel = (item) => {
    const object = data.find((el) => el.name === item);
    return object.label;
  };

  const createKey = () => {
    const key = new Date();
    return key.getTime();
  };

  return (
    <div className={styles.survey__card}>
      <h2 className={styles.card__title}>
        {props.name} {props.surname}
      </h2>
      <ul className={styles.card__body}>
        {Object.keys(props)
          .slice(2)
          .map((item) => {
            return (
              <li key={createKey()} className={styles.body__item}>
                <p className={styles.item__label}>{findLabel(item)}</p>
                <p className={styles.item__text}>{props[item]}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
