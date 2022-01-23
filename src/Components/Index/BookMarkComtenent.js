import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Moment from "react-moment";
import * as actions from "../../redux/actions/post";

const BookmarkContent = ({ type, mainClub, subClub, elseclub }) => {
  const dispatch = useDispatch();
  console.log("mainClub :", mainClub);

  switch (type) {
    case 0:
      return (
        <SubContainer>
          {/* {mainClub.map((post, index) => {
            return (
              <CardLink
                key={index}
                to={"elseClub/post/" + post._id}
                className="link"
                onClick={() => {
                  dispatch(actions.setPost(post._id));
                }}
              >
                <CardWrap>
                  <Card className="Posts" key={post._id} id="table">
                    <CardCategory>[{post.category}]</CardCategory>
                    <CardTitle>&nbsp;{post.title}</CardTitle>

                    <CardDate>
                      <Moment format="YYYY/MM/DD">{post.date}</Moment>
                    </CardDate>
                  </Card>
                </CardWrap>
              </CardLink>
            );
          })} */}
        </SubContainer>
      );
    case 1: {
      return <></>;
    }
    case 2: {
      return <></>;
    }
    default: {
      return <></>;
    }
  }
};

const SubContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const CardLink = styled(Link)``;

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: block;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eee;
  border-radius: 20px;
  padding: 20px 30px;
  &:hover {
    box-shadow: 0 30px 30px 2px #ccc;
  }
`;

const CardCategory = styled.div`
  display: block;
  float: left;
  font-size: 20px;
  font-weight: 600;
`;

const CardTitle = styled.div`
  display: block;
  font-size: 20px;
  font-weight: 600;
`;

const CardDate = styled.div`
  display: block;
  font-size: 15px;
`;

export default BookmarkContent;
