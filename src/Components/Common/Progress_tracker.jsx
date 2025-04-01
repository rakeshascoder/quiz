import React from 'react'

const Progress_tracker = ({ step }) => {
  const totalSteps = 11; // Change as needed
  return (
    <div className="flex justify-center items-center mt-5">
      {/* Dashes */}
      <div className="flex items-center mx-2 space-x-2">
        {[...Array(totalSteps - 1)].map((_, index) => (
          <div
            key={index}
            className={`w-[25px] h-[4.64px] rounded-full ${index < step - 0.5
              ? "bg-[#C4A77D]"  // Fully filled step
              : index < step
                ? "progress_bg_gradient" // Half-filled step
                : "bg-[#EDEDED]" // Unfilled step
              }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Progress_tracker
