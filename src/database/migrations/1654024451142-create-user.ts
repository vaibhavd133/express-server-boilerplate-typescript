import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUser1654024451142 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            isNullable: true,
            isUnique: true
          },
          {
            name: 'userName',
            type: 'character varying'
          },
          {
            name: 'email',
            type: 'character varying'
          },
          {
            name: 'password',
            type: 'character varying'
          },
          {
            name: 'createdAt',
            type: 'timestamp with time zone',
            isNullable: false
          },
          {
            name: 'updatedAT',
            type: 'timestamp with time zone',
            isNullable: false
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
