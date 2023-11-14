import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class test extends Model{

    @Column
    test: string;

    /* 
    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column({ defaultValue: true })
    isActive: boolean;
    */

}