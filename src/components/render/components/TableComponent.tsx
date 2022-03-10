import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export const TableComponent = (props: any) => {
  return (
    <TableContainer component={Paper} sx={{margin: "15px 0"}}>
      <Table>
        <TableHead>
          {props.children[0].props.children.map((row: any) => (
            <TableRow>
              {row.props.children.map((cell: any) => (
                <TableCell>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {props.children[1].props.children.map((row: any) => (
            <TableRow>
              {row.props.children.map((cell: any) => (
                <TableCell>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
