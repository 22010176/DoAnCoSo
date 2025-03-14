import API from "@/Api";


export async function RegisterUser({ ho, ten, email, soDienThoai, matKhau }) {
  return await API.post('/auth/local/register', { ho, ten, email, soDienThoai, matKhau })
    .then(function (response) { return response.data })
}

export async function LoginUser({ email, password }) {
  return await API.post('/auth/local/login', { email, password })
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
}
