import React, { useRef } from "react";
import styled from "styled-components";
import trashImage from "../../image/trash.svg";
import { totalPriceItems, formatCurrency } from "../Functions/secondaryFunction";

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Toppings = styled.div`
  font-size: 14px;
  color: #9A9A9A;
  width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
  const topping = order.topping.filter(item => item.checked).map(item => item.name).join(', ');

  const refDeleteButton = useRef(null);

  return (
    <OrderItemStyled onClick={e => {
      e.target !== refDeleteButton.current && setOpenItem({ ...order, index })
    }}>
      <ItemName>{order.name} {order.choice}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton ref={refDeleteButton} className="delete" onClick={() => deleteItem(index)} />
      {topping && <Toppings>{topping}</Toppings>}
    </OrderItemStyled>
  )
}
