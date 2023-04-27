  export default function Loading() {
  return (
      <div>
          <div className="min-h-screen bg-bgDark">
          <div className="animate-pulse">
            {Array.from({ length: 4 }, (load, i) => (
              <div
                className="text-white flex flex-col justify-center items-center"
                key={i}
              >
                  <div className="flex gap-20">
                    <div className="w-full my-10  lg:w-[320px] bg-gray-700/50 h-[20px] lg:h-[96px] rounded-2xl"></div>
                    <div className="w-full my-10 lg:w-[320px] bg-gray-700/50 h-[20px] lg:h-[96px] rounded-2xl"></div>
                    <div className="w-full my-10 lg:w-[320px] bg-gray-700/50 h-[20px] lg:h-[96px] rounded-2xl"></div>
                  </div>
              </div>
            ))}
          </div>
          </div>
      </div>
      
  )
}