'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickBurger = () => setIsOpen((prev) => !prev)

    return (<div>
        <BurgerIcon handleClick={handleClickBurger} isOpen={isOpen} />
        {isOpen && (<MenuLinks />)}
    </div>

    )
}

type BurgerPropTypes = {
    handleClick: () => void;
    isOpen: boolean;
}

const BurgerIcon = ({ handleClick, isOpen }: BurgerPropTypes) => (<div
    className='flex flex-col gap-1 cursor-pointer'
    onClick={handleClick}
>
    <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`} />
    <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "opacity-0" : ""}`} />
    <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`} />
</div>)

const MenuLinks = () => (
    <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>
        <Link href="href">Home</Link>
        <Link href="href">Friends</Link>
        <Link href="href">Groups</Link>
        <Link href="href">Stories</Link>
        <Link href="href">Profile</Link>
    </div>
)
