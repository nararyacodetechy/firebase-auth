// Beri peringatan untuk Node.js tentang penggunaan modul 'text-encoding'
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

// Sisipkan modul yang diperlukan untuk JSDOM
const { JSDOM } = require('jsdom');
const jsdom = require('jsdom-global');

jsdom();

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.document = dom.window.document;
global.window = dom.window;

// Import function yang ingin Anda uji
const { createUserWithEmailAndPassword } = require('../scripts/auth');

// Lakukan tes Anda di sini
describe('Authentication', () => {
  test('should create a new user successfully', async () => {
    const newUser = await createUserWithEmailAndPassword(
      'test1@example.com',
      'password123'
    );
    expect(newUser).toBeDefined();
    expect(newUser.email).toBe('test@example.com');
  });
});

describe('Login', () => {
  test('should login a user successfully', async () => {
    // Lakukan login user di sini
    const loggedInUser = await loginUserWithEmailAndPassword(
      'test@example.com',
      'password123'
    );

    // Periksa apakah user telah login dengan sukses
    expect(loggedInUser).toBeDefined();
    expect(loggedInUser.email).toBe('test@example.com');
    // Tambahkan lebih banyak pengujian sesuai kebutuhan
  });
});

describe('Create Guide', () => {
  test('should create a guide successfully', async () => {
    // Lakukan pembuatan guide di sini
    const newGuide = await createGuide('New Guide Title', 'Guide Content');

    // Periksa apakah guide telah dibuat dengan sukses
    expect(newGuide).toBeDefined();
    expect(newGuide.title).toBe('New Guide Title');
    // Tambahkan lebih banyak pengujian sesuai kebutuhan
  });
});
