require('text-encoding').TextEncoder;

const { JSDOM } = require('jsdom');
const jsdom = require('jsdom-global');

jsdom();
const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

const { createUserWithEmailAndPassword } = require('../scripts/auth'); // Import the function you want to test

describe('Authentication', () => {
  test('should create a new user successfully', async () => {
    const newUser = await createUserWithEmailAndPassword(
      'test@example.com',
      'password123'
    );
    expect(newUser).toBeDefined();
    expect(newUser.email).toBe('test@example.com');
    // Add more assertions as needed based on the expected behavior
  });

  // You can add more test cases for login, logout, error scenarios, etc.
});
