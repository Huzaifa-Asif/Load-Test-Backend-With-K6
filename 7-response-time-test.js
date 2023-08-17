import http from 'k6/http'
import { check, sleep } from 'k6'

const BASE_URL = 'https://api.example.com/api/v1';

// See https://k6.io/docs/using-k6/k6-options/
export const options = {
  vus: 10,
  duration: '2m',
  thresholds: {
    http_req_duration: ['p(95)<800', 'p(99)<1500'], // 95% of requests must complete below 800ms, and 99% must complete below 1.5s.
  },
  ext: {
    loadimpact: {
      name: 'Response Time Test',
    },
  },
}

export default function () {
    const data = { email: 'john.pattrick2@gmail.com', password: '123456' }
    let res = http.post(`${BASE_URL}/organisation_user/login`, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  
    check(res, { 'success login': (r) => r.status === 200 })
    console.log(`Status Code: ${res.status} - Response Body: ${res.body}`)
    sleep(1)
  }