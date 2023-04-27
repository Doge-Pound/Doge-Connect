"use client"

import { useSession } from "next-auth/react"
import TweetContents from "../tweets/tweetContent";
import Image from "next/image";
import Link from "next/link";
import { IoMdSend } from "react-icons/io"
import { useState, } from "react";

 function TweetNewPage(){
    const { data: session, status } = useSession();
    const rounded = ""

    return(
        <div className=" bg-bgDark min-h-screen px-2 sm:px-8 lg:px-[200px] xl:px-[320px] pb-10 ">
            <TweetContents rounded={rounded}/>
           <div className="">
                {/* write a comment */}
                <div className=" border-b border-darkBorder px-3 md:px-10 bg-bgDarkLint py-5 ">
                    <div className="flex gap-5 items-center">
                        <Image src={session?.user?.image || ''} width={50} height={50} alt='image' className=' rounded-[1000px] cursor-pointer text-[30px]'/> 
                        <input type="text" className="w-full bg-transparent outline-none text-white text-base placeholder:text-textGray" placeholder="Write a comment" />
                        <button><IoMdSend className="w-[30px] h-[20px] text-textGray cursor-pointer hover:text-bgPink "/></button>
                    </div>
                </div>
                {/* public comments */}
                <div className=" border-b border-darkBorder px-3 md:px-10 bg-bgDarkLint text-white py-5 rounded-b-xl">
                    <div className="flex gap-5 ">
                        <Image src={"https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"} width={50} height={50} alt='image' className=' rounded-full cursor-pointer'/> 
                        <div>
                            <div className="text-[17px] font-semibold"><Link href={"https://twitter.com/elonmusk"} className=" hover:underline">Elon musk</Link> <span className=" text-textGray font-normal text-[16px]">@elonmusk • 16h</span></div>
                            <p>We live in the most interesting of times</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default function Fulltweets(){

    const { data: session, status } = useSession();

    const [loggedIn, setLoggedIn] = useState(false)

    // useEffect(() => {
    //     if(session){
    //         setLoggedIn(true)
    //     }
    // }, [session])

    return(
        <div>
            {session ? <TweetNewPage /> : <h1> sign in to view the page</h1> }
        </div>
    )
}