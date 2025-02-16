import React, { useContext } from 'react'
import ReactMarkdown from "react-markdown";
import { dataContext, prevUser } from '../context/UserContext'

function Chat() {
    let {input,setInput,prevInput,setPrevInput,showResult,setShowResult,feature,setFeature,prevFeature,setPrevFeature,genImgUrl,setGenImgUrl}=useContext(dataContext)
  return (
    <div className='chat-page'>
      <div className="user">

        {prevFeature=="upimg"?<><img src={prevUser.imgUrl} alt="" />
        <span>{prevUser.prompt}</span></>:<span>{prevUser.prompt}</span>}

      </div>
      <div className="ai">

       {prevFeature=="genimg"
       ?
       <>
       {!genImgUrl?<span>Generating Image...</span>:<img src={genImgUrl} alt="" />}
       </>
       :
       !showResult
       ?
       <span>Thinking...</span>
       :
       
       <ReactMarkdown  >{showResult}</ReactMarkdown>}
       {/* style={{overflow:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"}} */}
      </div>
    </div>
  )
}

export default Chat
