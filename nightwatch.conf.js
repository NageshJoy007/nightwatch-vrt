 
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
            "threshold": 0.05,
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
            "port": 9515,
            "server_path": "node_modules/.bin/chromedriver",
            "cli_args": [
              "--verbose"
            ]
        },
        "filter": ["tests"],
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
    "chrome-headless" : {
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
          "args": ["--start-fullscreen","--headless"]
          },
          "loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "INFO"}
        }
      }

    }

 } 