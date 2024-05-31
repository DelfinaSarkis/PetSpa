import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Turn } from "./Turn";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        length: 100
    })
    name: string

    @Column()
    email: string

    @Column("date")
    birthdate: Date

    @Column("integer")
    nDni: number

    @OneToOne(() => Credential)
    @JoinColumn()
    Credential: Credential

    @OneToMany(() => Turn, Turn => Turn.User)
    Turn: Turn[]
}