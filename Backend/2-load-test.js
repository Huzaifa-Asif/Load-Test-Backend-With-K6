import http from 'k6/http'
import { check, sleep } from 'k6'

const BASE_URL = 'https://testapi.stotte.no/api/v1'

// See https://k6.io/docs/using-k6/k6-options/
export const options = {
  stages: [
    { duration: '2m', target: 100 }, // traffic ramp-up from 1 to 100 users over 2 minutes.
    { duration: '5m', target: 100 }, // stay at 100 users for 5 minutes
    { duration: '5m', target: 0 }, // ramp-down to 0 users
  ],
  ext: {
    loadimpact: {
      name: 'Load Test',
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