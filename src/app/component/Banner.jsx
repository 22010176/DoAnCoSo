import { faCalendar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ConfigProvider, Input } from "antd";
import colors from 'tailwindcss/colors'

const theme = {
  components: {
    Input: {
      /* here is your component tokens */
      lineWidth: 2,
      colorBorder: colors.blue[300]
    },
  },
}
function Banner() {
  return (
    <ConfigProvider theme={theme}>
      <div className="w-full align-bottom">
        <img className="w-full h-auto object-cover" src="\assets\imgs\bg2.jpg" alt="" />
        <form className="2xl:mx-80 xl:mx-50 lg:mx-20 grid lg:grid-cols-5 md:grid-cols-3 gap-5 md:-translate-y-1/2 md:my-0 my-5 mx-5 px-5 py-8 rounded-3xl border-4 border-blue-500 bg-white shadow-lg">
          <Input size="large" placeholder="Bạn muốn đi đâu" />

          <div className="flex gap-2 items-center  ">
            <FontAwesomeIcon size="1x" className="text-blue-500 p-3 bg-blue-100 rounded-xl" icon={faLocationDot} />
            <Input size="large" placeholder="Chọn điểm đi" />
          </div>

          <div className="flex gap-2 items-center  ">
            <FontAwesomeIcon size="1x" className="text-blue-500 p-3 bg-blue-100 rounded-xl" icon={faLocationDot} />
            <Input size="large" placeholder="Chọn điểm đến" />
          </div>

          <div className="flex gap-2 items-center  ">
            <FontAwesomeIcon size="1x" className="text-blue-500 p-3 bg-blue-100 rounded-xl" icon={faCalendar} />
            <Input size="large" type="date" placeholder="Chọn ngày đi" />
          </div>

          <Button className="lg:col-span-1 md:col-span-2" size="large" variant="solid" color="blue">Tìm  kiếm</Button>
        </form>
      </div>
    </ConfigProvider>
  )
}

export default Banner