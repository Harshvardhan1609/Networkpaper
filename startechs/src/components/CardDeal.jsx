import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CarDeal = () =>  (
    
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} ml-5`}>Find a better file manager and<br className="sm:block hidden" />authentication in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[670px] text-[24px] ml-5 mt-5`}>Easy access of files while maintaing confidentiality, file access has never been easier </p>
        <Button styles="mt-10 ml-5" />
      </div>
      <div className={layout.sectionImg}>
          <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )


export default CarDeal