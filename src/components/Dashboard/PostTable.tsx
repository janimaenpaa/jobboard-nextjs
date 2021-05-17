import { Post } from '.prisma/client';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table';
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import Card from '../Card';

interface Props {
  posts: any;
}

const PostTable = ({ posts }: Props) => {
  const data = useMemo(() => posts, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Company',
        accessor: 'company',
      },
      { Header: 'Status', accessor: 'status' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Card mt="2">
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
};

export default PostTable;
