function server(req, res) {
  res.render('home', {title: 'hello world'});
}

module.exports = server;
