import React from 'react'
import AlbumList from '@/app/components/AlbumList'
import { IoAddOutline } from "react-icons/io5";


const Thirdpage = () => {
    return (
        <div className={"bg-white border-pink-300"}>
            <div className={"bg-pink-300"}>
                <div className={"py-6 text-center text-3xl font-bold"}>
                    Member
                </div>
            </div>
            <ul className={"flex flex-wrap"}>
                <AlbumList album={"botchi.jpeg"} text={"後藤ひとり"}/>
                <AlbumList album={"nanaka.jpeg"} text={"伊地知虹夏"}/>
                <AlbumList album={"ryo.jpeg"} text={"山田リョウ"}/>
                <AlbumList album={"ikuyo.jpeg"} text={"喜多郁代"}/>
                <AlbumList album={"seika.jpeg"} text={"伊地知星歌"}/>
                <AlbumList album={"PA.jpeg"} text={"PAさん"}/>
                <AlbumList album={"kikuri.jpeg"} text={"廣井きくり"}/>
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
export default Thirdpage
