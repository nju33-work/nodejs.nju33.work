import Koa from 'koa';

const app = new Koa();

app.use(ctx => {
  console.log(ctx);
  // {
  //   request: {
  //     method: 'GET',
  //     url: '/',
  //     header: {
  //       host: 'localhost:3333',
  //       connection: 'keep-alive',
  //       'cache-control': 'max-age=0',
  //       'upgrade-insecure-requests': '1',
  //       'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
  //       accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  //       'accept-encoding': 'gzip, deflate, sdch',
  //       'accept-language': 'ja,en-US;q=0.8,en;q=0.6',
  //       cookie: 'em_cdn_uid=t%3D1463609566357%26u%3D0e49a48a45e54a698ae26b573ce60338; wp-settings-1=mfold%3Do%26editor%3Dtinymce%26hidetb%3D1%26libraryContent%3Dbrowse%26imgsize%3Dbox-size%26urlbutton%3Dpost; wp-settings-time-1=1472471498; wp-settings-2=libraryContent%3Dbrowse%26hidetb%3D1; wp-settings-time-2=1472548405; wordpress_test_cookie=WP+Cookie+check; wordpress_logged_in_9793cefa5fc450c92326a35dbc5936d0=admin%7C1476455713%7Czm4ylUnV1P1fN8wwRAZgCcaqjtqjGqmHwTOihoJDN8i%7C4bd509edba69b4ecf6090400ffb0270ba5232da33ba8374591dadbc375ceef17; _ga=GA1.1.1444030978.1462870112'
  //     }
  //   },
  //   response: {
  //     status: 404,
  //     message: 'Not Found',
  //     header: {}
  //   },
  //   app: {
  //     subdomainOffset: 2,
  //     proxy: false,
  //     env: 'development'
  //   },
  //   originalUrl: '/',
  //   req: '<original node req>',
  //   res: '<original node res>',
  //   socket: '<original node socket>'
  // }
  ctx.body = 'Hello World';
});

app.listen(3333);
