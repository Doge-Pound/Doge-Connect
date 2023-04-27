"use client"

import { ChangeEventHandler, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai"
import { RiCloseFill } from "react-icons/ri"

export default function Discussion() {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  async function handleOnTweetSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const status = formData.get('status');

    console.log(status); // Add this line

    const results = await fetch('/api/twitter/tweet', {
      method: 'POST',
      body: JSON.stringify({
        status
      })
    }).then(res => res.json());

    setSuccessMessageVisible(true); // Show the success message

    setTimeout(() => {
      setSuccessMessageVisible(false); // Hide the success message after 3 seconds (adjust the timeout value as needed)
    }, 2000); // 3000 milliseconds = 3 seconds
  }

  return (
    <div>
      <form onSubmit={handleOnTweetSubmit} className='flex flex-col items-end gap-2 mb-8'>
        <div className="w-full rounded-full opacity-100 border border-darkBorder focus-within:border-[#FFA5BD] text-white p-3 pl-10 flex font-inter items-center bg-bgDarkLint">
          <input 
            name="status" 
            type="text" 
            placeholder="What's going on?" 
            className="w-full bg-transparent outline-none placeholder-[#808095] " 
            autoComplete="off" 
            value={inputText}
            onChange={handleInputChange} 
          />
        </div>
        <button disabled={inputText.length === 0} className="font-collector px-4 py-1 rounded-[1000px] border-[3px] border-black text-white bg-bgPink shadow-btn transition duration-300 ease-in-out hover:bg-pink-400">
          posts
        </button>
      </form>

      {successMessageVisible && (
        <div className="fixed inset-0 flex h-fit mt-5 justify-center font-collector">
          <div className="bg-white rounded-lg p-8 relative shadow-lg animate-pop-up">
            <RiCloseFill onClick={() => setSuccessMessageVisible(false)} className="absolute top-2 right-2"/>
            <div className="flex items-center gap-1">
              <p>Your tweet has been posted</p>
              <AiFillCheckCircle  className="text-green-500 w-[25px] h-[25px]"/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}