import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import riverData from '../mock/river'

// 设置模拟调试器实例
var mock = new MockAdapter(axios);




mock.onPost('/cruise/getRecord').reply(200,riverData.getRecord());




