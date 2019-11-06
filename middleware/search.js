import axios from 'axios'

export default function ({ params, store }) {
  axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then((response) => {
      store.commit('add', response.data.results)
    })
    .catch(() => {
      // ...
    })
}
