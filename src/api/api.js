import { useSelector } from 'react-redux';
import { API_URL } from '../constant/environment';
import authAxiosInstance from './authAxios';

export const mobileLogin = payload => {
  const url = `${API_URL}auth/otp/init`;
  return authAxiosInstance.post(url,payload);
};

export const otpVerify = payload => {
  const url = `${API_URL}auth/otp/verify`;
  return authAxiosInstance.post(url, payload);
};

export const getVegetables = () => {
  const url = `${API_URL}products/all/1`;
  return authAxiosInstance.get(url);
};
export const getFruits = () => {
  const url = `${API_URL}products/all/2`;
  return authAxiosInstance.get(url);
};
export const getGrocery = () => {
  const url = `${API_URL}products/all/3`;
  return authAxiosInstance.get(url);
};

export const getCategoryId = async categoryName => {
  const url = `${API_URL}categories/search-by-name/${categoryName}`;
  return await authAxiosInstance.get(url)
};
export const getCategoryProducts = categoryId => {
  const url = `${API_URL}products/all/${categoryId}`;
  return authAxiosInstance.get(url);
};

export const getAllCategories = _ => {
  const url = `${API_URL}categories/all-categories`
  return authAxiosInstance.get(url)
}
export const getSearchResults = keyword => {
  const url = `${API_URL}products/search/${keyword}`;
  return authAxiosInstance.get(url);
};

export const getTopSearches = () => {
  const url = `${API_URL}categories/most-searched`
  return authAxiosInstance.get(url)
}

export const getAllProducts = () => {
  const url = `${API_URL}products/all`
  return authAxiosInstance.get(url)
}

export const getmycart = (userid) => {
  //console.log("user Id get my cart ", userid)
  const url = `${API_URL}cart/get-usercart`
  let response = authAxiosInstance.post(url, { userId: userid });
  return response
}
export const postmycart = (productId, userId, count) => {
  const url = `${API_URL}cart/add-cart`
  return authAxiosInstance.post(url, { userId: userId, productId: productId, count: count })
}

export const deletemycart = (productId, userId) => {
  //console.log('------------------------',productId,userId);
  const url = `${API_URL}cart/deletecart`
  return authAxiosInstance.post(url, { productId, userId });
}

export const updateUserProfileData = (userData) => {
  //console.log("payload post update", userData)
  const url = `${API_URL}users/update-user`
  return authAxiosInstance.post(url, userData)
}
export const getUserDataById = (id) => {
  //console.log("payload post update", id)
  const url = `${API_URL}users/get-user-by-id`
  return authAxiosInstance.post(url,{id})
}

export const updateQuantity=({userId,productId,action})=>{
  const url=`${API_URL}cart/update-quantity`
  return authAxiosInstance.post(url,{userId:userId,productId:productId,action:action})
}










