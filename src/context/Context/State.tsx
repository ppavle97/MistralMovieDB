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
    movies: [
      {
        id: "tt0111161",
        rank: "1",
        title: "The Shawshank Redemption",
        fullTitle: "The Shawshank Redemption (1994)",
        year: "1994",
        image:
          "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
        imDbRating: "9.2",
        imDbRatingCount: "2534387",
      },
      {
        id: "tt0068646",
        rank: "2",
        title: "The Godfather",
        fullTitle: "The Godfather (1972)",
        year: "1972",
        image:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
        crew: "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
        imDbRating: "9.1",
        imDbRatingCount: "1744507",
      },
      {
        id: "tt0071562",
        rank: "3",
        title: "The Godfather: Part II",
        fullTitle: "The Godfather: Part II (1974)",
        year: "1974",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
        crew: "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
        imDbRating: "9.0",
        imDbRatingCount: "1210261",
      },
      {
        id: "tt0468569",
        rank: "4",
        title: "The Dark Knight",
        fullTitle: "The Dark Knight (2008)",
        year: "2008",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
        imDbRating: "9.0",
        imDbRatingCount: "2484964",
      },
      {
        id: "tt0050083",
        rank: "5",
        title: "12 Angry Men",
        fullTitle: "12 Angry Men (1957)",
        year: "1957",
        image:
          "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
        imDbRating: "8.9",
        imDbRatingCount: "748952",
      },
      {
        id: "tt0108052",
        rank: "6",
        title: "Schindler's List",
        fullTitle: "Schindler's List (1993)",
        year: "1993",
        image:
          "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
        imDbRating: "8.9",
        imDbRatingCount: "1294791",
      },
      {
        id: "tt0167260",
        rank: "7",
        title: "The Lord of the Rings: The Return of the King",
        fullTitle: "The Lord of the Rings: The Return of the King (2003)",
        year: "2003",
        image:
          "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
        imDbRating: "8.9",
        imDbRatingCount: "1748607",
      },
      {
        id: "tt0110912",
        rank: "8",
        title: "Pulp Fiction",
        fullTitle: "Pulp Fiction (1994)",
        year: "1994",
        image:
          "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Quentin Tarantino (dir.), John Travolta, Uma Thurman",
        imDbRating: "8.8",
        imDbRatingCount: "1951705",
      },
      {
        id: "tt0060196",
        rank: "9",
        title: "The Good, the Bad and the Ugly",
        fullTitle: "The Good, the Bad and the Ugly (1966)",
        year: "1966",
        image:
          "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Sergio Leone (dir.), Clint Eastwood, Eli Wallach",
        imDbRating: "8.8",
        imDbRatingCount: "732151",
      },
      {
        id: "tt0120737",
        rank: "10",
        title: "The Lord of the Rings: The Fellowship of the Ring",
        fullTitle: "The Lord of the Rings: The Fellowship of the Ring (2001)",
        year: "2001",
        image:
          "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
        imDbRating: "8.8",
        imDbRatingCount: "1770065",
      },
      {
        id: "tt0137523",
        rank: "11",
        title: "Fight Club",
        fullTitle: "Fight Club (1999)",
        year: "1999",
        image:
          "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "David Fincher (dir.), Brad Pitt, Edward Norton",
        imDbRating: "8.7",
        imDbRatingCount: "1994011",
      },
      {
        id: "tt0109830",
        rank: "12",
        title: "Forrest Gump",
        fullTitle: "Forrest Gump (1994)",
        year: "1994",
        image:
          "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Robert Zemeckis (dir.), Tom Hanks, Robin Wright",
        imDbRating: "8.7",
        imDbRatingCount: "1956082",
      },
      {
        id: "tt1375666",
        rank: "13",
        title: "Inception",
        fullTitle: "Inception (2010)",
        year: "2010",
        image:
          "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Christopher Nolan (dir.), Leonardo DiCaprio, Joseph Gordon-Levitt",
        imDbRating: "8.7",
        imDbRatingCount: "2226965",
      },
      {
        id: "tt0167261",
        rank: "14",
        title: "The Lord of the Rings: The Two Towers",
        fullTitle: "The Lord of the Rings: The Two Towers (2002)",
        year: "2002",
        image:
          "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Peter Jackson (dir.), Elijah Wood, Ian McKellen",
        imDbRating: "8.7",
        imDbRatingCount: "1579901",
      },
      {
        id: "tt0080684",
        rank: "15",
        title: "Star Wars: Episode V - The Empire Strikes Back",
        fullTitle: "Star Wars: Episode V - The Empire Strikes Back (1980)",
        year: "1980",
        image:
          "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Irvin Kershner (dir.), Mark Hamill, Harrison Ford",
        imDbRating: "8.7",
        imDbRatingCount: "1230155",
      },
    ],
    tvShows: [
      {
        id: "tt5491994",
        rank: "1",
        title: "Planet Earth II",
        fullTitle: "Planet Earth II (2016)",
        year: "2016",
        image:
          "https://m.media-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "David Attenborough, Gordon Buchanan",
        imDbRating: "9.5",
        imDbRatingCount: "108522",
      },
      {
        id: "tt0795176",
        rank: "2",
        title: "Planet Earth",
        fullTitle: "Planet Earth (2006)",
        year: "2006",
        image:
          "https://m.media-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Sigourney Weaver, David Attenborough",
        imDbRating: "9.4",
        imDbRatingCount: "177015",
      },
      {
        id: "tt0903747",
        rank: "3",
        title: "Breaking Bad",
        fullTitle: "Breaking Bad (2008)",
        year: "2008",
        image:
          "https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_UY176_CR0,0,128,176_AL_.jpg",
        crew: "Bryan Cranston, Aaron Paul",
        imDbRating: "9.4",
        imDbRatingCount: "1650730",
      },
      {
        id: "tt0185906",
        rank: "4",
        title: "Band of Brothers",
        fullTitle: "Band of Brothers (2001)",
        year: "2001",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Scott Grimes, Damian Lewis",
        imDbRating: "9.4",
        imDbRatingCount: "413050",
      },
      {
        id: "tt7366338",
        rank: "5",
        title: "Chernobyl",
        fullTitle: "Chernobyl (2019)",
        year: "2019",
        image:
          "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Jessie Buckley, Jared Harris",
        imDbRating: "9.3",
        imDbRatingCount: "648116",
      },
      {
        id: "tt0306414",
        rank: "6",
        title: "The Wire",
        fullTitle: "The Wire (2002)",
        year: "2002",
        image:
          "https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Dominic West, Lance Reddick",
        imDbRating: "9.3",
        imDbRatingCount: "315821",
      },
      {
        id: "tt6769208",
        rank: "7",
        title: "Blue Planet II",
        fullTitle: "Blue Planet II (2017)",
        year: "2017",
        image:
          "https://m.media-amazon.com/images/M/MV5BYjg2ODk0MjUtNmMzZS00MjY0LWI1YWMtN2JhMjRmZGUwY2I3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,1,128,176_AL_.jpg",
        crew: "David Attenborough, Peter Drost",
        imDbRating: "9.3",
        imDbRatingCount: "38092",
      },
      {
        id: "tt9253866",
        rank: "8",
        title: "Our Planet",
        fullTitle: "Our Planet (2019)",
        year: "2019",
        image:
          "https://m.media-amazon.com/images/M/MV5BN2I1ZjA5YjQtYmQ0ZS00ZmE1LTk1ZjktNTQ5ODIzY2JiZDdhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "David Attenborough",
        imDbRating: "9.2",
        imDbRatingCount: "39847",
      },
      {
        id: "tt2395695",
        rank: "9",
        title: "Cosmos: A Spacetime Odyssey",
        fullTitle: "Cosmos: A Spacetime Odyssey (2014)",
        year: "2014",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Neil deGrasse Tyson, Christopher Emerson",
        imDbRating: "9.2",
        imDbRatingCount: "117657",
      },
      {
        id: "tt0417299",
        rank: "10",
        title: "Avatar: The Last Airbender",
        fullTitle: "Avatar: The Last Airbender (2005)",
        year: "2005",
        image:
          "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_UX128_CR0,3,128,176_AL_.jpg",
        crew: "Dee Bradley Baker, Zach Tyler Eisen",
        imDbRating: "9.2",
        imDbRatingCount: "284496",
      },
      {
        id: "tt0081846",
        rank: "11",
        title: "Cosmos",
        fullTitle: "Cosmos (1980)",
        year: "1980",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
        crew: "Carl Sagan, Jaromír Hanzlík",
        imDbRating: "9.2",
        imDbRatingCount: "39496",
      },
      {
        id: "tt0141842",
        rank: "12",
        title: "The Sopranos",
        fullTitle: "The Sopranos (1999)",
        year: "1999",
        image:
          "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
        crew: "James Gandolfini, Lorraine Bracco",
        imDbRating: "9.2",
        imDbRatingCount: "359162",
      },
    ],
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
        Alert.alert("Maximum request per day reached! ", "", [
          { text: "OK", onPress: () => NativeModules.DevSettings.reload() },
        ]);
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
        Alert.alert("Maximum request per day reached! ", "", [
          { text: "OK", onPress: () => NativeModules.DevSettings.reload() },
        ]);
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
