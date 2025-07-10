"use client"
import { useState } from "react"

export default function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <div
      className="absolute z-20"
      style={{
        left: "0pt",
        top: "0pt",
        width: "1920px",
        height: "100px",
        backgroundColor: "#13325E",
      }}
    >
      <div className="relative w-full h-full">
        {/* Logo/Brand Area - Group 4 */}
        <div className="absolute" style={{ left: "67.02px", top: "23px", width: "247.95px", height: "53.27px" }}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BB%84%204-qh2UtJS138r6giRJmilqKMzNWKMySd.png"
            alt="Company Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Icon/Logo Group 278 */}
        <div className="absolute" style={{ left: "375px", top: "23px", width: "55px", height: "55px" }}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BB%84%20278-hpzAUmD6IDzs2csrwk3ejfOU6Ualg2.png"
            alt="Secondary Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="absolute">
          {/* Home */}
          <div className="absolute" style={{ left: "529px", top: "36px", width: "74px", height: "29px" }}>
            <span className="text-white text-[24px] font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Home
            </span>
          </div>

          {/* Roadmap */}
          <div className="absolute" style={{ left: "771px", top: "36px", width: "118px", height: "29px" }}>
            <span className="text-white text-[24px] font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Roadmap
            </span>
          </div>

          {/* Core Team */}
          <div className="absolute" style={{ left: "1030px", top: "36px", width: "128px", height: "29px" }}>
            <span className="text-white text-[24px] font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Core Team
            </span>
          </div>

          {/* Success Stories */}
          <div className="absolute" style={{ left: "1270px", top: "36px", width: "182px", height: "29px" }}>
            <span
              className="text-white text-[24px] font-normal"
              style={{ fontFamily: "Montserrat, sans-serif", whiteSpace: "nowrap" }}
            >
              Success Stories
            </span>
          </div>

          {/* Language Selector - EN with dropdown arrow */}
          <div
            className="absolute flex items-center cursor-pointer hover:opacity-80 transition-opacity"
            style={{ left: "1639px", top: "36px" }}
          >
            <span className="text-white text-[24px] font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
              EN
            </span>
            <svg className="ml-2 w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Search Icon */}
          <div
            className="absolute cursor-pointer hover:scale-110 transition-transform duration-200"
            style={{ left: "1720px", top: "38px" }}
            onClick={toggleSearch}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LrXt0kVTfrPZWYjXCgCJAgisld6thy.png"
              alt="Search"
              className="w-[20px] h-[20px] hover:opacity-80 transition-opacity duration-200"
            />
          </div>

          {/* Login */}
          <div className="absolute" style={{ left: "1784.98px", top: "36px", width: "57px", height: "24px" }}>
            <span className="text-white text-[24px] font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Login
            </span>
          </div>
        </nav>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div
          className="absolute inset-0 bg-[#13325E]/95 backdrop-blur-sm z-30 flex items-center justify-center transition-all duration-300"
          style={{ height: "100px" }}
        >
          <div className="flex items-center bg-white rounded-lg px-4 py-2 w-[600px] shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LrXt0kVTfrPZWYjXCgCJAgisld6thy.png"
              alt="Search"
              className="w-[20px] h-[20px] mr-3 opacity-60"
            />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none text-[18px] text-gray-700"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              autoFocus
            />
            <button onClick={toggleSearch} className="ml-3 text-gray-500 hover:text-gray-700 text-[20px] font-bold">
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
