export default app => {
  const { Users } = app.data.models;

  app.route('/users')
    .get((req, res) => Users.findAll({})
      .then(response => {
        res.status(200);
        res.json(response);
      }))
    .post((req, res) => Users.create(req.body)
      .then(response => {
        res.status(200);
        res.json(response);
      }));
};
