export function selectBoard(board) {
    return {
        type: "BOARD_SELECTED",
        payload: board
    }
}

export function updateData(data) {
    return {
        type: "UPDATE_BOARD",
        payload: data
    }
}