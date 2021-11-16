import React, { useEffect, useState } from "react";
import SubClubs from "./SubClubs";
import DetailClubPageTest from "../DetailClub/DetailClubPage_test";
import "../style/ClubPage.scss";

const SubClubPage = (props) => {
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
        <div className="subClubBox">
            {detailPage ? (
                <DetailClubPageTest category={props.category} name={props.name} status={2}/>
            ) : (
                <SubClubs category={props.category} name={props.name}
                />
            )}
        </div>
    );
};

export default SubClubPage;
