import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';


const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://m.media-amazon.com/images/I/51f0GB7YskL._SL1100_.jpg" alt=""/>
                    <div className='ml-5 space-y-2'>
                        <p>
                            <p className=''>UFM SPECIAL</p>
                            <p className='opacity-50 text-xs font-semibold'>Size:XXXXXL</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Pink</p>
                        </p>
                    </div>

                </div>
            </Grid>

            <Grid item xs={2}>
                <p>$10</p>
            </Grid>

            <Grid item xs={4}>
                {true && <p>
                    <AdjustIcon sx={{width:'15px',height:'15px'}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered On March 03
                    </span>
                </p>}
                <p className='text-xs'>
                    Your Item Has Been Delivered
                </p>
                {false && <p>
                    <span>
                        Expected Delivery on March 03
                    </span>
                </p>}
            </Grid>

            
        </Grid>
    </div>
  )
}

export default OrderCard