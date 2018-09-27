/* jshint node: true */
'use strict';

const assert = require('assert');
const EmailParser = require('../src/parser');

describe('EmailParser().getDomainName', function() {
  it('empty domain name from \'undefined\' email address', function() {
    assert.equal(new EmailParser(undefined).getDomainName(), '');
  });
  it('empty domain name from \'null\' email address', function() {
    assert.equal(new EmailParser('').getDomainName(), '');
  });
  it('empty domain name from wrong email address value type', function() {
    assert.equal(new EmailParser(123).getDomainName(), '');
  });
  it('empty domain name in empty email address', function() {
    const emailParser = new EmailParser('');
    assert.equal(emailParser.getDomainName(), '');
  });
  it('domain name of empty email user name', function() {
    assert.equal(new EmailParser('@andrew.com').getDomainName(), 'andrew.com');
  });
  it('empty domain name of empty domain part email address', function() {
    assert.equal(new EmailParser('ben').getDomainName(), '');
  });
  it('domain name of normal email address', function() {
    assert.equal(new EmailParser('andrew@test.com').getDomainName(), 'test.com');
    assert.equal(
      new EmailParser('andrew.ben@test.com').getDomainName(),
      'test.com'
    );
    assert.equal(new EmailParser('a@b.c').getDomainName(), 'b.c');
  });
});

describe('EmailParser().getUserName', function() {
  it('empty user name from \'undefined\' email address', function() {
    const undefinedEmailAddress = undefined;
    const emailParser = new EmailParser(undefinedEmailAddress);
    assert.equal(emailParser.getUserName(), '');
  });
  it('empty user name from \'null\' email address', function() {
    const emailParser = new EmailParser('');
    assert.equal(emailParser.getUserName(), '');
  });
  it('empty user name from wrong email address value type', function() {
    assert.equal(new EmailParser(123).getUserName(), '');
  });
  it('empty user name from empty email address', function() {
    const emailParser = new EmailParser('');
    assert.equal(emailParser.getUserName(), '');
  });
  it('user name of empty email domain', function() {
    assert.equal(new EmailParser('andrew@').getUserName(), 'andrew');
    assert.equal(new EmailParser('ben').getUserName(), 'ben');
  });
  it('user name of normal email address', function() {
    assert.equal(new EmailParser('andrew@test.com').getUserName(), 'andrew');
    assert.equal(new EmailParser('andrew.ben@test.com').getUserName(), 'andrew.ben');
    assert.equal(new EmailParser('a@b.c').getUserName(), 'a');
  });
});
