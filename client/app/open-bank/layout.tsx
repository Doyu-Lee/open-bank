import styles from './page.module.css'

const Layout = ({children}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <div className={styles.mainTitled}>테스트</div>
      {children}
    </>
    
  )
}

export default Layout;