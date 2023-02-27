import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1677509211495 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'email', type: 'text', isNullable: false, isUnique: true },
          { name: 'username', type: 'text', isNullable: false, isUnique: true },
          { name: 'password', type: 'text', isNullable: false },
          { name: 'createdAt', type: 'timestamp', isNullable: false },
          { name: 'updatedAt', type: 'timestamp', isNullable: false },
        ],
      }),
      true,
      true,
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
