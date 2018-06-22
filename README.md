# HW2
test-file: [subject.js](subject.js)
### Steps:
(**nodejs9, git** and **python** should already be installed in your machine.The below steps are tested on Ubuntu 16.04 machine.)
- `git clone https://github.ncsu.edu/nsakhal/HW2.git`
- `cd HW2`
- `npm install`
- `npm install istanbul -G`
- `node main.js`
- `node_modules/.bin/istanbul cover test.js`
- `open coverage/lcov-report/HW2/subject.js.html` --> To open the coverage report of [subject.js](subject.js) file on web browser. 

### Screenshots of 100% coverage for subject.js file
#### subject.js coverage report on web browser
![Screenshot1](coverage.PNG)
#### subject.js and test.js coverage report
![Screenshot2](test_and_subject_file_output.PNG)
#### subject.js coverage report on terminal
![Screenshot3](subject_console_output.PNG)
#### mystery.js coverage report on web browser
![Screenshot6](mystery_coverage.PNG)
#### mystery.js and test.js coverage report
![Screenshot5](test_and_mystery_file_output.PNG)
#### mystery.js coverage report on terminal
![Screenshot6](mystery_console_output.PNG)
