import {UserType} from "./user";

/**
 * 队伍类别
 */
export type TeamType = {
    id: number;
    name: string;
    description: string;
    avatarUrl: string;
    expireTime?: Date;
    maxNum: number;
    password?: string,
    // todo 定义枚举值类型，更规范
    type: number;
    createTime: Date;
    updateTime: Date;
    createUser?: UserType;
    leader?: UserType;
    hasJoin?: boolean;
    hasJoinNum?: number;
};
