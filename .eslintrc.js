module.exports = {
    root: true,
    env: {
        node: true,
    },
    'extends': [
        'plugin:vue/strongly-recommended'
    ],
    "rules": {
        "vue/script-indent": ["error", 4, { "baseIndent": 1 }]
    },
    "overrides": [{
        "files": ["*.vue"],
        "rules": {
            "indent": "off"
        }
    }]
};