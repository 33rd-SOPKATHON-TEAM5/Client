import React from 'react'
import * as S from './CardPage.style';
import html2canvas from 'html2canvas';
// import { saveAs } from 'file-saver';
import axios from 'axios';


const CardPage = () => {

//스크린샷 캡처함수
const captureScreenshot = async (element) => {
  const canvas = await html2canvas(element);
  return canvas.toDataURL('image/png');
};

//스크린샷 저장함수
const saveScreenshot = (dataUrl, filename) => {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename || 'screenshot.png';
  link.click();
};

//버튼 클릭 시 
const handleSaveScreenshot = async () => {
  const element = document.getElementById('element-to-capture');
  const screenshot = await captureScreenshot(element);
  saveScreenshot(screenshot, 'cryingSanta.png');
};

//서버 연동
const API_URL = import.meta.env.VITE_APP_BASE_URL;

const getInfo=async ()=>{

  try {
    const res =await axios.get(`${API_URL}}`);
    
  } catch {
    (err)=>console.log(err);
  }
}




  return (
    <S.Container>
      <S.Wrapper>
        <header>
          <span>내가주는 선물이야!</span>
          <span><button onClick={handleSaveScreenshot}>다운</button></span></header>
          <article>
            <S.Card id="element-to-capture">
              <p>어어아</p>
            </S.Card>
          </article>
        <footer>
          <button>친구 초대하기</button>
          <button>다른 사람 운 이유보기</button>
        </footer>
      </S.Wrapper>
    </S.Container>
  )
}

export default CardPage