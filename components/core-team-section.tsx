"use client"

import { useState } from "react"

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  details: string[]
}

const teamMembers: TeamMember[] = [
  {
    id: "sarah",
    name: "Sarah Chen",
    role: "Founding General Partner",
    image: "/team-image-1.png",
    details: [
      "MIT Ph.D. in Computer Science, Blockchain Research Focus",
      "Former Technology Executive at Point72 (5 years)",
      "Morgan Stanley Technology Director, Led AI Integration Team",
      "Board Member, Blockchain Enterprise Alliance",
      "Led 3 Successful Tech Startups with 2 Exits",
    ],
  },
  {
    id: "michael",
    name: "Michael Zhang",
    role: "Founding Managing Partner",
    image: "/team-image-2.png",
    details: [
      "Harvard Business School MBA, Baker Scholar",
      "Veteran Blockchain Investor (7+ Years in the Space)",
      "Led $450M in Web3 Investments at Galaxy Digital",
      "Serial Web3 Entrepreneur with Solana Ecosystem Focus",
      "Advisor to Three Unicorn Blockchain Projects",
    ],
  },
  {
    id: "emily",
    name: "Emily Wang",
    role: "Partner, Operations",
    image: "/team-image-3.png",
    details: [
      "Stanford MBA, Global Market Operations Expert",
      "Former COO at BitMEX, Scaled Team from 20 to 200",
      "Extensive Crypto Industry Experience (8+ Years)",
      "Community Building Specialist with 500K+ Network",
      "Led Regulatory Compliance for Major Exchanges",
    ],
  },
  {
    id: "david",
    name: "David Liu",
    role: "Partner, Engineering",
    image: "/team-image-4.png",
    details: [
      "Former Google Senior Engineer (10+ Years)",
      "Blockchain Architecture Expert, 15+ Protocol Designs",
      "Open Source Project Contributor (Ethereum, Polkadot)",
      "Smart Contract Security Researcher",
      'Author of "Zero Knowledge Proofs in DeFi Infrastructure"',
    ],
  },
  {
    id: "advisory",
    name: "Advisory Board",
    role: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%9F%A9%E5%BD%A2%2087-JU6cfUMvefit5LzbW7ZB2sz62edHXC.png",
    details: [
      "Dr. Wei Chen - Cryptography Research Lead, MIT",
      "Amanda Johnson - Former SEC Commissioner",
      "Jason Taylor - Founder, Blockchain Capital",
      "Dr. Sophia Xu - AI Ethics Specialist",
    ],
  },
]

export default function CoreTeamSection() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

  return (
    <div
      className="absolute"
      style={{
        left: "0pt",
        top: "7098px",
        width: "1920px",
        height: "800px",
      }}
    >
      {/* Group 216 - Team Icon */}
      <img
        src="/group-216.png"
        alt="Team Icon"
        className="absolute"
        style={{
          left: "117pt",
          top: "7.89px",
          width: "121.29px",
          height: "95px",
        }}
      />

      {/* Group 215 - Wireframe Design Element */}
      <img
        src="/group-215.png"
        alt="Wireframe Design"
        className="absolute"
        style={{
          left: "1340.8px",
          top: "0.5px",
          width: "376px",
          height: "362.62px",
        }}
      />

      {/* Core Team Title */}
      <h2
        className="absolute text-[#13325E] text-[50px] font-black text-left"
        style={{
          left: "121px",
          top: "184.5px",
          width: "286px",
          height: "61px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Core Team
      </h2>

      {/* Core Team Description */}
      <p
        className="absolute text-[#707070] text-[22px] font-normal text-left leading-relaxed"
        style={{
          left: "121px",
          top: "275.5px",
          width: "1057px",
          height: "99px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        We focus on the most promising innovation directions in the Web3 space and make deep investments in the
        following tracks. Our thesis-driven approach combines rigorous due diligence with forward-looking market
        analysis.
      </p>

      {/* Team Members */}
      {teamMembers.map((member, index) => {
        const leftPositions = [139, 479, 819, 1159, 1499]
        const isHovered = hoveredMember === member.id
        const shouldShowDetails = hoveredMember === member.id || (hoveredMember === null && member.id === "sarah")

        return (
          <div
            key={member.id}
            className="absolute cursor-pointer transition-all duration-300"
            style={{
              left: `${leftPositions[index]}px`,
              top: "425px",
              width: "300px",
              height: "auto",
              minHeight: "300px",
            }}
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            {/* Background Rectangle - Only for name and title */}
            <div
              className={`absolute transition-all duration-300 ${isHovered ? "bg-white shadow-lg" : "bg-gray-100"}`}
              style={{
                left: "0px",
                top: "320px",
                width: "300px",
                height: member.role ? "106px" : "76px", // Increased by 4px - was 102px and 72px
                borderRadius: isHovered ? "8px" : "0px",
                zIndex: isHovered ? 20 : 10,
              }}
            />

            {/* Member Image Background */}
            <img
              src={
                index < 4
                  ? `/rectangle-${83 + index}.png`
                  : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%9F%A9%E5%BD%A2%2087-JU6cfUMvefit5LzbW7ZB2sz62edHXC.png"
              }
              alt={`${member.name} Background`}
              className="absolute"
              style={{
                left: "0px",
                top: "0px",
                width: "300px",
                height: "300px",
              }}
            />

            {/* Member Image */}
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="absolute"
              style={{
                left: index === 4 ? "42px" : "22px",
                top: "22px",
                width: "256px",
                height: "256px",
              }}
            />

            {/* Special Design Element for Advisory Board */}
            {index === 4 && (
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%B7%AF%E5%BE%84%2029563-rcfvRxIXpY72r6R6DTWr53CT39N1VL.png"
                alt="Path Design Element"
                className="absolute"
                style={{
                  left: "68px",
                  top: "107px",
                  width: "163.59px",
                  height: "85.67px",
                }}
              />
            )}

            {/* Member Name */}
            <div
              className={`absolute text-[24px] font-black text-left transition-all duration-300 ${
                isHovered ? "text-[#AF1600]" : "text-[#AF1600]"
              }`}
              style={{
                left: "22px",
                top: "330px",
                width: "256px",
                height: "29px",
                fontFamily: "Montserrat, sans-serif",
                zIndex: isHovered ? 21 : 11,
              }}
            >
              {member.name}
            </div>

            {/* Member Role */}
            {member.role && (
              <div
                className={`absolute text-[20px] font-medium text-left transition-all duration-300 ${
                  isHovered ? "text-black" : "text-black"
                }`}
                style={{
                  left: "22px",
                  top: "369px",
                  width: "256px",
                  height: "50px",
                  fontFamily: "Montserrat, sans-serif",
                  zIndex: isHovered ? 21 : 11,
                }}
              >
                {member.role}
              </div>
            )}

            {/* Member Details - Outside the shadow box, only show for hovered member or Sarah by default */}
            {shouldShowDetails && (
              <div
                className={`absolute text-[#2F2F2F] text-[14px] font-medium text-left transition-all duration-300 ${
                  shouldShowDetails ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  left: "22px",
                  top: member.role ? "454px" : "424px", // Increased gap by 20px - was 434px and 404px
                  width: "256px",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: "20px",
                  zIndex: 15,
                }}
              >
                {member.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="mb-3">
                    {detail}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
