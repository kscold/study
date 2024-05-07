const express = require("express")
const cors = require("cors")

const app = express()

app.set("port", process.env.PORT || 8080)

app.use(cors())
app.use(express.json()) // json 형식으로 파싱해주는 설정
app.use(express.urlencoded({ extended: true })) // 한글 주소 허용 utf-8

app.get("/", (req, res) => {
  res.send("hello express")
})

app.post("/add", (req, res, next) => {
  console.log(req.body.title)
  console.log(req.body.date)
  next()
})

app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행")
})
