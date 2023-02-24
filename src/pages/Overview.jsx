import React from 'react'

export default function Overview() {
  return (<>
    <div className='flex space-x-5'>
            <div className='w-1/3 border p-5'>
                <div className='font-bold'>Total Robots</div>
                <div className='text-3xl font-bold'>2</div>
            </div>
            <div className='w-1/3 border p-5'>
                <div className='font-bold'>Total Tasks</div>
                <div className='text-3xl font-bold'>2</div>
            </div>
            <div className='w-1/3 border p-5'>
                <div className='font-bold'>Total Robots</div>
                <div className='text-3xl font-bold'>2</div>
            </div>
        </div>
        <table className='w-full mt-5 border'>
            <tr className='border'>
                <th className='border p-2'>Name</th>
                <th className='border p-2'>Status</th>
                <th className='border p-2'>Actions</th>
            </tr>
            <tr>
                <td className='border p-2'>Robot 1</td>
                <td className='border p-2'><input type='checkbox'/></td>
                <td className='border p-2'></td>
            </tr>
        </table>
  </>)
}
