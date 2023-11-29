import React from 'react'
import AlbumList from '@/app/components/AlbumList'
import { IoAddOutline } from "react-icons/io5";


const Secondpage = () => {
    return (
        <div className={"bg-white border-pink-300"}>
            <div className={"bg-pink-300"}>
                <div className={"py-6 text-center text-3xl font-bold"}>
                    Album
                </div>
            </div>
            <ul className={"flex flex-wrap"}>
                <AlbumList album={"1.jpeg"} text={"結束バンド"}/>
                <AlbumList album={"2.jpeg"} text={"あのバンド"}/>
                <AlbumList album={"3.jpeg"} text={"青春コンプレックス"}/>
                <AlbumList album={"4.jpeg"} text={"光の中へ"}/>
                <AlbumList album={"5.jpeg"} text={"ギターと孤独と蒼い惑星"}/>
                <AlbumList album={"6.jpeg"} text={"カラカラ"}/>
                <AlbumList album={"7.jpeg"} text={"Distortion!!"}/>
                <li className="relative w-full max-w-[50%] box-border flex-[0_0_25%] aspect-square overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <IoAddOutline className={"w-16 h-16"} color={"fff"}/>
                    </div>
                    <div className={"w-full h-full bg-pink-300"}>
                        <div
                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 bg-black bg-opacity-50 transition-opacity duration-500 hover:opacity-100">
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    )
}
export default Secondpage