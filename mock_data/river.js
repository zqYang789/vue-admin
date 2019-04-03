import Mock from 'mockjs'

export default {
  getRecord: () => {
    const items = Mock.mock({
        'list|10': [{
          username: '@cname',
          'phone': /^1[385][1-9]\d{8}/,
          responser: '@cname',
          startTime: '@datetime',
          endTime: '@datetime',
          after: '@integer(300, 5000)',
          mileage:'@integer(300, 5000)',
          problem:'@integer(1, 5)',
      }],
      totalRow:300
    });
    return items
  }
}
