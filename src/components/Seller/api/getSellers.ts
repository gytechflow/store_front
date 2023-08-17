import axios, { AxiosError } from "axios";
import { Criteria } from "../../../models/Http";
import { Seller } from "../Seller";
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
const ELEMENT_PER_PAGE = 15;

// src/components/Article/api/searchArticle.ts
function searchSellers(criteria?: Criteria) {
  let baseURI = `${Config.apiBaseUrl}/api/sellers?page=${criteria?.page}&size=${criteria?.size}`;
  if (criteria?.search !== "") {
    baseURI += `&search=${criteria?.search}`;
  }
  if (criteria?.sort !== undefined) {
    baseURI += `&sort=${criteria?.sort}`;
  }
  console.log(baseURI);
  return axios
    .get<PageableResponse<Seller>>(encodeURI(baseURI))
    .then((response) => response.data);
}

function useSearchSeller(criteria: Criteria) {
  const [searchResult, setSearchResult] = useState<Seller[]>([]);

  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | AxiosError | undefined>();

  useEffect(() => {
    setLoading(true);
    searchSellers(criteria)
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

export function useSellerPagination() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, error, searchResult, totalPages } = useSearchSeller({
    page: currentPageNumber - 1,
    size: ELEMENT_PER_PAGE,
    search: searchTerm,
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

  function searchResultPage(searchTerm: string) {
    setSearchTerm(searchTerm);
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
    searchResultPage,
  };
}
