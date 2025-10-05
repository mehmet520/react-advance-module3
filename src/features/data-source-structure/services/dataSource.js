// src/services/dataSource.js
const DataSource = (() => {
  let comments = [
    { id: 1, text: 'Merhaba 👋' },
    { id: 2, text: 'HOC ve Hooks harika!' },
  ]
  let posts = {
    1: 'İlk blog yazısı: HOCs ve Custom Hooks',
    2: 'İkinci yazı: forwardRef neden gerekli?',
  }

  const listeners = new Set()
  const notify = () => {
    listeners.forEach((fn) => {
      try {
        fn()
      } catch (e) {
        console.error(e)
      }
    })
  }

  // Tek sorumluluk: veri ve abonelik yönetimi
  return {
    // read API
    getComments: () => comments,
    getBlogPost: (id) => posts[id],

    // pub/sub API
    addChangeListener: (fn) => {
      listeners.add(fn)
      // convenience unsubscribe döndür
      return () => listeners.delete(fn)
    },
    removeChangeListener: (fn) => listeners.delete(fn),

    // demo amaçlı mutasyonlar
    _addComment(text) {
      const id = Date.now()
      comments = [...comments, { id, text }]
      notify()
    },
    _updatePost(id, text) {
      posts = { ...posts, [id]: text }
      notify()
    },

    // demo zamanlayıcılarını bir kez başlatmak için yardımcı
    startDemoTimersOnce() {
      if (typeof window === 'undefined') return
      if (window.__dsIntervals__) return

      const i1 = setInterval(() => {
        const n = Math.floor(Math.random() * 1000)
        this._addComment(`Rastgele yorum #${n}`)
      }, 5000)

      const i2 = setInterval(() => {
        const n = Math.floor(Math.random() * 1000)
        this._updatePost('1', `Güncellenmiş içerik #${n}`)
      }, 8000)

      window.__dsIntervals__ = [i1, i2]
    },
  }
})()

export default DataSource
