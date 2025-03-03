import { faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faAngleDown, faAngleLeft, faArrowRight, faCaretRight, faCircleUser, faFax, faHeadset, faHeart, faLocationDot, faMagnifyingGlass, faMailBulk, faMapLocationDot, faPaperPlane, faPhone, faX } from "@fortawesome/free-solid-svg-icons"
import { height } from "@fortawesome/free-solid-svg-icons/fa0"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Affix, Button, Card, Divider, Input, Rate, Select } from "antd"


function Follow() {
  return (
    <div className="w-19/20 m-auto mb-15 bg-blue-500 text-center p-10 text-white rounded-3xl">
      <h1 className="text-4xl font-bold mb-3">Theo dõi và cập nhật tin tức mới nhất</h1>
      <h3 className="text-2xl mb-15">
        Vinh hạnh của chúng tôi là đề xuất cho bạn những địa điểm du lịch tuyệt vời và đáng nhớ nhất.
        <br />
        Hãy bấm theo dõi ngay!
      </h3>
      <div className="bg-white w-1/3 rounded-2xl p-2 flex gap-2 m-auto items-center">
        <Input size="large" placeholder="Nhập email của bạn" variant="borderless" />
        <Button size="large" variant="solid" color="blue">Theo dõi</Button>
      </div>
    </div>
  )
}

export default Follow