import { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { UserProviderWrapper } from "./contexts/user.context";
import { BlogProviderWrapper } from "./contexts/blog.context";

import HomePage from "./pages/HomePage";
import PostDetails from "./pages/PostDetails";
import SettingsPage from "./pages/SettingsPage";
import ErrorPage from "./pages/ErrorPage";
const BlogPage = lazy(() => import("./pages/BlogPage"));

const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
          <BlogProviderWrapper>
      <UserProviderWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<PostDetails />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </UserProviderWrapper>
    </BlogProviderWrapper>
    </Suspense>

  );
};

export default App;
