import React, { useEffect, useState } from "react";
import "../style/IndexPage.scss";
import { Link } from "react-router-dom";
import ClubRolling from "./ClubRolling";
import ClubList from "./ClubList";
import { IoIosAdd } from "react-icons/io";
import axios from "axios"

const IndexPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/post/indexPost')
    .then((res)=>{
      setPosts(res.data);
    });
  }, [])
  

  return (
    <div>
      <div className="indexBar">
        <div className="indexBarTitle">모집중인 동아리</div>
        <Link to="/#">
          <div className="viewMore">
            <IoIosAdd />
            더보기
          </div>
        </Link>
      </div>
      <div className="indexContainer">
        <ClubRolling />
        <ClubList posts={posts}/>
      </div>
    </div>
  );
};

export default IndexPage;
