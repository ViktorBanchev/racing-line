import { Route, Routes } from "react-router"

import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Footer from "./components/footer/Footer.jsx"
import ArticleDetails from "./components/article-details/ArticleDetails.jsx"
import Register from "./components/register/Register.jsx"
import Login from "./components/login/Login.jsx"
import Logout from "./components/logout/Logout.jsx"
import MyArticles from "./components/my-articles/MyArticles.jsx"
import Test from "./components/test/Test.jsx"
import ArticleCreate from "./components/article-create/ArticleCreate.jsx"
import { AuthRouteGuard, GuestRouteGuard } from "./components/route-guard/RouteGuard.jsx"

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles/:articleId" element={<ArticleDetails />} />
                <Route path="/test" element={<Test />} />

                <Route element={<AuthRouteGuard />}>
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/my-articles" element={<MyArticles />} />
                    <Route path="/articles/create" element={<ArticleCreate />} />
                </Route>

                <Route element={<GuestRouteGuard />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
            </Routes>

            <Footer />
        </>
    )
}

export default App
