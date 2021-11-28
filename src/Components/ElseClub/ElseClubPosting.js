import React, {useState, useRef} from 'react';
import '../style/ElseClubPosting.scss'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DropdownButton, Dropdown, Form } from 'react-bootstrap';
import axios from "axios"

const ElseClubPosting = (props)=>{
  
  // let category = props.category;
  const postNum = useRef(1);
  const [category, setCategory] = useState(props.category);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  if(category==="전체보기") setCategory("선택");

  const onPostSubmit = (e)=>{
    e.preventDefault();

    if(category === "선택"){
      alert('카테고리를 선택해 주세요');
      return;
    }

    else if(title === ''){
      alert('제목을 입력해 주세요')
      return
    }
    
    else if(content === ''){
      alert('내용을 입력해 주세요')
      return
    }

    axios.post("http://localhost:4000/post/submit", 
      {
        title : title, 
        content : content,
        category : category,
        postNum : postNum.current,
      })
    .then((res)=>{
      postNum.current += 1;
      console.log(res.data);
    });
  }

  return(
    <div className='ElseClubPosting'>
        <DropdownButton className='dropdown' id="category" title={category} onSelect={(eventKey)=>{
          //console.log(eventKey);
          setCategory(eventKey);
          }}>
            <Dropdown.Item eventKey="스터디">스터디</Dropdown.Item>
            <Dropdown.Item eventKey="프로젝트">프로젝트</Dropdown.Item>
            <Dropdown.Item eventKey="구독">구독</Dropdown.Item>
        </DropdownButton>

        <Form onSubmit = {(e)=>{onPostSubmit(e)}}>
          <Form className='titleForm'>
          <Form.Control type="title" placeholder="제목을 입력하세요." 
                        as = "input" onChange={(e)=>{
                            setTitle(e.target.value)}}/>
          </Form>
          <CKEditor
              editor={ ClassicEditor }
              // data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log( 'Editor is ready to use!', editor );
              } }
              onChange={ ( event, editor ) => {
                  const data = editor.getData();
                  setContent(editor.getData());
                  //console.log( { event, editor, data } );
              } }
              onBlur={ ( event, editor ) => { 
                  //console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                  //console.log( 'Focus.', editor );
              } }
          />
          <input className='submitBtn' type="submit" value="작성"/>
      </Form>
    </div>
  );
};
export default ElseClubPosting;