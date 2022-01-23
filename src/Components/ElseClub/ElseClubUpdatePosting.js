import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/ElseClubPosting.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { DropdownButton, Dropdown, Form } from "react-bootstrap";
import axios from "../../Assets/axios";

const ElseClubPosting = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [localCategory, setLocalCategory] = useState("");
//   const { category: storeCategory } = useSelector((state) => state.category);
  const currentUser = useSelector((state)=>state.currentUser);

  useEffect(() => {
    setLocalCategory(props.post.category);
    console.log("update", props.post);
  }, []);

  const onPostSubmit = (e) => {
    e.preventDefault();
    if(window.confirm("게시글을 수정하시겠습니까?")){
        console.log("test", title, content, localCategory);
        
        //게시글 수정 정보 전송
        axios
        .post("post/updatePost/"+props.post.id, {
            title: title,
            content: content,
            category: localCategory,
            writer: currentUser.user.id
        })
        .then((res) => {
            console.log("post submit success");
        });

        window.location.replace("/elseClub/all");
    }
  };


  return (
    <div className="ElseClubPosting">
      <DropdownButton
        className="dropdown"
        id="category"
        title={localCategory}
        onSelect={(eventKey) => {
          console.log(eventKey);
          setLocalCategory(eventKey);
        }}
      >
        <Dropdown.Item eventKey="스터디">스터디</Dropdown.Item>
        <Dropdown.Item eventKey="프로젝트">프로젝트</Dropdown.Item>
        <Dropdown.Item eventKey="구독">구독</Dropdown.Item>
      </DropdownButton>
      
      <Form
        onSubmit={(e) => {
          onPostSubmit(e);
        }}
      >
        <Form className="titleForm">
          <Form.Control
            type="title"
            defaultValue={props.post.title}
            placeholder="제목을 입력하세요."
            as="input"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form>
        <CKEditor
          editor={ClassicEditor}
          onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
          onBlur={(event, editor) => {
          }}
          onFocus={(event, editor) => {
          }}
          data = {props.post.content}
        />
        <input className="submitBtn" type="submit" value="작성" />
      </Form>
    </div>
  );
};
export default ElseClubPosting;
