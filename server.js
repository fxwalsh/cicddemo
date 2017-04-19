import config from './config';
import express from 'express';
import newsRouter from './api/news';
import body_parser from 'body-parser';

const server = express();

//configure body-parser
server.use(body_parser.json());
server.use(body_parser.urlencoded({ extended: false } ));
server.use('/api/posts', newsRouter);
server.use(express.static('build'));

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
