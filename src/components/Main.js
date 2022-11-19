import React from 'react'

function Main() {
  return (
    <div className='main'>
    <p className='spending'>Spending - Last 7 days</p>

<div className='weeks'>
<div className='mon'></div>
<div className='tue'></div>
<div className='wed'></div>
<div className='thu'></div>
<div className='fri'></div>
<div className='sat'></div>
<div className='sun'></div>

</div>
<div className='data'>
<p className='same'>mon</p>
<p className='same'>tue</p>
<p className='same'>wes</p>
<p className='same'>thu</p>
<p className='same'>fri</p>
<p className='same'>sat</p>
<p className='same'>sun</p>
</div>
<hr/>
 <div className='footer'>
 <div className='left'>
<p className='total'>Total this month</p>
<p className='total_amount'>$478.33</p>
</div>

<div className='right'>
<p className='prcnt'>+2.4%</p>
<p className='last_month'>from last month</p>
</div>
</div>

    </div>
  )
}

export default Main
