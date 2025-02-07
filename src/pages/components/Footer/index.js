const { faXTwitter, faInstagram, faYoutube, faLinkedin } = require("@fortawesome/free-brands-svg-icons");
const { faMapLocationDot, faPhone, faFax, faMailBulk, faCaretRight } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

import Logo from "../Logo";

function Footer({ }) {
  return (
    <footer className="flex justify-between px-30 py-10 bg-gray-300">
      <div className="gap-8 items-start grid grid-cols-[auto_1fr]">
        <Logo className="self-start col-span-2 w-min" />

        <FontAwesomeIcon icon={faMapLocationDot} size="2x" />
        <p className="text-lg">Phenikaa University, Hà Đông</p>

        <FontAwesomeIcon icon={faPhone} size="2x" />
        <p className="text-lg">0333.xxx.xxx</p>

        <FontAwesomeIcon icon={faFax} size="2x" />
        <p className="text-lg">Fax: 055.3876.222</p>

        <FontAwesomeIcon icon={faMailBulk} size="2x" />
        <p className="text-lg">travellingo@gmail.com</p>
      </div>

      <div className="gap-8 grid grid-cols-[auto_1fr]">
        <div className="self-start col-span-2">
          <p className="font-bold text-2xl mb-1">Truy cập nhanh</p>
          <div className="w-1/2 h-0.5 bg-black"></div>
        </div>

        <FontAwesomeIcon className="relative translate-y-2" icon={faCaretRight} />
        <p className="text-lg">Trang chủ</p>

        <FontAwesomeIcon className="relative translate-y-2" icon={faCaretRight} />
        <p className="text-lg">Điểm đến phổ biến</p>

        <FontAwesomeIcon className="relative translate-y-2" icon={faCaretRight} />
        <p className="text-lg">Cẩm nang</p>

        <FontAwesomeIcon className="relative translate-y-2" icon={faCaretRight} />
        <p className="text-lg">Tin tức</p>
      </div>

      <div className="flex flex-col gap-5 items-start">
        <div className="self-start col-span-2">
          <p className="font-bold text-2xl mb-1">Theo dõi chúng tôi</p>
          <div className="w-1/2 h-0.5 bg-black"></div>
        </div>

        <div className="flex gap-8">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </div>
      </div>
    </footer>
  )
}

export default Footer