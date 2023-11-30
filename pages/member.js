import React from 'react'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import AlbumList from '@/components/AlbumList'

export default function Member() {
    return (
        <div className={"w-full"}>
            <NavBar tabName={"MEMBER"}/>
            <div className={"bg-pink-300 pt-20"}>
                <ul className={"flex flex-wrap bg-pink-300"}>
                    <AlbumList album={"botchi.jpeg"} text={"後藤ひとり"}/>
                    <AlbumList album={"nanaka.jpeg"} text={"伊地知虹夏"}/>
                    <AlbumList album={"ryo.jpeg"} text={"山田リョウ"}/>
                    <AlbumList album={"ikuyo.jpeg"} text={"喜多郁代"}/>
                    <AlbumList album={"seika.jpeg"} text={"伊地知星歌"}/>
                    <AlbumList album={"PA.jpeg"} text={"PAさん"}/>
                    <AlbumList album={"kikuri.jpeg"} text={"廣井きくり"}/>
                </ul>
            </div>
            <Footer/>
        </div>
    )

}