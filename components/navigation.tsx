export default function Navigation() {
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

          {/* Language Selector - EN */}
          <div className="absolute" style={{ left: "1639px", top: "36px", width: "30px", height: "24px" }}>
            <span className="text-white text-[24px] font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
              EN
            </span>
          </div>

          {/* Small Icon Group 279 */}
          <div className="absolute" style={{ left: "1695.46px", top: "41.83px", width: "12.3px", height: "7.17px" }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BB%84%20279-OrRfWstPPrtL5ZRS2A3w1zKcDcvl2M.png"
              alt="Dropdown Arrow"
              className="w-full h-full object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
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
    </div>
  )
}
