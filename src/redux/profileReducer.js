const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

let initialState = {
    newPostText: "",
    posts: [
        {id: 1, text: "first message"},
        {id: 2, text: "second message"},
        {id: 3, text: "third message"},
        {id: 4, text: "fourth message"}
    ]
}

const profileReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_POST:{
            debugger;
            let newPost ={
                id: state.posts.length + 1,
                text: action.newPostText
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case UPDATE_POST:{
            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText});
export const updatePostAC = (newText) => ({type: UPDATE_POST, newText});

export default profileReducer;