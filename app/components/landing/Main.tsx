import React from 'react'
import HeroTitle from './HeroTitle'
import Search from './Search'
import Card from './Card'
import HeroPara from './HeroPara'
import TryAddress from './TryAddress'
import FeatureCards from './FeatureCards'

const Main = () => {
  return (
    <div
    className=" flex justify-center py-9 px-4 lg:px-0">
      <div
      className="py-10 h-fit lg:w-3xl  border bg-slate-900/40 backdrop-blur-2xl rounded-4xl ">
        <HeroTitle />
       <HeroPara/>
      <Search/>
      <TryAddress/>
      <FeatureCards/>
    </div>
    </div>
  )
}

export default Main