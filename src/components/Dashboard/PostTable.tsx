import { Post, PostStatus } from '.prisma/client';
import { Button } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table';
import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { DELETE, PUT } from '../../lib/api';
import { formatDate } from '../../lib/dates';
import Card from '../Card';

interface Props {
  posts: Post[];
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
      {
        Header: 'Created',
        accessor: 'createdAt',
        Cell: ({ value }) => formatDate(value),
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value, row }) => {
          const { id } = row.original;
          return (
            <Select
              value={value}
              onChange={(event) => {
                handleStatusUpdate(id, event.target.value);
              }}
              width="100%"
              cursor="pointer"
              minWidth={110}
            >
              <option value={PostStatus.APPROVED}>Approved</option>
              <option value={PostStatus.WAITING}>Waiting</option>
              <option value={PostStatus.SPONSORED}>Sponsored</option>
              <option value={PostStatus.REJECTED}>Rejected</option>
            </Select>
          );
        },
      },
      {
        accessor: 'id',
        Cell: ({ value }) => (
          <Flex wrap="wrap" width="100">
            <Button
              ml="1"
              mb="1"
              colorScheme="blue"
              onClick={() => console.log('Edit')}
            >
              Edit
            </Button>
            <Button
              ml="1"
              colorScheme="red"
              onClick={() => handleDelete(value)}
            >
              Delete
            </Button>
          </Flex>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const handleDelete = (id: number) => {
    const request = DELETE(`posts/${id}`);
    console.log(request);
  };

  const handleStatusUpdate = async (id: number, status: any) => {
    const updatedPost = await PUT(`posts/${id}`, { status: status });
  };

  return (
    <Card mt="2" overflowX="auto">
      <Table {...getTableProps()} mb="2">
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                </Th>
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
