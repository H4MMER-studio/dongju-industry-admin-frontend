//common
import MainNav from "./common/MainNav";
import Footer from "./common/Footer";

export { MainNav, Footer };

// Home
import HomeContainter from "./Layout/Home/HomeContainter";

export const Home = {
    Container: HomeContainter,
};

//Notice
import NoticeContainer from "./Layout/Notice/NoticeContainer";

export const Notice = {
    Container: NoticeContainer,
};

//Notice Detail
import NoticeDetailContainer from "./Layout/Notice-Detail/NoticeDetailContainer";

export const NoticeDetail = {
    Container: NoticeDetailContainer,
};

//Editor
import EditorContainer from "./Layout/Editor/EditorContainer";

export const Editor = {
    Container: EditorContainer,
};

//Customer-Service
import CustomerServiceContainer from "./Layout/Customer-Service/CustomerServiceContainer";

export const CustomerService = {
    Container: CustomerServiceContainer,
};

//Company
import CompanyContainer from "./Layout/Company/CompanyContainer";

export const Company = {
    Container: CompanyContainer,
};

//Product
import ProductContainer from "./Layout/Product/ProductContainer";
import DamperCoilDetail from "./Layout/Product/DamperCoilDetail";
import AirConditioner from "./Layout/Product/AirConditioner";
import ExhaustUnit from "./Layout/Product/ExhaustUnit";
import BubbleDamper from "./Layout/Product/BubbleDamper";
import FullySealedDoor from "./Layout/Product/FullySealedDoor";

export const Product = {
    Container: ProductContainer,
    DamperCoilDetail,
    AirConditioner,
    ExhaustUnit,
    BubbleDamper,
    FullySealedDoor,
};
//Wigets
import * as Widgets from "./widgets";

export { Widgets };

//Login
import LoginContainer from "./Layout/Login/LoginContainer";

export const Login = {
    Main: LoginContainer,
};
