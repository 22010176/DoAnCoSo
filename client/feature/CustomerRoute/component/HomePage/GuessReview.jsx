import { Rate } from "antd"

function Review({ image, content, name, value }) {
  return (
    <div className="flex flex-col items-center gap-3 border-4 rounded-2xl border-blue-500  p-5 text-center  min-w-50">
      <p>{content}</p>
      <Rate value={value} disabled />
      <img className="rounded-full w-20 h-auto" src={image} alt="" />
      <p className="text-lg font-bold">{name}</p>
    </div>
  )
}

const reviews = [
  {
    value: 5,
    name: "Test",
    image: "https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/img_customer_review_3.png?1728351987196",
    content: "Dịch vụ rất tuyệt vời. Mình đã có một chuyến đi cực kì đáng nhớ. ND Travel đã hỗ trợ rất nhanh khi gặp vấn đề và mình rất đánh giá cao chăm sóc khách hàng. Rất may mắn khi lựa chọn ND Travel cho chuyến đi lần này."
  },
  {
    value: 5,
    name: "Test",
    image: "https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/img_customer_review_3.png?1728351987196",
    content: "Dịch vụ rất tuyệt vời. Mình đã có một chuyến đi cực kì đáng nhớ. ND Travel đã hỗ trợ rất nhanh khi gặp vấn đề và mình rất đánh giá cao chăm sóc khách hàng. Rất may mắn khi lựa chọn ND Travel cho chuyến đi lần này."
  },
  {
    value: 5,
    name: "Test",
    image: "https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/img_customer_review_3.png?1728351987196",
    content: "Dịch vụ rất tuyệt vời. Mình đã có một chuyến đi cực kì đáng nhớ. ND Travel đã hỗ trợ rất nhanh khi gặp vấn đề và mình rất đánh giá cao chăm sóc khách hàng. Rất may mắn khi lựa chọn ND Travel cho chuyến đi lần này."
  },
]

function GuessReview() {
  return (
    <div className="xl:px-50 px-5 py-10 flex flex-col gap-5 relative overflow-hidden">

      <div className="text-center leading-8">
        <p className="text-4xl font-bold">Khách hàng nói gì về chúng tôi</p>
        <p className="text-gray-600">Chúng tôi vinh hạnh vì đã có cơ hội đồng hành với hơn 10.000 khách hàng trên khắp thế giới</p>
      </div>

      <div className="flex gap-5 relative overflow-x-auto">
        {/* {reviews.map(i => <Review {...i} />)} */}
        <Review value="5" name="Pham"
          content="Dịch vụ rất tuyệt vời. Mình đã có một chuyến đi cực kì đáng nhớ. ND Travel đã hỗ trợ rất nhanh khi gặp vấn đề và mình rất đánh giá cao chăm sóc khách hàng. Rất may mắn khi lựa chọn ND Travel cho chuyến đi lần này."
          image="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/img_customer_review_3.png?1728351987196" />
        <Review value="5" name="Pham"
          content="Dịch vụ rất tuyệt vời. Mình đã có một chuyến đi cực kì đáng nhớ. ND Travel đã hỗ trợ rất nhanh khi gặp vấn đề và mình rất đánh giá cao chăm sóc khách hàng. Rất may mắn khi lựa chọn ND Travel cho chuyến đi lần này."
          image="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/img_customer_review_3.png?1728351987196" />
        <Review value="5" name="Pham"
          content="Dịch vụ rất tuyệt vời. Mình đã có một chuyến đi cực kì đáng nhớ. ND Travel đã hỗ trợ rất nhanh khi gặp vấn đề và mình rất đánh giá cao chăm sóc khách hàng. Rất may mắn khi lựa chọn ND Travel cho chuyến đi lần này."
          image="https://bizweb.dktcdn.net/100/505/645/themes/956063/assets/img_customer_review_3.png?1728351987196" />
      </div>
    </div>
  )
}

export default GuessReview
