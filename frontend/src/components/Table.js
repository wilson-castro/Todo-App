import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ReplayIcon from '@material-ui/icons/Replay';

const columns = [
  { id: 'description',
    label: 'Descrição',
    minWidth: 200 ,
  },
    {id: 'acoes',
    label:"Ações",
    minWidth:100,
    align:'right',
  },
];

function createData(id,description,done, acoes) {
  return { id,description,done,acoes };
}


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 400,
    overflow: 'auto',
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = props.list.map(todos =>
    createData(todos._id,todos.description,todos.done,
    <>
     <IconButton
    disabled={todos.done}
    onClick={() => props.handleMarkAsDone(todos)}>
       <CheckBoxIcon/>
    </IconButton>
    <IconButton
    disabled={!todos.done}
    onClick={() => props.handleMarkAsPending(todos)}>
        <ReplayIcon/>
      </IconButton>
    <IconButton
    disabled={!todos.done}
    onClick={() => props.handleRemove(todos)}>
      <DeleteIcon/>
    </IconButton>
      </>
     )
    );

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  return (
    <div>
        <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
            <Table stickyHeader>
            <TableHead>
                <TableRow>
                {columns.map(column => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                    <TableRow
                    hover role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    >
                    {columns.map(column => {
                        const value = row[column.id];
                        return (
                        <TableCell  className={row.done ? "markedAsDone" : ""} key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                        );
                    })}
                    </TableRow> 
                );
                })}
            </TableBody>
            </Table>
        </div>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
            'aria-label': 'previous page',
            }}
            nextIconButtonProps={{
            'aria-label': 'next page',
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
    </div>
  )
}