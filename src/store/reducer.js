const initialState = {
  header: "Nagłówek ze stora",
  person: [],
  id: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DOWNSUC": {
      console.log(action.payload.res.data);

      return {
        ...state,
        person: action.payload.res.data,
      };
    }
    case "FAIL": {
    }
    case "SUCCESS": {
      return {
        ...state,
        id: action.payload.res.data.id,
      };
    }
    case "CHANGE_NAME": {
      return {
        ...state,
        header: action.payload.newHeader,
      };
    }
    case "ADD_PERSON": {
      return {
        ...state,
        person: [...state.person, action.payload.person],
      };
    }
    case "DELETE": {
      return {
        ...state,
        person: [
          ...state.person.filter((person) => person.id !== action.payload.id),
        ],
      };
    }
  }

  return state;
};
