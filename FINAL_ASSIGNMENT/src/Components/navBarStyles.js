import { Breadcrumb, Button, Tag } from "antd";
import { styled } from "styled-components";
export const Navbar = styled.nav`
  width: 1160px;
  height: 70px;
  background-color: #fff;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(228, 231, 234);
  position: sticky;
  z-index: 50;
  padding: 10px;
  font-family: "BlinkMacSystemFont", "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
  @media (max-width: 768px) {
    // display: none;
    width: 784px;
  }
`;
export const NavTool = styled.div`
  display: flex;
  align-items: center;
  margin-right: -20px;
`;
export const LeftHead = styled.div`
  display: flex;
  align-items: center;
  margin-right: 525px;
`;
export const Heading = styled.div`
  margin-left: 14px;
  padding-bottom: 5px;
  width: 100%;
`;
export const OrgName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: rgb(65, 83, 103);
  margin-bottom: 0px;
`;
export const MenuFold = styled.div`
  font-size: 23px;
  text-align: center;
  padding: 5px;
`;
export const Letter = styled.div`
  border-radius: 50%;
`;

export const ReviewHeaderName = styled.div`
  color: var(--grey-100, #485c72);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  @media (max-width: 768px) {
    width: 150px;
  }
`;
export const ReviewHeaderAdmin = styled.div`
  color: var(--grey-t-50, #a3adb8);
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
  margin-top: -2px;
`;
export const SearchBtn = styled(Button)`
  background-color: aliceblue;
  color: dodgerblue;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid var(--blue-t-65, #afc8e1);
  background: var(--blue-t-92, #edf3f8);
  padding: 8px;
  margin-top: 19px;
  margin-bottom: 19px;
  margin-right: 20px;
  @media (max-width: 768px) {
    display: none;
    // width: 784px;
  }
`;
export const BreadCrumbs = styled(Breadcrumb)`
  font-size: 13px;
  /* flex: 2 1 0%; */
  white-space: break-spaces;
  cursor: pointer;
  color: rgb(61, 122, 182);
`;
export const OrgTag = styled(Tag)`
  font-size: 12px;
  float: right;
  color: rgb(27, 99, 169);
  max-width: 265px;
  border: 1px solid rgb(175, 200, 225);
  border-radius: 2px;
  height: 32px;
  line-height: 30px;
  text-align: center;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  background: rgb(237, 243, 248);
  margin-left: 10px;
`;
