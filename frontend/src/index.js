import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import Inputs from "./routes/Inputs/Inputs";
// import App from './App'
import Travel from "routes/Travel";
import Home from "./routes/Home";
import TravelEdit from "routes/TravelEdit";
import KakaoLogin from "routes/KakaoLogin";
import KakaoLoading from "routes/KakaoLoading";
import InputBudget from "routes/Inputs/InputBudget";
import MemberCnt from "routes/Inputs/InputMemberCnt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="inputs" element={<Inputs />}>
          <Route path="budget" element={<InputBudget />} />
          <Route path="membercnt" element={<MemberCnt />} />
        </Route>
        <Route path="travel" element={<Travel />} />
        <Route path="traveledit" element={<TravelEdit />} />
        <Route path="login" element={<KakaoLogin />} />
        <Route path="kakao/callback" element={<KakaoLoading />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
