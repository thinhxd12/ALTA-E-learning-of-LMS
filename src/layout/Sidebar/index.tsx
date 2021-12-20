import React, { memo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { privatePage } from "@routers/mainRouter";
import MenuItem from "./ItemMenu";
import CheckPermission from "@shared/hoc/CheckPermission";
import { logo } from "@shared/assets/images";
import { UilAngleRight } from '@iconscout/react-unicons'
import { IRouter } from "@routers/interface";

interface IRenderMenuProps {
  listNav: Array<IRouter>;
  location: string;
}

const _RenderMenu: React.FC<IRenderMenuProps> = (props: IRenderMenuProps) => {
  // cắt home ra
  const listNav = props.listNav.slice(1, props.listNav.length + 1);
  return (
    <>
      {listNav.map((item: IRouter, index) => {
        if (item.menu == null || item.menu?.hideInNavbar) {
          return <React.Fragment key={index}></React.Fragment>;
        } else if (item.permissionCode) {
          return (
            <CheckPermission permissionCode={item.permissionCode} key={index}>
              <MenuItem data={item} key={index} />
            </CheckPermission>
          );
        } else {
          return <MenuItem data={item} key={index} />;
        }
      })}
    </>
  );
};

const RenderMenu = memo(_RenderMenu);


const SiderComponent: React.FC<{ className: string, setClassName: (className: string) => void }> = (props) => {
  const location = useLocation();
  const { className, setClassName } = props;
  const [width, setWidth] = useState<string | number>()
  const onClick = (e) => {
    setClassName("sider-component big");
    e.preventDefault();
    e.stopPropagation();
  }

  useEffect(() => {
    if (className == "sider-component") {
      setWidth(0)
    } else {
      setWidth("100%")
    }
  }, [className])

  return (
    <div className={className} onClick={onClick}>
      <div className="icon" >
        <UilAngleRight color="#2F67BA" />
      </div>
      <div className="mask" style={{ width }}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu">
          <RenderMenu listNav={privatePage} location={location.pathname} />
        </div>
      </div>
    </div>
  );
};

export default SiderComponent;
