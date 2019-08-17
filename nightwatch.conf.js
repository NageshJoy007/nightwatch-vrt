 
 'use strict'

 const path = require('path');
 const chromedriver = require('chromedriver');
 const geckodriver = require('geckodriver');
 module.exports ={
     
    "src_folders" : ["tests"],
    "custom_commands_path" : [path.join(process.cwd(), "commands")],
    "custom_assertions_path" : [path.join(process.cwd(), "assertions")],
    "page_objects_path" : "",
    "globals_path" : "",
  
    "webdriver" : {
      "start_process": true
    },
  
    "test_settings" : {
        
      "default" : {
        "silent": true,
        "visual_regression_settings": {
            //"latest_screenshots_path": '',
            "latest_suffix": '.latest',
            //"baseline_screenshots_path": '',
            "baseline_suffix": '.baseline',
            //"diff_screenshots_path": ''
            "diff_suffix": '.diff',
            "threshold": 0.5,
            "prompt": true,
            "always_save_diff_screenshot": false
        },
        "screenshots" : {
            "enabled" : true,
            "on_failure" : true,
            "on_error" : false,
            "path" : "screenshots"
          },
        "globals" : {
            "myGlobalVar" : "some value",
            "otherGlobal" : "some other value"
          },
        "webdriver": {
          "server_path": "node_modules/.bin/geckodriver",
          "port": 4444,
          "cli_args": [
            "--log", "debug"
          ]
        },
        "filter": ["tests"],
        "desiredCapabilities" : {
          "browserName" : "firefox",
          "acceptInsecureCerts" : true
        }
      },
      
      "integration" : {
        "launch_url" : "http://macmillaneducation.com.au",
        "globals" : {
          "myGlobalVar" : "other value"
        }
      },
      "chrome" : {
        "webdriver": {
          "port": 9515,
          "server_path": "node_modules/.bin/chromedriver",
          "cli_args": [
            "--verbose"
          ]
        },
  
        "desiredCapabilities" : {
          "browserName" : "chrome",
          "javascriptEnabled": true,
          "acceptSslCerts": true,
          "chromeOptions": {
          "args": ["--start-fullscreen"]
          },
          "loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "INFO"}
        }
      },

      safari: {
        desiredCapabilities : {
          browserName : 'safari',
          alwaysMatch: {
            acceptInsecureCerts: true
          }
        },
        webdriver: {
          port: 4445,
          server_path: '/usr/bin/safaridriver'
        }
      },

      firefox: {
        desiredCapabilities : {
          browserName : 'firefox',
          alwaysMatch: {
            acceptInsecureCerts: true
          }
        },
        webdriver: {
          server_path: 'node_modules/.bin/geckodriver'
        }
      },
  
    /*  
    
    //  to use below configuration 
    // create a bin folder in project, download & place selenium-server-standalone-3.9.1.jar

     "selenium_server" : {
        "selenium" : {
          "start_process": true,
          "host": "localhost",
          "server_path": "./bin/selenium-server-standalone-3.9.1.jar",
          "cli_args": {
            "webdriver.gecko.driver": "node_modules/.bin/geckodriver",
            "webdriver.chrome.driver": "node_modules/.bin/chromedriver"
          }
        },
  
        "desiredCapabilities" : {
          "browserName" : "firefox",
          "acceptSslCerts": true
        }
      }
      */

    }

 } 