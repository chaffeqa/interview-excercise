
let count = 0;
const fetchMock = (endpoint) => new Promise(
  (resolve) => setTimeout(() => resolve({count: count++}), 800)
)

// TODO: Implement ApiCache here:


// Tests:
// const requests = []
// requests.push(ApiCache.get('/endpoint-1.json')) // reaches out to server, returns {count: 1}
// requests.push(ApiCache.get('/endpoint-2.json')) // reaches out to server, returns {count: 2}
// requests.push(ApiCache.get('/endpoint-1.json')) // Uses cached response, returns {count: 1}
// requests.push(ApiCache.get('/endpoint-1.json')) // Uses cached response, returns {count: 1}
// requests.push(ApiCache.get('/endpoint-2.json')) // Uses cached response, returns {count: 2}
// requests.push(ApiCache.get('/endpoint-3.json')) // Uses cached response, returns {count: 3}
// await Promise.all(requests)
