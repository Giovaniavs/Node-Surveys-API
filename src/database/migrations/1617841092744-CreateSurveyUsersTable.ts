import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateSurveyUsersTable1617841092744 implements MigrationInterface {
    name = 'CreateSurveyUsersTable1617841092744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "surveys_users" ("id" varchar PRIMARY KEY NOT NULL, "user_id" varchar NOT NULL, "survey_id" varchar NOT NULL, "value" integer, "created_at" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "surveys_users"`);
    }

}
