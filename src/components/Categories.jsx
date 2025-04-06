import React from 'react'
import batter from '../assets/images/category/batter.png'
import beverages from '../assets/images/category/Beverages.png'
import dairy from '../assets/images/category/dairy.png'
import fruits from '../assets/images/category/Fruits.png'
import meals from '../assets/images/category/Meal-Kits.png'
import pantry from '../assets/images/category/Pantry.png'
import pooja from '../assets/images/category/Pooja-Supplies.png'
import pulses from '../assets/images/category/Pulses.png'
import snacks from '../assets/images/category/snacks.png'
import vegetable from '../assets/images/category/Vegetables.png'


const dairyCategories = [
    {
        id: 1,
        name: "Fruits",
        image: fruits
    },
    {
        id: 2,
        name: "Vegetables",
        image: vegetable
    },
    {
        id: 3,
        name: "Dairy",
        image: dairy
    },
    {
        id: 4,
        name: "Batter & Fresh Rotis",
        image: batter
    },
    {
        id: 5,
        name: "Snacks",
        image: snacks
    },
    {
        id: 6,
        name: "Pulses",
        image: pulses
    },
    {
        id: 7,
        name: "Pantry",
        image: pantry
    },
   {
        id: 8,
        name: "Meal Kits",
        image: meals
    },
{
        id: 9,
        name: "Beverages",
        image: beverages
    },
    {
        id: 10,
        name: "Pooja Supples",
        image: pooja
    }
];

const Categories = () => {


    return (
        <div className='container mt-10 bg-white'>
            <h1 className='font-semibold text-[25px] md:text-[45px] mb-7 text-center text-black'>Fresh Products At One Place</h1>

            <div className='flex flex-wrap justify-center gap-5 md:gap-10'>
                {
                    dairyCategories.map((category) => {
                        return (
                            <div className='flex flex-col text-center'>
                                <div className='w-[220px] h-[220px] text-center rounded-full shadow-xl border border-gray-400 p-1 cursor-pointer' key={category.id}>
                                    <img src={category.image} alt={category.name} className='w-full mx-auto' />
                                </div>
                                <h2 className='text-[17px] font-semibold mb-5 mt-4'>{category.name}</h2>
                            </div>
                            
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Categories