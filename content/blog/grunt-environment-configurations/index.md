---
title: "Grunt environment configurations"
date: "2014-07-21"
---

The plugins for grunt environment configurations aren’t great for what I wanted to do. It had to do two things for me:

1. Expose environment configurations to the grunt config
    
2. Write the config to an Angular constant
    

## Expose environment configurations to the grunt config

For the former, I wrote a custom multitask (Coffeescript):

```
grunt.registerMultiTask 'environment', 'Set environment configuration for grunt config usage', ->
  grunt.config.set 'environment.current', @data

```

Which works with the follow config setup:

```
grunt.initConfig({
  environment :
    development :
      sass_compilation : 'nested'
    production :
      sass_compilation : 'compressed'
})

```

So when you run `environment:production`, it sets `environment.current` to:

```
{
  sass_compilation : 'compressed'
}

```

Which you can use with the your plugins (i.e., grunt-contrib-sass):

```
sass :
  dist :
    files :
      'public/stylesheets/main.css' : 'app/stylesheets/main.sass'
  options :
    style : '<%= environment.current.sass_compilation %>'

```

## Write the config to an Angular constant

Piggy-backing on the previous task of settings `environment.current`, we can take the current environment’s configuration and write it to a file:

```
grunt.registerTask 'config', 'Write the current environment configuration to an Angular constant', ->
  grunt.config.requires 'pkg.name'
  # makes sure you've set a current environment
  grunt.config.requires 'environment.current'
  module = grunt.config 'pkg.name'
  config = grunt.config 'environment.current'
  outputFile = 'public/javascript/config.js'
  grunt.file.write outputFile,
  """
    angular.module('#{module}').constant('AppConfig', #{JSON.stringify(config)});
  """

```
