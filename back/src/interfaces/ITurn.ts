export enum statusEnum {
    active = "active",
    cancelled = "cancelled",
}

interface ITurn{
    id: number,
    date: Date,
    time: Date,
    userId: number,
    status: statusEnum
}

export default ITurn;