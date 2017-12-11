# Introduction

Small Responsive app to manage your own TODOs. You can add TODOs to a centralized shared server, modified them, and set them to Done. 
The page is fully responsive and can be displayed on multiple devices. It works with lots of Tasks (Lots!) and it will keep sincronized all the instances currently open of the App.

# Install

## Windows 
* run `build.cmd`
* go to artifacts and open the freshly built folder
* run `node server.js [--port your_port]`
* access the browser on specified port (default 9001)

## Linux Based Systems
* run `make`
* go to artifacts and open the freshly built folder
* run `node server.js [--port your_port]`
* access the browser on specified port (default 9001)

# Tests
## App Tests
* npm test

## Server Tests
* move to server/__tests/
* node test.js

# Known Issues

## TODO TAGS get duplicated
* Click on a TODO to open the detail
* Click on Update
* Select multiple tags
* Save
* Reopen the Update Modal
* TAGS are duplicated
* Click on the first TAG
* All TAGS are unselected

## RESIZE List not fully responsive
* Load the application
* Resize the application to a smaller size
* The list is not well scalated

## Update and Detail window not updated with other user actions when open
* Open the Update/Detail window
* In another instance update the same TODO
* Update doesnt get updated until reopened