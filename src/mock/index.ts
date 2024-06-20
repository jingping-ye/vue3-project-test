import Mock from "mockjs";
import UserService from "./user.ts";

//  设置全局延时，没有延时会检测不到数据变化
Mock.setup({
  timeout: "800-1000",
});

/*** 用户信息的增删改查 ***/

// add user
Mock.mock(/\/user\/add/, "patch", UserService.addUser);

// delete user
Mock.mock(/\/user\/delete/, "delete", UserService.deleteUser);

// udpate user
Mock.mock(/\/user\/delete/, "put", UserService.updateUser);

// get userlist
Mock.mock(/\/user\/list/, "get", UserService.getUserList);
