import { useEffect } from 'react'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tab } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)
  const [dados, setDados] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/Contas").
      then(resp => resp.json()).
      then(data => {
        setDados(data)
        console.log(data)
      }).
      catch(err => {
        console.error(err)
      })
  }, [])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  // const myObjects = dados.map(o => <li key={o.id}>{o.Nome}: {o.Idade}</li>)

  const myObjects = 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          {dados.map((o) => (
            <StyledTableRow key={o.Nome}>
              <StyledTableCell component="th" scope="row">
                {o.Nome}
              </StyledTableCell>
              <StyledTableCell align="right">{o.Tipo_de_visto}</StyledTableCell>
              <StyledTableCell align="right">{o.Data_de_agendamento}</StyledTableCell>
              <StyledTableCell align="right">{o.Data_de_entrevista}</StyledTableCell>
              <StyledTableCell align="right">{o.Data_de_analise}</StyledTableCell>
              <StyledTableCell align="right">{o.Data_de_Viagem}</StyledTableCell>
              <StyledTableCell align="right">{o.Data_de_entrega_do_visto}</StyledTableCell>
              <StyledTableCell align="right"> FAZER </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  return (
    <div>
      <h1>Obtendo o visto</h1>
      <TableHead >
          <TableRow>
            <StyledTableCell align='right'> Nome </StyledTableCell>
            <StyledTableCell align='right'> Tipo de visto </StyledTableCell>
            <StyledTableCell align='right'> Data de agendamento </StyledTableCell>
            <StyledTableCell align='right'> Data de entrevista </StyledTableCell>
            <StyledTableCell align='right'> Data de análise </StyledTableCell>
            <StyledTableCell align='right'> Data de viagem </StyledTableCell>
            <StyledTableCell align='right'> Data de entrega do visto </StyledTableCell>
            <StyledTableCell align="right"> Dias corridos de espera </StyledTableCell>
          </TableRow>
        </TableHead>
        {myObjects}
    </div>
  )
}

export default App
