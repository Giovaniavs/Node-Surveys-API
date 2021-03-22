import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSurveys1616452572063 implements MigrationInterface {
    name = 'CreateSurveys1616452572063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "survey" ("id" varchar PRIMARY KEY NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "survey"`);
    }

}
