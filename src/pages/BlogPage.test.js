import { render } from "@testing-library/react";
import BlogPage from "./BlogPage";
import { UserProviderWrapper } from "../contexts/user.context";
import { BlogContext, BlogProviderWrapper } from "../contexts/blog.context";

jest.mock("../components/Header.jsx", () => {
  return {
    __esModule: true,
    default: () => <></>,
  };
});

describe("Blog page testing suite", () => {
  it("should say Blog", () => {
    const { getByTestId } = render(
      <BlogProviderWrapper>
        <UserProviderWrapper>
          <BlogPage />
        </UserProviderWrapper>
      </BlogProviderWrapper>
    );

    const blogTitle = getByTestId("blog-title").textContent;
    expect(blogTitle).toEqual("Blog");
  });

  it("should say Blog", () => {
    const { getByTestId } = render(
      <BlogContext.Provider
        value={{
          posts: [],
          error: true,
          getPosts: () => {},
        }}
      >
        <UserProviderWrapper>
          <BlogPage />
        </UserProviderWrapper>
      </BlogContext.Provider>
    );

    const errorMsg = getByTestId("error-msg").textContent;
    expect(errorMsg).toEqual("Algo ha salido mal");
  });

  it("should say Blog", () => {
    const { getByTestId } = render(
      <BlogContext.Provider
        value={{
          posts: [],
          error: false,
          getPosts: () => {},
        }}
      >
        <UserProviderWrapper>
          <BlogPage />
        </UserProviderWrapper>
      </BlogContext.Provider>
    );

    const loadingMsg = getByTestId("loading-msg").textContent;
    expect(loadingMsg).toEqual("Loading...");
  });
});
