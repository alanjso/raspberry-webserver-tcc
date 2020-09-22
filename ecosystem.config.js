module.exports = {
    apps: [
        {
            name: "generic",
            script: "./app.js",
            watch: true,
            env: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            env_production: {
                "PORT": 4001,
                "NODE_ENV": "production",
            }
        }
    ]
}
