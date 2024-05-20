import { useMemo } from 'react';
import useSWR, { mutate } from 'swr';
import { AxiosError } from 'axios';
import axiosInstance, { fetcher, endpoints } from '../utils/axios';

interface Category {
  id: number;
  name: string;
}

type ApiResponse<Data> = {
  data: Data;
  isLoading: boolean;
  error: boolean;
  isValidating: boolean;
}

// ----------------------------------------------------------------------

export function useGetCategories(): ApiResponse<Category[]> & { categoriesEmpty: boolean } {
  const URL = endpoints.categories.list;

  const { data, isLoading, error, isValidating } = useSWR<Category[]>(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      data: data || [],
      isLoading,
      error,
      isValidating,
      categoriesEmpty: !isLoading && !data?.length,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export function useCreateCategory() {
  const createCategory = async (categoryData: Partial<Category>) => {
    const URL = endpoints.categories.new;
    try {
      const response = await axiosInstance.post<Category>(URL, categoryData);
      mutate(endpoints.categories.list); // Update the list of categories
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw (axiosError.response && axiosError.response.data) || 'Something went wrong';
    }
  };

  return createCategory;
}

export function useEditCategory() {
  const editCategory = async (categoryData: Partial<Category>) => {
    const URL = `${endpoints.categories.edit}/${categoryData?.id}`;
    try {
      const response = await axiosInstance.put<Category>(URL, categoryData);
      mutate(endpoints.categories.list); // Update the list of categories
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw (axiosError.response && axiosError.response.data) || 'Something went wrong';
    }
  };

  return editCategory;
}

export function useDeleteCategory() {
  const deleteCategory = async (id: number) => {
    const URL = `${endpoints.categories.delete}/${id}`;
    try {
      const response = await axiosInstance.delete(URL);
      mutate(endpoints.categories.list); // Update the list of categories
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw (axiosError.response && axiosError.response.data) || 'Something went wrong';
    }
  };

  return deleteCategory;
}

// ----------------------------------------------------------------------

export function useGetCategory(id: number): ApiResponse<Category | null> {
  const URL = id ? `${endpoints.categories.edit}/${id}` : '';

  const { data, isLoading, error, isValidating } = useSWR<Category>(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      data: data || null,
      isLoading,
      error,
      isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
