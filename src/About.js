import React from "react";
import qs from "qs";

/**
 *  쿼리는 location 객체에 들어 있는 search 값에서 조회할 수 있음.
 *  location 객체는 라우트로 사용된 컴포넌트에게 props로 전달되며, 현재 주소에 대한 정보를 지니고 있음.
 *  {
 *      "pathname":"/about",
 *      "search" : "?detail=true",
 *      "hash":""
 *  }
 */
const About = ({ location }) => {
  console.log(location);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞의 ?를 생략함
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 ...</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요 !</p>}
    </div>
  );
};

export default About;
