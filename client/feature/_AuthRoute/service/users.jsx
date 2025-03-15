import { LocalAuth } from "@/Api";


export async function RegisterUser({ ho, ten, email, soDienThoai, matKhau }) {
  return await LocalAuth.post('/register', { ho, ten, email, soDienThoai, matKhau })
    .then(function (response) { return response.data })
}

export async function LoginUser({ email, password }) {
  return await LocalAuth.post('/auth/local/login', { email, password })
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
}
