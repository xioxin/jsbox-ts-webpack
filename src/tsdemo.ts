import { MySerivce } from './demo.serivce';

const demoApi = new MySerivce();
$console.info('loading');

if ($app.env !== $env.app) {
  $console.info('你是通过app方式打开的');
}

demoApi.getName().then((name: string) => {
  $ui.alert(`my name is ${name}`);
});
