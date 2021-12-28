import React, { useState, useEffect } from "react";
import "../style/ClubCategory.scss";
// import {Link} from 'react-router-dom';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const MainClubCategory = (props) => {
    const [ClubList, setClubList] = useState([]);
    // const [ClubListFilter, setClubListFilter] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const [mainCategory, setMainCategory] = useState({});

    //큰틀 category list 불러오기
    var fetchURL;
    if (props.category === undefined)
        fetchURL = "";
    else if ((props.category !== undefined) && (props.name === undefined))
        fetchURL = "../"
    else
        fetchURL = "../../"

    useEffect(() => {
        fetch(fetchURL + "dummy/maincategorylist.json")
            .then((res) => res.json())
            .then(
                (result) => {
                    setMainCategory(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, [fetchURL]);

    //세부 category 불러오기
    useEffect(() => {
        fetch(fetchURL + "dummy/clublist.json")
            .then((res) => res.json())
            .then(
                (result) => {
                    setClubList(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, [fetchURL]);

    //큰틀 category에 세부 category subNav배열에 할당
    var newCategoryList = JSON.parse(JSON.stringify(mainCategory));
    for (var i = 0; i < newCategoryList.length; i++) {
        for (var j = 0; j < ClubList.length; j++) {
            if (ClubList[j].category === newCategoryList[i].title) {
                newCategoryList[i].subNav.push({
                    title: ClubList[j].name,
                    itemId: newCategoryList[i].itemId + "/" + ClubList[j].label
                });
            }
        }
    }

    return (
        <div className="ClubCategory scroll-type1">
            {/* {console.log(newCategoryList)} */}
            <Navigation
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                    history.push(itemId);
                }}
                items={newCategoryList}
            />

        </div>
    );
};
export default MainClubCategory;
