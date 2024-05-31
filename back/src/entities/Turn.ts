import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

enum statusEnum {
        active = "active",
        cancelled = "cancelled",
    }

@Entity({
    name: "turns"
})
export class Turn{
    @PrimaryGeneratedColumn()
    id: number

    @Column(
        {type: "date"}
    )
    date: Date

    @Column()
    time: string

    @Column()
    status: statusEnum

    @ManyToOne(() => User, user => user.Turn)
    @JoinColumn()
    User: User | null
}
