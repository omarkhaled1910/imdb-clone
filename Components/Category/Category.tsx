import React from "react";
import styled from "styled-components";

const Category: React.FC<{ title: string }> = ({ title }) => {
  return <CategoryContainer>{title || "category"}</CategoryContainer>;
};
const CategoryContainer = styled.span`
  border-radius: 20px;
  background-color: transparent;
  border: 1px solid lightgray !important;
  max-width: max-content;
  padding-inline: 25px;
  color: #f1eaea;
  max-height: 50px;
  padding-block: 10px !important;
`;
export default Category;
