import React from 'react'
import HeroBg  from '../../assets/images/hero-bg.png'
// import StaticsImages from '../Utils'
import { data } from '../../components/Utils/showcaseStatic'
import StaticsImages from '../Statics/Statics'
const Right = () => {
  return (
    <div className="py-2 flex-1 flex items-center relative">
      <img src={HeroBg} alt="" className='ml-auto lg:h-[550px] h-[420px] w-full lg:w-auto' />
      <StaticsImages items = {data} />
    </div>
  )
}

export default Right