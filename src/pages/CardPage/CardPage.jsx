import React,{useState} from 'react'
import * as S from './CardPage.style';
import html2canvas from 'html2canvas';
// import { saveAs } from 'file-saver';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CopyLink from '../../components/CopyLink/CopyLink';
import {icDownload} from '../../assets/Svgs/Index';


const CardPage = () => {
  const nav = useNavigate();

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

const [state,setState]=useState({
  name:"수욘",
  content:"힘둘겠당 ㅠㅠ",
  nth:0
})

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
          <p className='title'>내가주는 선물이야!</p>
          <img src={icDownload} onClick={handleSaveScreenshot}></img>
          </header>
          <article>
            <S.Card id="element-to-capture" >
              <p className='gift-to'>{`To.${state.name}`}</p>
              <p className='gift-content'>{state.content}</p>
              <p className='gift-from'>{`from. 울보산타가 주는 ${state.nth}번째 선물`}</p>
            </S.Card>
          </article>
        <footer>
          <CopyLink content="울보산타 알려주기"></CopyLink>
          <button className='to-storis-btn' onClick={(e)=>{
            nav('/storis')
          }}>다들 울었다던데,,</button>
        </footer>
      </S.Wrapper>
    </S.Container>
  )
}

export default CardPage