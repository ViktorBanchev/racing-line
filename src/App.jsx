import { Route, Routes } from "react-router"

import Header from "./components/header/Header.jsx"
import Home from "./components/home/Home.jsx"
import Footer from "./components/footer/Footer.jsx"
import ArticleDetails from "./components/article-details/ArticleDetails.jsx"
import ArticleCreate from "./components/article-create/ArticleCreate.jsx"
import Register from "./components/register/Register.jsx"

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles/:articleId" element={<ArticleDetails />} />
                <Route path="/articles/create" element={<ArticleCreate />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
