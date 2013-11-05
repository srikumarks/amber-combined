({
    baseUrl: "./",
    paths: {
        'amber': 'support',
        'amber_vm': 'support',
        'amber_css': 'css',
        'amber_lib': 'bower_components',
        'amber_inc': 'support',
        'amber_core': 'js',
        'amber_core/_source': 'st',
        'amber_html': '.',
        'jquery': 'bower_components/jquery/jquery.min',
        'jquery-ui': 'support/jQuery/jquery-ui-1.8.24.custom.min'
    },
    keepBuildDir: true,
    locale: "en-us",
    optimize: "uglify2",
    map: {
        '*': {
            'css': 'amber_lib/require-css/css'
        }
    },
    shim: {
        'jquery-ui': {
            deps: [ 'jquery' ]
        },
        'amber_lib/bootstrap/js/bootstrap': {
            deps: [ 'css!amber_lib/bootstrap/css/bootstrap' ]
        },
        'amber_lib/CodeMirror/codemirror': {
            deps: [ 'css!amber_lib/codemirror/lib/codemirror' ]
        },
        'amber_lib/jquery-tabby/jquery.textarea': {
            deps: [ 'jquery', 'jquery-ui' ]
        },
        'amber_inc/CodeMirror/smalltalk': {
            deps: [ 'amber_lib/codemirror/lib/codemirror' ]
        },
        'amber_lib/codemirror/addon/hint/show-hint': {
            deps: [ '../../lib/codemirror' ]
        },
        'ensure-console': {
            exports: 'console'
        }
    }
    
/*
    modules: [
        {
            name: "amber/devel",
            create: true
        },
        {
            name: "amber/deploy",
            create: true
        },
        {
            name: "amber/helios",
            create: true
        }
    ]
    */
})
