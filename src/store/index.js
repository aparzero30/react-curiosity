import { createStore } from "redux";

const initialState = {
  userData: {},
  todayTodo: [],
  upcomingTodo: [],
  editCourse: {
    title: "",
    meetingLink: "",
    image: "",
    description: "",
  },
};

const userDataReducer = (state = initialState, action) => {
  if (action.type === "SET_USER_DATA") {
    return { ...state, userData: action.userData };
  }
  if (action.type === "SET_USER_TODAY_TODO") {
    return { ...state, todayTodo: action.todayTodo };
  }
  if (action.type === "SET_USER_UPCOMING_TODO") {
    return { ...state, upcomingTodo: action.upcomingTodo };
  }

  if (action.type === "ADD_USER_TODO") {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    var newState = { ...state };

    if (formattedDate === action.todo.date) {
      newState = { ...state, todayTodo: [...state.todayTodo, action.todo] };
      console.log("HELLO");
    } else {
      newState = {
        ...state,
        upcomingTodo: [...state.upcomingTodo, action.todo],
      };
    }

    console.log(newState);
    return newState;
  }
  if (action.type === "REMOVE_USER_TODO") {
    // action.todo = {id,date,body,status}
    const newState = {
      ...state,
      todayTodo: state.todayTodo.filter((todo) => todo !== action.todo),
      upcomingTodo: state.upcomingTodo.filter((todo) => todo !== action.todo),
    };

    console.log(newState);

    return newState;
  }

  return state;
};

const store = createStore(userDataReducer);

export default store;
