import styles from './SpendDay.module.sass';

export default function SpendDay(props) {
  const sizeBar = props.amount * 3;
  let style = { height: sizeBar.toString() + 'px' }

  if (props.now) {
    style = { ...style, backgroundColor: 'hsl(186, 34%, 60%)'}
  }

  return (
    <div className={styles.container}>
      <div className={styles.amount}>
        <div className={styles.value}>${props.amount}</div>
      </div>
      <div className={styles.bar} style={style}></div>
      <p>{props.day}</p>
    </div>
  );
}
