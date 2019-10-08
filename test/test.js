import assert from 'assert';
const {checkUsernameValid, checkPasswordValid} = require('../src/helpers/checkvalidation');

describe('checkvalidation', function() {
  it('should return false if username has less than 3 chars', function() {
    assert.equal(checkUsernameValid("ab").state, false);
  });

  it('should return true if username has more than 3 chars', function() {
    assert.equal(checkUsernameValid("abcd").state, true);
  });

  it('should return false when user name is in invalid usernamelist', function() {
    assert.equal(checkUsernameValid("about").state, false);
  });

  it('should return false when user name is in invalid usernamelist', function() {
    assert.equal(checkUsernameValid("admin").state, false);
  });

  it('should return false if password is less than 4 chars', function() {
    assert.equal(checkPasswordValid("123").state, false);
  });

  it('should return false if password is more than 4 chars', function() {
    assert.equal(checkPasswordValid("12345").state, true);
  });
});