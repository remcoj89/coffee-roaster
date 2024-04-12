//Styles
import Styles from './seperator.module.css';

export default function seperatorComponent() {
  return (
    <div className={Styles.separationLine}>
      <div className={Styles.circle} />
      <div className={Styles.line} />
      <div className={Styles.circle} />
      <div className={Styles.line} ></div>
      <div className={Styles.circle} />
    </div>
  )
}
