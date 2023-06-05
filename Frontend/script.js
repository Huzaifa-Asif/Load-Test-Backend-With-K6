import http from 'k6/http'
import { sleep } from 'k6'

// See https://k6.io/docs/using-k6/k6-options/
export const options = {
  vus: 10,
  duration: '30s',
  ext: {
    loadimpact: {
      name: 'Stotte Org Panel Load Test with 20 vus for 30s',
    },
  },
}

export default function () {
    let res = http.get('https://org.stotte.no')  
    // sleep(0.3)
  }