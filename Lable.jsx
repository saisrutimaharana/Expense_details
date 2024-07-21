// import React from 'react'

// export default function Lable ()  {
//   return (
//     <div>
//         {LableComponent}
//     </div>
//   )
// }




// import { Colors } from 'chart.js'
import React from 'react'

const  obj=[
    {
        type:'Savings',
        Color:'#f9c74f',
        percent:45
    },
    {
        type:'Investment',
        Color:'rgb(255, 205, 86)',
        percent:20
    },
    {
        type:'Expence',
        Color:'rgb(54, 162, 235)',
        percent:10
    },
]
export const Lable = () => {
  return (
    <div>
        {obj.map((v,i)=><LableComponent key={i} data={v}></LableComponent>)}
    </div>
  )
}
function LableComponent({data}){
    if(!data)return <></>;
    return(
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{bacgraound:data.Color??'#f9c74f'}}></div>
                <h3 className="text-md">{data.type??''}</h3>
            </div>
            <h3 className="font-bold">{data.percent ?? 0}%</h3>
        </div>
    )
}
