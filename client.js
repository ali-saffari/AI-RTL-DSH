window.__ModuleLoader__.load({
  id: 'ai-rtl-dsh',
  factory(require) {
    return {
      inject: ['slots'],
      apply(ctx) {
        ctx.effect(() => {
          const body = document.body
          if (!body) return
          body.classList.add('ai-rtl-on')
          return () => {
            body.classList.remove('ai-rtl-on')
          }
        })
      },
    }
  },
})
