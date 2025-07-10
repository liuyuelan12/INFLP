"use client"

export default function IntroductionSection() {
  return (
    <div
      className="absolute"
      style={{
        left: "0pt",
        top: "2087px",
        width: "1920px",
        height: "1068px",
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/intro-background.png')",
        }}
      />

      {/* Introduction Content */}
      <div className="relative z-10 w-full h-full">
        {/* Section Heading */}
        <div className="absolute w-[522px] h-[153px]" style={{ left: "112px", top: "129px" }}>
          <div className="text-white text-[60px] leading-[60px] text-left">
            <div className="font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Introduction
            </div>
            <div className="font-black" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Infinite Alliance
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="absolute left-[112px] top-[320px] max-w-[1200px]">
          {/* First Paragraph */}
          <p
            className="text-white text-[18px] font-normal leading-relaxed text-left mb-[50px]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Infinite Alliance is a professional investment and incubation institution in the Web3 space, focusing on
            frontier innovations in AI, CEX, DePIN, and DeFi. Through deep industry insights, professional investment
            strategies, and comprehensive incubation services, we help Web3 projects achieve rapid growth and
            sustainable development.
          </p>

          {/* Second Paragraph */}
          <p
            className="text-white text-[18px] font-normal leading-relaxed text-left"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Founded in 2025 and structured as a Wyoming DAO LLC under Title 17, Chapter 31 of Wyoming Statutes (Wyoming
            Statutes, 2021), we combine traditional venture expertise with Web3-native governance and incentive
            mechanisms. Our mission is to become the Silicon Valley flagship for Web3 incubation, fostering the next
            generation of breakthrough blockchain technologies and companies, inspired by the Y Combinator model that
            has successfully incubated over 4,000 companies with a combined valuation approaching $1 trillion (Y
            Combinator, 2023).
          </p>
        </div>

        {/* Red Button */}
        <div
          className="absolute w-[211px] h-[57px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
          style={{
            left: "1667.79px",
            top: "155px",
            backgroundColor: "#AF1600",
          }}
        ></div>

        {/* Back to Top */}
        <div className="absolute flex items-center gap-2" style={{ left: "1698px", top: "171px" }}>
          <span
            className="text-white text-[20px] font-medium text-right"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Back to top
          </span>
          <img
            src="/back-to-top-icon.png"
            alt="Back to top"
            className="w-[25px] h-[25px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </div>
    </div>
  )
}
