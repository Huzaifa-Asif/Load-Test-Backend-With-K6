import http from 'k6/http'
import { check, sleep } from 'k6'

const BASE_URL = 'https://api.example.com/api/v1'

// See https://k6.io/docs/using-k6/k6-options/
export const options = {
  stages: [
    { duration: '1m', target: 10 },    // Ramp up to 10 VUs in 1 minute
    { duration: '1m', target: 60 },    // Stay at 10 VUs for 5 minutes
    { duration: '30s', target: 5 },    // Stay at 10 VUs for 5 minutes
    { duration: '1m', target: 50 },    // Stay at 10 VUs for 5 minutes
    { duration: '1m', target: 20 },     // Ramp down to 0 VUs in 1 minute
  ],
  ext: {
    loadimpact: {
      name: 'Customised Load Test',
    },
  },
}

export default function () {
    const data = { email: 'john.pattrick2@gmail.com', password: '123456' }
    // https://api.example.com
    let res = http.post(`${BASE_URL}/organisation_user/login`, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  
    check(res, { 'success login': (r) => r.status === 200 })
    console.log(`Status Code: ${res.status} - Response Body: ${res.body}`)
    sleep(0.5)
  }