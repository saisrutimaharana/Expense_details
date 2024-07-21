import React from 'react'
import 'boxicons'
const obj = [
    {
        name: 'Savings',
        Color: '#f9c74f',
    },
    {
        name: 'Investment',
        Color: 'rgb(255, 205, 86)',
    },
    {
        name: 'Expence',
        Color: 'rgb(54, 162, 235)',
    },
]
export const List = () => {
    return (
        <div className="flex flex-col py-6 gap-3">
            <h1 className='py-4 font-bold text-xl'>History</h1>
            {obj.map((v,i)=><Transaction key={i} catagory={v}></Transaction>)}
            
        </div>
    )
}

function Transaction({ catagory }) {
    if (!catagory) return null;
    return (
        <div className="item flex justify-center bg-gray-50 py-3 rounded-r" style={{borderRight:`8px solid ${catagory.Color ?? "#e5e5e5"}`}}>
            <button className='px-3'><box-icon size="15px" color={catagory.Color ?? "#e5e5e5"} name='trash'></box-icon></button>
            <span className='block w-full'>{catagory.name??''}</span>
        </div>
    )
}