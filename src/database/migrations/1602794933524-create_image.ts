import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImage1602794933524 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isPrimary: true,
          isGenerated: true,
          unsigned: true,
          generationStrategy: 'increment'
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanage_id',
          type: 'integer',
        }

      ],
      foreignKeys: [
        {
          name: 'ImgeOrphanage',
          columnNames:['orphanage_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'orphanages',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await  queryRunner.dropTable('images')
  }

}
