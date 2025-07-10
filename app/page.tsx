"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import StatisticsSection from "@/components/statistics-section"
import IntroductionSection from "@/components/introduction-section"
import Footer from "@/components/footer"
import CoreTeamSection from "@/components/core-team-section"

export default function Web3Landing() {
  return (
    <div className="relative w-full" style={{ height: "12000px" }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Introduction Section */}
      <IntroductionSection />

      {/* Core Advantages Section */}
      <div
        className="absolute"
        style={{
          left: "0pt",
          top: "3155px",
          width: "1926px",
          height: "1167px",
        }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/section-background.png')",
          }}
        />

        {/* Scrollable Container */}
        <div
          className="absolute overflow-y-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-lg"
          style={{
            left: "901px",
            top: "133px",
            width: "804px",
            height: "959px",
          }}
        >
          {/* Scrollable Content */}
          <div
            className="relative p-8"
            style={{
              width: "804px",
              minHeight: "901px",
            }}
          >
            {/* Core Advantages Content */}
            <div className="space-y-12">
              {/* DAO Governance & Token Utility */}
              <div className="space-y-4">
                <h3 className="text-[#B91C1C] text-[18px] font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Core Advantages
                </h3>
                <h2
                  className="text-[#B91C1C] text-[32px] font-bold leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  DAO Governance & Token Utility
                </h2>
                <p
                  className="text-gray-600 text-[16px] leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  We adopt a decentralized governance model with our $IADAO token to ensure transparency, equitable
                  participation, and aligned incentives across our ecosystem, implementing best practices in DAO
                  tokenomics
                </p>
                <p className="text-gray-400 text-[14px]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  ...
                </p>
                <button
                  className="text-[#B91C1C] text-[16px] font-medium flex items-center gap-2 hover:gap-3 transition-all"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Strategic Incubation */}
              <div className="space-y-4">
                <h3 className="text-[#B91C1C] text-[18px] font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Core Advantages
                </h3>
                <h2
                  className="text-[#B91C1C] text-[32px] font-bold leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Strategic Incubation
                </h2>
                <p
                  className="text-gray-600 text-[16px] leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  We provide comprehensive project incubation services, from technical development to market expansion,
                  helping projects achieve rapid growth.
                </p>
                <p className="text-gray-400 text-[14px]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  ...
                </p>
                <button
                  className="text-[#B91C1C] text-[16px] font-medium flex items-center gap-2 hover:gap-3 transition-all"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Professional Investment */}
              <div className="space-y-4">
                <h3 className="text-[#B91C1C] text-[18px] font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Core Advantages
                </h3>
                <h2
                  className="text-[#B91C1C] text-[32px] font-bold leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Professional Investment
                </h2>
                <p
                  className="text-gray-600 text-[16px] leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Our experienced investment team leverages deep market insights and proven strategies to identify and
                  support high-potential Web3 projects across multiple verticals.
                </p>
                <p className="text-gray-400 text-[14px]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  ...
                </p>
                <button
                  className="text-[#B91C1C] text-[16px] font-medium flex items-center gap-2 hover:gap-3 transition-all"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Ecosystem Development */}
              <div className="space-y-4">
                <h3 className="text-[#B91C1C] text-[18px] font-normal" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Core Advantages
                </h3>
                <h2
                  className="text-[#B91C1C] text-[32px] font-bold leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Ecosystem Development
                </h2>
                <p
                  className="text-gray-600 text-[16px] leading-relaxed"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  We foster a thriving ecosystem by connecting projects, investors, and industry partners, creating
                  synergies that drive innovation and sustainable growth in the Web3 space.
                </p>
                <p className="text-gray-400 text-[14px]" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  ...
                </p>
                <button
                  className="text-[#B91C1C] text-[16px] font-medium flex items-center gap-2 hover:gap-3 transition-all"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Sectors Section */}
      <div
        className="absolute"
        style={{
          left: "0pt",
          top: "4322px",
          width: "1920px",
          height: "678px",
        }}
      >
        {/* Wireframe Illustration */}
        <img
          src="/wireframe-funnel.png"
          alt="Investment Funnel"
          className="absolute"
          style={{
            left: "121px",
            top: "45px",
            width: "121.29px",
            height: "139.78px",
          }}
        />

        {/* Gradient Rectangle Background */}
        <div
          className="absolute"
          style={{
            left: "1361px",
            top: "0px",
            width: "545px",
            height: "80px",
            background: "linear-gradient(to right, #E5EDF7, #FFFFFF)",
          }}
        />

        {/* AI + Web3 - Highlighted Section */}
        <div className="absolute flex items-center" style={{ left: "1406px", top: "34px" }}>
          <img src="/red-dot.png" alt="Red dot" className="w-[12px] h-[12px] mr-[18px]" />
          <span
            className="text-[#AF1600] text-[24px] font-black italic text-left"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            AI + Web3
          </span>
        </div>

        {/* CEX Ecosystem */}
        <div className="absolute flex items-center" style={{ left: "1400px", top: "131px" }}>
          <img src="/blue-dot-1.png" alt="Blue dot" className="w-[12px] h-[12px] mr-[22px]" />
          <span
            className="text-[#2F2F2F] text-[24px] font-medium italic text-left"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            CEX Ecosystem
          </span>
        </div>

        {/* DePIN Infrastructure */}
        <div className="absolute flex items-center" style={{ left: "1400px", top: "228px" }}>
          <img src="/blue-dot-2.png" alt="Blue dot" className="w-[12px] h-[12px] mr-[22px]" />
          <span
            className="text-[#2F2F2F] text-[24px] font-medium italic text-left"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            DePIN Infrastructure
          </span>
        </div>

        {/* DeFi Innovation */}
        <div className="absolute flex items-center" style={{ left: "1400px", top: "324px" }}>
          <img src="/blue-dot-3.png" alt="Blue dot" className="w-[12px] h-[12px] mr-[22px]" />
          <span
            className="text-[#2F2F2F] text-[24px] font-medium italic text-left"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            DeFi Innovation
          </span>
        </div>

        {/* GameFi & NFT */}
        <div className="absolute flex items-center" style={{ left: "1400px", top: "421px" }}>
          <img src="/blue-dot-4.png" alt="Blue dot" className="w-[12px] h-[12px] mr-[22px]" />
          <span
            className="text-[#2F2F2F] text-[24px] font-medium italic text-left"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            GameFi & NFT
          </span>
        </div>

        {/* Section Title */}
        <h2
          className="absolute text-[#13325E] text-[50px] font-black text-left"
          style={{
            left: "121px",
            top: "229px",
            width: "530px",
            height: "61px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Investment Sectors
        </h2>

        {/* Section Description */}
        <p
          className="absolute text-[#707070] text-[22px] font-normal text-left leading-relaxed"
          style={{
            left: "121px",
            top: "320px",
            width: "1057px",
            height: "99px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          We focus on the most promising innovation directions in the Web3 space and make deep investments in the
          following tracks. Our thesis-driven approach combines rigorous due diligence with forward-looking market
          analysis.
        </p>
      </div>

      {/* AI + Web3 Detailed Section */}
      <div
        className="absolute"
        style={{
          left: "0pt",
          top: "4789px",
          width: "1920px",
          height: "468px",
        }}
      >
        {/* Horizontal Line 31 */}
        <div
          className="absolute"
          style={{
            left: "121.5px",
            top: "0px",
            width: "1636px",
            height: "2px",
            backgroundColor: "#E5EDF7",
          }}
        />
        {/* Background Rectangle */}
        <div
          className="absolute bg-cover bg-center bg-no-repeat"
          style={{
            left: "122px",
            top: "0px",
            width: "545px",
            height: "468px",
            backgroundImage: "url('/rectangle-71.png')",
          }}
        />

        {/* Vertical Line - Left of Gradient Rectangle */}
        <div
          className="absolute"
          style={{
            left: "1351px",
            top: "-322px",
            width: "2px",
            height: "250px",
            backgroundColor: "#E5EDF7",
          }}
        />

        {/* AI + Web3 Core Technology */}
        <div
          className="absolute"
          style={{
            left: "172px",
            top: "56px",
            width: "411px",
            height: "115px",
          }}
        >
          <div
            className="text-[#AF1600] text-[40px] text-left leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <div className="font-normal">AI + Web3</div>
            <div className="font-bold">Core Technology</div>
          </div>
        </div>

        {/* AI + Web3 Applications */}
        <div
          className="absolute"
          style={{
            left: "717px",
            top: "56px",
            width: "411px",
            height: "115px",
          }}
        >
          <div
            className="text-[#AF1600] text-[40px] text-left leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <div className="font-normal">AI + Web3</div>
            <div className="font-bold">Applications</div>
          </div>
        </div>

        {/* AI + Web3 Data & Governance */}
        <div
          className="absolute"
          style={{
            left: "1262px",
            top: "56px",
            width: "411px",
            height: "115px",
          }}
        >
          <div
            className="text-[#AF1600] text-[40px] text-left leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <div className="font-normal">AI + Web3</div>
            <div className="font-bold">Data & Governance</div>
          </div>
        </div>

        {/* Core Technology Content */}
        <div
          className="absolute text-black text-[22px] font-normal text-left"
          style={{
            left: "171px",
            top: "211px",
            width: "410px",
            height: "207px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "45px",
          }}
        >
          Decentralized AI Model Training
          <br />
          AI Model Marketplaces
          <br />
          Privacy-Preserving Machine Learning
          <br />
          Federated Learning Networks
        </div>

        {/* Applications Content */}
        <div
          className="absolute text-black text-[22px] font-normal text-left"
          style={{
            left: "717px",
            top: "211px",
            width: "461px",
            height: "162px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "45px",
          }}
        >
          AI-Powered Smart Contract Development
          <br />
          Intelligent Trading Systems
          <br />
          Predictive Analytics for DeFi
          <br />
          AI-Enhanced Security Solutions
        </div>

        {/* Data & Governance Content */}
        <div
          className="absolute text-black text-[22px] font-normal text-left"
          style={{
            left: "1262px",
            top: "211px",
            width: "378px",
            height: "162px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "45px",
          }}
        >
          Decentralized Data Markets
          <br />
          AI Model Governance Frameworks
          <br />
          Data Quality Validation Networks
          <br />
          Cross-chain AI Orchestration
        </div>
      </div>

      {/* Success Stories Section */}
      <div
        className="absolute"
        style={{
          left: "0pt",
          top: "5357px",
          width: "1920px",
          height: "1943px",
        }}
      >
        {/* Background Mask */}
        <div
          className="absolute bg-cover bg-center bg-no-repeat"
          style={{
            left: "0px",
            top: "0px",
            width: "1920px",
            height: "463px",
            backgroundImage: "url('/red-background-mask.png')",
          }}
        />

        {/* Section Title with Hopper Project Name */}
        <div
          className="absolute text-white text-[50px] font-black text-left leading-tight"
          style={{
            left: "121px",
            top: "200px",
            width: "1920px",
            height: "200px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <div>Hopper - Multi-chain Decentralized</div>
          <div>Trading Platform</div>
        </div>

        {/* Success Stories Title */}
        <h2
          className="absolute text-white text-[50px] font-normal text-left"
          style={{
            left: "121px",
            top: "123.5px",
            width: "381px",
            height: "61px",
            fontFamily: "Montserrat, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Success Stories
        </h2>

        {/* First Conference Photo */}
        <img
          src="/conference-photo-1.png"
          alt="Hopper Conference Presentation"
          className="absolute"
          style={{
            left: "203px",
            top: "559.89px",
            width: "698px",
            height: "440px",
          }}
        />

        {/* Second Conference Photo */}
        <img
          src="/conference-photo-2.png"
          alt="Hopper Conference Audience"
          className="absolute"
          style={{
            left: "203px",
            top: "1098.39px",
            width: "698px",
            height: "440px",
          }}
        />

        {/* Globe Wireframe Design Element */}
        <img
          src="/globe-wireframe.png"
          alt="Globe Wireframe"
          className="absolute"
          style={{
            left: "1038px",
            top: "554.33px",
            width: "148.84px",
            height: "104.56px",
          }}
        />

        {/* Red Oval Design Element */}
        <img
          src="/red-oval-design.png"
          alt="Red Oval Design"
          className="absolute"
          style={{
            left: "1034.5px",
            top: "1078.83px",
            width: "155px",
            height: "104.56px",
          }}
        />

        {/* Investment Results Section */}
        <h3
          className="absolute text-[#AF1600] text-[40px] font-medium text-left"
          style={{
            left: "1020.5px",
            top: "706.89px",
            width: "392px",
            height: "49px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Investment Results
        </h3>

        {/* Investment Results Content */}
        <div className="absolute" style={{ left: "1020.5px", top: "803.89px" }}>
          <p
            className="text-black text-[28px] font-medium text-left mb-[27px]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              width: "660px",
              height: "34px",
            }}
          >
            Successfully raised $1.7 million in seed funding
          </p>
          <p
            className="text-black text-[28px] font-medium text-left"
            style={{
              fontFamily: "Montserrat, sans-serif",
              width: "732px",
              height: "34px",
            }}
          >
            Solid initial capital supporting project development
          </p>
        </div>

        {/* Project Highlights Section */}
        <h3
          className="absolute text-[#AF1600] text-[40px] font-medium text-left"
          style={{
            left: "1020.5px",
            top: "1231.39px",
            width: "368px",
            height: "49px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Project Highlights
        </h3>

        {/* Project Highlights Content */}
        <div className="absolute" style={{ left: "1020.5px", top: "1328.39px" }}>
          <p
            className="text-black text-[28px] font-medium text-left mb-[27px]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              width: "732px",
              height: "82px",
              lineHeight: "41px",
            }}
          >
            Advanced MPC Wallet Technology with 99.99% Security Score
          </p>
          <p
            className="text-black text-[28px] font-medium text-left mb-[27px]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              width: "324px",
              height: "34px",
            }}
          >
            AI Model Marketplaces
          </p>
          <p
            className="text-black text-[28px] font-medium text-left mb-[27px]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              width: "530px",
              height: "34px",
            }}
          >
            Privacy-Preserving Machine Learning
          </p>
          <p
            className="text-black text-[28px] font-medium text-left"
            style={{
              fontFamily: "Montserrat, sans-serif",
              width: "423px",
              height: "34px",
            }}
          >
            Federated Learning Networks
          </p>
        </div>
      </div>

      {/* Core Team Section */}
      <CoreTeamSection />

      {/* Partners & Ecosystem Section */}
      <div
        className="absolute"
        style={{
          left: "0pt",
          top: "7898px",
          width: "1920px",
          height: "1302px",
        }}
      >
        {/* Background Mask */}
        <div
          className="absolute bg-cover bg-center bg-no-repeat"
          style={{
            left: "0px",
            top: "443px",
            width: "1920px",
            height: "847px",
            backgroundImage: "url('/mask-group-17.png')",
          }}
        />

        {/* Horizontal Line 34 */}
        <div
          className="absolute bg-gray-400"
          style={{
            left: "122.5px",
            top: "-844px",
            width: "1693px",
            height: "2px",
          }}
        />

        {/* Partners & Ecosystem Title */}
        <h2
          className="absolute text-white text-[50px] font-black text-left"
          style={{
            left: "121px",
            top: "596px",
            width: "596px",
            height: "61px",
            fontFamily: "Montserrat, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Partners & Ecosystem
        </h2>

        {/* Rounded Rectangle 1 - Strategic Investment Partners */}
        <div
          className="absolute bg-white rounded-lg flex items-center justify-center"
          style={{
            left: "121px",
            top: "697px",
            width: "366px",
            height: "56px",
          }}
        >
          <span
            className="text-[#13325E] text-[20px] font-black text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Strategic Investment Partners
          </span>
        </div>

        {/* Rounded Rectangle 2 - Technology Partners */}
        <div
          className="absolute border border-white rounded-lg flex items-center justify-center"
          style={{
            left: "517px",
            top: "697px",
            width: "270px",
            height: "56px",
            borderWidth: "1px",
          }}
        >
          <span
            className="text-white text-[20px] font-black text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Technology Partners
          </span>
        </div>

        {/* Rounded Rectangle 3 - Ecosystem Partners */}
        <div
          className="absolute border border-white rounded-lg flex items-center justify-center"
          style={{
            left: "817px",
            top: "697px",
            width: "262px",
            height: "56px",
            borderWidth: "1px",
          }}
        >
          <span
            className="text-white text-[20px] font-black text-center"
            style={{
              fontFamily: "Montserrat, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Ecosystem Partners
          </span>
        </div>

        {/* Content Rectangles */}
        <img
          src="/rectangle-92.png"
          alt="Venture Capital Background"
          className="absolute"
          style={{
            left: "122px",
            top: "824px",
            width: "545px",
            height: "328px",
          }}
        />

        <img
          src="/rectangle-93.png"
          alt="Industry Leaders Background"
          className="absolute"
          style={{
            left: "667px",
            top: "824px",
            width: "545px",
            height: "328px",
          }}
        />

        <img
          src="/rectangle-94.png"
          alt="Angel Networks Background"
          className="absolute"
          style={{
            left: "1212px",
            top: "824px",
            width: "545px",
            height: "328px",
          }}
        />

        {/* Section Titles */}
        <h3
          className="absolute text-white text-[40px] font-black text-left"
          style={{
            left: "171px",
            top: "859px",
            width: "326px",
            height: "49px",
            fontFamily: "Montserrat, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Venture Capital
        </h3>

        <h3
          className="absolute text-white text-[40px] font-black text-left"
          style={{
            left: "717px",
            top: "859px",
            width: "353px",
            height: "49px",
            fontFamily: "Montserrat, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Industry Leaders
        </h3>

        <h3
          className="absolute text-white text-[40px] font-black text-left"
          style={{
            left: "1262px",
            top: "859px",
            width: "337px",
            height: "49px",
            fontFamily: "Montserrat, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Angel Networks
        </h3>

        {/* Content Text Boxes */}
        <div
          className="absolute text-[#E5EDF7] text-[22px] font-normal text-left leading-relaxed"
          style={{
            left: "171px",
            top: "945px",
            width: "357px",
            height: "162px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Top-tier Global VCs Crypto-native Investment Funds Corporate Venture Arms Family Offices & HNWIs
        </div>

        <div
          className="absolute text-[#E5EDF7] text-[22px] font-normal text-left leading-relaxed"
          style={{
            left: "717px",
            top: "945px",
            width: "350px",
            height: "162px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Web3 Infrastructure Giants Leading DeFi Protocols Major Gaming Studios Enterprise Blockchain Solutions
        </div>

        <div
          className="absolute text-[#E5EDF7] text-[22px] font-normal text-left leading-relaxed"
          style={{
            left: "1262px",
            top: "945px",
            width: "226px",
            height: "162px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Serial Entrepreneurs Industry Veterans Technical Innovators Successful Founders
        </div>
      </div>

      {/* Development Roadmap Section */}
      <div
        className="absolute"
        style={{
          left: "0pt",
          top: "9188.2px",
          width: "1920px",
          height: "1185.3px",
        }}
      >
        {/* Background - 滚动组 6 */}
        <div
          className="absolute bg-cover bg-center bg-no-repeat"
          style={{
            left: "0.5px",
            top: "0px",
            width: "1919.81px",
            height: "1185.3px",
            backgroundImage: "url('/scroll-group-6.png')",
          }}
        />

        {/* Group 250 Design Element */}
        <img
          src="/group-250.png"
          alt="Roadmap Design Element"
          className="absolute"
          style={{
            left: "122px",
            top: "65.19px",
            width: "114.43px",
            height: "122.23px",
          }}
        />

        {/* Development Roadmap Title */}
        <h2
          className="absolute text-[#13325E] text-[50px] font-black text-left"
          style={{
            left: "121px",
            top: "240.41px",
            width: "638px",
            height: "61px",
            fontFamily: "Montserrat, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Development Roadmap
        </h2>

        {/* Rounded Rectangle 4 - Launch */}
        <div
          className="absolute rounded-lg flex items-center justify-center"
          style={{
            left: "122px",
            top: "341.8px",
            width: "136px",
            height: "56px",
            backgroundColor: "#13325E",
          }}
        >
          <span
            className="text-white text-[20px] font-medium text-left"
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Launch
          </span>
        </div>

        {/* Rounded Rectangle 5 - Acceleration */}
        <div
          className="absolute border rounded-lg flex items-center justify-center"
          style={{
            left: "288px",
            top: "341.8px",
            width: "193px",
            height: "56px",
            borderColor: "#3D5876",
            borderWidth: "1px",
          }}
        >
          <span
            className="text-[#3D5876] text-[20px] font-medium text-left"
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Acceleration
          </span>
        </div>

        {/* Rounded Rectangle 6 - Leadership */}
        <div
          className="absolute border rounded-lg flex items-center justify-center"
          style={{
            left: "511px",
            top: "341.8px",
            width: "178px",
            height: "56px",
            borderColor: "#3D5876",
            borderWidth: "1px",
          }}
        >
          <span
            className="text-[#3D5876] text-[20px] font-medium text-left"
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Leadership
          </span>
        </div>

        {/* Timeline Indicator */}
        <div
          className="absolute text-black text-[30px] font-medium text-left"
          style={{
            left: "121px",
            top: "478.8px",
            width: "206px",
            height: "37px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          (0-6 months)
        </div>

        {/* Foundation Building Description */}
        <div
          className="absolute text-black text-[22px] font-light text-left"
          style={{
            left: "121px",
            top: "535.8px",
            width: "1049px",
            height: "54px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "27px",
          }}
        >
          Foundation Building and Initial Operations Structured according to proven accelerator program methodologies
          (Global Accelerator Network, 2023)
        </div>

        {/* Horizontal Line 36 */}
        <div
          className="absolute bg-gray-400"
          style={{
            left: "122.5px",
            top: "640.3px",
            width: "1676.5px",
            height: "2px",
          }}
        />

        {/* Fund Raising & Financial Infrastructure */}
        <div
          className="absolute text-[#AF1600] text-[28px] font-bold text-left leading-tight"
          style={{
            left: "158px",
            top: "689.8px",
            width: "348px",
            height: "73px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <div>Fund Raising &</div>
          <div>Financial Infrastructure</div>
        </div>

        {/* Team Building & Organization */}
        <div
          className="absolute text-[#AF1600] text-[28px] font-bold text-left leading-tight"
          style={{
            left: "577px",
            top: "689.8px",
            width: "348px",
            height: "73px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <div>Team Building &</div>
          <div>Organization</div>
        </div>

        {/* Ecosystem Development */}
        <div
          className="absolute text-[#AF1600] text-[28px] font-bold text-left leading-tight"
          style={{
            left: "996px",
            top: "689.8px",
            width: "348px",
            height: "73px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <div>Ecosystem</div>
          <div>Development</div>
        </div>

        {/* Brand & Community Building */}
        <div
          className="absolute text-[#AF1600] text-[28px] font-bold text-left leading-tight"
          style={{
            left: "1415px",
            top: "689.8px",
            width: "348px",
            height: "73px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <div>Brand & Community</div>
          <div>Building</div>
        </div>

        {/* Fund Raising & Financial Infrastructure Content */}
        <div
          className="absolute text-black text-[18px] font-normal text-left"
          style={{
            left: "197px",
            top: "792.8px",
            width: "309px",
            height: "400px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "25px",
          }}
        >
          Complete Hopper Fund's $20M USDT fundraising target
          <br />
          <br />
          Establish multi-sig treasury management system
          <br />
          <br />
          Set up professional financial reporting framework
          <br />
          <br />
          Design token economics and distribution model
        </div>

        {/* Team Building & Organization Content */}
        <div
          className="absolute text-black text-[18px] font-normal text-left"
          style={{
            left: "616px",
            top: "792.8px",
            width: "309px",
            height: "400px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "25px",
          }}
        >
          Recruit and onboard core investment research team
          <br />
          <br />
          Build professional operations and technical teams
          <br />
          <br />
          Establish post-investment management system
          <br />
          <br />
          Develop internal OKR and performance metrics
        </div>

        {/* Ecosystem Development Content */}
        <div
          className="absolute text-black text-[18px] font-normal text-left"
          style={{
            left: "1035px",
            top: "792.8px",
            width: "309px",
            height: "400px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "25px",
          }}
        >
          Establish global LP and strategic partner network
          <br />
          <br />
          Conduct comprehensive Web3 industry research
          <br />
          <br />
          Initiate first batch of strategic investments
          <br />
          <br />
          Launch Scout and Fellow recruitment program
        </div>

        {/* Brand & Community Building Content */}
        <div
          className="absolute text-black text-[18px] font-normal text-left"
          style={{
            left: "1454px",
            top: "792.8px",
            width: "309px",
            height: "400px",
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "25px",
          }}
        >
          Participate in major Web3 summits and conferences
          <br />
          <br />
          Release in-depth industry research reports
          <br />
          <br />
          Develop professional media and content matrix
          <br />
          <br />
          Build initial community engagement channels
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
