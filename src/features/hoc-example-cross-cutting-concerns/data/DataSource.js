const listeners = []
const comments = [
  { id: 1, text: 'ilk yorum' },
  { id: 2, text: 'ikinci yorum' },
]

const DataSource = {
  getComments() {
    return comments
  },

  addListener(callback) {
    listeners.push(callback)
  },

  removeListener(callback) {
    const index = listeners.indexOf(callback)
    if (index === -1) {
      listeners.splice(index, 1)
    }
  },

  simulateNewComment(comment) {
    comments.push(comment)
    listeners.forEach((cb) => cb())
  },
}

export default DataSource
