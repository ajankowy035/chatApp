import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class CreateUserColumnsChatTable1677576652220
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('chat', 'email');

    await queryRunner.addColumns('chat', [
      new TableColumn({
        name: 'fromUserId',
        type: 'int',
        isNullable: false,
        default: 0,
      }),

      new TableColumn({
        name: 'toUserId',
        type: 'int',
        isNullable: false,
        default: 0,
      }),
    ]);

    await queryRunner.createIndex(
      'chat',
      new TableIndex({
        name: 'fromUserId_idx',
        columnNames: ['fromUserId'],
      }),
    );

    await queryRunner.createIndex(
      'chat',
      new TableIndex({
        name: 'toUserId_idx',
        columnNames: ['toUserId'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IF EXISTS fromUserId_idx;`);
    await queryRunner.query(`DROP INDEX IF EXISTS toUserId_idx;`);

    await queryRunner.dropColumns('chat', ['fromUserId', 'toUserId']);

    await queryRunner.addColumn(
      'chat',
      new TableColumn({
        name: 'email',
        type: 'string',
      }),
    );
  }
}
