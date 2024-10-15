var assert = require('assert');
var fs = require('fs');
var cheerio = require('cheerio');

describe('index.html', function () {
  var html = fs.readFileSync('index.html', 'utf8');
  var $ = cheerio.load(html);

  it('should have a title', function () {
    var title = $('title').text();
    assert.notEqual(title, '', 'Title should not be empty');
  });

  it('should have a body section', function () {
    var body = $('body');
    assert.equal(body.length, 1, 'There should be one body section');
  });
});

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});