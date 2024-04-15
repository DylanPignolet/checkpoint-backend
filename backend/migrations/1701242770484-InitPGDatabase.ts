import { MigrationInterface, QueryRunner } from "typeorm";

export class InitPGDatabase1701242770484 implements MigrationInterface {
    name = 'InitPGDatabase1701242770484'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ad" ("id" SERIAL NOT NULL, "code" character varying(100) NOT NULL, "name" character varying NOT NULL, "emoji" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "country"`);
        await queryRunner.query(`DROP TABLE "continent"`);
    }

}
