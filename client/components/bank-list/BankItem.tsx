import { useRouter } from 'next/navigation';
import styles from './bankItem.module.css';

// interface BankItemProps = {
//   bankBrand: string;
//   bankAlias: string;
// }

const BankItem = ({ bankBrand, bankAlias, bankNum }: any) => {
  const router = useRouter();

  const handleMoveToBalancePage = (fintech_use_num: string) => () => {
    router.push(`/open-bank/balance?finNum=${fintech_use_num}`);
  };

  return (
    <article className={styles.bankItemContainer}>
      <div>
        <div className={styles.bankAlias}>{bankAlias}</div>
        <div>{bankBrand}</div>
        <div className={styles.bankNum}>{bankNum}</div>
      </div>
      <div className={styles.bankInfoBtnBox}>
        <button className={styles.bankInfoBtn} onClick={handleMoveToBalancePage(bankNum)}>
          잔액조회
        </button>
        <button className={styles.bankInfoBtn}>QR코드 생성</button>
      </div>
    </article>
  );
};

export default BankItem;
