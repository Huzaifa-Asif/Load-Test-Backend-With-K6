import http from 'k6/http'
import { check } from 'k6'

const BASE_URL = 'https://api.example.com/api/v1'

// See https://k6.io/docs/using-k6/k6-options/
export const options = {
  vus: 1,
  duration: '1m',
  ext: {
    loadimpact: {
      name: 'Rate Limiting Test',
    },
  },
}

export default function () {
  const loginPayload = { email: 'john.pattrick2@gmail.com', password: '123456' }

  const loginRes = http.post(`${BASE_URL}/organisation_user/login`, JSON.stringify(loginPayload), {
    headers: { 'Content-Type': 'application/json' },
  })
  check(loginRes, { 'success login': (r) => r.status === 200 })
  console.log(`loginRes - Status Code: ${loginRes.status} - Response Body: ${loginRes.body}`);
}