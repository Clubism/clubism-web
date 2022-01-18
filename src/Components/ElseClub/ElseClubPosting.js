import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/ElseClubPosting.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { DropdownButton, Dropdown, Form } from "react-bootstrap";
import axios from "../../Assets/axios";

const ElseClubPosting = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [localCategory, setLocalCategory] = useState("");

  const { category: storeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    if (storeCategory === "전체보기") setLocalCategory("선택");
    else setLocalCategory(storeCategory);
  }, [storeCategory]);

  const onPostSubmit = (e) => {
    e.preventDefault();

    if (localCategory === "선택") {
      alert("카테고리를 선택해 주세요");
      return;
    }

    axios
      .post("post/submit", {
        title: title,
        content: content,
        category: localCategory
      })
      .then((res) => {
        console.log("post submit success");
      });
  };

  // console.log(category);

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
          window.location.replace("all");
        }}
      >
        <Form className="titleForm">
          <Form.Control
            type="title"
            placeholder="제목을 입력하세요."
            as="input"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form>
        <CKEditor
          editor={ClassicEditor}
          // data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
            //console.log( { event, editor, data } );
          }}
          onBlur={(event, editor) => {
            //console.log( 'Blur.', editor );
          }}
          onFocus={(event, editor) => {
            //console.log( 'Focus.', editor );
          }}
        />
        <input className="submitBtn" type="submit" value="작성" />
      </Form>
    </div>
  );
};
export default ElseClubPosting;
