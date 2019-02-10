import { FETCH_POSTS_BEGIN, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE} from '../constants/actionTypes'

/*export function fetchPosts() {
  return dispatch => {
    dispatch(fetchPostsBegin());
    const url = 'http://wp.rhmediasolutions.com/wp-json/wp/v2/posts' // Wordpress installation url
    const request = new Request(
      url,
      {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
    )
    // make fetch to wordpress page for posts
    return fetch(request)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      return json
    })
    .catch(error => console.log(error))
  }
}*/
