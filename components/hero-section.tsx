import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute bg-cover bg-center bg-no-repeat"
        style={{
          left: "0pt",
          top: "0pt",
          width: "1920px",
          height: "1145px",
          backgroundImage: "url('/background.png')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        {/* Top Navigation Links */}
        <div className="absolute top-[1012px] right-[130px] flex items-center gap-4">
          <span className="text-white text-[16px] font-extralight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Join Investor Network
          </span>
          <span className="text-white text-[16px] font-extralight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            |
          </span>
          <span className="text-white text-[16px] font-extralight" style={{ fontFamily: "Montserrat, sans-serif" }}>
            View Research Reports
          </span>
        </div>

        {/* Main Content */}
        <div className="absolute left-[122px] top-[702px]">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-white text-[71px] leading-tight">
              <div
                className="font-normal"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "6px 4px 0px #0E2751, 0px 1px 0px #0E2751",
                }}
              >
                Accelerating
              </div>
              <div
                className="font-black"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  textShadow: "6px 4px 0px #0E2751, 0px 1px 0px #0E2751",
                }}
              >
                Web3 Excellence
              </div>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p
              className="text-white text-[22px] font-light max-w-[637px]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Global Leading Web3 Investment and Incubation Platform
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-8">
            {/* Apply for Funding Button */}
            <Button
              className="w-[304px] h-[56px] text-white text-[20px] font-medium hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#AF1600",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Apply for Funding
            </Button>

            {/* Explore Portfolio Button */}
            <Button
              className="w-[294px] h-[56px] text-white text-[20px] font-medium hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "#13325E",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Explore Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
