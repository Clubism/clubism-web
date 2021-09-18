import React, {useEffect, useState} from 'react';
import '../style/ElseClubPosting.scss'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DropdownButton, Dropdown, Form } from 'react-bootstrap';

const ElseClubPosting = (props)=>{
  
  // let category = props.category;
  const [category, setCategory] = useState(props.category);
  if(category==="전체보기") setCategory("선택");

  return(
    <div className='ElseClubPosting'>
        <DropdownButton className='dropdown' id="category" title={category} onSelect={(eventKey)=>{
          // console.log(eventKey);
          setCategory(eventKey);
          }}>
            <Dropdown.Item eventKey="스터디">스터디</Dropdown.Item>
            <Dropdown.Item eventKey="프로젝트">프로젝트</Dropdown.Item>
            <Dropdown.Item eventKey="구독">구독</Dropdown.Item>
        </DropdownButton>
        <Form className='titleForm'><Form.Control type="title" placeholder="제목을 입력하세요." /></Form>
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor 5!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
      <input className='submitBtn' type="submit" value="작성"/>
    </div>
  );
};
export default ElseClubPosting;