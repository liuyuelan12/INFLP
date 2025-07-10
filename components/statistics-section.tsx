export default function StatisticsSection() {
  return (
    <div
      className="absolute"
      style={{
        left: "0pt",
        top: "1144px",
        width: "1920px",
        height: "1080px",
      }}
    >
      {/* Background Mask */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/stats-background.png')",
        }}
      />

      {/* Statistics Content */}
      <div className="relative z-10 w-full h-full">
        {/* First Branding Text */}
        <div className="absolute w-[370px] h-[120px]" style={{ left: "1337px", top: "69px" }}>
          <div className="text-[40px] leading-tight">
            <div
              className="font-normal"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#11243E",
              }}
            >
              Accelerating
            </div>
            <div
              className="font-black"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#11243E",
              }}
            >
              Web3 Excellence
            </div>
          </div>
        </div>

        {/* First Statistic - $50M+ AUM */}
        <div className="absolute">
          {/* Icon */}
          <img
            src="/icon-triangle-updated.png"
            alt="AUM Icon"
            className="absolute w-[91px] h-[102px]"
            style={{ left: "1195.39px", top: "366.5px" }}
          />

          {/* Statistic Number */}
          <div className="absolute w-[169px] h-[61px]" style={{ left: "319px", top: "349.5px" }}>
            <span
              className="text-white text-[50px] font-normal"
              style={{
                fontFamily: "Montserrat, sans-serif",
                textShadow: "6px 4px 0px #0E2751, 0px 1px 0px #0E2751",
              }}
            >
              $50M+
            </span>
          </div>

          {/* Label */}
          <div className="absolute w-[65px] h-[29px]" style={{ left: "319px", top: "457.5px" }}>
            <span
              className="text-[24px] font-normal"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#E5EDF7",
              }}
            >
              AUM
            </span>
          </div>
        </div>

        {/* Second Statistic - 25+ Portfolio Projects */}
        <div className="absolute">
          {/* Icon */}
          <img
            src="/icon-hexagon-final.png"
            alt="Portfolio Icon"
            className="absolute w-[109px] h-[71px]"
            style={{ left: "737px", top: "382.5px" }}
          />

          {/* Statistic Number */}
          <div className="absolute w-[85px] h-[61px]" style={{ left: "893px", top: "346.5px" }}>
            <span
              className="text-white text-[50px] font-normal"
              style={{
                fontFamily: "Montserrat, sans-serif",
                textShadow: "6px 4px 0px #0E2751, 0px 1px 0px #0E2751",
              }}
            >
              25+
            </span>
          </div>

          {/* Label */}
          <div className="absolute w-[212px] h-[29px]" style={{ left: "893px", top: "444.5px" }}>
            <span
              className="text-[24px] font-normal"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#E5EDF7",
              }}
            >
              Portfolio Projects
            </span>
          </div>
        </div>

        {/* Third Statistic - 4 Successful Exits */}
        <div className="absolute">
          {/* Icon */}
          <img
            src="/icon-cube-final.png"
            alt="Exits Icon"
            className="absolute w-[96px] h-[91px]"
            style={{ left: "1315px", top: "372.5px" }}
          />

          {/* Statistic Number */}
          <div className="absolute w-[33px] h-[61px]" style={{ left: "1477px", top: "346.5px" }}>
            <span
              className="text-white text-[50px] font-normal"
              style={{
                fontFamily: "Montserrat, sans-serif",
                textShadow: "6px 4px 0px #0E2751, 0px 1px 0px #0E2751",
              }}
            >
              4
            </span>
          </div>

          {/* Label */}
          <div className="absolute w-[189px] h-[29px]" style={{ left: "1477px", top: "444.5px" }}>
            <span
              className="text-[24px] font-normal"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#E5EDF7",
              }}
            >
              Successful Exits
            </span>
          </div>
        </div>

        {/* Second Branding Text */}
        <div className="absolute w-[241px] h-[120px]" style={{ left: "241px", top: "690px" }}>
          <div className="text-[40px] leading-tight">
            <div
              className="font-normal"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#11243E",
              }}
            >
              Accelerating
            </div>
            <div
              className="font-black"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#11243E",
              }}
            >
              Web3 Excellence
            </div>
          </div>
        </div>

        {/* Bottom Description Text */}
        <div className="absolute left-[733px] top-[648px] w-[443px]">
          <p
            className="text-white text-[28px] font-light text-left leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Global Leading Web3 Investment and Incubation Platform
          </p>
        </div>

        {/* Design Elements */}
        <div
          className="absolute bg-cover bg-center bg-no-repeat"
          style={{
            left: "670px",
            top: "265.5px",
            width: "579px",
            height: "309px",
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%9F%A9%E5%BD%A2%2071-DrZyIagSDoEIRuU7i3Mx9ZLEJ46pUc.png')",
          }}
        />

        {/* Lines */}
        <div
          className="absolute"
          style={{
            left: "1248.5px",
            top: "1px",
            width: "1px",
            height: "574px",
            backgroundColor: "#000000",
          }}
        />
        <div
          className="absolute"
          style={{
            left: "670.5px",
            top: "265px",
            width: "1128px",
            height: "1px",
            backgroundColor: "#000000",
          }}
        />
        <div
          className="absolute"
          style={{
            left: "670.5px",
            top: "265px",
            width: "1px",
            height: "678px",
            backgroundColor: "#000000",
          }}
        />
        <div
          className="absolute"
          style={{
            left: "121.5px",
            top: "575px",
            width: "1127px",
            height: "1px",
            backgroundColor: "#000000",
          }}
        />
      </div>
    </div>
  )
}
