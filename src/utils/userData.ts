export interface Todo {
    user: string,
    time: string,
    isCompleted: boolean,
    content: string,
    id: string
}
interface User {
    id: string,
    name: string,
    avatar: string
}
export function getUserById (userId: string) {
    return userList.find(user => user.id === userId)
}
export const todoListData: Todo[] = [
    {
        id: '1',
        content: "图雀社区：汇聚精彩的免费实战教程",
        user: "mRcfps",
        time: "2020年3月2日 19:34",
        isCompleted: false
    },
    {
        id: '2',
        content: "图雀社区：汇聚精彩的免费实战教程",
        user: "pftom",
        time: "2020年3月2日 19:34",
        isCompleted: false
    },
    {
        id: '3',
        content: "图雀社区：汇聚精彩的免费实战教程",
        user: "Holy",
        time: "2020年3月2日 19:34",
        isCompleted: false
    },
    {
        id: '4',
        content: "图雀社区：汇聚精彩的免费实战教程",
        user: "crxk",
        time: "2020年3月2日 19:34",
        isCompleted: false
    },
    {
        id: '5',
        content: "图雀社区：汇聚精彩的免费实战教程",
        user: "Pony",
        time: "2020年3月2日 19:34",
        isCompleted: false
    }
];

export const userList: User[] = [
    {
        id: "666666666",
        name: "图雀社区",
        avatar: "https://avatars0.githubusercontent.com/u/39240800?s=60&v=4"
    },
    {
        id: "23410977",
        name: "mRcfps",
        avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
    },
    {
        id: "25455350",
        name: "crxk",
        avatar: "https://avatars1.githubusercontent.com/u/25455350?s=96&v=4"
    },
    {
        id: "23410977",
        name: "pftom",
        avatar: "https://avatars0.githubusercontent.com/u/23410977?s=96&v=4"
    },
    {
        id: "58352313",
        name: "holy",
        avatar: "https://avatars0.githubusercontent.com/u/58352313?s=96&v=4"
    }
];

interface ErrorHandling {
    success: boolean;
    error?: { message: string }
}
interface ArtistsData {
    artists: { name: string }[]
}
const handleArtistsRes = (response: ArtistsData & ErrorHandling) => { // 交叉类型
    if (response.error) {
        console.error(response.error.message)
        return
    }
    console.log(response.artists)
}

function padLeft(value: string, padding: string | number) { // 联合类型
    if (typeof padding === 'number') {
        return 
    }
    if (typeof padding === 'string') {
        return
    }
    throw new Error('111')
}