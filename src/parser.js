/* jshint node: true */
'use strict';

class EmailAddressParser {
  constructor(emailAddress) {
    this.emailAddress = emailAddress;
  }

  /**
   * Get user name part of the email address before '@'
   *
   * @return {string} user name part of the email address
   */
  getUserName() {
    try {
      if (this.emailAddress === null || this.emailAddress === undefined) {
        return '';
      }
      const indexOfAt = this.emailAddress.indexOf('@');
      if (indexOfAt === -1) {
        return this.emailAddress;
      }
      return this.emailAddress.substr(0, indexOfAt);
    } catch (err) {
      return '';
    }
  }

  /**
   * Get domain part of the email address following after '@'
   *
   * @return {string} domain part of the email address
   */
  getDomainName() {
    try {
      if (this.emailAddress === null || this.emailAddress === undefined) {
        return '';
      }
      const indexOfAt = this.emailAddress.indexOf('@');
      if (indexOfAt === -1) {
        return '';
      }
      return this.emailAddress.substr(indexOfAt + 1);
    } catch (err) {
      return '';
    }
  }
}

module.exports = EmailAddressParser;
