
import classes from './Layout.module.css';

const Layout = prop => {
  return(
    <main className={classes.main}>
      {prop.children}
    </main>
  )
}

export default Layout;