import { useNavigate } from "react-router-dom"
import "routes/Home.css"
import "globalStyle.css"

function NewUser() {
  const navigate = useNavigate()
  const onClick = function(e) {
    e.preventDefault()
    navigate("/new")
  }

  return (
    <>
      <p className="subtitle-size margin-top">현재 참여중인 여행이 없어요!</p>
      <img className="hareubang" src="icons/hareubang.png" alt="돌하르방" />
      <div className="gray text-center content-size">
        <p className="phrase-margin">여행은 모든 세대를 통틀어</p>
        <p className="phrase-margin">가장 잘 알려진 예방약이자 치료제이며</p>
        <p className="phrase-margin">동시에 회복제이다</p>
        <p className="phrase-margin"> -대니얼 드레이크</p>
      </div>
      <button onClick={onClick} className="new-user-btn">제주도로 떠나기</button>
    </>
  )
}


export default NewUser 