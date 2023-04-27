"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Profile(){

   const [activeFilter, setActiveFilter] = useState("pfp")

    return(
       <div className=" min-h-screen bg-bgDark">
            <div className="px-4 sm:px-8 xl:px-12 py-10  text-white">
               <div className="flex flex-col gap-2 lg:flex-row  font-collector justify-between flex-wrap">
                  {/* search profiles */}
                  <div>
                     <h1 className="text-[14px]">Search</h1>
                        <input
                        type="text"
                        placeholder="search profiles"
                        className="peer w-[364px] h-[40px] border border-darkBorder rounded-lg outline-none bg-transparent px-4 py-2 mt-2 sm:text-sm focus:border-bgPink"
                        />
                  </div>
                  <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
                     {/* Ranking */}
                     <div >
                           <h1 className="text-[14px]">Ranking</h1>
                           <div className="relative mt-2 w-[288px] border border-darkBorder rounded-lg">
                              <select
                                 className="block h-[40px] w-full pl-3 pr-10 text-sm leading-6 bg-bgDarkLint border-bgPink rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-bgPink focus:border-bgPink"
                                 onChange={(e) => console.log(e.target.value)}
                              >
                                 <option value="option1">Followed By Community</option>
                                 <option value="option2">Followers</option>
                              </select>
                              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M14.95 7.95a.999.999 0 0 0-1.41 0L10 11.59l-3.54-3.54a.999.999 0 1 0-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l4.24-4.24a.999.999 0 0 0 0-1.41z" clipRule="evenodd" />
                                    </svg>
                              </div>
                           </div>
                     </div>
                     {/* Filter */}
                     <div className="w-[308px]">
                        <h1 className="text-[14px]">Filter</h1>
                        <div className="flex justify-center  rounded-lg items-center border border-darkBorder focus-within:border-bgPink  mt-2">
                           <button className={`py-2 px-4 h-[40px] rounded-l-lg ${activeFilter === "pfp" ? "bg-bgPink text-gray-800" : "bg-transparent text-gray-200"}`} onClick={() => setActiveFilter("pfp")}>
                              PFP Only
                           </button>
                           <button className={`py-2 px-4 rounded-r-lg  ${activeFilter === "verified" ? "bg-bgPink text-gray-800" : "bg-transparent text-gray-200"}`} onClick={() => setActiveFilter("verified")}>
                              Verified Holder
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
                  {Array.from({ length: 30 }, (load, i) => (
                 <div className=" grid grid-cols-fluid gap-3 mt-4">
                     {/* one */}
                     <div className=" h-[96px] flex justify-between items-center font-inter border border-darkBorder rounded-lg relative mt-3 px-4" key={i}>
                        <div className="w-8 h-5 rounded-[1000px] flex items-center justify-center bg-bgPink absolute top-2 left-2 text-black font-inter">1st</div>
                           <div className=" flex gap-2 items-center">
                              <div>
                                 <Image src="https://pbs.twimg.com/profile_images/1592636750249295873/XH7Nm_uV_400x400.jpg" width={56} height={56} alt="pfp" className="rounded-full"/>
                              </div>
                              <div>
                                 <h1 className="font-bold text-[17px]">Doge Pound 🐶</h1>
                                 <Link target="_blank" href="https://twitter.com/TheDogePoundNFT" className="text-bgPink">@TheDogePoundNFT</Link>
                                 <p className="text-textGray">Followed by 52.0%</p>
                              </div>
                           </div>
                           <div>
                              <Image src="https://www.nftinspect.xyz/_next/static/media/Loyalty.e4babb78.svg" width={24} height={24} alt="heart" />
                           </div>
                     </div>
                     {/* two */}
                     <div className=" h-[96px] flex justify-between items-center font-inter border border-darkBorder rounded-lg relative   mt-3 px-4" key={i}>
                        <div className="w-8 h-5 rounded-[1000px] flex items-center justify-center bg-bgPink absolute top-2 left-2 text-black font-inter">1st</div>
                           <div className=" flex gap-2 items-center">
                              <div>
                                 <Image src="https://pbs.twimg.com/profile_images/1592636750249295873/XH7Nm_uV_400x400.jpg" width={56} height={56} alt="pfp" className="rounded-full"/>
                              </div>
                              <div>
                                 <h1 className="font-bold text-[17px]">Doge Pound 🐶</h1>
                                 <Link target="_blank" href="https://twitter.com/TheDogePoundNFT" className="text-bgPink">@TheDogePoundNFT</Link>
                                 <p className="text-textGray">Followed by 52.0%</p>
                              </div>
                           </div>
                           <div>
                              <Image src="https://www.nftinspect.xyz/_next/static/media/Loyalty.e4babb78.svg" width={24} height={24} alt="heart" />
                           </div>
                     </div>
                      {/* three */}
                      <div className=" h-[96px] flex justify-between items-center font-inter border border-darkBorder rounded-lg relative  mt-3 px-4" key={i}>
                        <div className="w-8 h-5 rounded-[1000px] flex items-center justify-center bg-bgPink absolute top-2 left-2 text-black font-inter">1st</div>
                           <div className=" flex gap-2 items-center">
                              <div>
                                 <Image src="https://pbs.twimg.com/profile_images/1592636750249295873/XH7Nm_uV_400x400.jpg" width={56} height={56} alt="pfp" className="rounded-full"/>
                              </div>
                              <div>
                                 <h1 className="font-bold text-[17px]">Doge Pound 🐶</h1>
                                 <Link target="_blank" href="https://twitter.com/TheDogePoundNFT" className="text-bgPink">@TheDogePoundNFT</Link>
                                 <p className="text-textGray">Followed by 52.0%</p>
                              </div>
                           </div>
                           <div>
                              <Image src="https://www.nftinspect.xyz/_next/static/media/Loyalty.e4babb78.svg" width={24} height={24} alt="heart" />
                           </div>
                     </div>
                     {/* four */}
                     <div className=" h-[96px] flex justify-between items-center font-inter border border-darkBorder rounded-lg relative  mt-3 px-4" key={i}>
                        <div className="w-8 h-5 rounded-[1000px] flex items-center justify-center bg-bgPink absolute top-2 left-2 text-black font-inter">1st</div>
                           <div className=" flex gap-2 items-center">
                              <div>
                                 <Image src="https://pbs.twimg.com/profile_images/1592636750249295873/XH7Nm_uV_400x400.jpg" width={56} height={56} alt="pfp" className="rounded-full"/>
                              </div>
                              <div>
                                 <h1 className="font-bold text-[17px]">Doge Pound 🐶</h1>
                                 <Link target="_blank" href="https://twitter.com/TheDogePoundNFT" className="text-bgPink">@TheDogePoundNFT</Link>
                                 <p className="text-textGray">Followed by 52.0%</p>
                              </div>
                           </div>
                           <div>
                              <Image src="https://www.nftinspect.xyz/_next/static/media/Loyalty.e4babb78.svg" width={24} height={24} alt="heart" />
                           </div>
                     </div>
                 </div>
                  ))}
            </div>
       </div>
    )
}