import React, { use } from 'react'

function Card({username,btnText}){
    console.log(username);
    
    return(
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h1>
<p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.{btnText}</p>
</a>

    )
}

export default Card