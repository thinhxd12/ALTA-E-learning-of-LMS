import { CheckPermissionFunc } from "@hoc/CheckPermission";
import React from "react";
import * as Icon from "react-feather";
import { useSelector } from "react-redux";
import { RootState } from "@modules";
import { Tooltip } from "antd";
import { IconBack, iconPowerOff, iconPowerOn } from "@assets/icon";
import {
  UilFileCheck,
  UilTrash,
  UilFileImport,
  UilShareAlt,
} from "@iconscout/react-unicons";
import { useAltaIntl } from "@shared/hook/useTranslate";
const listIconType = {
  add: <Icon.Plus size="24" className="icon-feather" />,
  edit: <Icon.Edit size="24" className="icon-feather" />,
  delete: <UilTrash size="24" className="icon-feather red-icon" />,
  cancel: <Icon.X size="24" className="icon-feather red-icon" />,
  check: <Icon.Check size="24" className="icon-feather green-icon" />,
  "file-check": <UilFileCheck size="24" className="icon-feather green-icon" />,
  "file-back": <UilFileImport size="24" className="icon-feather" />,
  //the option icontype in this VMS project
  share: <UilShareAlt size="24" className="icon-feather" />,
  volume: <Icon.Volume2 size="24" className="icon-feather" />,
  powerOn: <img src={iconPowerOn} width={24} />,
  powerOff: <img src={iconPowerOff} width={24} />,
  refresh: <Icon.RefreshCw size="24" className="icon-feather" />,
  logOut: <Icon.LogOut size="24" className="icon-feather red-icon" />,
  key: <Icon.Key size="24" className="icon-feather" />,
  back: <IconBack size="24" className="icon-feather" />,
  goBack: <IconBack size="24" className="icon-feather" />,
  detail: <Icon.Info size="24" className="icon-feather" />,
  play: <Icon.Play size="24" className="icon-feather" />,
  minus: <Icon.Minus size="24" className="icon-feather" />
};
const RenderIcon = (item: IArrayAction) => {
  if (typeof item.icon == "string") {
    return <i className={item.icon} aria-hidden="true" />;
  } else if (item.icon) {
    return item.icon;
  } else if (item.iconType) {
    return listIconType[item.iconType];
  } else if (item?.imgIcon) {
    return <img src={item?.imgIcon} alt="" style={{ width: "25px" }} />;
  }
  return <></>;
};

export interface IArrayAction {
  icon?: any;
  name?: string;
  handleAction?: any;
  isAllow?: boolean;
  disable?: any;
  permissionCode?: string;
  iconType?: keyof typeof listIconType;
  imgIcon?: any;
  context?: any;
}
const RenderItem = React.memo(({ item }: {item:IArrayAction}) => {
  const { formatMessage } = useAltaIntl();
  const title = formatMessage(item?.name || `common.${item.iconType}`);
  const onClick = (e) => {
    if (!item.disable) {
      item.handleAction && item.handleAction(item.context);
    }
    e.stopPropagation();

  }
  return (
    <Tooltip placement="left" title={title}>
      <span
        className={`item__icon ${item.disable == true ? "no-click" : ""}`}
        onClick={onClick}
      >
        <RenderIcon {...item} />
      </span>
    </Tooltip>
  );
});

interface Iprops {
  arrayAction?: Array<IArrayAction>;
}
const RightMenu = (props: Iprops) => {
  const { arrayAction } = props;

  const listPermissionCode = useSelector(
    (state: RootState) => state.profile.listPermissionCode
  );

  const RenderRightMenuContent = React.useMemo(() => {
    return arrayAction
      .filter(
        (it) =>
          it.isAllow !== false &&
          (it.permissionCode == null ||
            CheckPermissionFunc(it.permissionCode, listPermissionCode))
      )
      .map((item, index) => {
        return (
          <RenderItem
            key={index}
            item={item}
          />
        );
      });
  }, [arrayAction, listPermissionCode]);
  if (RenderRightMenuContent.length == 0) {
    return <></>;
  }
  return (
    <div className="right">
      <div className="right__menu__content">{RenderRightMenuContent}</div>
    </div>
  );
};

export default RightMenu;
