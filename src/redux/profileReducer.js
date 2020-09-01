const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    newPostText: "",
    posts: [
        {id: 1, text: "first message"},
        {id: 2, text: "second message"},
        {id: 3, text: "third message"},
        {id: 4, text: "fourth message"}
    ],
    profile: null
}

const profileReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_POST:{
            let newPost ={
                id: state.posts.length + 1,
                text: state.newPostText
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText="";
            return stateCopy;
        }
        case UPDATE_POST:{
            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile : action.profile}
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST});
export const updatePostAC = (newText) => ({type: UPDATE_POST, newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;