import { Component } from 'react';
import styles from './Survey.module.css';

export default class Survey extends Component {
  findLabel = (item) => {
    const { data } = this.props;
    const object = data.find((el) => el.name === item);
    return object.label;
  };

  render() {
    const { props } = this.props;
    return (
      <div className={styles.survey__card}>
        <h2 className={styles.card__title}>
          {props.name} {props.surname}
        </h2>
        <ul className={styles.card__body}>
          {Object.keys(props).map((item, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className={styles.body__item}>
                <p className={styles.item__label}>{this.findLabel(item)}</p>
                <p className={styles.item__text}>{props[item]}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
