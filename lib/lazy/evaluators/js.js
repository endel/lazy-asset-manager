module.exports = function(res, url, content, options) {
  res.setHeader('Content-type', 'text/javascript');
  return content;
}
