import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import UserMenu from './UserMenu'
import { checkUser } from '@/lib/checkUser'
import UserLoading from './UserLoading'

const Header = async () => {

    await checkUser();

  return (
    <header className='container mx-auto'>
        <nav className='py-6 px-4 flex justify-between items-center'>
            <Link href='/'>
            <Image src={'/logo2.png'} width={200} height={56} alt={'logo'} 
            className='cursor-pointer h-10 w-auto object-contain'
            />
            </Link>

            <div className='flex items-center gap-4'>
                <Link href='/project/create'>
                <Button variant="destructive" className='flex items-center gap-2'>
                    <PenBox size={18}/>
                    <span>Create Project</span>
                </Button>
                </Link>

                <SignedOut>
                <SignInButton forceRedirectUrl='/onboarding'>
                <Button variant="outline">Log In</Button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <UserMenu />
            </SignedIn>
            </div>

        </nav>

        <UserLoading/>
    </header>
  )
}

export default Header