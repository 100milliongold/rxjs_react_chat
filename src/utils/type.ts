export type StateType = {
    status: string,
    data: DataType[],
    newDataCount: number,
    error: string
}

export type DataType = {
    person: 'first-person' | 'second-person',
    text?: string
}