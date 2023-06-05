import http from 'k6/http'
import { check, sleep } from 'k6'

const BASE_URL = 'https://testapi.stotte.no/api/v1';

// See https://k6.io/docs/using-k6/k6-options/
export const options = {
  vus: 3,
  duration: '1m',
  ext: {
    loadimpact: {
      name: 'Smoke Test',
    },
  },
}

export default function () {
  const data = { email: 'john.pattrick2@gmail.com', password: '123456' }
  let loginRes = http.post(`${BASE_URL}/organisation_user/login`, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  })

  check(loginRes, { 'success login': (r) => r.status === 200 })
  console.log(`Status Code: ${loginRes.status} - Response Body: ${loginRes.body}`)
  sleep(1)
}