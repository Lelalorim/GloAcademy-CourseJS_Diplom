import calc from './src/calculator';


try{
  //if (document.body.className === 'balkony') {
  calc(1000);
  //}
} catch(err) {
  console.warn('На этой странице нет калькулятора');
  console.error(err);
}
