const cashData = [
  {
    name: '百度有钱花',
    avatar: 'baidu.jpg',
    description: '随借随还，最高30万额度，10秒到账',
    minQuota: 500,
    maxQuota: 200000,
    interest: '0.05%',
    interestDes: '0.05%/日',
    interestUnit: 'D',
    apply: [
      '身份证', '身份号', '手机号', '年满18'
    ],
    launchUrl: 'http://sj.qq.com/myapp/detail.htm?apkName=com.baidu.umoney'
  },
  {
    name: '360借条',
    avatar: '360.jpg',
    description: '纯线上申请，自动审批',
    minQuota: 1000,
    maxQuota: 200000,
    interest: '0.027%',
    interestDes: '0.027%/日',
    interestUnit: 'D',
    apply: [
      '身份证', '身份号', '手机号', '年满18'
    ],
    launchUrl: 'http://sj.qq.com/myapp/detail.htm?apkName=com.qihoo.loan'
  },
  {
    name: '身份贷',
    avatar: 'identity.jpg',
    description: '借款额度大，种类齐全',
    minQuota: 1000,
    maxQuota: 500000,
    interest: '0.78%',
    interestDes: '0.78%/月',
    interestUnit: 'M',
    apply: [
      '身份证', '身份号', '手机号', '年满18'
    ],
    launchUrl: 'http://sj.qq.com/myapp/detail.htm?apkName=com.dai58.finance.shenfen'
  },
  {
    name: '秒白条',
    avatar: 'miaobaitiao.jpg',
    description: '最快一分钟下款',
    minQuota: 1000,
    maxQuota: 5000,
    interest: '0.05%',
    interestDes: '30-500元',
    interestUnit: 'M',
    apply: [
      '身份证', '身份号', '手机号', '年满18'
    ],
    launchUrl: 'http://sj.qq.com/myapp/detail.htm?apkName=com.xiaocheng.miaobt'
  },
  {
    name: '大象钱包',
    avatar: 'elephant.jpg',
    description: '资料简单，通过率高',
    minQuota: 1000,
    maxQuota: 50000,
    interest: '0.01%',
    interestDes: '0.01%/日',
    interestUnit: 'M',
    apply: [
      '身份证', '身份号', '手机号', '年满18'
    ],
    launchUrl: 'http://sj.qq.com/myapp/detail.htm?apkName=cn.dxqbpos'
  }
]
const interestDes = {
  D: '日',
  M: '月',
  Y: '年'
}
export default cashData
export {interestDes}
