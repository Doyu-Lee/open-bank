import Lottie from 'react-lottie-player';
import loadingAnimation from '@/public/animation/loading.json';
import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <Lottie loop animationData={loadingAnimation} play style={{ width: 160, height: 160 }} />{' '}
    </div>
  );
}
