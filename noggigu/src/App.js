import MyPage from "./pages/myPage.jsx";
import WritePage from "./pages/findEquip/write.jsx";
import FindPage from "./pages/findEquip/find.jsx";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div>
//       <h1>홈 페이지</h1>
//       <Link to="/find">
//         {" "}
//         {/* Link 컴포넌트를 사용하여 이동할 경로 설정 */}
//         <Button2>등록하기</Button2>
//       </Link>
//     </div>
//   );
// };

// const GoPage = () => {
//   return (
//     <div>
//       <h1>Find 페이지</h1>
//       {/* Find 페이지의 내용 */}
//     </div>
//   );
// };

const App = () => {
  return (
    <WritePage />

    // <Router>
    //   <Route exact path="/" component={HomePage} />
    //   <Route path="/find" component={GoPage} />
    // </Router>
  );
};

export default App;
