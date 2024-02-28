import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Cartitem = () => {
  return (
    <div className = 'p-5 shadow-lg border rounded-md'>
        <div className='flex items-cener'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className= 'w-full h-full object-cover' src="https://m.media-amazon.com/images/I/51f0GB7YskL._SL1100_.jpg" alt="" />
            </div>

            <div className='ml-5 spay-y-1'>
                <p className='font-semibold'>UFM SPECIAL</p>
                <p className='opacity-70 mt-2'>Seller: potty</p>
                <div className="flex space-x-5 items-center text-gray-900 pt-6">
                    <p className='font-semibold'>$10</p>
                    <p className='opacity-50 line-through'>$20</p>
                    <p className='text-green-600 font-semibold'>50% Off</p>
                </div>

                
            </div>
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>

                    <div className='flex items-center space-x-2'>
                        <IconButton sx={{color:"RGB(145 85 253)"}}>
                            <RemoveCircleOutlineIcon/>

                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>3</span>
                        <IconButton sx={{color:"RGB(145 85 253)"}} >
                            <AddCircleOutlineIcon/>
                            

                        </IconButton>
                        

                    </div>

                    <div>
                        <Button sx={{color:"RGB(145 85 253)"}}>
                            Remove

                        </Button>
                    </div>

                </div>
    </div>
  )
}

export default Cartitem