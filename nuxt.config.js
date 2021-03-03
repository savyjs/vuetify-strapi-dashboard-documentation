import theme from '@nuxt/content-theme-docs'

export default theme({
    head:{
        script:[{src:'/crisp.js'}]
    },
    buildModules: [
        '@nuxtjs/google-analytics'
    ],
    googleAnalytics: {
        id: 'UA-104158634-1'
    },
    server: {
        port: 8150
    },
    docs: {
        primaryColor: '#e261d1'
    },
})
