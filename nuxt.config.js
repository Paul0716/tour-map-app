const path = require("path");
function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: "starter",
        meta: [{
                charset: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "Nuxt.js project"
            }
        ],
        // link: []
    },
    /*
     ** Global CSS
     */
    // css: [
    // ],
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: "#3B8070"
    },
    /*
     ** Add axios globally
     */
    build: {
        extend(config) {
            config.resolve.alias['~'] = path.join(this.options.srcDir, '')
        },
        vendor: [
            "axios",
        ]
    },
    cache: false,
    srcDir: "web/",
    rootDir: ".",
    router: { },
    modules: ["nuxt-typescript"],
    env: {
        baseUrl: process.env.BASE_URL || "http://localhost:3000"
    }
}
