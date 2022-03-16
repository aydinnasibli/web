import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
            <title>GameAbout</title>

            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                Categories
            </h3>
            {categories.map((category) => (

                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className='py-2.5 px-5 mr-2 mb-2 text-base font-medium text-white bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer'>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories