import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Continent } from "./continent";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({length: 100})
  code?: string;

  @Field()
  @Column()
  name?: string;

  @Field()
  @Column()
  emoji?: string;

  @ManyToOne(() => Continent)
  continent: Continent;

  constructor(datas: {
    code: string, 
    name: string,
    emoji: string,
    continent: Continent
  } | null = null) {
    super();
    if (datas) {
      this.code = datas.code;
      this.name = datas.name;
      this.emoji = datas.emoji;
      this.continent = datas.continent;
    }
  }
}
