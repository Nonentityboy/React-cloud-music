import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import Scroll from '../../components/scroll/index'
import { PropTypes } from 'prop-types';
import style from '../../assets/global-style';

// const Category = useRef(null);

// 加入初始化内容宽度的逻辑
// useEffect(() => {
//     let categoryDOM = Category.current;
//     let tagElems = categoryDOM.querySelectorAll("span");
//     let totalWidth = 0;
//     Array.from(tagElems).forEach(ele => {
//         totalWidth += ele.offsetWidth;
//     });
//     categoryDOM.style.width = `${totalWidth}px`;
// }, []);

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  >span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style["font-size-m"]};
    vertical-align: middle;
  }
`
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`

function Horizen(props) {
    const { list, oldVal, title } = props;
    const { handleClick } = props;
    const Category = useRef (null);
    useEffect (() => {
        let categoryDOM = Category.current;
        let tagElems = categoryDOM.querySelectorAll ("span");
        let totalWidth = 0;
        Array.from (tagElems).forEach (ele => {
          totalWidth += ele.offsetWidth;
        });
        categoryDOM.style.width = `${totalWidth}px`;
    }, []);
    return (
        // JSX 在Scroll下面，对第一个 div 赋予 ref
        <Scroll direction={"horizental"}>
            <div ref={Category}>
                <List>
                    <span>{title}</span>
                    {
                        list.map((item) => {
                            return (
                                <ListItem
                                    key={item.key}
                                    className={`${oldVal === item.key ? 'selected' : ''}`}
                                    onClick={() => handleClick(item.key)}>
                                    {item.name}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        </Scroll >
    )
}

// 首先考虑接受的参数
//list 为接受的列表数据
//oldVal 为当前的 item 值
//title 为列表左边的标题
//handleClick 为点击不同的 item 执行的方法
Horizen.defaultProps = {
    list: [],
    oldVal: '',
    title: '',
    handleClick: null
};

Horizen.propTypes = {
    list: PropTypes.array,
    oldVal: PropTypes.string,
    title: PropTypes.string,
    handleClick: PropTypes.func
};
export default memo(Horizen);