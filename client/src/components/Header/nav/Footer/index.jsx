import styles from './style.module.scss';
import Magnetic from '../../../../common/Magnetic';

export default function index() {
  return (
    <div className={styles.info}>
        <div>
          <h3>Socials</h3>
              <span>
                  <Magnetic><p>GitHub</p></Magnetic>
                  <Magnetic><p>Instagram</p></Magnetic>
                  <Magnetic><p>Dribble</p></Magnetic>
                  <Magnetic><p>LinkedIn</p></Magnetic>
              </span>
        </div>
    </div>
  )
}
