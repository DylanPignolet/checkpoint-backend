import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Country } from "./country";

@ObjectType()
@Entity()
export class Continent extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({length: 100})
  name?: string;

  @OneToMany(() => Country, country => country.continent)
  countries: Country[];

  constructor(datas: {
    name: string, 
    countries: Country[]
  } | null = null) {
    super();
    if (datas) {
      this.name = datas.name;
      this.countries = datas.countries;
    }
  }
}
