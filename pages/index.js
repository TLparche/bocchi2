
import React from 'react'
import Firstpage from '@/components/Firstpage'
import Secondpage from '@/components/Secondpage'
import Thirdpage from '@/components/Thirdpage'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <div className={"grid"}>
            <div className={"bg-pink-300 h-20"}/>
            <Firstpage/>
            <Secondpage/>
            <Thirdpage/>
            <Footer/>
        </div>
    )
}
