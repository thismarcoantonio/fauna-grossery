import app from './app';

app.listen(process.env.PORT || 3000, () => {
  console.info(`> App running on ${process.env.PORT || 3000}`);
});
