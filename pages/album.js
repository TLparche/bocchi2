import React from 'react'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import AlbumList from '@/components/AlbumList'

export default function Album() {
    return (
        <div className={"w-full"}>
            <NavBar tabName={"ALBUM"}/>
            <div className={"bg-pink-300 pt-20"}>
                <ul className={"flex flex-wrap bg-pink-300"}>
                    <AlbumList album={"1.jpeg"} text={"結束バンド"}/>
                    <AlbumList album={"2.jpeg"} text={"あのバンド"}/>
                    <AlbumList album={"3.jpeg"} text={"青春コンプレックス"}/>
                    <AlbumList album={"4.jpeg"} text={"光の中へ"}/>
                    <AlbumList album={"5.jpeg"} text={"ギターと孤独と蒼い惑星"}/>
                    <AlbumList album={"6.jpeg"} text={"カラカラ"}/>
                    <AlbumList album={"7.jpeg"} text={"Distortion!!"}/>
                    <AlbumList album={"8.jpeg"} text={"ギターと孤独と蒼い惑星"}/>
                    <AlbumList album={"9.jpeg"} text={"カラカラ"}/>
                    <AlbumList album={"10.jpeg"} text={"Distortion!!"}/>
                    <AlbumList album={"11.jpeg"} text={"Distortion!!"}/>
                </ul>
            </div>
            <Footer/>
        </div>
    )

}