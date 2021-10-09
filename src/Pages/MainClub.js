import React,{useState, useEffect} from 'react';
import IndexTemplate from '../Components/IndexTemplate';
import MainClubPage from '../Components/MainClub/MainClubPage';
import MainClubCategory from '../Components/MainClub/MainClubCategory';

const MainClub = (props) => {
  const {params}=props.match;
  // console.log(params.category, params.name);
  const [mainCategory, setMainCategory] = useState({});
  const [category, setCategory] = useState("전체보기");

  useEffect(() => {
    fetch("dummy/maincategorylist.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setMainCategory(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <IndexTemplate>
      <MainClubCategory
        categoryList={mainCategory}
        setCategory={setCategory}
        category={category}
      />
      <MainClubPage category={params.category} name={params.name} />
    </IndexTemplate>

  )
}

export default MainClub;