export default function Footer() {
  return (
    <div
      className="absolute"
      style={{
        left: "0pt",
        top: "10373px",
        width: "1920px",
        height: "595px",
      }}
    >
      {/* Background Rectangle 45 */}
      <div
        className="absolute bg-cover bg-center bg-no-repeat"
        style={{
          left: "0px",
          top: "0px",
          width: "1920px",
          height: "595px",
          backgroundImage: "url('/rectangle-45.png')",
        }}
      />

      {/* Group 51 - Logo */}
      <img
        src="/group-51.png"
        alt="Company Logo"
        className="absolute"
        style={{
          left: "122px",
          top: "68px",
          width: "211.2px",
          height: "65.91px",
        }}
      />

      {/* Social Icons */}
      <img
        src="/group-3368.png"
        alt="Social Icon"
        className="absolute"
        style={{
          left: "122px",
          top: "204px",
          width: "58px",
          height: "58px",
        }}
      />

      <img
        src="/group-3369.png"
        alt="Contact Icon"
        className="absolute"
        style={{
          left: "192px",
          top: "204px",
          width: "58px",
          height: "58px",
        }}
      />

      {/* Newsletter Section */}
      <div
        className="absolute text-[#E5EDF7] text-[18px] font-normal text-left"
        style={{
          left: "1320px",
          top: "68px",
          width: "98px",
          height: "22px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Newsletter
      </div>

      <div
        className="absolute text-[#E5EDF7] text-[14px] font-light text-left"
        style={{
          left: "1348px",
          top: "120px",
          width: "141px",
          height: "256px",
          fontFamily: "Segoe UI, sans-serif",
          lineHeight: "20px",
        }}
      >
        Weekly Industry Insights
        <br />
        <br />
        Investment Strategy Sharing
        <br />
        <br />
        Project Updates
        <br />
        <br />
        Event Announcements
        <br />
        <br />
        Governance Proposals
        <br />
        <br />
        Market Research Reports
      </div>

      {/* Contact Section */}
      <div
        className="absolute text-[#E5EDF7] text-[18px] font-normal text-left"
        style={{
          left: "1593px",
          top: "68px",
          width: "97px",
          height: "22px",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Contact us
      </div>

      <div
        className="absolute text-[#E5EDF7] text-[14px] font-light text-left"
        style={{
          left: "1622px",
          top: "120px",
          width: "141px",
          height: "256px",
          fontFamily: "Segoe UI, sans-serif",
          lineHeight: "20px",
        }}
      >
        Business Cooperation
        <br />
        <br />
        Project Submission
        <br />
        <br />
        Media Inquiries
        <br />
        <br />
        Investor Relations
        <br />
        <br />
        Careers
      </div>

      {/* Copyright */}
      <div
        className="absolute text-[#E5EDF7] text-[14px] font-light text-left"
        style={{
          left: "122px",
          top: "422px",
          width: "486px",
          height: "44px",
          fontFamily: "Montserrat, sans-serif",
          lineHeight: "22px",
        }}
      >
        © 2025 Infinite Alliance. All Rights Reserved. Registered as a Wyoming DAO LLC (Wyoming Business Council, 2022).
      </div>

      {/* Horizontal Line */}
      <div
        className="absolute bg-gray-400"
        style={{
          left: "122px",
          top: "502px",
          width: "1677px",
          height: "1px",
        }}
      />

      {/* Footer Navigation */}
      <div className="absolute flex items-center gap-6" style={{ left: "1023px", top: "418px" }}>
        <span className="text-white text-[16px] italic text-left" style={{ fontFamily: "Segoe UI, sans-serif" }}>
          About Us
        </span>
        <span className="text-white text-[16px] italic text-left" style={{ fontFamily: "Segoe UI, sans-serif" }}>
          Join Us
        </span>
        <span className="text-white text-[16px] italic text-left" style={{ fontFamily: "Segoe UI, sans-serif" }}>
          News Center
        </span>
        <span className="text-white text-[16px] italic text-left" style={{ fontFamily: "Segoe UI, sans-serif" }}>
          Research Publications
        </span>
        <span className="text-white text-[16px] italic text-left" style={{ fontFamily: "Segoe UI, sans-serif" }}>
          Events & Webinars
        </span>
        <span className="text-white text-[16px] italic text-left" style={{ fontFamily: "Segoe UI, sans-serif" }}>
          Portfolio
        </span>
        <span className="text-white text-[16px] italic text-left" style={{ fontFamily: "Segoe UI, sans-serif" }}>
          FAQ
        </span>
      </div>

      {/* Legal Links */}
      <div className="absolute flex items-center gap-4" style={{ left: "1358px", top: "459px" }}>
        <span
          className="text-white text-[22px] font-extralight italic text-left"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Terms of Service
        </span>
        <span
          className="text-white text-[22px] font-extralight italic text-left"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Privacy Policy
        </span>
        <span
          className="text-white text-[22px] font-extralight italic text-left"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Disclaimer
        </span>
      </div>

      {/* Risk Warning */}
      <div
        className="absolute text-[#E5EDF7] text-[12px] font-extralight italic text-left"
        style={{
          left: "122px",
          top: "524px",
          width: "1315px",
          height: "30px",
          fontFamily: "Montserrat, sans-serif",
          lineHeight: "15px",
        }}
      >
        Risk Warning: Crypto asset investments carry high risk. Please make informed decisions. Past performance is not
        indicative of future results. Digital assets may be subject to high market volatility and regulatory
        uncertainty. Investment strategies informe
      </div>
    </div>
  )
}
