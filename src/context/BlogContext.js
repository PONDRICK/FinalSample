import createDataContext from "./createDataContext";

const LikeReducer = (state, action) => {
    switch (action.type) {
        case "add-fav":
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    image_url: action.payload.image_url,
                },
            ]
        case "delete-fav":
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

const addFav = (dispatch) => {
    return (id, name, image_url) => {
        dispatch({ type: "add-fav", payload: { id, name, image_url } })
    }
}

const deleteFav = (dispatch) => {
    return (id) => {
        dispatch({ type: "delete-fav", payload: { id } })
    }
}

export const { Context, Provider } = createDataContext(
    LikeReducer,
    { addFav, deleteFav }, // Add deleteFav action
    []
)
