import React from 'react';
const cities=["北京", "天津", "河北", "山西", "山东", "辽宁", "吉林", "黑龙江",
    "上海", "江苏", "浙江", "安徽", "福建", "江西", "河南", "湖北", "湖南", "广东", "广西",
    "海南", "重庆", "四川", "贵州", "云南", "陕西", "甘肃", "青海", "内蒙古", "西藏", "宁夏",
    "新疆", "香港", "澳门", "台湾"]
const listStyle={
    height:'50px',
    lineHeight:'50px',
    borderBottom:'1px solid green',
    textAlign:'left',
    textIndent:'2em',
    width:'100%',
    color:'black'
}
const m={
    marginTop:'10px',
    padding:'0px'
}
const listItems =cities.map((city) =>
  <li style={listStyle}>{city}</li>
);

class List extends React.Component {


    render() {
        return (
            <div>
                 <ul  style={m}>{listItems}</ul>
            </div>
        )
    }
}

export default List;
