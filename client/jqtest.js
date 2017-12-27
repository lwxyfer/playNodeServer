$.ajax({
  url: "http://127.0.0.1:9527",
  method: 'POST',
  headers: {
    Time: 123456789
  },
  contentType: "application/json",
  data: JSON.stringify({
    name: '111',
    ps: '222'
  })
})
