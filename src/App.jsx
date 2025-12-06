import { Route, Routes, useLocation } from "react-router"

import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Footer from "./components/footer/Footer.jsx"
import ArticleDetails from "./components/article-details/ArticleDetails.jsx"
import Register from "./components/register/Register.jsx"
import Login from "./components/login/Login.jsx"
import Logout from "./components/logout/Logout.jsx"
import MyArticles from "./components/my-articles/MyArticles.jsx"
import ArticleCreate from "./components/article-create/ArticleCreate.jsx"
import { AuthRouteGuard, GuestRouteGuard } from "./components/route-guard/RouteGuard.jsx"
import { useEffect, useLayoutEffect } from "react"

const Wrapper = ({ children }) => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [pathname])

    return children;
}

function App() {
    return (
        <Wrapper>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles/:articleId" element={<ArticleDetails />} />

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
        </Wrapper>
    )
}

export default App
