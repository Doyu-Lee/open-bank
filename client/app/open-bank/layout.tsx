import styles from './page.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className={styles.mainTitle}>오픈뱅킹 테스트</div>
      {children}
    </div>
  );
};

export default Layout;
