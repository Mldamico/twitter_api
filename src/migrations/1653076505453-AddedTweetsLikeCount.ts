import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedTweetsLikeCount1653076505453 implements MigrationInterface {
    name = 'AddedTweetsLikeCount1653076505453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tweet\` ADD \`like_count\` int NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tweet\` DROP COLUMN \`like_count\``);
    }

}
