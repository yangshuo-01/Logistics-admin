import Mock from 'mockjs'
var data = Mock.mock('http://mock.js/Logistics/get',{
    'code': 200,
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'datas|10': [{
        'code': '',
        'origination': 1, // 起点
        'destination': 1, // 终点
        'position': [100,99], // 位置
        'status': 1, // 状态
        'id|+1': 1, 
    }]
})
// 输出结果