var WritableStream = require('stream').Writable
var inherits = require('util').inherits

module.exports = BrowserStdout


inherits(BrowserStdout, WritableStream)

function BrowserStdout(opts) {
  if (!(this instanceof BrowserStdout)) return new BrowserStdout(opts)

  opts = opts || {}
  WritableStream.call(this, opts)
}

BrowserStdout.prototype._write = function(chunks, encoding, cb) {
  var output = chunks.toString ? chunks.toString() : chunks
  console.log(output)
  process.nextTick(cb)
}
