// 工具文件

// 扁平数组转换为tree
export function transformTree(arr) {
    let map = {};
    let list = [];
    arr.forEach((value) => {
        map[value.id] = value;
    })
    arr.forEach((value) => {
        let parent = map[value.parentId];
        // console.log(map)
        if (parent) {
            (parent.children || (parent.children = [])).push(value)
        } else {
            list.push(value)
        }
    })
    return list
}