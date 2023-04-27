"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaTwitter } from "react-icons/fa"
import { MdOutlineModeComment } from "react-icons/md"


// svg
 function DogPaw({active}: { active: boolean }) {
  return(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill={active ? "#FFA5BD" : "#808095"} width={24} height={21} ><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
      </svg>
  )
}

export default function TweetContents({rounded}: {rounded: string}){

  const [active, setActive] = useState(false)
  const [toggleClose, setToggleClose] = useState(false)

    return(
        <div>
          <div className={`py-5  bg-bgDarkLint border border-darkBorder rounded-t-xl ${rounded}`}>
            {/* profile name + tweet logo */}
            <div className="flex justify-between px-3 md:px-10 pb-5 border-b border-darkBorder items-center">
              <div className="flex gap-2 items-center">
                <Link href="/"><Image src="/images/dogieHead.svg" width={60} height={60} alt="dogie" /></Link>
                <div className="text-white flex flex-col gap-0 leading-[22px]">
                  <p className="text-[18px] font-inter font-bold tracking-[0px]">Doge Pound | ETHDenver <span className=" text-[16px] text-textGray font-medium">• 16h</span></p>
                  <Link href="/" className="text-[14px] text-bgPink font-inter font-bold">@Thedogepoundnft</Link>
                </div>
              </div>
              <div>
                <Link href="/"><FaTwitter className=" hidden sm:block text-bgPink w-[30px] h-[25px]"/></Link>
              </div>
            </div>

            {/* tweet content */}
            <div className="px-3 md:px-10 border-b  border-darkBorder">
              <p className="text-[#fff] py-5">Cuteness overload!! happy belated national puppy day from the doge pound shelter! <br /> We recently rescued a mother and her little cute puppers!!</p>
              <div className="flex gap-1 rounded-xl">
                <div className="w-full  h-[280px] ">
                  <Image src="/images/tweetImage2.jfif" width={300} height={280} alt="tweet1" className="w-full rounded-s-xl h-full object-cover" />
                </div>
                <div className="w-full h-[280px]">
                  <Image src="/images/tweetImage1.jfif" width={300} height={280} alt="tweet1" className="w-full h-full rounded-e-xl object-cover" />
                </div>
              </div>
              <div className="py-5 flex gap-7 items-center  justify-between text-bgPink">
                  <div>
                    <div className="group relative flex gap-2 items-center" >
                      <Image src={"/images/paw.svg"} width={16} height={16} alt="dogie"/>
                      <p>64K</p>
                      <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-base text-gray-100 rounded-md absolute left-1/2 
                        -translate-x-1/2 -translate-y-full opacity-0 m-4 mx-auto">Likes</span>
                    </div>               
                  </div>
                  <div className="group relative flex gap-2 items-center ">
                      <MdOutlineModeComment className="text-bgPink w-[16px] h-[16px]"/>
                      <p>200</p>
                      <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-base text-gray-100 rounded-md absolute left-1/2 
                        -translate-x-1/2 -translate-y-[100%] opacity-0 m-4 mx-auto">Comments</span>
                  </div>
              </div>
            </div>  
            {/* likes and comments */}
            <div className="px-3 md:px-10 pt-5 flex gap-10">
              <div className={`flex gap-2 cursor-pointer ${active ? "text-bgPink": "text-[#808095]" }`} 
                onClick={(e) => { 
                  e.preventDefault(); // Prevents Link from navigating
                  setActive(!active);
                }}>  
                <DogPaw active={active}/>
                <p className="font-semibold">Like </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MdOutlineModeComment className="text-textGray w-[23px] h-[21px]"/>
                <p className="text-textGray font-semibold">Comment</p>
              </div>
            </div>
          </div>
        </div>
    )
}