import React,{useState,useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const CopyLink = ({content}) => {
  const [changeContent,setChangeContent] = useState(content);




  const handleCopyClipBoard = async () => {
    const text = "여기에 복사하고 싶은 텍스트를 넣으세요"; // 복사할 url
    try {
      await navigator.clipboard.writeText(text);
      setChangeContent("링크 복사완료!")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Button onClick={handleCopyClipBoard}>{changeContent}</Button>
    </>
  );

}

const Button = styled.button`
      width: 16.2rem;
height: 5rem;
  border-radius: 6px;
  background: var(--green, #5BB6E2);
  color: var(--white, #F7F7F7);
  text-align: center;

  /* body/16_bold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export default CopyLink;
