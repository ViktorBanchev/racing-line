import { Route, Routes, useLocation } from "react-router"

import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Footer from "./components/footer/Footer.jsx"
import ArticleDetails from "./components/article-details/ArticleDetails.jsx"
import Register from "./components/register/Register.jsx"
import Login from "./components/login/Login.jsx"
import Logout from "./components/logout/Logout.jsx"
import MyArticles from "./components/my-articles/MyArticles.jsx"
import ArticleForm from "./components/article-create/ArticleForm.jsx"
import { AuthRouteGuard, GuestRouteGuard } from "./components/route-guard/RouteGuard.jsx"
import { useLayoutEffect } from "react"
import About from "./components/about/About.jsx";
import NotFound from "./components/not-found/NotFound.jsx";
import { ToastContainer } from "react-toastify"
import ArticleCatalog from "./components/articles-catalog/ArticlesCatalog.jsx"

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
            
            <ToastContainer />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles/:articleId" element={<ArticleDetails />} />

                <Route element={<AuthRouteGuard />}>
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/my-articles" element={<MyArticles />} />
                    <Route path="/articles/create" element={<ArticleForm mode={'create'} />} />
                    <Route path="/articles/:articleId/edit" element={<ArticleForm mode={'edit'} />} />
                </Route>

                <Route element={<GuestRouteGuard />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />

                <Route path='/articles' element={<ArticleCatalog />} />
            </Routes>

            <Footer />
        </Wrapper>
    )
}

export default App
