function install(id) {
  window.__ModuleLoader__.load({
    id,
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
}

install('ai-rtl-dsh')
install('dsh-persian-rtlaaa')
