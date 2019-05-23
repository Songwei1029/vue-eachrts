var geoCoordMap = {
  '广州市': [113.53, 23.36],
  '佛山市': [112.98, 23.01],
  '东莞市': [113.85, 23.01],
  '中山市': [113.38, 22.52],
  '江门市': [112.70, 22.21],
  '阳江市': [111.80, 21.95],
  '茂名市': [110.99, 21.88],
  '湛江市': [110.14, 21.25],
  '珠海市': [113.34, 22.07],
  '汕头市': [116.59, 23.26],
  '韶关市': [113.60, 24.82],
  '肇庆市': [112.25, 23.49],
  '梅州市': [116.13, 24.29],
  '惠州市': [114.52, 23.12],
  '汕尾市': [115.46, 22.91],
  '河源市': [114.90, 23.95],
  '清远市': [113.01, 24.11],
  '潮州市': [116.83, 23.66],
  '揭阳市': [116.01, 23.27],
  '云浮市': [111.85, 22.82],
  '深圳市': [114.07, 22.62]
}
var data2 = [{
  name: '佛山市',
  value: [112.98, 23.01]
}, {
  name: '东莞市',
  value: [113.85, 23.01]
}, {
  name: '中山市',
  value: [113.38, 22.52]
},
]
var data1 = [{
  name: '湛江市',
  value: [110.14, 21.25]
}, {
  name: '珠海市',
  value: [113.34, 22.07]
},
];
var data3 = [{
  name: '揭阳市',
  value: [116.01, 23.27],
  selected: true
}, {
  name: '云浮市',
  value: [111.85, 22.82]
}, {
  name: '深圳市',
  value: [114.07, 22.62]
}
]

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
        symbol: data[i].symbol,
      });
    }
  }
  // console.log(res)
  return res;
};
var maps = [{
  name: '广州市',
  value: [113.53, 23.36]
}, {
  name: '佛山市',
  value: [112.98, 23.01]
}, {
  name: '东莞市',
  value: [113.85, 23.01]
}, {
  name: '中山市',
  value: [113.38, 22.52]
}, {
  name: '江门市',
  value: [112.70, 22.21]
}, {
  name: '阳江市',
  value: [111.80, 21.95]
}, {
  name: '茂名市',
  value: [110.99, 21.88]
}, {
  name: '湛江市',
  value: [110.14, 21.25],
  selected: false
}, {
  name: '珠海市',
  value: [113.34, 22.07]
}, {
  name: '汕头市',
  value: [116.59, 23.26]
}, {
  name: '韶关市',
  value: [113.60, 24.82]
}, {
  name: '肇庆市',
  value: [112.25, 23.49]
}, {
  name: '梅州市',
  value: [116.13, 24.29]
}, {
  name: '惠州市',
  value: [114.52, 23.12]
}, {
  name: '汕尾市',
  value: [115.46, 22.91]
}, {
  name: '河源市',
  value: [114.90, 23.95]
}, {
  name: '清远市',
  value: [113.01, 24.11]
}, {
  name: '潮州市',
  value: [116.83, 23.66]
}, {
  name: '揭阳市',
  value: [116.01, 23.27]
}, {
  name: '云浮市',
  value: [111.85, 22.82]
}, {
  name: '深圳市',
  value: [114.07, 22.62],
  selected: true
}];
export const Map_options = 
// {
//   animation: false,
//   geo: {
//     zoom: 1.2,
//   },
//   visualMap: {
//     type: 'continuous',
//     seriesIndex: [0],
//     min: 0,
//     max: 0,
//     text: ['High', 'Low'],
//     realtime: false,
//     calculable: true,
//     itemWidth: 13,
//     itemHeight: 70,
//     color: ['#91b3ca', '#008edf', '#004baf'],
//     left: '10%',
//     textStyle: {
//       color: '#fff',
//     },
//   },
//   grid: {
//     containLabel: true,
//   },
//   series: [
//     {
//       type: 'map',
//       zoom: 1.2,
//       symbolSize: 20,
//       symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
//       itemStyle: {
//         normal: {
//           areaColor: '#197fe6',
//           borderColor: '#0ac3dd',
//           borderWidth: 4,
//           // shadowBlur: {
//           //   shadowColor: 'rgba(0, 0, 0, 0.5)',
//           //   shadowBlur: 10
//           // }
//         },
//         emphasis: {
//           areaColor: '#ee6539',
//         },
//       },
//       label: {
//         normal: {
//           // formatter: '{c}',
//           // formatter: '{b}<br/>{c}',
//           formatter: parmas => {
//             let res = parmas.name + '\n';
//             // res += '<img src="../../assets/img/mapIcon.png" alt="">';
//             res += parmas.value;
//             return res;
//           },
//           show: true,
//           textStyle: {
//             color: '#fff',
//           },
//         },
//         emphasis: {
//           textStyle: {
//             color: '#fff',
//           },
//         },
//       },
//       data: [
//       ],
//       // markPoint: {
//       //   symbol: '@/assets/img/newStyle/mapIcon.png'
//       // }
//       // data: geoData
//     },
//     {
//       type: 'scatter',
//       coordinateSystem: 'geo',
//       label: {
//         normal: {
//           show: false,
//         },
//         emphasis: {
//           show: false,
//         },
//         formatter: '{b}:{c}'
//       },
//       symbolSize: 20,
//       symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
//       showEffectOn: 'render',
//       itemStyle: {
//         normal: {
//           color: '#ff634d',
//           borderColor: '#fff',
//           borderWidth: 5,
//         },
//       },
//       data: [
//       ],
//     },
//   ],
// };
{
  textStyle: {
    fontSize: '20'
  },
  geo: [{
    map: "maps",
    z: 1,
    aspectScale: 1, //地图的长宽比
    zoom: 1,
    itemStyle: {
      areaColor: 'transparent',
      borderColor: '#06efff',
      borderWidth: 2
    },
    emphasis: {
      itemStyle: {
        areaColor: 'blue',
        borderColor: '#06efff',
        borderWidth: 2,
      },
      label: {
        show: false
      }
    },
    top: '10',
    selectedMode: true
  },
  {
    map: "maps",
    z: 1,
    aspectScale: 1, //地图的长宽比
    zoom: 1,
    itemStyle: {
      areaColor: '#0057C7',
      // areaColor:'transparent',
      borderColor: '#blue', // 地图背景颜色
      borderWidth: 1,
    },
    label: {
      show: false
    },
    emphasis: {
      itemStyle: {
        areaColor: 'blue',
        borderColor: '#06efff',
        borderWidth: 1,
      },
      label: {
        show: false
      }
    },
    top: '10',
    selectedMode: true
  }
  ],
  tooltip: {
    show: true,
    enterable: 'true',
    padding: 0,
    hideDelay: 10000,
    // formatter: function (e) {
    //   var ht = '<div style="width: 150px;height: 150px;background-color: orange;">' +
    //     '这是我的数据1，<br />' +
    //     '这是数据显示2<br />' +
    //     '<button type="button" >按钮</button>' +
    //     e.data.value +
    //     '</div>'
    //   return ht
    // }
  },
  legend: {
    data: [{
      name: "正在建设中",
      icon: 'circle',
      textStyle: {
        color: '#00B1FF',
        // backgroundColor: 'orange',
        backgroundColor: {
          image: '../../img/newStyle/180x44_background_light.png',

        },
        // width: '30',
        // height: '20',
      }
    }, {
      name: "沟通完成",
      icon: 'circle',
      textStyle: {
        color: '#01CE89',
        // borderWidth: '1',
        // borderRadius: [5, 5, 0, 0],

      }
    }, {
      name: "已经上线",
      icon: 'circle',
      textStyle: {
        color: '#E4E300'
      }
    }],
    orient: 'horizontal',
    right: '2%',
    top: '2%',
    textStyle: {
      fontSize: '20',
    },

  },
  series: [{ //这个是城市名称
    type: 'scatter',
    name: "chengs",
    coordinateSystem: 'geo',
    geoIndex: 1,
    z: 18,
    data: maps,
    symbolSize: 2,
    selectedMode: false,
    label: {
      normal: {
        formatter: '{b}',
        position: 'bottom',
        show: true
      },
      emphasis: {
        show: true
      }
    },
    itemStyle: {
      normal: {
        color: 'white', // 地区名称颜色
        font: '48px "Microsoft YaHei", sans-serif',
      },
    },
    emphasis: {
      areaColor: 'red'
    },
    tooltip: {
      show: false
    },
    hoverAnimation: false //鼠标滑过提示动画

  }, {
    type: 'effectScatter',
    name: "正在建设中",
    coordinateSystem: 'geo',
    geoIndex: 1,
    z: 18,
    // symbol: 'image:/' + img,
    data: convertData(data1),
    symbolSize: 20,
    symbolKeepAspect: true,
    showEffectOn: 'render',
    rippleEffect: {
        brushType: 'fill',
        scale: '3'
    },
    itemStyle: {
      // opacity: 1,
      // color: '#00B1FF',
      normal: {
        // color:'red',          
        areaStyle: {
          color: 'red'
        },
      }
    },


  }, {
    type: 'effectScatter',
    name: "沟通完成",
    coordinateSystem: 'geo',
    geoIndex: 1,
    z: 18,
    symbol: 'circle',
    data: convertData(data2),
    symbolSize: 15,
    showEffectOn: 'render',
    rippleEffect: {
        brushType: 'fill',
        scale: '3'
    },
    symbolKeepAspect: true,
    itemStyle: {
      opacity: 1,
      color: '#01CE89'
    },

  }, {
    type: 'effectScatter',
    name: "已经上线",
    coordinateSystem: 'geo',
    geoIndex: 1,
    z: 18,
    // symbol: 'image:/' + img1,
    // data: convertData(data3),
    data: data3,
    symbolSize: 20,
    showEffectOn: 'render',
    rippleEffect: {
        brushType: 'fill',
        scale: '3'
    },
    symbolKeepAspect: true,
    itemStyle: {
      opacity: 1,
      color: '#E4E300'
    },
  },],
  // dataRange: {
  //   x: 'left', //图例横轴位置
  //   y: 'bottom', //图例纵轴位置
  //   splitList: [
  //     { start: [110.14, 21.25], end: [110.14, 21.25], label: '湛江市', color: 'red' },
  //     { start: [114.07, 22.62], end: [114.07, 22.62], label: '深圳市', color: 'green' },
  //   ],
  //   calculable : false,
  //   color: ['yellow', 'green']
  // },
}
