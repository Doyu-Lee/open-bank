import { useRouter } from 'next/navigation';
import BackBtnIcon from '../../public/icon/back.svg';
import styles from './backBtn.module.css';

export default function BackBtn() {
  const router = useRouter();

  const handleBackBtnClick = () => {
    router.back();
  };

  return (
    <div className={styles.backBtnBox}>
      <button className={styles.backBtn} type='button' aria-label='뒤로 가기' onClick={handleBackBtnClick}>
        <BackBtnIcon width='25' fill='#b8b7c2' aria-hidden={true} />
      </button>
    </div>
  );
}
