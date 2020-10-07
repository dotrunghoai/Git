const stateBurger = {
    soLuongTaskBanh: {
        salad: 1,
        cheese: 1,
        beef: 1
    },
    giaTaskBanh: {
        salad: 12,
        cheese: 14,
        beef: 16
    },
    tongTien: 42
}

export const BurgerRedux = (state = stateBurger, action) => {
    switch (action.type) {
        case 'TANG_SO_LUONG': {
            let taskCopy = {...state.soLuongTaskBanh}
            let giaTaskCopy = {...state.giaTaskBanh}
            taskCopy[action.taskCanTang] += 1
            state.soLuongTaskBanh = taskCopy

            state.tongTien += giaTaskCopy[action.taskCanTang]
            break;
        }
        case 'GIAM_SO_LUONG': {
            let taskCopy = {...state.soLuongTaskBanh}
            let giaTaskCopy = {...state.giaTaskBanh}
            if (taskCopy[action.taskCanGiam] > 0) {
                taskCopy[action.taskCanGiam] -= 1
                state.tongTien -= giaTaskCopy[action.taskCanGiam]
            }
            state.soLuongTaskBanh = taskCopy
            break
        }   
    
        default:
            break;
    }
    return {...state}
}