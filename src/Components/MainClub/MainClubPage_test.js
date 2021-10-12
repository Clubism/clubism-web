import React, { useEffect, useState } from "react";
import ClubsTest from "./MainClubs_test";
// import DetailClubPage from "../DetailClub/DetailClubPage";
import DetailClubPageTest from "../DetailClub/DetailClubPage_test";
import "../style/ClubPage.scss";

const MainClubPageTest = (props) => {
    const [detailPage, setDetailPage] = useState(false);

    useEffect(() => {
        if (props.category === undefined)
            setDetailPage(false);
        else if ((props.category !== undefined) && (props.name === undefined))
            setDetailPage(false);
        else
            setDetailPage(true);
    }, [props.category, props.name])

    console.log(detailPage)
    return (
        <div>
            {detailPage ? (
                <DetailClubPageTest category={props.category} name={props.name} />
            ) : (
                <ClubsTest category={props.category} name={props.name}
                />
            )}
        </div>
    );
};

export default MainClubPageTest;
