const os = require("os");

const info = {
  platform: os.platform(),
  osType: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  EOL: '\r\n'
}

module.exports = {
  platform: os.platform(),
  osType: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  EOL: '\r\n'
}