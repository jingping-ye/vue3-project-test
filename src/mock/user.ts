import Mock from "mockjs";

enum Gender {
  Male, // 0:男性
  Female, // 1:女性
}
interface UserInfo {
  userId: string; // 用户id
  userNo: number; // 用户编号
  userName: string; // 用户名
  userGender: Gender; // 用户性别
  phone: number; // 电话号码
  birthday: '@date("yyy-mm-dd")'; // 出生日期
}
let list: UserInfo[] = [];
const count = 100;

const buildResponse = (data: any) => {
  return {
    errCode: "400", // 错误代码
    errMessage: "", // 错误信息
    data: data,
  };
};

for (let i = 0; i < count; i++) {
  const studentMockInfo: UserInfo = Mock.mock({
    userId: "@increment",
    userNo: 20240000 + i + 1,
    userName: "@cname",
    userGender: "@integer(0,1)",
    phone: /^1[0-9]{10}$/,
    birthday: '@date("yyy-mm-dd")',
  });
  list.push(studentMockInfo);
}

/***
 * 新增用户
 */
function addUser(config: any) {
  const { userName, userGender, phone, birthday } = JSON.parse(config.body);

  list.push({
    userId: list[list.length - 1].userId + 1,
    userNo: list[list.length - 1].userNo + 1,
    userName,
    userGender,
    phone,
    birthday,
  });
  return buildResponse({
    message: "添加成功",
  });
}

/**
 * 模拟接口
 * 删除用户
 * @param config
 */
function deleteUser(config: any) {
  const { userId } = JSON.parse(config.body);
  list = list.filter((item) => item.userId !== userId);
  return buildResponse({
    message: "删除成功",
  });
}

/**
 * 更新用户信息
 * @param config
 */
function updateUser(config: any) {
  const { userId, userNo, userName, userGender, phone, birthday } = JSON.parse(config.body);
  list.some((item) => {
    if (item.userId === userId) {
      item.userNo = userNo;
      item.userName = userName;
      item.userGender = userGender;
      item.phone = phone;
      item.birthday = birthday;
    }
  });

  return buildResponse({
    message: "更新成功",
  });
}

/**
 * 获取用户列表
 * @param config
 */
function getUserList(config: any) {
  let { query_str = "", page = 1, limit = 10 } = JSON.parse(config.body);

  const mockList = query_str.length > 0 ? list.filter((item) => item.userName.includes(query_str)) : list;

  // 分页
  const pageList = mockList.filter((_, index) => index < limit * page && index >= limit * (page - 1));
  return buildResponse({
    list: pageList,
    count: mockList.length,
  });
}

export default {
  addUser,
  deleteUser,
  updateUser,
  getUserList,
};
