import React, { useReducer } from "react";
import Reducer from "./Reducer";
import Context from "./Context";
import axios from "axios";
import { Alert, NativeModules } from "react-native";

import {
  GET_MOVIES,
  SET_SELECTED_ITEM,
  GET_TV_SHOWS,
  SET_SEARCHED_DATA,
} from "../types";
import { ItemModel } from "../../screens/Home/Item.model";

export const Provider: React.FC = ({ children }) => {
  const initialState = {
    movies: [],
    tvShows: [],
    searched: [],
    selectedItem: {},
  };

  const [state, dispatch] = useReducer(Reducer, initialState);
  const URL = "https://imdb-api.com/API";
  const KEY = "k_yy620c0v";

  const getMovies = async () => {
    let res = await axios.get(`${URL}/Top250Movies/${KEY}`);
    if (res.status === 200) {
      if (res.data.items.length === 0) {
        Alert.alert("Maximum request per day reached! ", "", [{ text: "OK" }]);
      } else {
        dispatch({
          type: GET_MOVIES,
          payload: res.data.items,
        });
      }
    } else {
      Alert.alert("Something went wrong!", "", [
        { text: "Reload", onPress: () => NativeModules.DevSettings.reload() },
      ]);
    }
  };
  const getTvShows = async () => {
    let res = await axios.get(`${URL}/Top250TVs/${KEY}`);
    if (res.status === 200) {
      if (res.data.items.length === 0) {
        Alert.alert("Maximum request per day reached! ", "", [{ text: "OK" }]);
      } else {
        dispatch({
          type: GET_TV_SHOWS,
          payload: res.data.items,
        });
      }
    } else {
      Alert.alert("Something went wrong!", "", [
        { text: "Reload", onPress: () => NativeModules.DevSettings.reload() },
      ]);
    }
  };

  const setSelectedItem = (item: ItemModel) => {
    dispatch({
      type: SET_SELECTED_ITEM,
      payload: item,
    });
  };

  const searchData = async (input: string) => {
    let res = await axios.get(`${URL}/Search/${KEY}/${input}`);
    console.log(res.data.results);
    if (res.status === 200) {
      dispatch({
        type: SET_SEARCHED_DATA,
        payload: res.data.results,
      });
    } else {
      Alert.alert("Something went wrong!", "", [
        { text: "Reload", onPress: () => NativeModules.DevSettings.reload() },
      ]);
    }
  };

  return (
    <Context.Provider
      value={{
        movies: state.movies,
        selectedItem: state.selectedItem,
        searched: state.searched,
        tvShows: state.tvShows,
        getMovies,
        setSelectedItem,
        getTvShows,
        searchData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
