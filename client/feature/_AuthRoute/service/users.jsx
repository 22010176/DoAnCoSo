import API from "Api";

export async function RegisterUser({ ho, ten, email, soDienThoai, matKhau }) {
  return await API.post('/account/register', { ho, ten, email, soDienThoai, matKhau })
    .then(function (response) { return response.data })
}

export async function LoginUser({ email, matKhau }) {
  return await API.post('/account/login', { email, matKhau })
    .then(function (response) { return response.data })
}