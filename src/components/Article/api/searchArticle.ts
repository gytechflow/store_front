import axios, { AxiosError } from "axios";
import { Criteria } from "../../../models/Http";
import { Article } from "../Article";
import { useEffect, useState } from "react";

interface PageableResponse<T> {
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  size: number;
  numberOfElements: number;
  content: T[];
  pageable: { pageNumber: number; pageSize: number };
}
const ELEMENT_PER_PAGE = 20;

// src/components/Article/api/searchArticle.ts
function searchArticles(criteria?: Criteria) {
  if (criteria?.sort != undefined) {
    return axios
      .get<PageableResponse<Article>>(
        encodeURI(
          `http://localhost:8080/api/articles?page=${criteria?.page}&size=${criteria?.size}&sort=${criteria?.sort}`,
        ),
      )
      .then((response) => response.data);
  }
  return axios
    .get<PageableResponse<Article>>(
      encodeURI(
        `http://localhost:8080/api/articles?page=${criteria?.page}&size=${criteria?.size}`,
      ),
    )
    .then((response) => response.data);
}

function useSearchArticle(criteria: Criteria) {
  const [searchResult, setSearchResult] = useState<Article[]>([]);

  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | AxiosError | undefined>();

  useEffect(() => {
    setLoading(true);
    searchArticles(criteria)
      .then((response) => {
        setSearchResult(response.content);
        setTotalPages(response.totalPages);
      })
      .catch((e: Error | AxiosError) => {
        console.error("Error while fetching articleList: ", e);
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [criteria.search, criteria.page, criteria.sort]);

  return { isLoading, error, searchResult, totalPages };
}

export function useArticlePagination() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const { isLoading, error, searchResult, totalPages } = useSearchArticle({
    page: currentPageNumber - 1,
    size: ELEMENT_PER_PAGE,
  });

  function previousPage() {
    const newPageNumber = currentPageNumber - 1;
    goToPage(newPageNumber);
  }

  function nextPage() {
    const newPageNumber = currentPageNumber + 1;
    goToPage(newPageNumber);
  }

  function goToPage(pageNumber: number) {
    if (_isPageExist(pageNumber)) {
      setCurrentPageNumber(pageNumber);
    }
  }

  function _isPageExist(pageNumber: number) {
    return pageNumber >= 1 && pageNumber <= totalPages;
  }

  return {
    isLoading,
    error,
    currentPageContent: searchResult,
    currentPageNumber,
    totalPages,
    ELEMENT_PER_PAGE,
    goToPage,
    nextPage,
    previousPage,
  };
}
