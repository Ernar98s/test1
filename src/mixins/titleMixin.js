function getTitle(vm) {
    const { title } = vm.$options
    if (title) {
        return typeof title === 'function'
            ? title.call(vm)
            : title
    }
}
export default {
    computed: {
        title: function () {
            const title = getTitle(this)
            if (title) {
                localStorage.setItem('title', title);
                return document.title = title
            }
        }
    }
}