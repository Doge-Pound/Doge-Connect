export default function Loading() {
    return (
        <div className="py-24 bg-bgDark text-center">
          <div className="py-12 animate-pulse">
            {Array.from({ length: 12 }, (movie, i) => (
              <div
                className="text-white flex flex-col justify-center items-center py-12"
                key={i}
              >
                <div className="bg-gray-700/50 my-6 px-6 rounded-lg">
                  <h2 className="text-lg  invisible">This is a skeleton render</h2>
                </div>
                <div className="w-full lg:w-1/2 bg-gray-700/50 h-48 lg:h-96 rounded-2xl"></div>
              </div>
            ))}
          </div>
      </div>
    )
  }