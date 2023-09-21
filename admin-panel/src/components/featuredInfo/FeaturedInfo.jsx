import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$1000</span>
            <span className='featuredMoneyRate'>-11.0 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$1200</span>
            <span className='featuredMoneyRate'>+14.0 <ArrowUpward className='featuredIcon negative'/></span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$200</span>
            <span className='featuredMoneyRate '>-23.0 <ArrowDownward className='featuredIcon'/></span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
