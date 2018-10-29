// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (M03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output

//QUnit.test("Here's a test that should always pass", function (assert) {
 //   assert.ok(1 == "1", "1=1 success!");
//});

QUnit.test('Testing our function with four sets of inputs', function (assert) {
    assert.equal(calc(4,5,'+'), 9, 'will perform addition');
    assert.equal(calc(10,5,'-'), 5, 'will perform substraction');
    assert.equal(calc(15,5,'/'), 3, 'will perform division');
    assert.equal(calc(10,5,'X'), 50, 'will perform multiplication');
    
});

