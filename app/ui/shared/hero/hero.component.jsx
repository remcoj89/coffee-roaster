import Styles from './hero.module.css';


const HeroComponent = ({ backgroundImage, children }) => {

  return (
    <div className="container">
      <header className={Styles.header} style={{ backgroundImage: `url(${backgroundImage.src})` }}>
          {children}
      </header>
    </div>
  )
}

export default HeroComponent;
