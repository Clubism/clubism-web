import React, { useState, useEffect } from 'react';
import '../style/ClubCategory.scss'
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const MainClubCategory = (props) => {
  const [ClubList, setClubList] = useState([]);
  const [ClubListFilter, setClubListFilter] = useState([]);

  useEffect(() => {
    fetch('dummy/clublist.json')
      .then(res => res.json())
      .then(
        (result) => {
          setClubList(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [])

  useEffect((data) => {
    setClubListFilter(ClubList.filter(data => data.category === props.category))
  }, [props.category, ClubList])

  return (
    <div className="ClubCategory scroll-type1">
      <List disablePadding dense >
        {/* {console.log(ClubList, ClubListFilter)} */}
        {
          props.categoryList.map(data =>
            <React.Fragment key={data.id}>
              <ListItem button onClick={function (e) {
                e.preventDefault();
                props.setCategory(data.value);
                console.log(data.title);
              }}>
                <ListItemText>{data.value}</ListItemText>
              </ListItem>
              <List disablePadding className={(data.value === props.category) && props.category !== '전체보기' ? 'show-menu' : 'hide-menu'}>
                {ClubListFilter.map(data => {
                  return (
                    <Link to={{pathname : `/mainClub/${data.label}`}} className="sidebar-item-text">
                    <ListItem key={data.id} button dense>
                      
                        <ListItemText>{data.name}</ListItemText>
                      
                    </ListItem>
                    </Link>
                  )
                })}
              </List>
            </React.Fragment>
          )
        }
      </List >
    </div>


    // <div className='ClubCategory'>
    //   {console.log(ClubList, ClubListFilter)}
    //   <ul>
    //     {props.categoryList.map(data =>
    //       <li key={data.id}>
    //         <a onClick={function (e) {
    //           e.preventDefault();
    //           props.setCategory(data.value);
    //           console.log(data.title);
    //         }}>{data.value}</a>
    //         <ul className={(data.value === props.category) && props.category !== '전체보기' ? 'show-menu' : 'hide-menu'}>
    //           {ClubListFilter.map(data =>
    //             <li key={data.id}>{data.name}
    //               {console.log(ClubList, ClubListFilter)}</li>
    //           )}
    //         </ul>
    //       </li>
    //     )}
    //   </ul>
    // </div>
  );
};
export default MainClubCategory;