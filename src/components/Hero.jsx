import HeroImage from '../assets/hero-desktop.png'
import './styles/hero.styles.css'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-left'>
        <h1 className='title'>
          <span className='title-first'>Make</span> remote work
        </h1>
        <p className='body-copy'>
          Get your team in sinc, no matter your location, Streamline processes,
          create team rituals, and watch prpductivity soar.
        </p>
        <button className='hero-cta'>Learn more</button>
      </div>
      <div className='hero-right'>
        <img src={HeroImage} alt='hero' className='hero-image' />
      </div>
    </div>
  )
}

export default Hero
