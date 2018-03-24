import {Selector} from 'testcafe';

fixture('Home page').page(`http://${basys.config.host}:${basys.config.port}`);

test('Default tests', async t => {
  await t
    .expect(Selector('div').exists).ok()
    .expect(Selector('div').innerText).contains('Hello world!');
});
