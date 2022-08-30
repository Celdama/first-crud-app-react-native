import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'edit_blogpost':
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id
          ? { ...blogPost, ...action.payload }
          : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  // REMEMBER : the inner function side of here is what we actually end up calling from inside our component
  // so if we want to, we can accept some arguments that will come from our component and then pass those through the dispatch function
  return (title, content, callback) => {
    dispatch({
      type: 'add_blogpost',
      payload: {
        title,
        content,
      },
    });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    console.log('edit from context');
    dispatch({
      type: 'edit_blogpost',
      payload: {
        id,
        title,
        content,
      },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
  },
  []
);
