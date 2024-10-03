import { IoEllipsisVertical } from "react-icons/io5";  // 导入垂直省略号图标
import { BsPlus } from "react-icons/bs";  // 导入加号图标
import GreenCheckmark from "./GreenCheckmark";  // 复用 GreenCheckmark 组件

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus className="fs-4 mx-2" />  {/* 加号图标，增加些间距 */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
