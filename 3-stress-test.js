import http from 'k6/http'
import { check } from 'k6'

const BASE_URL = 'https://api.example.com/api/v1'

// See https://k6.io/docs/using-k6/k6-options/
export const options = {
  stages: [
    { duration: '30s', target: 10 },   // Ramp up to 10 VUs in 30 seconds
    { duration: '1m', target: 100 },   // Ramp up to 100 VUs in 1 minute
    { duration: '1m', target: 150 },   // Ramp up to 150 VUs in 1 minute
    { duration: '10m', target: 200 },   // Stay at 200 VUs for 5 minutes
    { duration: '1m', target: 30 },     // Ramp down to 30 VUs in 1 minute
  ],
  ext: {
    loadimpact: {
      name: 'Stress Test',
    },
  },
}

export default function () {
  const loginPayload = { email: 'john.pattrick2@gmail.com', password: '123456' }
  for (let i = 0; i < 10; i++) {
    const loginRes = http.post(`${BASE_URL}/organisation_user/login`, JSON.stringify(loginPayload), {
      headers: { 'Content-Type': 'application/json' },
    })
    console.log(`loginRes - Status Code: ${loginRes.status} - Response Body: ${loginRes.body}`);

    if (loginRes.status === 200) {
      const userData = JSON.parse(loginRes.body)
      const sportListRes = http.get(`${BASE_URL}/organisation/get_sport_list?organisationId=${userData.data.user.organisation_id._id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + userData.data.token,
          'User-Agent': 'PostmanRuntime/7.26.8',
        },
      })
      console.log(`sportListRes - Status Code: ${sportListRes.status} - Response Body: ${sportListRes.body}`)

      const statsRes = http.get(`${BASE_URL}/organisation/stats/${userData.data.user.organisation_id._id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + userData.data.token,
          'User-Agent': 'PostmanRuntime/7.26.8',
        },
      })
      console.log(`statsRes- Status Code: ${statsRes.status} - Response Body: ${statsRes.body}`)
    }
  }
}